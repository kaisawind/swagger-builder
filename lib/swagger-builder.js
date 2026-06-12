import SwaggerParser from '@apidevtools/swagger-parser';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import Handlebars from 'handlebars';

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiTmpl = readFileSync(join(__dirname, './tmpl/api.hbs'), 'utf-8')
const methods = readFileSync(join(__dirname, './tmpl/methods.hbs'), 'utf-8')
const method = readFileSync(join(__dirname, './tmpl/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)

Handlebars.registerHelper('wrap-helper', (desc) => {
  const descriptions = []
  if (typeof desc === 'string') {
    if (desc !== '') {
      desc = ' ' + desc
    }
    let description = ' * @description' + desc
    while (description.length > 150) {
      descriptions.push(description.substr(0, 150) + '\n')
      description = ' * ' + description.substr(150)
    }
    descriptions.push(description + '')
  }
  return new Handlebars.SafeString(descriptions.join(''))
})

Handlebars.registerHelper('safestring-helper', (desc) => {
  let str = ''
  if (desc !== undefined && desc !== '') {
    str = ' ' + desc.trim()
  }
  return new Handlebars.SafeString(str)
})

Handlebars.registerHelper('form-data-helper', (consumes) => {
  let ret = ''
  if (consumes.indexOf('multipart/form-data') !== -1) {
    ret = `  params.body = new FormData()`
  }
  if (consumes.indexOf('application/x-www-form-urlencoded') !== -1) {
    ret = `  params.body = new URLSearchParams()`
  }
  return new Handlebars.SafeString(ret)
})

Handlebars.registerHelper('compare-helper', (param) => {
  let ret = ''
  if (param.in === 'query') {
    if (param.type === 'Array') {
      const separators = { csv: ',', ssv: ' ', tsv: '\\t', pipes: '|' }
      const sep = separators[param.collectionFormat || 'csv']
      if (sep) {
        ret = `    params.querys['` + param.name + `'] = Array.isArray(parameters['` + param.name + `']) ? parameters['` + param.name + `'].join('` + sep + `') : parameters['` + param.name + `']`
      } else {
        // multi format — keep as array, axios handles serialization
        ret = `    params.querys['` + param.name + `'] = parameters['` + param.name + `']`
      }
    } else {
      ret = `    params.querys['` + param.name + `'] = parameters['` + param.name + `']`
    }
  }
  if (param.in === 'header') {
    ret = `    params.headers['` + param.name + `'] = parameters['` + param.name + `']`
  }
  if (param.in === 'body') {
    ret = `    params.body = parameters['` + param.name + `']`
  }
  if (param.in === 'path') {
    ret = `    url = url.replace('{` + param.name + `}', parameters['` + param.name + `'])`
  }
  if (param.in === 'formData') {
    ret = `    params.body.append('` + param.name + `', parameters['` + param.name + `'])`
  }
  return new Handlebars.SafeString(ret)
})

Handlebars.registerHelper('url-compare-helper', (param) => {
  let ret = ''
  if (param.in === 'query') {
    if (param.type === 'Array') {
      const separators = { csv: ',', ssv: ' ', tsv: '\\t', pipes: '|' }
      const sep = separators[param.collectionFormat || 'csv']
      if (sep) {
        ret = `  querys['` + param.name + `'] = Array.isArray(parameters['` + param.name + `']) ? parameters['` + param.name + `'].join('` + sep + `') : parameters['` + param.name + `']`
      } else {
        ret = `  querys['` + param.name + `'] = parameters['` + param.name + `']`
      }
    } else {
      ret = `  querys['` + param.name + `'] = parameters['` + param.name + `']`
    }
  }
  if (param.in === 'header') {
    ret = `  // header ` + param.name
  }
  if (param.in === 'body') {
    ret = `  // body ` + param.name
  }
  if (param.in === 'path') {
    ret = `  url = url.replace('{` + param.name + `}', parameters['` + param.name + `'])`
  }
  if (param.in === 'formData') {
    ret = `  // formData ` + param.name
  }
  return new Handlebars.SafeString(ret)
})

// --- Main entry point ---

export const SwaggerBuilder = (filename, callback) => {
  SwaggerParser.validate(filename, (err, api) => {
    if (err) {
      console.error(err)
    } else {
      const swagger = filterApi(api)
      const template = Handlebars.compile(apiTmpl)(swagger)
      callback(template)
    }
  })
}

// --- filterApi: extract and structure swagger data for templates ---

function filterApi(api) {
  const swagger = {
    info: api.info,
    host: api.host,
    basePath: api.basePath,
    schemes: api.schemes,
    tags: []
  }

  // Build tags from api.tags, preserving externalDocs
  const tags = (api.tags || []).map(t => ({
    name: t.name,
    description: t.description,
    externalDocs: t.externalDocs,
    methods: []
  }))

  // Process each path and HTTP method
  for (const path of Object.keys(api.paths)) {
    for (const method of Object.keys(api.paths[path])) {
      const operation = api.paths[path][method]
      if (!operation.tags) continue

      operation.tags.forEach(tagname => {
        if (!tagname) {
          tagname = 'default'
        }
        const tag = findOrCreateTag(tags, tagname)
        tag.methods.push(buildMethod(path, method, operation, api))
      })
    }
  }

  swagger.tags = tags
  return swagger
}

// --- Helper functions ---

function findOrCreateTag(tags, tagname) {
  let tag = tags.find(t => t.name === tagname)
  if (!tag) {
    tag = { name: tagname, description: tagname, methods: [] }
    tags.push(tag)
  }
  return tag
}

function buildMethod(path, method, operation, api) {
  const operationId = toPascalCase(operation.operationId)
  const parameters = normalizeParameters(operation.parameters || [])
  const consumes = resolveConsumes(operation, api)
  const produces = resolveProduces(operation, api)

  return {
    method: method.toLowerCase(),
    path,
    summary: operation.summary,
    description: operation.description,
    operationId,
    consumes,
    produces,
    parameters,
    deprecated: operation.deprecated
  }
}

function normalizeParameters(parameters) {
  return parameters.map(p => ({
    ...p,
    type: toPascalCase(p.type || 'Object'),
    collectionFormat: p.collectionFormat || 'csv'
  }))
}

function resolveConsumes(operation, api) {
  if (operation.consumes) return operation.consumes.join(',')
  if (api.consumes && api.consumes.length) return api.consumes.join(',')
  return 'application/json'
}

function resolveProduces(operation, api) {
  if (operation.produces) return operation.produces.join(',')
  if (api.produces && api.produces.length) return api.produces.join(',')
  return 'application/json'
}

function toPascalCase(str) {
  if (!str) return ''
  return str
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}
