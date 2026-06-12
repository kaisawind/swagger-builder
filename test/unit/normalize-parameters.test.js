import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { normalizeParameters } from '../../lib/swagger-builder.js'

describe('normalizeParameters', () => {
  it('defaults type to Object when no type specified', () => {
    const result = normalizeParameters([{ name: 'data', in: 'body' }])
    assert.equal(result[0].type, 'Object')
  })

  it('converts type to PascalCase', () => {
    const result = normalizeParameters([{ name: 'id', in: 'path', type: 'integer' }])
    assert.equal(result[0].type, 'Integer')
  })

  it('defaults collectionFormat to csv', () => {
    const result = normalizeParameters([{ name: 'tags', in: 'query', type: 'array' }])
    assert.equal(result[0].collectionFormat, 'csv')
  })

  it('preserves explicit collectionFormat', () => {
    const result = normalizeParameters([{ name: 'tags', in: 'query', type: 'array', collectionFormat: 'multi' }])
    assert.equal(result[0].collectionFormat, 'multi')
  })

  it('returns empty array for empty input', () => {
    assert.deepEqual(normalizeParameters([]), [])
  })

  it('preserves all original parameter fields', () => {
    const param = { name: 'id', in: 'path', type: 'string', description: 'The item', required: true, collectionFormat: 'multi' }
    const result = normalizeParameters([param])
    assert.equal(result[0].type, 'String')
    assert.equal(result[0].name, 'id')
    assert.equal(result[0].description, 'The item')
    assert.equal(result[0].required, true)
    assert.equal(result[0].collectionFormat, 'multi')
  })
})
