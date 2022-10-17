import {headers} from '@/helpers/headers';
import {BOOKING_STATE, BOOKING_LIST_WITH_BOOKING_STATE, BOOKING_DETAILS} from '@/helpers/apis';

const state = () => ({
  bookingState: {},
  bookings: [],
  bookingsFullPayload: {},
  bookingDetails: {}
});

const getters = {
  getBookingState: (state) => state.bookingState,
  getBookings: (state) => state.bookings,
  getBookingsFullPayload: (state) => state.bookingsFullPayload,
  getBookingDetails: (state) => state.bookingDetails.booking,
  getBookingDetailsFullPayload: (state) => state.bookingDetails,
}

const mutations = {
  SET_BOOKING_STATE(state, payload) {
    state.bookingState = payload;
  },
  SET_BOOKING(state, payload) {
    state.bookings = [...state.bookings, ...payload];
  },
  SET_BOOKING_FULL_PAYLOAD(state, payload) {
    state.bookingsFullPayload = payload;
  },
  SET_BOOKING_DETAILS(state, payload) {
    state.bookingDetails = payload;
  },
  CLEAR_BOOKING(state, payload) {
    state.bookings = [];
    state.bookingsFullPayload = {};
  }
}

const actions = {
  bookingState(context, payload) {
    this.$axios.get(BOOKING_STATE, {headers: headers()})
      .then(res => {
        if (res.data && res.data.status === 'success') {
          context.commit("SET_BOOKING_STATE", res.data)
        }
      })
      .catch(err => {
      })
  },
  bookingsListWithBookingState(context, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.get(`${BOOKING_LIST_WITH_BOOKING_STATE}/${payload.page}/${payload.bookingState}`, {headers: headers()})
        .then(res => {
          if (res.data && res.data.status === 'success') {
            context.commit("SET_BOOKING_FULL_PAYLOAD", res.data)
            context.commit("SET_BOOKING", res.data.bookings)
            resolve(res.data)
          }
        })
        .catch(err => {
        })
    })
  },
  bookingDetails(context, payload) {
    this.$axios.get(`${BOOKING_DETAILS}/${payload}`, {headers: headers()})
      .then(res => {
        if (res.data && res.data.status === 'success') {
          context.commit("SET_BOOKING_DETAILS", res.data)
        }
      })
      .catch(err => {
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
