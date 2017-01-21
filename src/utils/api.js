import axios from 'axios';
import jsCookie from 'js-cookie';
import qs from 'querystring';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const DELETE = 'delete';
const PATCH = 'patch';

export default class Api {
  constructor() {
    this.baseURL = process.env.BASE_URL;
  }
  request(url, verb, data, onProgress) {
    const method = verb || GET;
    const baseURL = this.baseURL;
    const headers = {
      Authorization: jsCookie.get('token'),
      'x-specialpurpose': 'sentinela',
    };
    const onUploadProgress = progressEvent => onProgress(progressEvent);
    return axios({ baseURL, url, method, headers, data, onUploadProgress });
  }
  requestAll(arr) {
    return axios.all(arr.map(req => this.request(req)));
  }
  get(url, query) {
    let urlPlusQuery = url;
    if (query && query.constructor === String) urlPlusQuery = `${url}?${query}`;
    if (query && query.constructor === Object) urlPlusQuery = `${url}?${qs.stringify(query)}`;
    return this.request(urlPlusQuery);
  }
  post(url, data, onProgress) {
    return this.request(url, POST, data, onProgress);
  }
  put(url, data) {
    return this.request(url, PUT, data);
  }
  patch(url, data) {
    return this.request(url, PATCH, data);
  }
  delete(url) {
    return this.request(url, DELETE);
  }
}
