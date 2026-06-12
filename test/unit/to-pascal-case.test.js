import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { toPascalCase } from '../../lib/swagger-builder.js'

describe('toPascalCase', () => {
  it('converts camelCase to PascalCase', () => {
    assert.equal(toPascalCase('findPetsByStatus'), 'FindPetsByStatus')
  })

  it('converts snake_case to PascalCase', () => {
    assert.equal(toPascalCase('get_pet_by_id'), 'GetPetById')
    assert.equal(toPascalCase('create_user'), 'CreateUser')
  })

  it('converts kebab-case to PascalCase', () => {
    assert.equal(toPascalCase('create-user'), 'CreateUser')
    assert.equal(toPascalCase('get-order-by-id'), 'GetOrderById')
  })

  it('converts dot.separated to PascalCase', () => {
    assert.equal(toPascalCase('my.object.name'), 'MyObjectName')
  })

  it('capitalizes single lowercase word', () => {
    assert.equal(toPascalCase('login'), 'Login')
  })

  it('preserves already PascalCase', () => {
    assert.equal(toPascalCase('GetPetById'), 'GetPetById')
  })

  it('handles empty string', () => {
    assert.equal(toPascalCase(''), '')
  })

  it('handles null/undefined gracefully', () => {
    assert.equal(toPascalCase(null), '')
    assert.equal(toPascalCase(undefined), '')
  })

  it('handles string starting with number', () => {
    assert.equal(toPascalCase('123abc'), '123abc')
  })

  it('handles mixed separators', () => {
    assert.equal(toPascalCase('get_pet-by.id'), 'GetPetById')
  })
})
