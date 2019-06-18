const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
module.exports = function(opt) {
  codegen(parse(opt))
}
