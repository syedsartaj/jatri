import * as apis from '../helpers/apis';
import { GET_BOOKING_INFO_BY_TRANSACTION, POST_PROMO_CODE_URL } from '../helpers/apis';
import { handleScrollBehaviour } from '../helpers/utils';

export const state = () => ({
  mobileFloatingFilter: true,
  gsLoading: false,
  gsLoadingTwo: false,
  gsCities: [],
  gsOfferPromoImageUrl: [],
  gsTrips: [],
  gsSeatViewData: {},
  gsSeatArray: [],
  gsSeatBoardingPointArray: [],
  gsPaymentPendingBlockData: {},
  ticketDetails: {},
  searchedTicketList: {},
  bookingInfoDetails: {},
  promoCode: {},
  isBusReserveModalOpen: false,
  isRequestSuccessFull: false,
});

export const getters = {
  getMobileFloatingFilter: (state) => state.mobileFloatingFilter,
  getGsLoading: (state) => state.gsLoading,
  getGsLoadingTwo: (state) => state.gsLoadingTwo,
  getGsCities: (state) => state.gsCities,
  getGsOfferPromoImageUrl: (state) => {
    return state.gsOfferPromoImageUrl
  },
  getGsTrips: (state) => state.gsTrips,
  getGsSeatViewData: (state) => state.gsSeatViewData,
  getGsSeatArray: (state) => state.gsSeatArray,
  getGsSeatBoardingPointArray: (state) => state.gsSeatBoardingPointArray,
  getGsPaymentPendingBlockData: (state) => state.gsPaymentPendingBlockData,
  getTicketDetails: (state) => state.ticketDetails,
  getSearchedTicketList: (state) => state.searchedTicketList,
  getBookingInfoDetails: (state) => state.bookingInfoDetails,
  getPromoCode: (state) => state.promoCode,
  getBusReserveModalOpenStatus: (state) => state.isBusReserveModalOpen,
  getRequestSuccessfulStatus: (state) => state.isRequestSuccessFull,
};

export const actions = {
  async getPbAccessTokenAction({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        apis.GET_PARIBAHAN_TOKEN_URL,
        payload
      );
      this.$auth.$storage.setCookie('pb_token', `Bearer ${data.access_token}`);
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
    }
  },
  async getCitiesList({ commit }) {
    try {
      const { data } = await this.$api.$post(apis.GET_PARIBAHAN_CITY_URL);
      commit('setGsCities', data);
    } catch (error) {
      // this.$toast.error(error.response ? error.response.data.message : error.message , {
      //   position: 'bottom-right',
      //   duration: 5000,
      // })
    }
  },
  async getOfferPromoImagesUrlList({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GS_OFFER_AND_PROMO_IMAGES);
      commit('setGsOfferPromoImageUrl', data.offerAndPromoImages);
    } catch (error) {
      console.log(error);
      // this.$toast.error(error.response ? error.response.data.message : error.message , {
      //   position: 'bottom-right',
      //   duration: 5000,
      // })
    }
  },

  async readOfferPromoImageUrl({ commit }, payload) {
    try {
      const data = await this.$api.$get(
        apis.READ_OFFER_PROMO_IMAGE_URL, { params: { path: payload } }
      );
      return data;
      // commit('setGsOfferPromoImage', data);
    } catch (error) {
      // this.$toast.error(error.response ? error.response.data.message : error.message , {
      //   position: 'bottom-right',
      //   duration: 5000,
      // })
    }
  },
  async getPbScheduleDataAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SCHEDULE_DATA_URL,
        payload
      );
      if (data.trips) {
        commit('setGsTrips', data.trips);
      }
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
    }
  },

  async getPbSeatViewAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SEAT_VIEW_URL,
        payload
      );
      commit('setGsSeatViewData', data);
      commit('resetPromoCode');
    } catch (error) {
      if (error.response && error.response.data.statusCode === 404) {
        this.$toast.error(error.response.data.message, {
          position: 'bottom-right',
          duration: 5000,
        })
        window.location.reload(true)
      }
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
    }
  },

  async TicketConfirmAction({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.$post(
        apis.POST_CONFIRM_TICKET,
        payload
      );
      commit('setGsLoading', false);
      if (data && data.gatewayUrl) {
        window.location.href = data.gatewayUrl;
      }
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$toast.error(error.response.data.message ?? 'Something went wrong', {
        position: 'bottom-right',
        duration: 5000,
      })
      return false;
    }
  },

  async getTicketByTnxId({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(apis.GET_TICKET_BY_TRANSACTION, payload)
      commit("setTicketDetails", data)
    } catch (e) {
      this.$toast.error(e.response.data.message ?? 'Something went wrong!', {
        position: 'bottom-right',
        duration: 5000,
      })
    }
  },
  async getBookingInfoByTnxId({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(apis.GET_BOOKING_INFO_BY_TRANSACTION, payload)
      commit("setBookingInfoDetails", data)
    } catch (e) {
      this.$toast.error(e.response.data.message ?? 'Something went wrong!', {
        position: 'bottom-right',
        duration: 5000,
      })
    }
  },

  async getPbPaymentPendingBlockAction({ commit }, payload) {
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
          this.$toast.error(msg ?? 'Something went wrong!', {
            position: 'bottom-right',
            duration: 5000,
          })
        }
        commit('setGsLoading', false);
      }).catch(error => {
        commit('setGsLoading', false);
        if (error.response) {
          const { data } = error.response
          resolve(data)
        }
        this.$toast.error(error.response.data.message, {
          position: 'bottom-right',
          duration: 5000,
        })
      })
    })

  },
  async successTicketByMailAction({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$axios.post('https://dev.sslpayment.jatri.co/ssl/ticket/success-ticket-by-mail', payload);
      this.$toast.success(data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      return false;
    }
  },
  async searchTicketAction({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.post(apis.SEARCH_TICKET, payload);
      commit('setSearchedTicketList', data.data)
      this.$toast.success(data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      commit('setSearchedTicketList', [])
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      return false;
    }
  },
  async cancelTicketAction({ commit, state }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.post(apis.GS_CANCEL_TICKET, payload);
      let updatedTicketList = [];
      updatedTicketList = state.searchedTicketList.tickets.map(ticket => {
        if (data.data._id === ticket._id) {
          return data.data;
        }
        return ticket
      })
      commit('setSearchedTicketList', { ...state.searchedTicketList, tickets: updatedTicketList })
      this.$toast.success(data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      commit('setGsLoading', false);
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$toast.error(error.response.data.message, {
        position: 'bottom-right',
        duration: 5000,
      })
      return false;
    }
  },

  async getPromoCodeAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api.$post(
        apis.POST_PROMO_CODE_URL,
        payload
      ).then(res => {
        if (res.data) {
          commit('setPromoCode', res.data);
          resolve(res)
          this.$toast.success('Promo applied successfully', {
            position: 'bottom-right',
            duration: 5000,
          })
        } else {
          resolve(res);
          commit('resetPromoCode');
          this.$toast.error('Invalid promo applied!', {
            position: 'bottom-right',
            duration: 5000,
          })
        }
      }).catch(error => {
        if (error.response) {
          const { data } = error.response
          resolve(data)
          this.$toast.error(error.response.data.message, {
            position: 'bottom-right',
            duration: 5000,
          })
        }
        commit('resetPromoCode');
      })
    })
  },

  async fullBusReservationAction({ commit }, payload) {
    try {
      commit('setGsLoading', true);
      const { data } = await this.$api.post(apis.POST_FULL_BUS_RESERVATION, payload);
      commit('setGsLoading', false);
      commit('setBusReserveModalOpenStatus');
      commit('handleSuccessfulModal');
      return true;
    } catch (error) {
      commit('setGsLoading', false);
      this.$toast.error(error.response.data.message[0], {
        position: 'bottom-right',
        duration: 5000,
      })
      return false;
    }
  },
};

export const mutations = {
  setGsLoading: (state, data) => (state.gsLoading = data),
  setSearchedTicketList: (state, data) => (state.searchedTicketList = data),
  setTicketDetails: (state, data) => (state.ticketDetails = data),
  setBookingInfoDetails: (state, data) => (state.bookingInfoDetails = data),
  setGsLoadingTwo: (state, data) => (state.gsLoadingTwo = data),
  setGsCities: (state, data) => {
    let tempData = [];
    data.cities.forEach((city) => {
      if (city?.name) {
        tempData.push({
          'city_name': city.name,
          city: city
        })
      }
    })
    state.gsCities = tempData;
  },
  setGsOfferPromoImageUrl: (state, data) => {
    state.gsOfferPromoImageUrl = data
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
  resetPromoCode: (state) => (state.promoCode = {}),
  sortedTrip: (state, data) => {
    if (data === 'l2h') {
      state.gsTrips.sort((a, b) => (a.seatFare[0].fare > b.seatFare[0].fare) ? 1 : ((b.seatFare[0].fare > a.seatFare[0].fare) ? -1 : 0));
    } else {
      state.gsTrips.sort((a, b) => (a.seatFare[0].fare < b.seatFare[0].fare) ? 1 : ((b.seatFare[0].fare < a.seatFare[0].fare) ? -1 : 0));
    }
  },
  mobileFloatingFilter: (state, data) => {
    if (data) {
      state.mobileFloatingFilter = !state.mobileFloatingFilter
    }
  },
  setBusReserveModalOpenStatus: (state, data) => {
    handleScrollBehaviour(state.isBusReserveModalOpen);
    state.isBusReserveModalOpen = !state.isBusReserveModalOpen;

  },
  handleSuccessfulModal: (state, data) => {
    handleScrollBehaviour(state.isRequestSuccessFull);
    state.isRequestSuccessFull = !state.isRequestSuccessFull;
  },
};
