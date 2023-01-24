export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    return Promise.resolve(config);
  })
  $axios.onError(async (error) => {
    return Promise.reject(error)
  })
}
