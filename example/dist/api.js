/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
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
    method: method,
    url: url,
    params: params.query,
    headers: params.headers,
    data: params.body,
  }
  const configs = Object.assign(configs, config)
  axiosInstance(configs)
}