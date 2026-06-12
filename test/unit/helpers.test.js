import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import Handlebars from 'handlebars'

// Re-register exact helpers from lib/swagger-builder.js for isolated testing
Handlebars.registerHelper('wrap-helper', (desc) => {
  const descriptions = []
  if (typeof desc === 'string' && desc.trim() !== '') {
    desc = ' ' + desc
    let description = ' * @description' + desc
    while (description.length > 150) {
      descriptions.push(description.substr(0, 150) + '\n')
      description = ' * ' + description.substr(150)
    }
    descriptions.push(description + '')
  }
  return new Handlebars.SafeString(descriptions.join(''))
})

Handlebars.registerHelper('form-data-helper', (consumes) => {
  let ret = ''
  if (consumes == null) return new Handlebars.SafeString(ret)
  if (consumes.indexOf('multipart/form-data') !== -1) {
    ret = '  params.body = new FormData()'
  }
  if (consumes.indexOf('application/x-www-form-urlencoded') !== -1) {
    ret = '  params.body = new URLSearchParams()'
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
        ret = "    params.querys['" + param.name + "'] = Array.isArray(parameters['" + param.name + "']) ? parameters['" + param.name + "'].join('" + sep + "') : parameters['" + param.name + "']"
      } else {
        ret = "    params.querys['" + param.name + "'] = parameters['" + param.name + "']"
      }
    } else {
      ret = "    params.querys['" + param.name + "'] = parameters['" + param.name + "']"
    }
  }
  if (param.in === 'header') {
    ret = "    params.headers['" + param.name + "'] = parameters['" + param.name + "']"
  }
  if (param.in === 'body') {
    ret = "    params.body = parameters['" + param.name + "']"
  }
  if (param.in === 'path') {
    ret = "    url = url.replace('{" + param.name + "}', parameters['" + param.name + "'])"
  }
  if (param.in === 'formData') {
    ret = "    params.body.append('" + param.name + "', parameters['" + param.name + "'])"
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
        ret = "  querys['" + param.name + "'] = Array.isArray(parameters['" + param.name + "']) ? parameters['" + param.name + "'].join('" + sep + "') : parameters['" + param.name + "']"
      } else {
        ret = "  querys['" + param.name + "'] = parameters['" + param.name + "']"
      }
    } else {
      ret = "  querys['" + param.name + "'] = parameters['" + param.name + "']"
    }
  }
  if (param.in === 'header') ret = '  // header ' + param.name
  if (param.in === 'body') ret = '  // body ' + param.name
  if (param.in === 'path') ret = "  url = url.replace('{" + param.name + "}', parameters['" + param.name + "'])"
  if (param.in === 'formData') ret = '  // formData ' + param.name
  return new Handlebars.SafeString(ret)
})

function render(tmpl, ctx) { return Handlebars.compile(tmpl)(ctx) }

describe('wrap-helper', () => {
  it('empty desc produces nothing', () => {
    assert.equal(render('{{wrap-helper d}}', { d: '' }), '')
  })
  it('whitespace-only produces nothing', () => {
    assert.equal(render('{{wrap-helper d}}', { d: '   ' }), '')
  })
  it('short desc has prefix', () => {
    const r = render('{{wrap-helper d}}', { d: 'Returns a pet' })
    assert.ok(r.includes('@description Returns a pet'))
  })
  it('long desc wraps at 150', () => {
    const r = render('{{wrap-helper d}}', { d: 'A'.repeat(200) })
    for (const line of r.split('\n').filter(Boolean)) {
      assert.ok(line.length <= 150)
    }
  })
})

describe('form-data-helper', () => {
  it('multipart', () => {
    assert.ok(render('{{form-data-helper c}}', { c: 'multipart/form-data' }).includes('FormData'))
  })
  it('urlencoded', () => {
    assert.ok(render('{{form-data-helper c}}', { c: 'application/x-www-form-urlencoded' }).includes('URLSearchParams'))
  })
  it('null safe', () => {
    assert.equal(render('{{form-data-helper c}}', { c: null }), '')
  })
})

describe('compare-helper', () => {
  it('query non-array', () => {
    assert.ok(render('{{compare-helper this}}', { name: 'limit', in: 'query', type: 'Integer' }).includes("params.querys['limit']"))
  })
  it('query array csv', () => {
    assert.ok(render('{{compare-helper this}}', { name: 'ids', in: 'query', type: 'Array', collectionFormat: 'csv' }).includes(".join(',')"))
  })
  it('query array ssv', () => {
    assert.ok(render('{{compare-helper this}}', { name: 'ids', in: 'query', type: 'Array', collectionFormat: 'ssv' }).includes(".join(' ')"))
  })
  it('query array tsv', () => {
    assert.ok(render('{{compare-helper this}}', { name: 'ids', in: 'query', type: 'Array', collectionFormat: 'tsv' }).includes(".join('\\t')"))
  })
  it('query array pipes', () => {
    assert.ok(render('{{compare-helper this}}', { name: 'ids', in: 'query', type: 'Array', collectionFormat: 'pipes' }).includes(".join('|')"))
  })
  it('query array multi keeps array', () => {
    const r = render('{{compare-helper this}}', { name: 'tags', in: 'query', type: 'Array', collectionFormat: 'multi' })
    assert.ok(!r.includes('.join('))
  })
  it('header', () => { assert.ok(render('{{compare-helper this}}', { name: 'x-key', in: 'header' }).includes("params.headers['x-key']")) })
  it('body', () => { assert.ok(render('{{compare-helper this}}', { name: 'body', in: 'body' }).includes("params.body = parameters['body']")) })
  it('path', () => { assert.ok(render('{{compare-helper this}}', { name: 'id', in: 'path' }).includes("url.replace('{id}'")) })
  it('formData', () => { assert.ok(render('{{compare-helper this}}', { name: 'file', in: 'formData' }).includes("params.body.append('file'")) })
})

describe('url-compare-helper', () => {
  it('query', () => { assert.ok(render('{{url-compare-helper this}}', { name: 'limit', in: 'query', type: 'Integer' }).includes("querys['limit']")) })
  it('header', () => { assert.ok(render('{{url-compare-helper this}}', { name: 'x-key', in: 'header' }).includes('// header x-key')) })
  it('body', () => { assert.ok(render('{{url-compare-helper this}}', { name: 'body', in: 'body' }).includes('// body body')) })
  it('path', () => { assert.ok(render('{{url-compare-helper this}}', { name: 'id', in: 'path' }).includes("url.replace('{id}'")) })
  it('formData', () => { assert.ok(render('{{url-compare-helper this}}', { name: 'file', in: 'formData' }).includes('// formData file')) })
})
