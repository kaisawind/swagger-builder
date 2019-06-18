/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = 'https://petstore.swagger.io/v2'
let axiosInstance = axios.create()
const ContentType_MultipartFormData = 'multipart/form-data'
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

function isFormData(config) {
  if (config !== undefined &&
    config.headers !== undefined &&
    config.headers['Content-Type'] !== undefined &&
    config.headers['Content-Type'].indexOf(ContentType_MultipartFormData) !== -1) {
    return true
  } else {
    return false
  }
}
export const request = (method, url, body, queryParameters, form, formData, config = {}) => {
  method = method.toLowerCase()
  const keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    if (method === 'delete') {
      config.data = body
      return axiosInstance[method](queryUrl, config)
    } else {
      return axiosInstance[method](queryUrl, body, config)
    }
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  } else {
    if (isFormData(config)) {
      return axiosInstance[method](queryUrl, formData, config)
    } else {
      return axiosInstance[method](queryUrl, qs.stringify(form), config)
    }
  }
}