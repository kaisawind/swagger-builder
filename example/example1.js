const SwaggerParser = require('swagger-parser')
const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const apiTmpl = fs.readFileSync(path.join(__dirname, './api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('wrap-helper', (object) => {
  const descriptions = []
  if (typeof object === 'string') {
    let description = ' * @description ' + object
    while (description.length > 150) {
      descriptions.push(description.substr(0, 150) + '\n')
      description = ' * ' + description.substr(150)
    }
    descriptions.push(description + '')
  }
  return descriptions.join('')
})

SwaggerParser.validate('./swagger/swagger.yaml', (err, api) => {
  if (err) {
    console.error(err)
  } else {
    // console.log(api)
    const swagger = fliterApi(api)
    const template = Handlebars.compile(apiTmpl)(swagger)
    console.log(template)
  }
})

function fliterApi(api) {
  const swagger = {
    info: api.info,
    host: api.host,
    basePath: api.basePath,
    schemes: api.schemes,
    tags: []
  }

  // Init tags from swagger's tags
  // We only add methods array to tag's object
  const _tags = api.tags
  const tags = []
  _tags.forEach(_tag => {
    const tag = {
      name: _tag.name,
      description: _tag.description,
      methods: []
    }
    tags.push(tag)
  })

  // Analyse paths
  const paths = api.paths
  for (const path in paths) {
    for (const type in paths[path]) {
      const operation = paths[path][type]
      const tagsname = operation.tags
      tagsname.forEach(tagname => {
        // Check tag if in the tags
        let tag = tags.find((tag) => {
          return tag.name === tagname
        })
        if (tag === undefined) {
          tag = {
            name: tagname,
            description: tagname,
            methods: []
          }
        }
        const operationId = toUpperFirstCase(tag.name) + toUpperFirstCase(operation.operationId)
        const method = {
          path: path,
          summary: operation.summary,
          description: operation.description,
          operationId: operationId,
          consumes: operation.consumes,
          parameters: operation.parameters
        }
        tag.methods.push(method)
      })
    }
  }

  swagger.tags = tags
  console.log(swagger)
  return swagger
}

function toUpperFirstCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}
