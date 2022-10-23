import * as apis from '../helpers/apis';
import {GET_BOOKING_INFO_BY_TRANSACTION, POST_PROMO_CODE_URL} from '../helpers/apis';

export const state = () => ({
  gsLoading: false,
  gsLoadingTwo: false,
  gsCities: [],
  gsTrips: [],
  gsSeatViewData: {},
  gsSeatArray: [],
  gsSeatBoardingPointArray: [],
  gsPaymentPendingBlockData: {},
  ticketDetails: {},
  searchedTicketList: {},
  bookingInfoDetails: {},
  promoCode: {},
});

export const getters = {
  getGsLoading: (state) => state.gsLoading,
  getGsLoadingTwo: (state) => state.gsLoadingTwo,
  getGsCities: (state) => state.gsCities,
  getGsTrips: (state) => state.gsTrips,
  getGsSeatViewData: (state) => state.gsSeatViewData,
  getGsSeatArray: (state) => state.gsSeatArray,
  getGsSeatBoardingPointArray: (state) => state.gsSeatBoardingPointArray,
  getGsPaymentPendingBlockData: (state) => state.gsPaymentPendingBlockData,
  getTicketDetails: (state) => state.ticketDetails,
  getSearchedTicketList: (state) => state.searchedTicketList,
  getBookingInfoDetails: (state) => state.bookingInfoDetails,
  getPromoCode: (state) => state.promoCode,
};

export const actions = {
  async getPbAccessTokenAction ({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        apis.GET_PARIBAHAN_TOKEN_URL,
        payload
      );
      this.$auth.$storage.setCookie('pb_token', `Bearer ${data.access_token}`);
    } catch (error) {
      this.$errorToast({ message: error.response.data.message });
    }
  },
  async getCitiesList ({ commit }) {
    try {
      const { data } = await this.$api.$post(apis.GET_PARIBAHAN_CITY_URL);
      commit('setGsCities', data);
    } catch (error) {
      //this.$errorToast({ message: error.response ? error.response.data.message : error.message });
    }
  },
  async getPbScheduleDataAction ({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SCHEDULE_DATA_URL,
        payload
      );
      if (data.trips) {
        commit('setGsTrips', data.trips);
      }
    } catch (error) {
      this.$errorToast({ message: error.response.data.message });
    }
  },

  async getPbSeatViewAction ({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SEAT_VIEW_URL,
        payload
      );
      commit('setGsSeatViewData', data);
      commit('resetPromoCode');
    } catch (error) {
      if(error.response && error.response.data.statusCode === 404) {
        this.$errorToast({message: error.response.data.message})
        window.location.reload(true)
      }
      this.$errorToast({ message: error.response.data.message });
    }
  },

  async TicketConfirmAction ({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.$post(
        apis.POST_CONFIRM_TICKET,
        payload
      );
      commit('setGsLoading', false);
      if(data && data.gatewayUrl) {
        window.location.href = data.gatewayUrl;
      }
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$errorToast({ message: error.response.data.message ?? 'Something went wrong' });
      return false;
    }
  },

  async getTicketByTnxId({commit}, payload) {
    try {
      const {data} = await this.$api.$post(apis.GET_TICKET_BY_TRANSACTION, payload)
      commit("setTicketDetails", data)
    } catch (e) {
      //this.$errorToast({ message: e.response.data.message ?? 'Something went wrong!' });
    }
  },
  async getBookingInfoByTnxId({commit}, payload) {
    try {
      const {data} = await this.$api.$post(apis.GET_BOOKING_INFO_BY_TRANSACTION, payload)
      commit("setBookingInfoDetails", data)
    } catch (e) {
      //this.$errorToast({ message: e.response.data.message ?? 'Something went wrong!' });
    }
  },

  async getPbPaymentPendingBlockAction ({ commit }, payload) {
    // try {
    //   commit('setGsLoading', true);
    //   const { data } = await this.$api.$post(
    //     apis.POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL,
    //     payload
    //   );
    //   if (data) {
    //     commit('setGsPaymentPendingBlockData', data);
    //   } else {
    //     this.$errorToast({ message: msg ?? 'Something went wrong!' });
    //   }
    //   commit('setGsLoading', false);
    //   return true;
    // } catch (error) {
    //   commit('setGsLoading', false);
    //   this.$errorToast({ message: error.response.data.message });
    //   console.log(error.response.data)
    //   return false;
    // }

    return new Promise((resolve, reject) => {
      return this.$api.$post(
        apis.POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL,
        payload
      ).then(res => {
        if (res.data) {
          commit('setGsPaymentPendingBlockData', res.data);
          resolve(res)
        } else {
          resolve(res)
          this.$errorToast({ message: msg ?? 'Something went wrong!' });
        }
        commit('setGsLoading', false);
      }).catch (error => {
        commit('setGsLoading', false);
        if (error.response) {
          const {data} = error.response
          resolve(data)
        }
        this.$errorToast({ message: error.response.data.message });
      })
    })

  },
  async successTicketByMailAction ({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$axios.post('https://dev.sslpayment.jatri.co/ssl/ticket/success-ticket-by-mail', payload);
      this.$successToast({ message: data.message });
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$errorToast({ message: error.response.data.message });
      return false;
    }
  },
  async searchTicketAction ({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.post(apis.SEARCH_TICKET, payload);
      commit('setSearchedTicketList', data.data)
      console.log('data found', data.message);
      this.$successToast({ message: data.message });
      console.log('data found');
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      commit('setSearchedTicketList', [])
      this.$errorToast({ message: error.response.data.message });
      return false;
    }
  },
  async cancelTicketAction ({ commit, state }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.post(apis.GS_CANCEL_TICKET, payload);
      let updatedTicketList = [];
       updatedTicketList = state.searchedTicketList.tickets.map(ticket => {
        if(data.data._id === ticket._id) {
          return data.data;
        }
        return ticket
      })
      commit('setSearchedTicketList', {...state.searchedTicketList, tickets: updatedTicketList})
      this.$successToast({ message: data.message });
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$errorToast({ message: error.response.data.message });
      return false;
    }
  },

  async getPromoCodeAction({commit}, payload) {
    // try {
    //   const {data} = await this.$api.$post(apis.POST_PROMO_CODE_URL, payload)
    //   commit("setPromoCode", data)
    // } catch (e) {
    //   //this.$errorToast({ message: e.response.data.message ?? 'Something went wrong!' });
    // }
    return new Promise((resolve, reject) => {
      return this.$api.$post(
        apis.POST_PROMO_CODE_URL,
        payload
      ).then(res => {
        if (res.data) {
          commit('setPromoCode', res.data);
          resolve(res)
        } else {
          resolve(res);
          commit('resetPromoCode');
          this.$errorToast({ message: msg ?? 'Something went wrong!' });
        }
      }).catch (error => {
        if (error.response) {
          const {data} = error.response
          resolve(data)
          this.$errorToast({ message: error.response.data.message });
        }
        commit('resetPromoCode');
      })
    })
  },
};

export const mutations = {
  setGsLoading: (state, data) => (state.gsLoading = data),
  setSearchedTicketList: (state, data) => (state.searchedTicketList = data),
  setTicketDetails: (state, data) => (state.ticketDetails = data),
  setBookingInfoDetails: (state, data) => (state.bookingInfoDetails = data),
  setGsLoadingTwo: (state, data) => (state.gsLoadingTwo = data),
  setGsCities: (state, data) => {
    state.gsCities = data.cities.map(city => {
      return {
        'city_name': city
      };
    });
  },
  setGsTrips: (state, data) => (state.gsTrips = Object.values(data)),
  setGsSeatViewData: (state, data) => {
    state.gsSeatViewData = data;
    state.gsSeatArray = data.seatPlan.seatList;
    state.gsSeatBoardingPointArray = data.seatPlan.bordingPoints;
  },
  setGsPaymentPendingBlockData: (state, data) =>
    (state.gsPaymentPendingBlockData = data),
  setPromoCode: (state, data) => (state.promoCode = data),
  resetPromoCode: (state) => (state.promoCode = {})
};
