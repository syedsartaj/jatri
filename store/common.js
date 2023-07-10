import * as apis from "../helpers/apis";
import { ServiceType } from "../helpers/utils";

export const state = () => ({
  offerImages: [],
  blogList: [],
  headLine: [],
  busOperators: [],
  launchOperators: [],
  busPopularRoutes: [],
  launchPopularRoutes: [],
  selectedService: ServiceType.BUS,
});

export const getters = {
  getBlogList: (state) => state.blogList,
  getOfferImages: (state) => state.offerImages,
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
};

export const actions = {
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

  async getOfferImage({ commit }) {
    try {
      const { data } = await this.$api.$get(apis.GS_OFFER_AND_PROMO_IMAGES);
      const imageLinkArr = data?.offerAndPromoImages || [];
      const tmpOfferImages = [];
      imageLinkArr.forEach((item) => {
        tmpOfferImages.push(process.env.OFFER_IMAGE_BASE_URL + item.image);
      });
      commit("setOfferImages", tmpOfferImages);
    } catch (error) {
      console.log(error);
    }
  },
  async getOperatorListApi({ commit }, { service }) {
    console.log("Service :", apis.SERVICE_TYPE[service].GET_OPERATOR_LIST_URL);
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
};

export const mutations = {
  setBlogList: (state, data) => {
    state.blogList = data;
  },
  setHeadLine: (state, data) => {
    state.headLine = data;
  },
  setOfferImages: (state, data) => {
    state.offerImages = data;
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
};
