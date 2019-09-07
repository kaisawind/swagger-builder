/**
 * @summary Swagger Petstore
 * @description This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc
 * .freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters
 * .
 * @version 1.0.0
 * @copyright http://swagger.io/terms/
 * @author <apiteam@swagger.io>
 * @license Apache 2.0
 */

import axios from 'axios'
let domain = 'https://petstore.swagger.io/v2'
let axiosInstance = axios.create()
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const getAxiosInstance = () => {
  return axiosInstance
}
export const setAxiosInstance = ($axiosInstance) => {
  axiosInstance = $axiosInstance
}

export const request = (method, url, params, config = {}) => {
  method = method.toLowerCase()
  let configs = {
    baseURL: domain,
    method: method,
    url: url,
    params: params.querys,
    headers: params.headers,
    data: params.body
  }
  configs = Object.assign(configs, config)
  return axiosInstance(configs)
}

/**
 * @name AddPet
 * @method post
 * @summary Add a new pet to the store
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */
export const AddPet = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json,application/xml'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('post', url, params, config)
}
/**
 * @name AddPetURL
 */
export const AddPetURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name UpdatePet
 * @method put
 * @summary Update an existing pet
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */
export const UpdatePet = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json,application/xml'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('put', url, params, config)
}
/**
 * @name UpdatePetURL
 */
export const UpdatePetURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name FindPetsByStatus
 * @method get
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @param { Array } [query] status - Status values that need to be considered for filter
 */
export const FindPetsByStatus = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet/findByStatus'

  if (parameters['status'] !== undefined) {
    params.querys.append('status', parameters['status'])
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: status'))
  }
  return request('get', url, params, config)
}
/**
 * @name FindPetsByStatusURL
 */
export const FindPetsByStatusURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/findByStatus'
  querys.append('status', parameters['status'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name FindPetsByTags
 * @deprecated
 * @method get
 * @summary Finds Pets by tags
 * @description Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @param { Array } [query] tags - Tags to filter by
 */
export const FindPetsByTags = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet/findByTags'

  if (parameters['tags'] !== undefined) {
    params.querys.append('tags', parameters['tags'])
  }
  if (parameters['tags'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: tags'))
  }
  return request('get', url, params, config)
}
/**
 * @name FindPetsByTagsURL
 * @deprecated
 */
export const FindPetsByTagsURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/findByTags'
  querys.append('tags', parameters['tags'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name GetPetById
 * @method get
 * @summary Find pet by ID
 * @description Returns a single pet
 * @param { Integer } [path] petId - ID of pet to return
 */
export const GetPetById = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet/{petId}'

  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId'])
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'))
  }
  return request('get', url, params, config)
}
/**
 * @name GetPetByIdURL
 */
export const GetPetByIdURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/{petId}'
  url = url.replace('{petId}', parameters['petId'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name UpdatePetWithForm
 * @method post
 * @summary Updates a pet in the store with form data
 * @description
 * @param { Integer } [path] petId - ID of pet that needs to be updated
 * @param { String } [formData] name - Updated name of the pet
 * @param { String } [formData] status - Updated status of the pet
 */
export const UpdatePetWithForm = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet/{petId}'
  params.body = new URLSearchParams()
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId'])
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'))
  }
  if (parameters['name'] !== undefined) {
    params.body.append('name', parameters['name'])
  }
  if (parameters['status'] !== undefined) {
    params.body.append('status', parameters['status'])
  }
  return request('post', url, params, config)
}
/**
 * @name UpdatePetWithFormURL
 */
export const UpdatePetWithFormURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/{petId}'
  url = url.replace('{petId}', parameters['petId'])
  // formData name
  // formData status
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name DeletePet
 * @method delete
 * @summary Deletes a pet
 * @description
 * @param { String } [header] api_key -
 * @param { Integer } [path] petId - Pet id to delete
 */
export const DeletePet = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/pet/{petId}'

  if (parameters['api_key'] !== undefined) {
    params.headers.append('api_key', parameters['api_key'])
  }
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId'])
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'))
  }
  return request('delete', url, params, config)
}
/**
 * @name DeletePetURL
 */
export const DeletePetURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/{petId}'
  // header api_key
  url = url.replace('{petId}', parameters['petId'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name UploadFile
 * @method post
 * @summary uploads an image
 * @description
 * @param { Integer } [path] petId - ID of pet to update
 * @param { String } [formData] additionalMetadata - Additional data to pass to server
 * @param { File } [formData] file - file to upload
 */
export const UploadFile = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'multipart/form-data'
  config.headers['Accept'] = 'application/json'
  url = '/pet/{petId}/uploadImage'
  params.body = new FormData()
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId'])
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'))
  }
  if (parameters['additionalMetadata'] !== undefined) {
    params.body.append('additionalMetadata', parameters['additionalMetadata'])
  }
  if (parameters['file'] !== undefined) {
    params.body.append('file', parameters['file'])
  }
  return request('post', url, params, config)
}
/**
 * @name UploadFileURL
 */
export const UploadFileURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/pet/{petId}/uploadImage'
  url = url.replace('{petId}', parameters['petId'])
  // formData additionalMetadata
  // formData file
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name GetInventory
 * @method get
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 */
export const GetInventory = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/json'
  url = '/store/inventory'

  return request('get', url, params, config)
}
/**
 * @name GetInventoryURL
 */
export const GetInventoryURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/store/inventory'
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name PlaceOrder
 * @method post
 * @summary Place an order for a pet
 * @description
 * @param { Object } [body] body - order placed for purchasing the pet
 */
export const PlaceOrder = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/store/order'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('post', url, params, config)
}
/**
 * @name PlaceOrderURL
 */
export const PlaceOrderURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/store/order'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name GetOrderById
 * @method get
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @param { Integer } [path] orderId - ID of pet that needs to be fetched
 */
export const GetOrderById = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/store/order/{orderId}'

  if (parameters['orderId'] !== undefined) {
    url = url.replace('{orderId}', parameters['orderId'])
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: orderId'))
  }
  return request('get', url, params, config)
}
/**
 * @name GetOrderByIdURL
 */
export const GetOrderByIdURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/store/order/{orderId}'
  url = url.replace('{orderId}', parameters['orderId'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name DeleteOrder
 * @method delete
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @param { Integer } [path] orderId - ID of the order that needs to be deleted
 */
export const DeleteOrder = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/store/order/{orderId}'

  if (parameters['orderId'] !== undefined) {
    url = url.replace('{orderId}', parameters['orderId'])
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: orderId'))
  }
  return request('delete', url, params, config)
}
/**
 * @name DeleteOrderURL
 */
export const DeleteOrderURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/store/order/{orderId}'
  url = url.replace('{orderId}', parameters['orderId'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name CreateUser
 * @method post
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @param { Object } [body] body - Created user object
 */
export const CreateUser = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('post', url, params, config)
}
/**
 * @name CreateUserURL
 */
export const CreateUserURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name CreateUsersWithArrayInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */
export const CreateUsersWithArrayInput = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/createWithArray'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('post', url, params, config)
}
/**
 * @name CreateUsersWithArrayInputURL
 */
export const CreateUsersWithArrayInputURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/createWithArray'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name CreateUsersWithListInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */
export const CreateUsersWithListInput = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/createWithList'

  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('post', url, params, config)
}
/**
 * @name CreateUsersWithListInputURL
 */
export const CreateUsersWithListInputURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/createWithList'
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name LoginUser
 * @method get
 * @summary Logs user into the system
 * @description
 * @param { String } [query] username - The user name for login
 * @param { String } [query] password - The password for login in clear text
 */
export const LoginUser = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/login'

  if (parameters['username'] !== undefined) {
    params.querys.append('username', parameters['username'])
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    params.querys.append('password', parameters['password'])
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: password'))
  }
  return request('get', url, params, config)
}
/**
 * @name LoginUserURL
 */
export const LoginUserURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/login'
  querys.append('username', parameters['username'])
  querys.append('password', parameters['password'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name LogoutUser
 * @method get
 * @summary Logs out current logged in user session
 * @description
 */
export const LogoutUser = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/logout'

  return request('get', url, params, config)
}
/**
 * @name LogoutUserURL
 */
export const LogoutUserURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/logout'
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name GetUserByName
 * @method get
 * @summary Get user by user name
 * @description
 * @param { String } [path] username - The name that needs to be fetched. Use user1 for testing.
 */
export const GetUserByName = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/{username}'

  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username'])
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'))
  }
  return request('get', url, params, config)
}
/**
 * @name GetUserByNameURL
 */
export const GetUserByNameURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/{username}'
  url = url.replace('{username}', parameters['username'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name UpdateUser
 * @method put
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - name that need to be updated
 * @param { Object } [body] body - Updated user object
 */
export const UpdateUser = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/{username}'

  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username'])
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'))
  }
  if (parameters['body'] !== undefined) {
    params.body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'))
  }
  return request('put', url, params, config)
}
/**
 * @name UpdateUserURL
 */
export const UpdateUserURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/{username}'
  url = url.replace('{username}', parameters['username'])
  // body body
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

/**
 * @name DeleteUser
 * @method delete
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - The name that needs to be deleted
 */
export const DeleteUser = (parameters = {}) => {
  const config = parameters.$config ? parameters.$config : {}
  let url = ''
  const params = { querys: {}, headers: {}, body: {}}
  if (config.headers === undefined) {
    config.headers = {}
  }
  config.headers['Content-Type'] = 'application/json'
  config.headers['Accept'] = 'application/xml,application/json'
  url = '/user/{username}'

  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username'])
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'))
  }
  return request('delete', url, params, config)
}
/**
 * @name DeleteUserURL
 */
export const DeleteUserURL = (parameters = {}) => {
  let url = ''
  const querys = []
  url = '/user/{username}'
  url = url.replace('{username}', parameters['username'])
  return domain + url + (querys.length > 0 ? '?' + (querys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&')) : '')
}

