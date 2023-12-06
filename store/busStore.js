import * as apis from "../helpers/apis";
import { ServiceType, handleScrollBehaviour } from "../helpers/utils";

const mobileFilterInitialData = {
  coachTypes: ["ac", "non-ac", "all"],
  coachType: "",
  priceFilter: ["l2h", "h2l"],
  priceFilterType: null,
  boardingPoint: "",
  busCompany: "",
  timeList: ["4 am - 12 pm", "12 pm - 06 pm", "06 pm - 03 am"],
  selectedTime: null,
  selectedBusClass: "",
};

export const state = () => ({
  mobileFloatingFilter: true,
  boardingPoints: [],
  busCompanies: [],
  busClasses: [],
  trips: [],
  seatViewData: {},
  seatArray: [],
  seatBoardingPointArray: [],
  seatDroppingPointArray: [],
  upperDeckSeatArray: [],
  lowerDeckSeatArray: [],
  paymentPendingBlockData: {},
  Loading: false,
  seatViewData: {},
  modalBoardingPointList: [],
  droppingPoints: [],
  promoCode: {},
  mobileFilterInitialData: mobileFilterInitialData,
  mobileFilterData: mobileFilterInitialData,
  ticketDetails: {},
  bookingInfoDetails: {},
  showSurpriseDealModal: null,
});

export const getters = {
  getTrips: (state) => state.trips,
  getBoardingPoints: (state) => state.boardingPoints,
  getBusCompanies: (state) => state.busCompanies,
  getBusClasses: (state) => state.busClasses,
  getSeatArray: (state) => state.seatArray,
  getUpperDeckSeatArray: (state) => state.upperDeckSeatArray,
  getLowerDeckSeatArray: (state) => state.lowerDeckSeatArray,
  getSeatBoardingPointArray: (state) => state.seatBoardingPointArray,
  getSeatDroppingPointArray: (state) => state.seatDroppingPointArray,
  getPaymentPendingBlockData: (state) => state.paymentPendingBlockData,
  getLoading: (state) => state.Loading,
  getSeatViewData: (state) => state.seatViewData,
  getPromoCode: (state) => state.promoCode,
  getModalBoardingPoints: (state) => state.modalBoardingPointList,
  getDroppingPoints: (state) => state.droppingPoints,
  getMobileFloatingFilter: (state) => state.mobileFloatingFilter,
  getMobileFilterData: (state) => state.mobileFilterData,
  getMobileFilterInitialData: (state) => state.mobileFilterInitialData,
  getBookingInfoDetails: (state) => state.bookingInfoDetails,
  getSurpriseDealModalStatus: (state) => state.showSurpriseDealModal,
  getTicketDetails: (state) => state.ticketDetails,
};

export const actions = {
  async getPbScheduleDataAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.BUS.POST_SCHEDULE_TRIPS_URL,
        payload
      );
      if (data.trips) {
        commit("setTrips", data.trips);
      }
      commit("setBoardingPoints", data.boardingPoints || []);
      commit("setBusCompanies", data.companies || []);
      commit("setBusClasses", data.busClasses || []);
      if (payload.priceFilterType) {
        commit("sortedTrip", payload.priceFilterType);
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message;

      if (Array.isArray(errorMessage)) {
        this.$toast.error(errorMessage[0], {
          position: "bottom-right",
          duration: 5000,
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
        apis.SERVICE_TYPE.BUS.GET_SEAT_VIEW_URL,
        payload
      );
      commit("setSeatViewData", data);
      commit("resetPromoCode");
    } catch (error) { 
      const errorMessages = error?.response?.data?.message
      const errorMsg = Array.isArray(errorMessages) ? errorMessages[0] : errorMessages
      if (error.response && error.response.data.statusCode === 404) {
        this.$toast.error(errorMsg, {
          position: "bottom-right",
          duration: 5000,
        });
        window.location.reload(true);
      }
      this.$toast.error(errorMsg, {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async getBoardingPointForBus({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.BUS.GET_SEAT_VIEW_URL,
        payload
      );
      commit("setDroppingPoints", data.seatPlan.droppingPoints);
      commit("setModalBoardingPoints", data.seatPlan.bordingPoints);
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
        .$post(apis.SERVICE_TYPE.BUS.POST_PAYMENT_PENDING_BLOCK_URL, payload)
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
        .$post(apis.SERVICE_TYPE.BUS.POST_PROMO_CODE_URL, payload)
        .then((res) => {
          if (res.data) {
            commit("setPromoCode", res.data);
            resolve(res);
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
        .$post(apis.SERVICE_TYPE.BUS.POST_SEAT_LOCK, payload)
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
  async getTicketByTnxId({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.SERVICE_TYPE.BUS.GET_TICKET_BY_TRANSACTION,
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
        apis.SERVICE_TYPE.BUS.GET_BOOKING_INFO_BY_TRANSACTION,
        payload
      );
      commit("setBookingInfoDetails", data);
    } catch (e) {
      this.$toast.error(e.response.data.message ?? "Something went wrong!", {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async ticketConfirmAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.BUS.POST_CONFIRM_TICKET, payload)
        .then((res) => {
          resolve(res);
        })
        .catch((e) => {
          reject(e.response.data.message ?? "Something went wrong!");
        });
    });
  },
  async applyPromoCodeAction({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.SERVICE_TYPE.BUS.POST_APPLY_PROMO_CODE_URL, payload)
        .then((res) => {
          commit("updateBookingInfoForApplyPromo", res.data);
          commit("setLoading", false);
          resolve(res.data);
        })
        .catch((e) => {
          commit("setLoading", false);
          reject();
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
  async updateGatewayAction({ dispatch, commit }, payload) {
    commit("setLoading", true);

    return new Promise((resolve, reject) => {
      this.$api
        .$post(apis.SERVICE_TYPE.BUS.POST_UPDATE_GATEWAY_URL, payload)
        .then((res) => {
          commit("updateBookingInfoForUpdateGateway", res.data);
          commit("setLoading", false);
          resolve(res);
        })
        .catch((error) => {
          commit("setLoading", false);

          this.$toast.error(
            error.response?.data?.message || "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );

          reject(error);
        });
    });
  },
  async removePromoCodeAction({ commit }, payload) {
    commit("setLoading", true);

    return new Promise((resolve, reject) => {
      this.$api
        .$post(apis.SERVICE_TYPE.BUS.POST_REMOVE_PROMO_CODE_URL, payload)
        .then((res) => {
          commit("updateBookingInfoForRemovePromo", res.data);
          commit("setLoading", false);
          resolve(res);
        })
        .catch((error) => {
          commit("setLoading", false);

          this.$toast.error(
            error.response?.data?.message || "Something went wrong!",
            {
              position: "bottom-right",
              duration: 5000,
            }
          );

          reject(error);
        });
    });
  },
  async getSurpriseDealAction({ commit }, payload) {
    try {
      commit("setLoading", true);
      const { data } = await this.$api.post(
        apis.SERVICE_TYPE.BUS.POST_GET_SURPRISE_DEAL,
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
    state.seatArray = data.seatPlan.seatList;
    state.seatBoardingPointArray = data.seatPlan.bordingPoints;
    state.seatDroppingPointArray = data.seatPlan.droppingPoints;
    state.upperDeckSeatArray = data.seatPlan.upperDeckSeatList;
    state.lowerDeckSeatArray = data.seatPlan.lowerDeckSeatList;
  },
  setPaymentPendingBlockData: (state, data) =>
    (state.paymentPendingBlockData = data),
  mobileFloatingFilter: (state, data) => {
    state.mobileFloatingFilter = data;
  },
  setModalBoardingPoints: (state, data) =>
    (state.modalBoardingPointList = data),
  setDroppingPoints: (state, data) => (state.droppingPoints = data),

  setTrips: (state, data) => (state.trips = Object.values(data)),
  setBoardingPoints: (state, data) => (state.boardingPoints = data),
  setBusCompanies: (state, data) => (state.busCompanies = data),
  setBusClasses: (state, data) => (state.busClasses = data),
  resetPromoCode: (state) => (state.promoCode = {}),
  sortedTrip: (state, data) => {
    const sortBy = data === "l2h" ? 1 : -1;
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
  updateSeatStatus: (state, seatInfo) => {
    const { seatType, rowIndex, colIndex, boardingPoint, droppingPoint } =
      seatInfo;

    const isStatusMissing = (fareList) =>
      fareList?.some((seat) => !seat.hasOwnProperty("status"));

    const getSeatFareList = (deck) => deck?.[rowIndex]?.[colIndex]?.fareList;

    const upperDeckFareList =
      state?.upperDeckSeatArray &&
      !isStatusMissing(getSeatFareList(state.upperDeckSeatArray));
    const lowerDeckFareList =
      state?.lowerDeckSeatArray &&
      !isStatusMissing(getSeatFareList(state.lowerDeckSeatArray));
    const seatArrayFareList =
      state?.seatArray && !isStatusMissing(getSeatFareList(state.seatArray));

    const fareListAvailable =
      upperDeckFareList || lowerDeckFareList || seatArrayFareList;

    const updateFareListStatus = (fareList, deck) => {
      let flag = false;
      fareList?.forEach((item, index) => {
        const isMatchingPoints =
          item.boardingPoint === boardingPoint.name &&
          item.droppingPoint === droppingPoint.name;

        if (isMatchingPoints) {
          flag = true;
          deck[rowIndex][colIndex].fareList[index].status = "booked";
        }
      });

      if (!flag) {
        deck[rowIndex][colIndex].status = "booked";
      }
    };

    if (fareListAvailable) {
      switch (seatType) {
        case "UPPER_DECK":
          updateFareListStatus(
            state.upperDeckSeatArray[rowIndex][colIndex].fareList,
            state.upperDeckSeatArray
          );
          break;
        case "LOWER_DECK":
          updateFareListStatus(
            state.lowerDeckSeatArray[rowIndex][colIndex].fareList,
            state.lowerDeckSeatArray
          );
          break;
        default:
          updateFareListStatus(
            state.seatArray[rowIndex][colIndex].fareList,
            state.seatArray
          );
      }
    } else {
      const deck =
        seatType === "UPPER_DECK"
          ? state.upperDeckSeatArray
          : seatType === "LOWER_DECK"
          ? state.lowerDeckSeatArray
          : state.seatArray;
      deck[rowIndex][colIndex].status = "booked";
    }
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
  updateBookingInfoForApplyPromo: (state, data) => {
    state.bookingInfoDetails = {
      ...state.bookingInfoDetails,
      amount: data.amount,
      invoice: {
        ...state.bookingInfoDetails.invoice,
        discount: data.invoice.discount,
        promo: data.invoice.promo,
      },
    };
  },
  updateBookingInfoForRemovePromo: (state, data) => {
    state.bookingInfoDetails = {
      ...state.bookingInfoDetails,
      amount: data.amount,
      invoice: {
        ...state.bookingInfoDetails.invoice,
        discount: data.invoice.discount,
        promo: null,
      },
    };
  },
  updateBookingInfoForUpdateGateway: (state, data) => {
    state.bookingInfoDetails = {
      ...state.bookingInfoDetails,
      ...data,
    };
  },
};
