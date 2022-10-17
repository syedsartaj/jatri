import * as apis from "../helpers/apis";

export const state = () => ({
  gsLoading: false,
  gsLoadingTwo: false,
  gsCities: [],
  gsTrips: [],
  gsSeatViewData: {},
  gsSeatArray: [],
  gsSeatBoardingPointArray: [],
  gsPaymentPendingBlockData: {},
});

export const getters = {
  getGsLoading: (state) => state.gsLoading,
  getGsLoadingTwo: (state) => state.gsLoadingTwo,
  getGsCities: (state) => state.gsCities,
  getGsTrips: (state) => state.gsTrips,
  getGsSeatViewData: (state) => state.gsSeatViewData,
  getGsSeatViewData: (state) => state.gsSeatViewData,
  getGsSeatArray: (state) => state.gsSeatArray,
  getGsSeatBoardingPointArray: (state) => state.gsSeatBoardingPointArray,
  getGsPaymentPendingBlockData: (state) => state.gsPaymentPendingBlockData,
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
      this.$errorToast({ message: error.response.data.message });
    }
  },
  async getPbCityAction({ commit }) {
    try {
      const { data } = await this.$api.$post(apis.GET_PARIBAHAN_CITY_URL);
      // this.$successToast({
      //   message: `${Object.values(data).length} cities found!`,
      // });
      console.log('data=>',data);
      commit("setGsCities", data);
    } catch (error) {
      this.$errorToast({ message: error.response.data.message });
    }
  },
  async getPbScheduleDataAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SCHEDULE_DATA_URL,
        payload
      );
      if (data) {
        commit("setGsTrips", data);
      }
    } catch (error) {
      this.$errorToast({ message: error.response.data.message });
    }
  },

  async getPbSeatViewAction({ commit }, payload) {
    try {
      const { data } = await this.$api.$post(
        apis.GET_PARIBAHAN_SEAT_VIEW_URL,
        payload
      );
      commit("setGsSeatViewData", data);
    } catch (error) {
      this.$errorToast({ message: error.response.data.message });
    }
  },
  async getPbPaymentPendingBlockAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data, flag, msg } = await this.$api.$post(
        apis.POST_PARIBAHAN_PAYMENT_PENDING_BLOCK_URL,
        payload
      );
      if (flag) {
        commit("setGsPaymentPendingBlockData", data);
      } else {
        this.$errorToast({ message: msg ?? "Something went wrong!" });
      }
      commit("setGsLoading", false);
      return flag;
    } catch (error) {
      commit("setGsLoading", false);
      this.$errorToast({ message: error.response.data.message });
      return flag;
    }
  },
  async getPbPaymentConfirmAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
      const { data, flag, msg } = await this.$api.$post(
        apis.POST_PARIBAHAN_CONFIRM_PAYMENT_URL,
        payload
      );
      if (flag) {
        this.$successToast({ message: msg ?? "Ticket Purchase successfully!" });
      } else {
        this.$errorToast({ message: msg ?? "Something went wrong!" });
      }
      commit("setGsLoading", false);
      return flag;
    } catch (error) {
      commit("setGsLoading", false);
      this.$errorToast({ message: error.response.data.message });
      return flag;
    }
  },
  async pbCancelPaymentPendingBlockAction({ commit }, payload) {
    try {
      commit("setGsLoadingTwo", true);
      const { data, flag, msg } = await this.$api.$post(
        apis.POST_PARIBAHAN_CANCEL_BOOKED_TICKET_URL,
        payload
      );
      if (flag) {
        this.$successToast({
          message: msg ?? "Booked ticket cancel successfully!",
        });
      } else {
        this.$errorToast({ message: msg ?? "Something went wrong!" });
      }
      commit("setGsLoadingTwo", false);
      return flag;
    } catch (error) {
      commit("setGsLoadingTwo", false);
      this.$errorToast({ message: error.response.data.message });
      return flag;
    }
  },
  async sslPaymentInitAction({ commit }, payload) {
    try {
      commit("setGsLoading", true);
			const { data } = await this.$axios.post(apis.SSL_PAYMENT_INIT_URL, payload);
			if (data.GatewayPageURL) {
				window.location.replace(data.GatewayPageURL)
			}
      commit("setGsLoading", false);
    } catch (error) {
      commit("setGsLoading", false);
      this.$errorToast({ message: error.response.data.message });
    }
	},
	async cancelTicketRequest({ commit }, payload) {
		try {
      commit("setGsLoading", true);
			const { data } = await this.$axios.post(apis.SSL_CANCEL_TICKET_REQUEST, payload);
			this.$successToast({ message: data.message })
			commit("setGsLoading", false);
			return true
    } catch (error) {
      commit("setGsLoading", false);
			this.$errorToast({ message: error.response.data.message });
			return false
    }
	},
	async sendMessageAction({ commit }, payload) {
		try {
      commit("setGsLoading", true);
			const { data } = await this.$axios.post(apis.SSL_SMS_FOR_TICKET_SUCCESS, payload);
			// this.$successToast({ message: data.message })
			commit("setGsLoading", false);
			return true
    } catch (error) {
      commit("setGsLoading", false);
			this.$errorToast({ message: error.response.data.message });
			return false
    }
	},
	async successTicketByMailAction({ commit }, payload) {
		try {
      commit("setGsLoading", true);
			const { data } = await this.$axios.post('https://dev.sslpayment.jatri.co/ssl/ticket/success-ticket-by-mail', payload);
			this.$successToast({ message: data.message })
			commit("setGsLoading", false);
			return true
    } catch (error) {
      commit("setGsLoading", false);
			this.$errorToast({ message: error.response.data.message });
			return false
    }
	}
};

export const mutations = {
  setGsLoading: (state, data) => (state.gsLoading = data),
  setGsLoadingTwo: (state, data) => (state.gsLoadingTwo = data),
  setGsCities: (state, data) => (state.gsCities = Object.values(data)),
  setGsTrips: (state, data) => (state.gsTrips = Object.values(data)),
  setGsSeatViewData: (state, data) => {
    state.gsSeatViewData = data;
    let gsSeatArray = new Array(+data.row_no)
      .fill(null)
      .map(() => new Array(+data.column_no).fill(null));

    data.seatstructure_details.forEach((item) => {
      gsSeatArray[item.x_axis - 1][item.y_axis - 1] = item;
    });
    state.gsSeatArray = gsSeatArray;
    state.gsSeatBoardingPointArray = Object.values(data.bording_points);
  },
  setGsPaymentPendingBlockData: (state, data) =>
    (state.gsPaymentPendingBlockData = data),
};
