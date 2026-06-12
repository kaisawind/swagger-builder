import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { findOrCreateTag } from '../../lib/swagger-builder.js'

describe('findOrCreateTag', () => {
  it('returns existing tag when found', () => {
    const tags = [
      { name: 'items', description: 'Item ops', methods: [] },
      { name: 'users', description: 'User ops', methods: [] }
    ]
    const result = findOrCreateTag(tags, 'items')
    assert.equal(result, tags[0])
    assert.equal(result.description, 'Item ops')
  })

  it('creates new tag when not found', () => {
    const tags = [{ name: 'items', description: 'Item ops', methods: [] }]
    const beforeLength = tags.length
    const result = findOrCreateTag(tags, 'files')
    assert.equal(tags.length, beforeLength + 1)
    assert.equal(result.name, 'files')
    assert.equal(result.description, 'files')
    assert.deepEqual(result.methods, [])
  })

  it('creates new tag in empty array', () => {
    const tags = []
    const result = findOrCreateTag(tags, 'default')
    assert.equal(tags.length, 1)
    assert.equal(result.name, 'default')
  })
})
