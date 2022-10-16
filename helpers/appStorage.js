import Cookies from 'js-cookie'

const getToken = () => {
  return Cookies.get('ags_token');
}

const setToken = (token) => {
  Cookies.set('ags_token', token, { expires: 7 })
}

const removeToken = () => {
  Cookies.remove('ags_token')
}

export {
  getToken,
  setToken,
  removeToken,
}
