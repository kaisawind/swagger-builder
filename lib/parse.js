'use strict'
const _ = require('lodash')
const normalizeName = function(id) {
  /* eslint-disable */
  return id.replace(/\.|\-|\{|\}/g, '_').split(" ").join("_")
  /* eslint-enable */
}

const getPathToMethodName = function(opts, m, path) {
  if (path === '/' || path === '') {
    return m
  }

  // clean url path for requests ending with '/'
  const cleanPath = path.replace(/\/$/, '')

  let segments = cleanPath.split('/').slice(1)
  segments = _.transform(segments, function(result, segment) {
    if (segment[0] === '{' && segment[segment.length - 1] === '}') {
      segment = 'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1)
    }
    result.push(segment)
  })
  const result = _.camelCase(segments.join('-'))
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1)
}

const getApiInfo = function(opts) {
  const swagger = opts.swagger
  let domain = ''
  if (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) {
    domain = swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g, '')
  }
  const info = {
    moduleName: opts.moduleName,
    className: opts.className,
    dist: opts.dist,
    domain: domain
  }
  return info
}

const getApiTags = function(opts) {
  const swagger = opts.swagger
  const tags = {}
  _.forEach(swagger.tags, function(tag) {
    tags[tag.name] = {
      name: tag.name,
      description: tag.description,
      dist: opts.dist,
      definitions: getApiDefinitions(opts),
      methods: []
    }
  })
  tags['other'] = {
    name: 'other',
    description: 'other apis',
    dist: opts.dist,
    definitions: getApiDefinitions(opts),
    methods: []
  }
  return tags
}

const getApiHeaders = function(opts, op) {
  const swagger = opts.swagger
  const headers = []
  if (op.produces) {
    const value = op.produces.map(function(value) { return '\'' + value + '\'' }).join(', ')
    headers.push({ name: 'Accept', value: value })
  }
  const consumes = op.consumes || swagger.consumes
  if (consumes) {
    headers.push({ name: 'Content-Type', value: '\'' + consumes + '\'' })
  }
  return headers
}

const getApiDefinitions = function(opts) {
  const swagger = opts.swagger
  const definitions = []
  _.forEach(swagger.definitions, function(definition, name) {
    definitions.push({
      name: name
    })
  })
  return definitions
}

const getApiParameters = function(opts, op, globalParams) {
  const swagger = opts.swagger
  const parameters = []
  let params = []
  if (_.isArray(op.parameters)) {
    params = op.parameters
  }
  params = params.concat(globalParams)
  _.forEach(params, function(parameter) {
    // Ignore parameters which contain the x-exclude-from-bindings extension
    if (parameter['x-exclude-from-bindings'] === true) {
      return
    }
    if (_.isString(parameter.$ref)) {
      const segments = parameter.$ref.split('/')
      parameter = swagger.parameters[segments.length === 1 ? segments[0] : segments[2]]
    }
    parameter.camelCaseName = _.camelCase(parameter.name)
    if (parameter.enum && parameter.enum.length === 1) {
      parameter.isSingleton = true
      parameter.singleton = parameter.enum[0]
    }
    if (parameter.in === 'body') {
      parameter.isBodyParameter = true
    } else if (parameter.in === 'path') {
      parameter.isPathParameter = true
    } else if (parameter.in === 'query') {
      if (parameter['x-name-pattern']) {
        parameter.isPatternType = true
        parameter.pattern = parameter['x-name-pattern']
      }
      parameter.isQueryParameter = true
    } else if (parameter.in === 'header') {
      parameter.isHeaderParameter = true
    } else if (parameter.in === 'formData') {
      const consumes = op.consumes || swagger.consumes
      if (consumes.indexOf('multipart/form-data') !== -1) {
        parameter.isFormDataParameter = true
      } else {
        parameter.isFormParameter = true
      }
    }
    parameter.cardinality = parameter.required ? '' : '?'
    parameters.push(parameter)
  })
  return parameters
}

const getViewForSwagger2 = function(opts) {
  const swagger = opts.swagger
  const authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND']
  var data = {
    info: getApiInfo(opts),
    tags: getApiTags(opts)
  }

  _.forEach(swagger.paths, function(api, path) {
    let globalParams = []
    _.forEach(api, function(op, m) {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op
      }
    })
    _.forEach(api, function(op, m) {
      if (authorizedMethods.indexOf(m.toUpperCase()) === -1) {
        return
      }
      var method = {
        path: path,
        className: opts.className,
        methodName: op.operationId ? normalizeName(op.operationId) : getPathToMethodName(opts, m, path),
        method: m.toUpperCase(),
        summary: op.description || op.summary,
        tags: op.tags,
        externalDocs: op.externalDocs,
        parameters: getApiParameters(opts, op, globalParams),
        headers: getApiHeaders(opts, op)
      }
      if ((op.tags.length === 0) || (op.tags === undefined)) {
        data.tags['other'].methods.push(method)
      } else {
        data.tags[op.tags[0]].methods.push(method)
      }
    })
  })
  return data
}

const parse = function(opts) {
  const data = getViewForSwagger2(opts)
  return data
}

module.exports = parse
