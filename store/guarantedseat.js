import * as apis from "../helpers/apis";
import { handleScrollBehaviour } from "../helpers/utils";

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
  gsLoading: false,
  gsLoadingTwo: false,
  gsCities: [],
  gsTrips: [],
  gsBoardingPoints: [],
  modalBoardingPointList: [],
  gsDroppingPoints: [],
  gsBusCompanies: [],
  gsBusClasses: [],
  gsSeatViewData: {},
  gsSeatArray: [],
  gsUpperDeckSeatArray: [],
  gsLowerDeckSeatArray: [],
  gsSeatBoardingPointArray: [],
  gsSeatDroppingPointArray: [],
  gsPaymentPendingBlockData: {},
  ticketDetails: {},
  searchedTicketList: {},
  bookingInfoDetails: {},
  promoCode: {},
  isBusReserveModalOpen: false,
  isRequestSuccessFull: false,
  showSurpriseDealModal: null,
  isTicketPopupOpen: false,
  selectedTicketId: null,
  offerImages: [],
  blogList: [],
  headLine: [],
  mobileFilterInitialData: mobileFilterInitialData,
  mobileFilterData: mobileFilterInitialData,
  busOperators: [],
  mobileFilterData: mobileFilterInitialData,
  busOperators: [],
  popularRoutes: [],
});

export const getters = {
  getMobileFloatingFilter: (state) => state.mobileFloatingFilter,
  getGsLoading: (state) => state.gsLoading,
  getGsLoadingTwo: (state) => state.gsLoadingTwo,
  getGsCities: (state) => state.gsCities,
  getGsTrips: (state) => state.gsTrips,
  getGsBoardingPoints: (state) => state.gsBoardingPoints,
  getModalBoardingPoints: (state) => state.modalBoardingPointList,
  getGsDroppingPoints: (state) => state.gsDroppingPoints,
  getGsBusCompanies: (state) => state.gsBusCompanies,
  getGsBusClasses: (state) => state.gsBusClasses,
  getGsSeatViewData: (state) => state.gsSeatViewData,
  getGsSeatArray: (state) => state.gsSeatArray,
  getGsLowerDeckSeatArray: (state) => state.gsLowerDeckSeatArray,
  getGsUpperDeckSeatArray: (state) => state.gsUpperDeckSeatArray,
  getGsSeatBoardingPointArray: (state) => state.gsSeatBoardingPointArray,
  getGsSeatDroppingPointArray: (state) => state.gsSeatDroppingPointArray,
  getGsPaymentPendingBlockData: (state) => state.gsPaymentPendingBlockData,
  getTicketDetails: (state) => state.ticketDetails,
  getSearchedTicketList: (state) => state.searchedTicketList,
  getBookingInfoDetails: (state) => state.bookingInfoDetails,
  getPromoCode: (state) => state.promoCode,
  getBusReserveModalOpenStatus: (state) => state.isBusReserveModalOpen,
  getRequestSuccessfulStatus: (state) => state.isRequestSuccessFull,
  getSurpriseDealModalStatus: (state) => state.showSurpriseDealModal,
  getIsTicketPopupOpen: (state) => state.isTicketPopupOpen,
  getSelectedTicketId: (state) => state.selectedTicketId,
  getBlogList: (state) => state.blogList,
  getOfferImages: (state) => state.offerImages,
  getHeadLine: (state) => state.headLine,
  getMobileFilterData: (state) => state.mobileFilterData,
  getMobileFilterInitialData: (state) => state.mobileFilterInitialData,
  getOperatorListData: (state) => state.busOperators,
  getMobileFilterInitialData: (state) => state.mobileFilterInitialData,
  getOperatorListData: (state) => state.busOperators,
  getPopularRouteListData: (state) => state.popularRoutes,
};

export const actions = {
  async getPbAccessTokenAction({ commit }, payload) {
    try {
      const data = await this.$axios.$post(
        apis.GET_PARIBAHAN_TOKEN_URL,
        payload
      );
      this.$auth.$storage.setCookie("pb_token", `Bearer ${data.access_token}`);
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },
  async getCitiesList({ commit }) {
    try {
      const { data } = await this.$api.$post(apis.GET_PARIBAHAN_CITY_URL);
      commit("setGsCities", data);
    } catch (error) {
      // this.$toast.error(error.response ? error.response.data.message : error.message , {
      //   position: 'bottom-right',
      //   duration: 5000,
      // })
    }
  },
  async getOperatorListApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_OPERATOR_LIST_URL);
      commit("setOperatorList", data.operators);
    } catch (error) {
      console.log(error);
    }
  },
  async getOperatorById({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$get(`${apis.GET_OPERATOR_BY_ID_URL}?Id=${payload.Id}`)
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
  async getPopularRouteListApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_POPULAR_ROUTE_LIST_URL);
      commit("setPopularRouteList", data.popularRoutes);
    } catch (error) {
      console.log(error);
    }
  },
  async getPopularRouteById({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$get(`${apis.GET_POPULAR_ROUTE_BY_ID_URL}?Id=${payload.Id}`)
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
  async getBlogListApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_BLOG_LIST);
      commit("setBlogList", data.blogs || []);
    } catch (error) {}
  },

  async getHeadLineApi({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GET_HEAD_LINE);
      commit("setHeadLine", data || []);
    } catch (error) {}
  },

  async getPbScheduleDataAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SCHEDULE_DATA_URL,
        payload
      );
      if (data.trips) {
        commit("setGsTrips", data.trips);
      }
      commit("setGsBoardingPoints", data.boardingPoints || []);
      commit("setGsBusCompanies", data.companies || []);
      commit("setGsBusClasses", data.busClasses || []);
    } catch (error) {
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
    }
  },

  async getPbSeatViewAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SEAT_VIEW_URL,
        payload
      );
      commit("setGsSeatViewData", data);
      commit("resetPromoCode");
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
  async getBoardingPointForBus({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SEAT_VIEW_URL,
        payload
      );
      commit("setGsDroppingPoints", data.seatPlan.droppingPoints);
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

  async TicketConfirmAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.$post(apis.POST_CONFIRM_TICKET, payload);
      commit("setGsLoading", false);
      if (data && data.gatewayUrl) {
        window.location.href = data.gatewayUrl;
      }
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error(error.response.data.message ?? "Something went wrong", {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async seatLockAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.POST_SEAT_LOCK, payload)
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
        apis.GET_TICKET_BY_TRANSACTION,
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
        apis.GET_BOOKING_INFO_BY_TRANSACTION,
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

  async getPbPaymentPendingBlockAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL, payload)
        .then((res) => {
          if (res.data) {
            commit("setGsPaymentPendingBlockData", res.data);
            resolve(res);
          } else {
            resolve(res);
            this.$toast.error(msg ?? "Something went wrong!", {
              position: "bottom-right",
              duration: 5000,
            });
          }
          commit("setGsLoading", false);
        })
        .catch((error) => {
          commit("setGsLoading", false);

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
  async successTicketByMailAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$axios.post(
        "https://dev.sslpayment.jatri.co/ssl/ticket/success-ticket-by-mail",
        payload
      );
      this.$toast.success(data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async searchTicketAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(apis.SEARCH_TICKET, payload);
      commit("setSearchedTicketList", data.data);
      this.$toast.success(data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      commit("setSearchedTicketList", []);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async sendOtpForCancelTicketAction({ commit, state }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(
        apis.POST_SEND_OTP_BY_TICKET_ID,
        payload
      );
      commit("handleCancelTicketPopup", data.data.phone);
      this.$toast.success(data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },
  async cancelTicketAction({ commit, state }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(apis.GS_CANCEL_TICKET, payload);
      let updatedTicketList = [];
      updatedTicketList = state.searchedTicketList.tickets.map((ticket) => {
        if (data.data._id === ticket._id) {
          return data.data;
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
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },

  async getPromoCodeAction({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$api
        .$post(apis.POST_PROMO_CODE_URL, payload)
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
  async applyPromoCodeAction({ dispatch, commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(
        apis.POST_APPLY_PROMO_CODE_URL,
        payload
      );

      dispatch("getBookingInfoByTnxId", { transactionId: payload.tnxId });
      commit("handleSurpriseDealModal", null);

      this.$toast.success("Promo code applied successfully", {
        position: "bottom-right",
        duration: 5000,
      });
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);

      this.$toast.error(error.response.data.message, {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },

  async getSurpriseDealAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(
        apis.POST_GET_SURPRISE_DEAL,
        payload
      );
      commit("handleSurpriseDealModal", data.data);
      commit("setGsLoading", false);
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error("Sorry!! No deal found now.", {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },

  async fullBusReservationAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data } = await this.$api.post(
        apis.POST_FULL_BUS_RESERVATION,
        payload
      );
      commit("setGsLoading", false);
      commit("setBusReserveModalOpenStatus");
      commit("handleSuccessfulModal");
      return true;
    } catch (error) {
      commit("setGsLoading", false);
      this.$toast.error(error.response.data.message[0], {
        position: "bottom-right",
        duration: 5000,
      });
      return false;
    }
  },

  //   async setOfferImages({ commit }) {
  //     const { data } = await this.$api.$get(apis.GS_OFFER_AND_PROMO_IMAGES);
  //     const imageLinkArr = data.offerAndPromoImages;
  //     const rawOfferImages = await Promise.all(imageLinkArr.map(async (imageLink) => {
  //       return await this.$api.$get(apis.READ_OFFER_PROMO_IMAGE_URL, { params: { path: imageLink.image }, responseType: 'arraybuffer' });
  //     }))
  //     const tmpOfferImages = [];
  //     for (const buffer of rawOfferImages) {
  //       const binaryString = Array.from(new Uint8Array(buffer), byte => String.fromCharCode(byte)).join("");
  //       const theImage = Buffer.from(binaryString, 'binary').toString('base64');
  //       const properlyFormattedImage = "data:image/*;base64," + theImage;
  //       tmpOfferImages.push(properlyFormattedImage)

  //     }
  //     commit('setOfferImages', tmpOfferImages);
  //   }
  // };

  async getOfferImage({ commit }) {
    const { data } = await this.$api.$get(apis.GS_OFFER_AND_PROMO_IMAGES);
    console.log(data);
    const imageLinkArr = data?.offerAndPromoImages || [];
    const tmpOfferImages = [];
    imageLinkArr.forEach((item) => {
      tmpOfferImages.push(process.env.OFFER_IMAGE_BASE_URL + item.image);
    });
    console.log(tmpOfferImages);
    commit("setOfferImages", tmpOfferImages);
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
          city_name: city.name,
          city: city,
        });
      }
    });
    state.gsCities = tempData;
  },
  setOperatorList: (state, data) => {
    state.busOperators = data;
    if (data.length >= 1) {
      state.busOperators.push({
        title: "Many more to come...",
      });
    }
  },
  setPopularRouteList: (state, data) => {
    state.popularRoutes = data;

    console.log(data)
  },
  setBlogList: (state, data) => {
    state.blogList = data;
  },
  setHeadLine: (state, data) => {
    state.headLine = data;
  },
  setGsTrips: (state, data) => (state.gsTrips = Object.values(data)),
  setGsBoardingPoints: (state, data) => (state.gsBoardingPoints = data),
  setGsDroppingPoints: (state, data) => (state.gsDroppingPoints = data),
  setModalBoardingPoints: (state, data) =>
    (state.modalBoardingPointList = data),
  setGsBusCompanies: (state, data) => (state.gsBusCompanies = data),
  setGsBusClasses: (state, data) => (state.gsBusClasses = data),
  setGsSeatViewData: (state, data) => {
    state.gsSeatViewData = data;
    state.gsSeatArray = data.seatPlan.seatList;
    state.gsSeatBoardingPointArray = data.seatPlan.bordingPoints;
    state.gsSeatDroppingPointArray = data.seatPlan.droppingPoints;
    state.gsUpperDeckSeatArray = data.seatPlan.upperDeckSeatList;
    state.gsLowerDeckSeatArray = data.seatPlan.lowerDeckSeatList;
  },
  setGsPaymentPendingBlockData: (state, data) =>
    (state.gsPaymentPendingBlockData = data),
  setPromoCode: (state, data) => (state.promoCode = data),
  resetPromoCode: (state) => (state.promoCode = {}),
  sortedTrip: (state, data) => {
    const sortBy = data === "l2h" ? 1 : -1;
    state.gsTrips.sort((a, b) => {
      const getActualFare = (tempFare) => {
        if (tempFare.includes("-")) {
          let fareArray = tempFare.split("-");
          fareArray = fareArray.map((item) => parseFloat(item.trim())); // Parse fare values as numbers

          return sortBy === 1 ? fareArray[0] : fareArray[1];
        }

        return parseFloat(tempFare); // Parse fare value as number
      };

      const fareDiff =
        getActualFare(a.seatFare[0].fare) - getActualFare(b.seatFare[0].fare);

      if (fareDiff !== 0) {
        return sortBy * fareDiff;
      }

      return 0;
    });
  },
  mobileFloatingFilter: (state, data) => {
    state.mobileFloatingFilter = data;
  },
  setBusReserveModalOpenStatus: (state, data) => {
    handleScrollBehaviour(state.isBusReserveModalOpen);
    state.isBusReserveModalOpen = !state.isBusReserveModalOpen;
  },
  handleSuccessfulModal: (state, data) => {
    handleScrollBehaviour(state.isRequestSuccessFull);
    state.isRequestSuccessFull = !state.isRequestSuccessFull;
  },
  handleSurpriseDealModal: (state, data) => {
    handleScrollBehaviour(!data);
    state.showSurpriseDealModal = data;
  },
  handleCancelTicketPopup: (state, data) => {
    handleScrollBehaviour(!data);
    state.isTicketPopupOpen = data;
    if (!data) {
      state.selectedTicketId = null;
    }
  },
  setCancelTicketId: (state, data) => {
    state.selectedTicketId = data;
  },
  setOfferImages: (state, data) => {
    state.offerImages = data;
  },
  updateMobileFilterData: (state, data) => {
    state.mobileFilterData = data;
  },
  updateSeatStatus: (state, seatInfo) => {
    const { seatType, rowIndex, colIndex } = seatInfo;
    switch (seatType) {
      case "UPPER_DECK": {
        state.gsUpperDeckSeatArray[rowIndex][colIndex].status = "booked";
        break;
      }
      case "LOWER_DECK": {
        state.gsLowerDeckSeatArray[rowIndex][colIndex].status = "booked";
        break;
      }
      default: {
        state.gsSeatArray[rowIndex][colIndex].status = "booked";
      }
    }
  },
};
