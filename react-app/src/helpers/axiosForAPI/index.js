import axios from 'axios'
// import { setupCache } from 'axios-cache-adapter'

// const cache = setupCache({
//   maxAge: 15 * 60 * 1000,
// })

const instance = axios.create({
  // adapter: cache.adapter, // we are using this cache adapter to improve performance
  baseURL:
    process.env['NODE_ENV'] === 'dev'
      ? 'http://127.0.0.1:5000/'
      : 'https://raize-api.azurewebsites.net/',
})

instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default instance
