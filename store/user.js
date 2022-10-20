import * as apis from "../helpers/apis";
import { headers } from '@/helpers/headers';
import { setToken } from '@/helpers/appStorage';
import { USER_PROFILE } from '@/helpers/apis';

const state = () => ({
  isAuth: false,
  token: '',
  otpSenderPhone: '',
  callBackURL: ''
});

const getters = {
  isLoggedIn: (state) => state.isAuth,
  getToken: (state) => state.token,
  getOtpSenderPhone: (state) => state.otpSenderPhone,
  getCallBackURL: (state) => state.callBackURL,
}

const mutations = {
  LOGIN_SUCCESS(state, token) {
    state.token = token;
    state.isAuth = true;
  },

  LOGOUT(state) {
    state.isAuth = false;
    state.token = '';
  },

  OTP_SENDER_PHONE(state, phone) {
    state.otpSenderPhone = phone;
  },
  CALLBACK_URL(state, payload) {
    state.callBackURL = payload;
  }
}

const actions = {
   sendOtp(context, phone) {
      const payload = {
        phone: phone,
        jatri_token: apis.AGENT_JATRI_TOKEN,
      }
    return new Promise((resolve, reject) => {
      return this.$axios.post(apis.SEND_OTP, payload, {headers: headers()})
        .then(res => {
          if(res.status === 200) {
            context.commit("OTP_SENDER_PHONE", phone)
            resolve(res);
          }
        })
        .catch(err => {
          if(err.response) {
            resolve({...err.response.data, status: 'error'});
          } else {
            resolve({status: 'error', message: 'OTP not send. Something went wrong'})
          }
        })
    })
  },
  userLogIn(context, payload) {
    const data = {
      phone: payload.phone,
      jatri_token: apis.AGENT_JATRI_TOKEN,
      country_code: '+880',
      otp_code: payload.otp_code
    }

    return new Promise((resolve, reject) => {
      return this.$axios.post(apis.USER_LOGIN, data, {headers: headers()})
        .then(res => {
          setToken(res.data.token);
          context.commit("LOGIN_SUCCESS", res.data.token)
          context.dispatch("profile")
          resolve(res.data)
        })
        .catch(error => {
          if(error.response) {
            resolve(error.response.data)
          }
        })
    })
  },
  profile() {
    this.$fire.messaging.getToken().then(result => {
      const device_token = result ? result : '';
      const device_type = "web";
      this.$axios.get(USER_PROFILE, {
        params: {
          device_token,
          device_type
        },
        headers: headers()
      })
    })
  },
  userRegistration(context, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.post(apis.USER_REGISTRATION, payload, {headers: headers()})
        .then(res => {
          if(res.data && res.data.token !== '') {
            setToken(res.data.token);
            context.commit("LOGIN_SUCCESS", res.data.token)
          }
          resolve(res.data)
        })
        .catch(error => {
          if(error.response) {
            resolve(error.response.data)
          }
        })
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
