import cookie from 'cookie'

export const actions = {
  async nuxtServerInit({commit,dispatch}, context) {
    await dispatch('guarantedseat/setOfferImages') //to save somesince offer images are required in many place and it is almost static
    const cookieConst = cookie.parse(context?.req?.headers?.cookie || '')
    if (cookieConst.hasOwnProperty('ags_token')) {
      commit('user/LOGIN_SUCCESS', cookieConst.ags_token, {root: true})
    }
    if(cookieConst.hasOwnProperty('shutdown_data_sets')) {
      commit('agent/SET_SHUTDOWN_DATA_SETS', JSON.parse(cookieConst.shutdown_data_sets), {root: true})
    }
  }
}
