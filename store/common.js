import * as apis from "../helpers/apis";
import { ServiceType, handleScrollBehaviour } from "../helpers/utils";

export const state = () => ({
  citiesOfBus: [],
  citiesOfLaunch: [],
  offerPromoList: [],
  blogList: [],
  headLine: [],
  busOperators: [],
  launchOperators: [],
  busPopularRoutes: [],
  launchPopularRoutes: [],
  selectedService: "",
  loading: false,
  searchedTicketList: [],
  selectedTicketId: "",
  selectedPhone: "",
  isTicketPopupOpen: false,
  isSearchTicketOtpPopupOpen: false,
  isBusReserveModalOpen: false,
  isRequestSuccessFull: false,
  ticketNotFoundError: null,
});

export const getters = {
  getTicketNotFoundError: (state) => state.ticketNotFoundError,
  getCities: (state) =>
    state.selectedService === ServiceType.BUS
      ? state.citiesOfBus
      : state.citiesOfLaunch,
  getBlogList: (state) => state.blogList,
  offerPromoGetter: (state) => state.offerPromoList,
  getHeadLine: (state) => state.headLine,
  getOperatorListData: (state) =>
    state.selectedService === ServiceType.BUS
      ? state.busOperators
      : state.launchOperators,
  getPopularRouteListData: (state) =>
    state.selectedService === ServiceType.BUS
      ? state.busPopularRoutes
      : state.launchPopularRoutes,
  getSelectedServiceType: (state) => state.selectedService,
  getSearchedTicketList: (state) => state.searchedTicketList,
  getIsTicketPopupOpen: (state) => state.isTicketPopupOpen,
  getIsSearchTicketOtpPopupOpen: (state) => state.isSearchTicketOtpPopupOpen,
  getSelectedTicketId: (state) => state.selectedTicketId,
  getSelectedPhone: (state) => state.selectedPhone,
  getBusReserveModalOpenStatus: (state) => state.isBusReserveModalOpen,
  getRequestSuccessfulStatus: (state) => state.isRequestSuccessFull,
};

export const actions = {
  async getBlogListApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_BLOG_LIST);
      commit("setBlogList", data.blogs || []);
    } catch (error) {}
  },
  async getDownloadPdfApi({ commit }, payloadData) {
    try {
      const response = await this.$blobApi.$get(
        apis.SERVICE_TYPE.BUS.DOWNLOAD_TICKET + payloadData
      );
      return response;
    } catch (error) {
      console.log("error", error)
    }
  },
  async getHeadLineApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_HEAD_LINE);
      commit("setHeadLine", data || []);
    } catch (error) {}
  },

  async getOfferPromoApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GS_OFFER_AND_PROMO_IMAGES);
      let offerPromoList = data?.offerAndPromoImages || [];
      offerPromoList = offerPromoList.map((offer) => {
        offer.image = process.env.OFFER_IMAGE_BASE_URL + offer.image;
        return offer;
      });
      commit("setOfferPromoList", offerPromoList);
    } catch (error) {
      console.log(error);
    }
  },
  async getCitiesList({ commit }, { service }) {
    try {
      const { data } = await this.$api.$get(
        apis.SERVICE_TYPE[service].GET_CITY_URL
      );
      commit("setCities", { service, data });
    } catch (error) {
      console.log(error);
    }
  },
  async getOperatorListApi({ commit }, { service }) {
    try {
      const { data } = await this.$api.$get(
        apis.SERVICE_TYPE[service].GET_OPERATOR_LIST_URL
      );
      commit("setOperatorList", {
        service,
        data: data.operators,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getOperatorById({ commit }, { service, id }) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$get(`${apis.SERVICE_TYPE[service].GET_OPERATOR_BY_ID_URL}?id=${id}`)
        .then((res) => {
          resolve(res.data.operator);
        })
        .catch((e) => {
          this.$toast.error(
            e.response.data.message ?? "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );
        });
    });
  },
  async getPopularRouteListApi({ commit }, { service }) {
    try {
      const { data } = await this.$api.$get(
        apis.SERVICE_TYPE[service].GET_POPULAR_ROUTE_LIST_URL
      );
      commit("setPopularRouteList", {
        service,
        data: data.popularRoutes,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getPopularRouteById({ commit }, { service, id }) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$get(
          `${apis.SERVICE_TYPE[service].GET_POPULAR_ROUTE_BY_ID_URL}?id=${id}`
        )
        .then((res) => {
          resolve(res.data.popularRoute);
        })
        .catch((e) => {
          this.$toast.error(
            e.response.data.message ?? "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );
        });
    });
  },
  async searchTicketAction({ commit }, payloadData) {
    return new Promise((resolve, reject) => {
      return this.$api
        .post(
          apis.SERVICE_TYPE[payloadData.service].POST_SEARCH_TICKET,
          payloadData.payload
        )
        .then((res) => {
          commit("handleSearchTicketOtpPopup");
          resolve(res.data.data);
        })
        .catch((e) => {
          const errorMessage = e?.response?.data?.message;
          if (!errorMessage?.toLowerCase()?.includes("otp")) {
            commit("handleSearchTicketOtpPopup");
            commit("setTicketNotFoundError", errorMessage);
          }
          reject(e.response.data.message ?? "Something went wrong!");
        });
    });
  },
  async sendOtpForCancelTicketAction({ commit, state }, payloadData) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.post(
        apis.SERVICE_TYPE[payloadData.service].POST_SEND_OTP_BY_TICKET_ID,
        { ticketId: payloadData.ticketId }
      );
      commit("setSelectedService", payloadData.service);
      commit("handleCancelTicketPopup", data.data.phone);
      this.$toast.success(data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setLoading", false);
      return true;
    } catch (error) {
      commit("setLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async sendOtpForSearchTicketAction({ commit, state }, payloadData) {
    try {
      const { data } = await this.$api.post(
        apis.SERVICE_TYPE.COMMON.POST_SEND_OTP_BY_PHONE,
        payloadData.payload
      );
      commit("handleSearchTicketOtpPopup", data.data.phone);
      // this.$toast.success(data.message, {
      //   position: "bottom-right",
      //   duration: 5000,
      // });
      commit("setLoading", false);
      return true;
    } catch (error) {
      commit("setLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async fullBusReservationAction({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.post(
        apis.POST_FULL_BUS_RESERVATION,
        payload
      );
      commit("setLoading", false);
      commit("setBusReserveModalOpenStatus");
      commit("handleSuccessfulModal");
      return true;
    } catch (error) {
      commit("setLoading", false);
      if (Array.isArray(error.response.data.message)) {
        this.$toast.error(error.response.data.message[0], {
          position: "bottom-right",
          duration: 5000,
        });
        return false;
      } else {
        this.$toast.error(error.response.data.message, {
          position: "bottom-right",
          duration: 5000,
        });
        return false;
      }
    }
  },
  async cancelTicketAction({ commit, state }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.post(
        apis.SERVICE_TYPE[state.selectedService].POST_CANCEL_TICKET,
        payload
      );
      let updatedTicketList = [];
      updatedTicketList = state.searchedTicketList.tickets.map((ticket) => {
        if (data.data._id === ticket._id) {
          return {
            ...ticket,
            paymentHistory: {
              ...ticket.paymentHistory,
              ticketStatus: data.data.ticketStatus,
            },
          };
        }
        return ticket;
      });
      commit("setSearchedTicketList", {
        ...state.searchedTicketList,
        tickets: updatedTicketList,
      });
      commit("handleCancelTicketPopup");
      this.$toast.success(data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setLoading", false);
      return true;
    } catch (error) {
      commit("setLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
};

export const mutations = {
  setCities: (state, { service, data }) => {
    let tempData = [];
    data.cities.forEach((city) => {
      if (city?.name) {
        tempData.push({
          city_name: city.name,
          city: city,
        });
      }
    });
    if (service === ServiceType.BUS) {
      state.citiesOfBus = tempData;
    } else {
      state.citiesOfLaunch = tempData;
    }
  },
  setBlogList: (state, data) => {
    state.blogList = data;
  },
  setHeadLine: (state, data) => {
    state.headLine = data;
  },
  setOfferPromoList: (state, data) => {
    state.offerPromoList = data;
  },
  setOperatorList: (state, { service, data }) => {
    if (service === ServiceType.BUS) {
      state.busOperators = data;
      state.busOperators.push({
        title: "Many more to come...",
      });
    } else {
      state.launchOperators = data;
      state.launchOperators.push({
        title: "Many more to come...",
      });
    }
  },
  setPopularRouteList: (state, { service, data }) => {
    if (service === ServiceType.BUS) {
      state.busPopularRoutes = data;
    } else {
      state.launchPopularRoutes = data;
    }
  },
  setSelectedService: (state, data) => {
    state.selectedService = data;
  },
  setLoading: (state, data) => {
    state.loading = data;
  },
  setCancelTicketId: (state, data) => {
    state.selectedTicketId = data;
  },
  setSearchedTicketList: (state, data) => (state.searchedTicketList = data),
  handleCancelTicketPopup: (state, data) => {
    handleScrollBehaviour(!data);
    state.isTicketPopupOpen = data;
    if (!data) {
      state.selectedTicketId = null;
    }
  },
  handleSearchTicketOtpPopup: (state, data) => {
    handleScrollBehaviour(!data);
    state.isSearchTicketOtpPopupOpen = data;
    if (!data) {
      state.selectedPhone = null;
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
  setTicketNotFoundError: (state, data) => {
    state.ticketNotFoundError = data;
  },
};
