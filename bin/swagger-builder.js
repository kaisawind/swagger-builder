#!/usr/bin/env node

'use strict'

// stdlib
import { readFileSync, writeFile } from 'fs';
import { fileURLToPath } from 'url';

// 3rd-party
import { ArgumentParser } from 'argparse';

// internal
import SwaggerBuilder from '../index.js';

// //////////////////////////////////////////////////////////////////////////////

const file = fileURLToPath(new URL('../package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

const cli = new ArgumentParser({
  add_help: true
});

cli.add_argument('-v', '--version', { action: 'version', version: pkg.version });
cli.add_argument('-f', '--file', { help: 'Swagger file to build' });
cli.add_argument('-o', '--output', { help: 'Js file to output' });

// //////////////////////////////////////////////////////////////////////////////

const options = cli.parse_args();

// //////////////////////////////////////////////////////////////////////////////

if (!options.file) {
  console.error('Error: missing required argument -f/--file <swagger file>')
  process.exit(1)
}
if (!options.output) {
  console.error('Error: missing required argument -o/--output <output file>')
  process.exit(1)
}

// //////////////////////////////////////////////////////////////////////////////

const readFile = (filename, callback) => {
  SwaggerBuilder(filename, callback);
};

readFile(options.file, (template) => {
  writeFile(options.output, template, (error) => {
    if (error) {
      throw error;
    }
    console.log('build ' + options.file + ' to ' + options.output + ' success');
  })
});
