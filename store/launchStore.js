import * as apis from "../helpers/apis";
import { handleScrollBehaviour } from "../helpers/utils";

const mobileFilterInitialData = {
  priceFilter: ["l2h", "h2l"],
  priceFilterType: null,
  boardingPoint: "",
  timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
  selectedTime: null,
};

export const state = () => ({
  mobileFloatingFilter: true,
  boardingPoints: [],
  launchList: [],
  launchClasses: [],
  trips: [],
  paymentPendingBlockData: {},
  Loading: false,
  seatViewData: {},
  promoCode: {},
  mobileFilterInitialData: mobileFilterInitialData,
  mobileFilterData: mobileFilterInitialData,
  ticketDetails: {},
  bookingInfoDetails: {},
  showSurpriseDealModal: null,
  launchBookingData: {},
});

export const getters = {
  getTrips: (state) => state.trips,
  getBoardingPoints: (state) => state.boardingPoints,
  getLaunchList: (state) => state.launchList,
  getLaunchClasses: (state) => state.launchClasses,
  getPaymentPendingBlockData: (state) => state.paymentPendingBlockData,
  getLoading: (state) => state.Loading,
  getSeatViewData: (state) => state.seatViewData,
  getPromoCode: (state) => state.promoCode,
  getMobileFloatingFilter: (state) => state.mobileFloatingFilter,
  getMobileFilterData: (state) => state.mobileFilterData,
  getMobileFilterInitialData: (state) => state.mobileFilterInitialData,
  getBookingInfoDetails: (state) => state.bookingInfoDetails,
  getSurpriseDealModalStatus: (state) => state.showSurpriseDealModal,
  getTicketDetails: (state) => state.ticketDetails,
  getLaunchBookingData: (state) => state.launchBookingData,
};

export const actions = {
  async getPbScheduleDataAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.POST_SCHEDULE_TRIPS_URL,
        payload
      );
      commit("setTrips", data.trips || []);
      commit("setBoardingPoints", data.boardingPoints || []);
      commit("setLaunchList", data.ships || []);
      commit("sortedTrip", { from: "SCHEDULE_TRIP" });
    } catch (error) {
      const errorMessage = error?.response?.data?.message;

      if (Array.isArray(errorMessage)) {
        errorMessage.forEach((message) => {
          this.$toast.error(message, {
            position: "bottom-right",
            duration: 5000,
          });
        });
      } else {
        this.$toast.error(errorMessage, {
          position: "bottom-right",
          duration: 5000,
        });
      }
    }
  },
  async getPbSeatViewAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.GET_SEAT_VIEW_URL,
        payload
      );
      commit("setSeatViewData", data);
    } catch (error) {
      if (error.response && error.response.data.statusCode === 404) {
        this.$toast.error(error.response.data.message, {
          position: "bottom-right",
          duration: 5000,
        });
        window.location.reload(true);
      }
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async getPbPaymentPendingBlockAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.LAUNCH.POST_PAYMENT_PENDING_BLOCK_URL, payload)
        .then((res) => {
          if (res.data) {
            commit("setPaymentPendingBlockData", res.data);
            resolve(res);
          } else {
            resolve(res);
            this.$toast.error(msg ?? "Something went wrong!", {
              position: "bottom-right",
              duration: 5000,
            });
          }
          commit("setLoading", false);
        })
        .catch((error) => {
          commit("setLoading", false);

          if (error.response) {
            const { data } = error.response;
            resolve(data);
          }

          const errorMessage = error.response.data.message;

          if (Array.isArray(errorMessage)) {
            errorMessage.forEach((message) => {
              this.$toast.error(message, {
                position: "bottom-right",
                duration: 5000,
              });
            });
          } else {
            this.$toast.error(errorMessage, {
              position: "bottom-right",
              duration: 5000,
            });
          }
        });
    });
  },
  async getPromoCodeAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.LAUNCH.POST_PROMO_CODE_URL, payload)
        .then((res) => {
          if (res.data) {
            commit("setPromoCode", res.data);
            resolve(res);
            this.$toast.success("Promo applied successfully", {
              position: "bottom-right",
              duration: 5000,
            });
          } else {
            resolve(res);
            commit("resetPromoCode");
            this.$toast.error("Invalid promo applied!", {
              position: "bottom-right",
              duration: 5000,
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            const { data } = error.response;
            resolve(data);
            this.$toast.error(error.response.data.message, {
              position: "bottom-right",
              duration: 5000,
            });
          }
          commit("resetPromoCode");
        });
    });
  },
  async seatLockAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.LAUNCH.POST_SEAT_LOCK, payload)
        .then((res) => {
          resolve(res);
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
  async paymentPending({ commit }, { payload, selectedSeatInfo }) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.POST_PAYMENT_PENDING,
        payload
      );
      window.location.href = `/launch/payment?tnxId=${data.paymentInfo.transactionId}`;
    } catch (e) {
      this.$toast.error(e.response.data.message ?? "Something went wrong!", {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async getTicketByTnxId({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.GET_TICKET_BY_TRANSACTION,
        payload
      );
      commit("setTicketDetails", data);
    } catch (e) {
      this.$toast.error(e.response.data.message ?? "Something went wrong!", {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async getBookingInfoByTnxId({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.GET_BOOKING_INFO_BY_TRANSACTION,
        payload
      );
      commit("setBookingDetailsData", data);

      if (data?.invoice) {
        const payload = {
          tripId: data.invoice.trip,
          shipId: data.invoice.shipId,
          companyId: data.invoice.companyId,
        };

        const response = await this.$api.$post(
          apis.SERVICE_TYPE.LAUNCH.GET_SEAT_VIEW_URL,
          payload
        );

        commit("setSeatViewData", response.data);
      }
    } catch (e) {
      this.$toast.error(e.response.data.message ?? "Something went wrong!", {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async ticketConfirmAction({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.LAUNCH.POST_CONFIRM_TICKET,
        payload
      );
      commit("setLoading", false);
      commit("setBookingDetailsData", {
        paymentPendingData: {},
        showBookingDetailsModal: false,
        selectedSeatInfo: {},
      });
      if (data && data?.gatewayUrl) {
        window.location.href = data.gatewayUrl;
      }
      return true;
    } catch (error) {
      commit("setLoading", false);
      this.$toast.error(error.response.data.message ?? "Something went wrong", {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async applyPromoCodeAction({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.LAUNCH.POST_APPLY_PROMO_CODE_URL, payload)
        .then((res) => {
          resolve(res);
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
  async getSurpriseDealAction({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.post(
        apis.SERVICE_TYPE.LAUNCH.POST_GET_SURPRISE_DEAL,
        payload
      );
      commit("handleSurpriseDealModal", data.data);
      commit("setLoading", false);
      return true;
    } catch (error) {
      commit("setLoading", false);
      this.$toast.error("Sorry!! No deal found now.", {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
};

export const mutations = {
  setPromoCode: (state, data) => (state.promoCode = data),
  setLoading: (state, data) => (state.loading = data),
  setSeatViewData: (state, data) => {
    state.seatViewData = data;
  },
  setPaymentPendingBlockData: (state, data) =>
    (state.paymentPendingBlockData = data),
  mobileFloatingFilter: (state, data) => {
    state.mobileFloatingFilter = data;
  },
  setTrips: (state, data) => (state.trips = Object.values(data)),
  setBoardingPoints: (state, data) => (state.boardingPoints = data),
  setLaunchList: (state, data) => (state.launchList = data),
  setLaunchClasses: (state, data) => (state.launchClasses = data),
  resetPromoCode: (state) => (state.promoCode = {}),
  sortedTrip: (state, data) => {
    const tempData =
      data?.from === "SCHEDULE_TRIP"
        ? state.mobileFilterData.priceFilterType
        : data;

    const sortBy = tempData === "l2h" ? 1 : -1;
    state.trips.sort((a, b) => {
      const getActualFare = (tempFare) => {
        if (tempFare.includes("-")) {
          let fareArray = tempFare.split("-");
          fareArray = fareArray.map((item) => parseFloat(item.trim())); // Parse fare values as numbers

          return sortBy === 1 ? fareArray[0] : fareArray[1];
        }

        return parseFloat(tempFare); // Parse fare value as number
      };

      const fareDiff = getActualFare(a.seatFare) - getActualFare(b.seatFare);
      if (fareDiff !== 0) {
        return sortBy * fareDiff;
      }

      return 0;
    });
  },
  updateMobileFilterData: (state, data) => {
    state.mobileFilterData = data;
  },
  setTicketDetails: (state, data) => (state.ticketDetails = data),
  setBookingInfoDetails: (state, data) => (state.bookingInfoDetails = data),
  handleSurpriseDealModal: (state, data) => {
    handleScrollBehaviour(!data);
    state.showSurpriseDealModal = data;
  },
  setBookingDetailsData: (state, data) => {
    state.launchBookingData = data;
  },
};
