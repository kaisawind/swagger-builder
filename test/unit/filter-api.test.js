import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { filterApi } from '../../lib/swagger-builder.js'

describe('filterApi', () => {
  it('extracts basic swagger metadata', () => {
    const api = {
      info: { title: 'Test API', version: '1.0.0' },
      host: 'api.example.com',
      basePath: '/v1',
      schemes: ['https'],
      paths: {},
      tags: []
    }
    const result = filterApi(api)
    assert.equal(result.info.title, 'Test API')
    assert.equal(result.host, 'api.example.com')
    assert.equal(result.basePath, '/v1')
  })

  it('extracts paths grouped by tag', () => {
    const api = {
      info: { title: 'Test' },
      host: 'example.com',
      basePath: '/',
      schemes: ['https'],
      tags: [
        { name: 'items', description: 'Item ops' },
        { name: 'users', description: 'User ops' }
      ],
      paths: {
        '/items': {
          get: { tags: ['items'], operationId: 'listItems', parameters: [] },
          post: { tags: ['items'], operationId: 'createItem', parameters: [] }
        },
        '/users': {
          get: { tags: ['users'], operationId: 'listUsers', parameters: [] }
        }
      }
    }
    const result = filterApi(api)
    assert.equal(result.tags.length, 2)

    const itemsTag = result.tags.find(t => t.name === 'items')
    assert.equal(itemsTag.methods.length, 2)
    const usersTag = result.tags.find(t => t.name === 'users')
    assert.equal(usersTag.methods.length, 1)
  })

  it('preserves tag externalDocs', () => {
    const api = {
      info: { title: 'Test' },
      host: 'x',
      basePath: '/',
      schemes: ['https'],
      tags: [{ name: 'x', description: 'x', externalDocs: { url: 'https://docs.example.com' } }],
      paths: {}
    }
    const result = filterApi(api)
    assert.equal(result.tags[0].externalDocs.url, 'https://docs.example.com')
  })

  it('creates tag for undeclared tag name in operation', () => {
    const api = {
      info: { title: 'T' },
      host: 'x',
      basePath: '/',
      schemes: ['https'],
      tags: [],
      paths: { '/x': { get: { tags: ['surprise'], operationId: 's', parameters: [] } } }
    }
    const result = filterApi(api)
    assert.equal(result.tags.length, 1)
    assert.equal(result.tags[0].name, 'surprise')
  })

  it('maps falsy tag name to default', () => {
    const api = {
      info: { title: 'T' },
      host: 'x',
      basePath: '/',
      schemes: ['https'],
      tags: [],
      paths: { '/x': { post: { tags: [''], operationId: 'doThing', parameters: [] } } }
    }
    const result = filterApi(api)
    assert.equal(result.tags[0].name, 'default')
  })

  it('skips operations without tags', () => {
    const api = {
      info: { title: 'T' },
      host: 'x',
      basePath: '/',
      schemes: ['https'],
      tags: [],
      paths: { '/x': { get: { operationId: 'noTags', parameters: [] } } }
    }
    const result = filterApi(api)
    assert.equal(result.tags.length, 0)
  })

  it('inherits global consumes', () => {
    const api = {
      info: { title: 'T' },
      host: 'x',
      basePath: '/',
      schemes: ['https'],
      consumes: ['text/plain'],
      tags: [],
      paths: { '/x': { get: { tags: ['x'], operationId: 'list', parameters: [] } } }
    }
    const result = filterApi(api)
    assert.equal(result.tags[0].methods[0].consumes, 'text/plain')
    assert.equal(result.tags[0].methods[0].contentType, 'text/plain')
  })

  it('hasBodyParam true for body param, false for query-only', () => {
    const api = {
      info: { title: 'T' }, host: 'x', basePath: '/', schemes: ['https'], tags: [],
      paths: {
        '/a': { post: { tags: ['a'], operationId: 'post', parameters: [{ in: 'body', name: 'body' }] } },
        '/b': { get: { tags: ['a'], operationId: 'get', parameters: [{ in: 'query', name: 'q' }] } }
      }
    }
    const result = filterApi(api)
    assert.equal(result.tags[0].methods[0].hasBodyParam, true)
    assert.equal(result.tags[0].methods[1].hasBodyParam, false)
  })
})
