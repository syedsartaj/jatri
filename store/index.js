import cookie from "cookie";
import { ServiceType } from "../helpers/utils";

export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    try {
      await Promise.all([
        dispatch("guarantedseat/getHeadLineApi"),
        dispatch("guarantedseat/getBlogListApi"),
        dispatch("guarantedseat/getOfferImage"),
        // dispatch("guarantedseat/getCitiesList", {  }),
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
