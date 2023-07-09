import cookie from "cookie";

export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    try {
      await Promise.all([
        dispatch("guarantedseat/getHeadLineApi"),
        dispatch("guarantedseat/getCitiesList"),
        dispatch("guarantedseat/getBlogListApi"),
        dispatch("guarantedseat/getOperatorListApi"),
        dispatch("guarantedseat/getOperatorListApi"),
        dispatch("guarantedseat/getPopularRouteListApi"),
        dispatch("guarantedseat/getOfferImage")
      ]);
    } catch (error) {
      console.log("Error", error);
    }
    const cookieConst = cookie.parse(context?.req?.headers?.cookie || "");
    if (cookieConst.hasOwnProperty("ags_token")) {
      commit("user/LOGIN_SUCCESS", cookieConst.ags_token, { root: true });
    }
    if (cookieConst.hasOwnProperty("shutdown_data_sets")) {
      commit(
        "agent/SET_SHUTDOWN_DATA_SETS",
        JSON.parse(cookieConst.shutdown_data_sets),
        { root: true }
      );
    }
  },
};
