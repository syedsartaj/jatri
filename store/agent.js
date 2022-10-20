import * as apis from "../helpers/apis";
import {headers} from '@/helpers/headers';
import {AVAILABLE_BUS_SERVICES, SEND_BOOKING_REQUEST} from '@/helpers/apis';
import Cookies from 'js-cookie';

const state = () => ({
  fromToDataSet: [],
  shutdownDataSets: {},
  services: [],
  filteredAvailableServiceList: [],
  loading: false,
});

const getters = {
  getToken: (state) => state.token,
  getFromToDataset: (state) => state.fromToDataSet,
  getShutdownDataSets: (state) => state.shutdownDataSets,
  getServices: (state) => state.services,
  getServiceList: (state) => state.services['available_services'],
  getFilteredAvailableServiceList: (state) => state.filteredAvailableServiceList,
  getLoading: (state) => state.loading,
}

const mutations = {
  SET_FORM_STOPPAGE(state, payload) {
    state.fromToDataSet = payload;
  },
  SET_SHUTDOWN_DATA_SETS(state, payload) {
    state.shutdownDataSets = payload;
  },
  SET_AVAILABLE_SERVICES_LIST(state, payload) {
    state.services = payload;
  },
  SET_FILTER_SERVICES_LIST(state, payload) {
    state.filteredAvailableServiceList = payload.sort((a, b) => Number(a.fare_per_ticket) - Number(b.fare_per_ticket));
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  filterServiceList(state, payload) {
    if (payload.price === 'lowToHigh') {
      state.filteredAvailableServiceList = state.services['available_services'].sort((a, b) => Number(a.fare_per_ticket) - Number(b.fare_per_ticket));
    } else if (payload.price === 'highToLow') {
      state.filteredAvailableServiceList = state.services['available_services'].sort((a, b) => Number(b.fare_per_ticket) - Number(a.fare_per_ticket));
    }
    if(payload.class) {
      state.filteredAvailableServiceList = state.services['available_services'].filter(item => item.type === payload.class)
    }
  }
}

const actions = {
  fromToStoppageDataSet(context, payload) {
    this.$axios.get(apis.FROM_TO_DATA_SETS, {headers: headers()})
      .then(res => {
        if (res.data.status === 'success') {
          context.commit("SET_FORM_STOPPAGE", res.data.from_to_data_sets)
          context.commit("SET_SHUTDOWN_DATA_SETS", res.data.shutdown_data_sets)
          Cookies.set("shutdown_data_sets", JSON.stringify(res.data.shutdown_data_sets))
        }
      })
  },
  servicesList(context, payload) {
    context.commit("SET_LOADING", true)
    this.$axios.$post(AVAILABLE_BUS_SERVICES, payload, {headers: headers()})
      .then(res => {
        if (res.status === 'success') {
          context.commit("SET_AVAILABLE_SERVICES_LIST", res)
          context.commit("SET_FILTER_SERVICES_LIST", res.available_services)
          context.commit("SET_LOADING", false)
        }
      })
      .catch(err => {
        if (err.response) {
          context.commit("SET_AVAILABLE_SERVICES_LIST", [])
          context.commit("SET_FILTER_SERVICES_LIST", [])
          const {data} = err.response
          this.$errorToast({ message: data.message });
        }
        context.commit("SET_LOADING", false)
      })
  },
  sendBookingRequest(context, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.post(SEND_BOOKING_REQUEST, payload, {headers: headers()})
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          if (err.response) {
            const {data} = err.response
            resolve(data)
          }
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
