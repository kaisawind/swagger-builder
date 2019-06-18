/* eslint-disable */
/* ==========================================================
 *                    Access to Petstore orders
 ==========================================================*/
import {
  request,
  getDomain
} from './api.js'
/**
 * Returns a map of status codes to quantities
 * request: getInventory
 * url: getInventoryURL
 * method: getInventory_TYPE
 * raw_url: getInventory_RAW_URL
 */
export const getInventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config ? parameters.$config : {}
  let path = '/store/inventory'
  let body
  const queryParameters = {}
  const form = {}
  const formData = new FormData()
  if (config['headers'] === undefined) {
    config['headers'] = {}
  }
  config.headers['Accept'] = 'application/json'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  return request('get', domain + path, body, queryParameters, form, formData, config)
}
export const getInventory_RAW_URL = function() {
  return '/store/inventory'
}
export const getInventory_TYPE = function() {
  return 'get'
}
export const getInventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Place an order for a pet
 * request: placeOrder
 * url: placeOrderURL
 * method: placeOrder_TYPE
 * raw_url: placeOrder_RAW_URL
 * @param body - order placed for purchasing the pet
 */
export const placeOrder = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config ? parameters.$config : {}
  let path = '/store/order'
  let body
  const queryParameters = {}
  const form = {}
  const formData = new FormData()
  if (config['headers'] === undefined) {
    config['headers'] = {}
  }
  config.headers['Accept'] = 'application/xml', 'application/json'
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  return request('post', domain + path, body, queryParameters, form, formData, config)
}
export const placeOrder_RAW_URL = function() {
  return '/store/order'
}
export const placeOrder_TYPE = function() {
  return 'post'
}
export const placeOrderURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * request: getOrderById
 * url: getOrderByIdURL
 * method: getOrderById_TYPE
 * raw_url: getOrderById_RAW_URL
 * @param orderId - ID of pet that needs to be fetched
 */
export const getOrderById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config ? parameters.$config : {}
  let path = '/store/order/{orderId}'
  let body
  const queryParameters = {}
  const form = {}
  const formData = new FormData()
  if (config['headers'] === undefined) {
    config['headers'] = {}
  }
  config.headers['Accept'] = 'application/xml', 'application/json'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  return request('get', domain + path, body, queryParameters, form, formData, config)
}
export const getOrderById_RAW_URL = function() {
  return '/store/order/{orderId}'
}
export const getOrderById_TYPE = function() {
  return 'get'
}
export const getOrderByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * request: deleteOrder
 * url: deleteOrderURL
 * method: deleteOrder_TYPE
 * raw_url: deleteOrder_RAW_URL
 * @param orderId - ID of the order that needs to be deleted
 */
export const deleteOrder = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config ? parameters.$config : {}
  let path = '/store/order/{orderId}'
  let body
  const queryParameters = {}
  const form = {}
  const formData = new FormData()
  if (config['headers'] === undefined) {
    config['headers'] = {}
  }
  config.headers['Accept'] = 'application/xml', 'application/json'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  return request('delete', domain + path, body, queryParameters, form, formData, config)
}
export const deleteOrder_RAW_URL = function() {
  return '/store/order/{orderId}'
}
export const deleteOrder_TYPE = function() {
  return 'delete'
}
export const deleteOrderURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}