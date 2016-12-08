import apisauce from 'apisauce';

const baseURL = '/';

const api = apisauce.create({
  // base URL is read from the "constructor"
  baseURL,
  // here are some default headers
  headers: {
    'Cache-Control': 'no-cache',
  },
  // 10 second timeout...
  timeout: 10000,
});

export default api;
