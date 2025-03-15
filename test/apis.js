import "core-js/modules/es.object.assign.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/esnext.iterator.constructor.js";
import "core-js/modules/esnext.iterator.map.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.url-search-params.js";
/**
 * @summary Swagger Petstore 2.0
 * @description This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc
 * .freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters
 * .
 * @version 1.0.0
 * @copyright http://swagger.io/terms/
 * @author <apiteam@swagger.io>
 * @license Apache 2.0
 */

import axios from 'axios';
let domain = 'https://petstore.swagger.io/v2';
let axiosInstance = axios.create();
export const getDomain = () => {
  return domain;
};
export const setDomain = $domain => {
  domain = $domain;
};
export const getAxiosInstance = () => {
  return axiosInstance;
};
export const setAxiosInstance = $axiosInstance => {
  axiosInstance = $axiosInstance;
};
export const request = function request(method, url, params) {
  let config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  method = method.toLowerCase();
  let configs = {
    baseURL: domain,
    method: method,
    url: url,
    params: params.querys,
    headers: params.headers,
    data: params.body
  };
  configs = Object.assign(configs, config);
  return axiosInstance(configs);
};

/**
 * @name AddPet
 * @method post
 * @summary Add a new pet to the store
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */
export const AddPet = function AddPet() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json,application/xml';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('post', url, params, config);
};
/**
 * @name AddPetURL
 */
export const AddPetURL = function AddPetURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name UpdatePet
 * @method put
 * @summary Update an existing pet
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */
export const UpdatePet = function UpdatePet() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json,application/xml';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('put', url, params, config);
};
/**
 * @name UpdatePetURL
 */
export const UpdatePetURL = function UpdatePetURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name FindPetsByStatus
 * @method get
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @param { Array } [query] status - Status values that need to be considered for filter
 */
export const FindPetsByStatus = function FindPetsByStatus() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/findByStatus';
  if (parameters['status'] !== undefined) {
    params.querys['status'] = parameters['status'];
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: status'));
  }
  return request('get', url, params, config);
};
/**
 * @name FindPetsByStatusURL
 */
export const FindPetsByStatusURL = function FindPetsByStatusURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/findByStatus';
  querys['status'] = parameters['status'];
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name FindPetsByTags
 * @deprecated
 * @method get
 * @summary Finds Pets by tags
 * @description Multiple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @param { Array } [query] tags - Tags to filter by
 */
export const FindPetsByTags = function FindPetsByTags() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/findByTags';
  if (parameters['tags'] !== undefined) {
    params.querys['tags'] = parameters['tags'];
  }
  if (parameters['tags'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: tags'));
  }
  return request('get', url, params, config);
};
/**
 * @name FindPetsByTagsURL
 * @deprecated
 */
export const FindPetsByTagsURL = function FindPetsByTagsURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/findByTags';
  querys['tags'] = parameters['tags'];
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name GetPetById
 * @method get
 * @summary Find pet by ID
 * @description Returns a single pet
 * @param { Integer } [path] petId - ID of pet to return
 */
export const GetPetById = function GetPetById() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/{petId}';
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }
  return request('get', url, params, config);
};
/**
 * @name GetPetByIdURL
 */
export const GetPetByIdURL = function GetPetByIdURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/{petId}';
  url = url.replace('{petId}', parameters['petId']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name UpdatePetWithForm
 * @method post
 * @summary Updates a pet in the store with form data
 * @description
 * @param { Integer } [path] petId - ID of pet that needs to be updated
 * @param { String } [formData] name - Updated name of the pet
 * @param { String } [formData] status - Updated status of the pet
 */
export const UpdatePetWithForm = function UpdatePetWithForm() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/{petId}';
  params.body = new URLSearchParams();
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }
  if (parameters['name'] !== undefined) {
    params.body.append('name', parameters['name']);
  }
  if (parameters['status'] !== undefined) {
    params.body.append('status', parameters['status']);
  }
  return request('post', url, params, config);
};
/**
 * @name UpdatePetWithFormURL
 */
export const UpdatePetWithFormURL = function UpdatePetWithFormURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/{petId}';
  url = url.replace('{petId}', parameters['petId']);
  // formData name
  // formData status
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name DeletePet
 * @method delete
 * @summary Deletes a pet
 * @description
 * @param { String } [header] api_key -
 * @param { Integer } [path] petId - Pet id to delete
 */
export const DeletePet = function DeletePet() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/{petId}';
  if (parameters['api_key'] !== undefined) {
    params.headers['api_key'] = parameters['api_key'];
  }
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }
  return request('delete', url, params, config);
};
/**
 * @name DeletePetURL
 */
export const DeletePetURL = function DeletePetURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/{petId}';
  // header api_key
  url = url.replace('{petId}', parameters['petId']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name UploadFile
 * @method post
 * @summary uploads an image
 * @description
 * @param { Integer } [path] petId - ID of pet to update
 * @param { String } [formData] additionalMetadata - Additional data to pass to server
 * @param { File } [formData] file - file to upload
 */
export const UploadFile = function UploadFile() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'multipart/form-data';
  config.headers['Accept'] = 'application/json';
  url = '/pet/{petId}/uploadImage';
  params.body = new FormData();
  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }
  if (parameters['additionalMetadata'] !== undefined) {
    params.body.append('additionalMetadata', parameters['additionalMetadata']);
  }
  if (parameters['file'] !== undefined) {
    params.body.append('file', parameters['file']);
  }
  return request('post', url, params, config);
};
/**
 * @name UploadFileURL
 */
export const UploadFileURL = function UploadFileURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/pet/{petId}/uploadImage';
  url = url.replace('{petId}', parameters['petId']);
  // formData additionalMetadata
  // formData file
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name GetInventory
 * @method get
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 */
export const GetInventory = function GetInventory() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  url = '/store/inventory';
  return request('get', url, params, config);
};
/**
 * @name GetInventoryURL
 */
export const GetInventoryURL = function GetInventoryURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/store/inventory';
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name PlaceOrder
 * @method post
 * @summary Place an order for a pet
 * @description
 * @param { Object } [body] body - order placed for purchasing the pet
 */
export const PlaceOrder = function PlaceOrder() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/store/order';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('post', url, params, config);
};
/**
 * @name PlaceOrderURL
 */
export const PlaceOrderURL = function PlaceOrderURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/store/order';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name GetOrderById
 * @method get
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @param { Integer } [path] orderId - ID of pet that needs to be fetched
 */
export const GetOrderById = function GetOrderById() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/store/order/{orderId}';
  if (parameters['orderId'] !== undefined) {
    url = url.replace('{orderId}', parameters['orderId']);
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: orderId'));
  }
  return request('get', url, params, config);
};
/**
 * @name GetOrderByIdURL
 */
export const GetOrderByIdURL = function GetOrderByIdURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/store/order/{orderId}';
  url = url.replace('{orderId}', parameters['orderId']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name DeleteOrder
 * @method delete
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @param { Integer } [path] orderId - ID of the order that needs to be deleted
 */
export const DeleteOrder = function DeleteOrder() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/store/order/{orderId}';
  if (parameters['orderId'] !== undefined) {
    url = url.replace('{orderId}', parameters['orderId']);
  }
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: orderId'));
  }
  return request('delete', url, params, config);
};
/**
 * @name DeleteOrderURL
 */
export const DeleteOrderURL = function DeleteOrderURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/store/order/{orderId}';
  url = url.replace('{orderId}', parameters['orderId']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name CreateUser
 * @method post
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @param { Object } [body] body - Created user object
 */
export const CreateUser = function CreateUser() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('post', url, params, config);
};
/**
 * @name CreateUserURL
 */
export const CreateUserURL = function CreateUserURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name CreateUsersWithArrayInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */
export const CreateUsersWithArrayInput = function CreateUsersWithArrayInput() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/createWithArray';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('post', url, params, config);
};
/**
 * @name CreateUsersWithArrayInputURL
 */
export const CreateUsersWithArrayInputURL = function CreateUsersWithArrayInputURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/createWithArray';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name CreateUsersWithListInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */
export const CreateUsersWithListInput = function CreateUsersWithListInput() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/createWithList';
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('post', url, params, config);
};
/**
 * @name CreateUsersWithListInputURL
 */
export const CreateUsersWithListInputURL = function CreateUsersWithListInputURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/createWithList';
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name LoginUser
 * @method get
 * @summary Logs user into the system
 * @description
 * @param { String } [query] username - The user name for login
 * @param { String } [query] password - The password for login in clear text
 */
export const LoginUser = function LoginUser() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/login';
  if (parameters['username'] !== undefined) {
    params.querys['username'] = parameters['username'];
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'));
  }
  if (parameters['password'] !== undefined) {
    params.querys['password'] = parameters['password'];
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: password'));
  }
  return request('get', url, params, config);
};
/**
 * @name LoginUserURL
 */
export const LoginUserURL = function LoginUserURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/login';
  querys['username'] = parameters['username'];
  querys['password'] = parameters['password'];
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name LogoutUser
 * @method get
 * @summary Logs out current logged in user session
 * @description
 */
export const LogoutUser = function LogoutUser() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/logout';
  return request('get', url, params, config);
};
/**
 * @name LogoutUserURL
 */
export const LogoutUserURL = function LogoutUserURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/logout';
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name GetUserByName
 * @method get
 * @summary Get user by user name
 * @description
 * @param { String } [path] username - The name that needs to be fetched. Use user1 for testing.
 */
export const GetUserByName = function GetUserByName() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/{username}';
  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username']);
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'));
  }
  return request('get', url, params, config);
};
/**
 * @name GetUserByNameURL
 */
export const GetUserByNameURL = function GetUserByNameURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/{username}';
  url = url.replace('{username}', parameters['username']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name UpdateUser
 * @method put
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - name that need to be updated
 * @param { Object } [body] body - Updated user object
 */
export const UpdateUser = function UpdateUser() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/{username}';
  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username']);
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'));
  }
  if (parameters['body'] !== undefined) {
    params.body = parameters['body'];
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required Object parameter: body'));
  }
  return request('put', url, params, config);
};
/**
 * @name UpdateUserURL
 */
export const UpdateUserURL = function UpdateUserURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/{username}';
  url = url.replace('{username}', parameters['username']);
  // body body
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

/**
 * @name DeleteUser
 * @method delete
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - The name that needs to be deleted
 */
export const DeleteUser = function DeleteUser() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const config = parameters.$config ? parameters.$config : {};
  let url = '';
  const params = {
    querys: {},
    headers: {},
    body: {}
  };
  if (config.headers === undefined) {
    config.headers = {};
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/user/{username}';
  if (parameters['username'] !== undefined) {
    url = url.replace('{username}', parameters['username']);
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'));
  }
  return request('delete', url, params, config);
};
/**
 * @name DeleteUserURL
 */
export const DeleteUserURL = function DeleteUserURL() {
  let parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let url = '';
  const querys = {};
  url = '/user/{username}';
  url = url.replace('{username}', parameters['username']);
  const keys = Object.keys(querys);
  return domain + url + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(querys[key])).join('&') : '');
};

