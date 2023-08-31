import { ServiceType } from "../helpers/utils";

export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    try {
      await Promise.all([
        dispatch("common/getHeadLineApi"),
        dispatch("common/getBlogListApi"),
        dispatch("common/getOfferImageApi"),
        dispatch("common/getCitiesList", { service: ServiceType.BUS }),
        dispatch("common/getCitiesList", { service: ServiceType.LAUNCH }),
        dispatch("common/getOperatorListApi", { service: ServiceType.BUS }),
        dispatch("common/getOperatorListApi", { service: ServiceType.LAUNCH }),
        dispatch("common/getPopularRouteListApi", { service: ServiceType.BUS }),
        dispatch("common/getPopularRouteListApi", {
          service: ServiceType.LAUNCH,
        }),
      ]);
    } catch (error) {
      console.log("Error", error);
    }
  },
};
