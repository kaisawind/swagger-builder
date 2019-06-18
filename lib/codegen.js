const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerHelper('toLowerCase', function(word) {
  return word.toLowerCase()
})
Handlebars.registerHelper('brackets', function(word) {
  return `{${word}}`
})

const writeApiFile = function(info) {
  let template = Handlebars.compile(apiTemplate)(info)
  template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  const distFileName = path.join(info.dist, 'api' + '.js')
  fs.writeFile(distFileName, template, function(err) {
    if (err) {
      console.log('writeFile err', err)
    } else {
      console.log('writeFile ok')
    }
  })
}

const writeTagFile = function(name, tag) {
  let template = Handlebars.compile(methods)(tag)
  template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  const distFileName = path.join(tag.dist, name + '.js')
  fs.writeFile(distFileName, template, function(err) {
    if (err) {
      console.log('writeFile err', err)
    }
  })
}

module.exports = function(data) {
  writeApiFile(data.info)
  const tags = data.tags
  for (const name in tags) {
    (function(name, tags) {
      writeTagFile(name, tags[name])
    }(name, tags))
  }
  return
}
