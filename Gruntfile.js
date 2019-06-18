const yaml = require('js-yaml')
const fs = require('fs')
const swaggerGen = require('.')

module.exports = function(grunt) {
  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'swagger-codegen': {
      options: {
        swagger: '<%= pkg.swagger.definition %>',
        className: '<%= pkg.swagger.className %>',
        moduleName: '<%= pkg.swagger.moduleName %>',
        dist: '<%= pkg.swagger.dist %>'
      },
      dist: {

      }
    }
  })

  grunt.registerMultiTask('swagger-codegen', function() {
    var callback = this.async()
    var opt = this.options()
    fs.readFile(opt.swagger, function(err, data) {
      if (err) {
        grunt.log.error(err.toString())
        callback(false)
      } else {
        const type = opt.swagger.substr(opt.swagger.length - 4, 4)
        var parsedData = {}
        if (type === 'yaml') {
          parsedData = yaml.load(data)
        } else if (type === 'json') {
          parsedData = JSON.parse(data)
        } else {
          parsedData = JSON.parse(data)
        }
        swaggerGen({
          swagger: parsedData,
          moduleName: opt.moduleName,
          className: opt.className,
          dist: opt.dist
        })
      }
    })
  })

  grunt.registerTask('vue', ['swagger-codegen'])
}
