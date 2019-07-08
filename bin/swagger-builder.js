#!/usr/bin/env node

'use strict'

/*eslint-disable no-console*/

// stdlib
var fs = require('fs')

// 3rd-party
var argparse = require('argparse')

// internal
var builder = require('..')

// //////////////////////////////////////////////////////////////////////////////

var cli = new argparse.ArgumentParser({
  version: require('../package.json').version,
  addHelp: true
})

cli.addArgument(['-f', '--file'], {
  help: 'Swagger file to build'
})

cli.addArgument(['-o', '--output'], {
  help: 'Js file to output'
})

// //////////////////////////////////////////////////////////////////////////////

var options = cli.parseArgs()

// //////////////////////////////////////////////////////////////////////////////

function readFile(filename, callback) {
  builder.SwaggerBuilder(filename, callback)
}

readFile(options.file, (template) => {
  fs.writeFile(options.output, template, (error) => {
    if (error) {
      throw error
    }
    console.log('build ' + options.file + ' to ' + options.output + ' success')
  })
})
