import { USER_REFRESH_TOKEN, AGENT_JATRI_TOKEN } from '@/helpers/apis';
import { removeToken, setToken } from '@/helpers/appStorage';
import Cookies from 'js-cookie'

export default function ({ $axios, redirect, store }) {
  $axios.onRequest(config => {
    return Promise.resolve(config);
  })
  $axios.onError(async (error) => {
    const originalRequest = error.config;
    if(error.response.status === 402 && error.response.data.data === "") {
      if(Cookies.get('ags_token')) {
        try{
         await $axios.post(USER_REFRESH_TOKEN, {
            jatri_token:  AGENT_JATRI_TOKEN,
            last_token: Cookies.get('ags_token')
          }).then(res => {
            if(res.data.status === 'success' && res.data.token !== "") {
              setToken(res.data.token);
              store.commit("user/LOGIN_SUCCESS", res.data.token)
              return $axios.request(originalRequest)
            }
          })
        } catch (err) {
          store.commit("user/LOGOUT")
          removeToken();
          return redirect('/')
        }
      } else {
        store.commit("user/LOGOUT")
        removeToken();
        return redirect('/')
      }
    }
    if(error.response.status === 419) {
      return redirect('/')
    }
    // if(error.response.status === 404) {
    //   return redirect('/404')
    // }
    return Promise.reject(error)
  })
}
