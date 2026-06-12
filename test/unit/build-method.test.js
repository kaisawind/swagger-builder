import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildMethod } from '../../lib/swagger-builder.js'

const baseApi = { consumes: ['application/json'] }

describe('buildMethod', () => {
  it('builds a GET method with no body', () => {
    const op = {
      operationId: 'getItem',
      summary: 'Get an item',
      deprecated: false,
      parameters: [{ name: 'itemId', in: 'path', type: 'string', required: true }]
    }
    const result = buildMethod('/items/{itemId}', 'get', op, baseApi)
    assert.equal(result.method, 'get')
    assert.equal(result.operationId, 'GetItem')
    assert.equal(result.hasBodyParam, false)
    assert.equal(result.contentType, 'application/json')
  })

  it('sets hasBodyParam=true with body parameter', () => {
    const op = { operationId: 'createItem', parameters: [{ name: 'body', in: 'body' }] }
    assert.equal(buildMethod('/items', 'post', op, baseApi).hasBodyParam, true)
  })

  it('sets hasBodyParam=true with formData parameter', () => {
    const op = { operationId: 'upload', consumes: ['multipart/form-data'], parameters: [{ name: 'file', in: 'formData', type: 'file' }] }
    assert.equal(buildMethod('/upload', 'post', op, baseApi).hasBodyParam, true)
  })

  it('contentType takes only first value from multi-value consumes', () => {
    const op = { operationId: 'addPet', consumes: ['application/json', 'application/xml'], parameters: [{ name: 'body', in: 'body' }] }
    const result = buildMethod('/pet', 'post', op, baseApi)
    assert.equal(result.contentType, 'application/json')
    assert.equal(result.consumes, 'application/json,application/xml')
  })

  it('handles no parameters', () => {
    const op = { operationId: 'logout' }
    const result = buildMethod('/logout', 'get', op, baseApi)
    assert.equal(result.parameters.length, 0)
    assert.equal(result.hasBodyParam, false)
  })

  it('preserves deprecated flag', () => {
    const op = { operationId: 'old', deprecated: true, parameters: [] }
    assert.equal(buildMethod('/old', 'get', op, baseApi).deprecated, true)
  })

  it('lowercases HTTP method', () => {
    const op = { operationId: 'test', parameters: [] }
    assert.equal(buildMethod('/p', 'POST', op, {}).method, 'post')
    assert.equal(buildMethod('/p', 'DELETE', op, {}).method, 'delete')
  })
})
