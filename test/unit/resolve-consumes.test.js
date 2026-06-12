import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { resolveConsumes, resolveProduces } from '../../lib/swagger-builder.js'

describe('resolveConsumes', () => {
  it('returns operation consumes when present', () => {
    const op = { consumes: ['application/xml'] }
    const api = { consumes: ['application/json'] }
    assert.equal(resolveConsumes(op, api), 'application/xml')
  })

  it('returns multiple operation consumes joined by comma', () => {
    const op = { consumes: ['application/json', 'application/xml'] }
    assert.equal(resolveConsumes(op, {}), 'application/json,application/xml')
  })

  it('falls back to api-level consumes when operation has none', () => {
    const op = {}
    const api = { consumes: ['text/plain'] }
    assert.equal(resolveConsumes(op, api), 'text/plain')
  })

  it('falls back to application/json when neither has consumes', () => {
    assert.equal(resolveConsumes({}, {}), 'application/json')
  })

  it('handles api with empty consumes array', () => {
    assert.equal(resolveConsumes({}, { consumes: [] }), 'application/json')
  })

  it('handles api without consumes property', () => {
    assert.equal(resolveConsumes({}, {}), 'application/json')
  })
})

describe('resolveProduces', () => {
  it('returns operation produces when present', () => {
    const op = { produces: ['application/xml'] }
    const api = { produces: ['application/json'] }
    assert.equal(resolveProduces(op, api), 'application/xml')
  })

  it('falls back to api-level produces', () => {
    const op = {}
    const api = { produces: ['text/html'] }
    assert.equal(resolveProduces(op, api), 'text/html')
  })

  it('falls back to application/json when neither has produces', () => {
    assert.equal(resolveProduces({}, {}), 'application/json')
  })
})
