"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDeleteUser = exports.UserUpdateUser = exports.UserGetUserByName = exports.UserLogoutUser = exports.UserLoginUser = exports.UserCreateUsersWithListInput = exports.UserCreateUsersWithArrayInput = exports.UserCreateUser = exports.StoreDeleteOrder = exports.StoreGetOrderById = exports.StorePlaceOrder = exports.StoreGetInventory = exports.PetUploadFile = exports.PetDeletePet = exports.PetUpdatePetWithForm = exports.PetGetPetById = exports.PetFindPetsByTags = exports.PetFindPetsByStatus = exports.PetUpdatePet = exports.PetAddPet = exports.request = exports.setAxiosInstance = exports.getAxiosInstance = exports.setDomain = exports.getDomain = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var domain = 'https://petstore.swagger.io/v2';

var axiosInstance = _axios.default.create();

var getDomain = function getDomain() {
  return domain;
};

exports.getDomain = getDomain;

var setDomain = function setDomain($domain) {
  domain = $domain;
};

exports.setDomain = setDomain;

var getAxiosInstance = function getAxiosInstance() {
  return axiosInstance;
};

exports.getAxiosInstance = getAxiosInstance;

var setAxiosInstance = function setAxiosInstance($axiosInstance) {
  axiosInstance = $axiosInstance;
};

exports.setAxiosInstance = setAxiosInstance;

var request = function request(method, url, params) {
  var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  method = method.toLowerCase();
  var configs = {
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
 * @name PetAddPet
 * @method post
 * @summary Add a new pet to the store
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */


exports.request = request;

var PetAddPet = function PetAddPet() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name PetUpdatePet
 * @method put
 * @summary Update an existing pet
 * @description
 * @param { Object } [body] body - Pet object that needs to be added to the store
 */


exports.PetAddPet = PetAddPet;

var PetUpdatePet = function PetUpdatePet() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name PetFindPetsByStatus
 * @method get
 * @summary Finds Pets by status
 * @description Multiple status values can be provided with comma separated strings
 * @param { Array } [query] status - Status values that need to be considered for filter
 */


exports.PetUpdatePet = PetUpdatePet;

var PetFindPetsByStatus = function PetFindPetsByStatus() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
    params.querys.push(parameters['status']);
  }

  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: status'));
  }

  return request('get', url, params, config);
};
/**
 * @name PetFindPetsByTags
 * @deprecated
 * @method get
 * @summary Finds Pets by tags
 * @description Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 * @param { Array } [query] tags - Tags to filter by
 */


exports.PetFindPetsByStatus = PetFindPetsByStatus;

var PetFindPetsByTags = function PetFindPetsByTags() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
    params.querys.push(parameters['tags']);
  }

  if (parameters['tags'] === undefined) {
    return Promise.reject(new Error('Missing required Array parameter: tags'));
  }

  return request('get', url, params, config);
};
/**
 * @name PetGetPetById
 * @method get
 * @summary Find pet by ID
 * @description Returns a single pet
 * @param { Integer } [path] petId - ID of pet to return
 */


exports.PetFindPetsByTags = PetFindPetsByTags;

var PetGetPetById = function PetGetPetById() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name PetUpdatePetWithForm
 * @method post
 * @summary Updates a pet in the store with form data
 * @description
 * @param { Integer } [path] petId - ID of pet that needs to be updated
 * @param { String } [formData] name - Updated name of the pet
 * @param { String } [formData] status - Updated status of the pet
 */


exports.PetGetPetById = PetGetPetById;

var PetUpdatePetWithForm = function PetUpdatePetWithForm() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
    headers: {},
    body: {}
  };

  if (config.headers === undefined) {
    config.headers = {};
  }

  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  config.headers['Accept'] = 'application/xml,application/json';
  url = '/pet/{petId}';
  var formData = new URLSearchParams();

  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }

  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }

  if (parameters['name'] !== undefined) {
    formData.append('name', parameters['name']);
  }

  if (parameters['status'] !== undefined) {
    formData.append('status', parameters['status']);
  }

  return request('post', url, params, config);
};
/**
 * @name PetDeletePet
 * @method delete
 * @summary Deletes a pet
 * @description
 * @param { String } [header] api_key -
 * @param { Integer } [path] petId - Pet id to delete
 */


exports.PetUpdatePetWithForm = PetUpdatePetWithForm;

var PetDeletePet = function PetDeletePet() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
    params.headers.push(parameters['api_key']);
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
 * @name PetUploadFile
 * @method post
 * @summary uploads an image
 * @description
 * @param { Integer } [path] petId - ID of pet to update
 * @param { String } [formData] additionalMetadata - Additional data to pass to server
 * @param { File } [formData] file - file to upload
 */


exports.PetDeletePet = PetDeletePet;

var PetUploadFile = function PetUploadFile() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
    headers: {},
    body: {}
  };

  if (config.headers === undefined) {
    config.headers = {};
  }

  config.headers['Content-Type'] = 'multipart/form-data';
  config.headers['Accept'] = 'application/json';
  url = '/pet/{petId}/uploadImage';
  var formData = new FormData();

  if (parameters['petId'] !== undefined) {
    url = url.replace('{petId}', parameters['petId']);
  }

  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required Integer parameter: petId'));
  }

  if (parameters['additionalMetadata'] !== undefined) {
    formData.append('additionalMetadata', parameters['additionalMetadata']);
  }

  if (parameters['file'] !== undefined) {
    formData.append('file', parameters['file']);
  }

  return request('post', url, params, config);
};
/**
 * @name StoreGetInventory
 * @method get
 * @summary Returns pet inventories by status
 * @description Returns a map of status codes to quantities
 */


exports.PetUploadFile = PetUploadFile;

var StoreGetInventory = function StoreGetInventory() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name StorePlaceOrder
 * @method post
 * @summary Place an order for a pet
 * @description
 * @param { Object } [body] body - order placed for purchasing the pet
 */


exports.StoreGetInventory = StoreGetInventory;

var StorePlaceOrder = function StorePlaceOrder() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name StoreGetOrderById
 * @method get
 * @summary Find purchase order by ID
 * @description For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions
 * @param { Integer } [path] orderId - ID of pet that needs to be fetched
 */


exports.StorePlaceOrder = StorePlaceOrder;

var StoreGetOrderById = function StoreGetOrderById() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name StoreDeleteOrder
 * @method delete
 * @summary Delete purchase order by ID
 * @description For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
 * @param { Integer } [path] orderId - ID of the order that needs to be deleted
 */


exports.StoreGetOrderById = StoreGetOrderById;

var StoreDeleteOrder = function StoreDeleteOrder() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserCreateUser
 * @method post
 * @summary Create user
 * @description This can only be done by the logged in user.
 * @param { Object } [body] body - Created user object
 */


exports.StoreDeleteOrder = StoreDeleteOrder;

var UserCreateUser = function UserCreateUser() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserCreateUsersWithArrayInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */


exports.UserCreateUser = UserCreateUser;

var UserCreateUsersWithArrayInput = function UserCreateUsersWithArrayInput() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserCreateUsersWithListInput
 * @method post
 * @summary Creates list of users with given input array
 * @description
 * @param { Object } [body] body - List of user object
 */


exports.UserCreateUsersWithArrayInput = UserCreateUsersWithArrayInput;

var UserCreateUsersWithListInput = function UserCreateUsersWithListInput() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserLoginUser
 * @method get
 * @summary Logs user into the system
 * @description
 * @param { String } [query] username - The user name for login
 * @param { String } [query] password - The password for login in clear text
 */


exports.UserCreateUsersWithListInput = UserCreateUsersWithListInput;

var UserLoginUser = function UserLoginUser() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
    params.querys.push(parameters['username']);
  }

  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: username'));
  }

  if (parameters['password'] !== undefined) {
    params.querys.push(parameters['password']);
  }

  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required String parameter: password'));
  }

  return request('get', url, params, config);
};
/**
 * @name UserLogoutUser
 * @method get
 * @summary Logs out current logged in user session
 * @description
 */


exports.UserLoginUser = UserLoginUser;

var UserLogoutUser = function UserLogoutUser() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserGetUserByName
 * @method get
 * @summary Get user by user name
 * @description
 * @param { String } [path] username - The name that needs to be fetched. Use user1 for testing.
 */


exports.UserLogoutUser = UserLogoutUser;

var UserGetUserByName = function UserGetUserByName() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserUpdateUser
 * @method put
 * @summary Updated user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - name that need to be updated
 * @param { Object } [body] body - Updated user object
 */


exports.UserGetUserByName = UserGetUserByName;

var UserUpdateUser = function UserUpdateUser() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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
 * @name UserDeleteUser
 * @method delete
 * @summary Delete user
 * @description This can only be done by the logged in user.
 * @param { String } [path] username - The name that needs to be deleted
 */


exports.UserUpdateUser = UserUpdateUser;

var UserDeleteUser = function UserDeleteUser() {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = parameters.$config ? parameters.$config : {};
  var url = '';
  var params = {
    query: [],
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

exports.UserDeleteUser = UserDeleteUser;

