import * as URL from "../helpers/apis";

export default function ({ $axios, app }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: "application/json",
      },
    },
  });

  const blobApi = $axios.create({
    responseType: "blob",
    headers: {
      common: {
        Accept: "application/pdf",
      },
    },
  });

  api.onRequest((config) => {
    const token = process.env.DT_SECRET_KEY;
    api.setHeader("Authorization", `Bearer ${token}`);
  });

  blobApi.onRequest((config) => {
    const token = process.env.DT_SECRET_KEY;
    blobApi.setHeader("Authorization", `Bearer ${token}`);
    blobApi.setHeader("Content-Type", `application/pdf`);
  });

  api.onError(async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      try {
        const payload = {
          grant_type: "password",
          client_id: "RdjwHtQEzg3clThI",
          client_secret: "x2Rj2LSpAfRrFeLXehjknVFVKHJmjsei",
          username: "jatri",
          password: "jatri$852",
        };
        const data = await $axios.$post(URL.GET_PARIBAHAN_TOKEN_URL, payload);
        const token = `Bearer ${data.access_token}`;
        app.$auth.$storage.setCookie("pb_token", token);
        originalConfig.headers.Authorization = token;
        return api(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  });

  blobApi.onError(async (error) => {
    const originalConfig = error.config;
    if (error.response.status === 401) {
      try {
        const payload = {
          grant_type: "password",
          client_id: "RdjwHtQEzg3clThI",
          client_secret: "x2Rj2LSpAfRrFeLXehjknVFVKHJmjsei",
          username: "jatri",
          password: "jatri$852",
        };
        const data = await $axios.$post(URL.GET_PARIBAHAN_TOKEN_URL, payload);
        const token = `Bearer ${data.access_token}`;
        app.$auth.$storage.setCookie("pb_token", token);
        originalConfig.headers.Authorization = token;
        return api(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(error);
  });

  // Set baseURL to something different
  // api.setBaseURL('https://my_api.com')

  // Inject to context as $api
  inject("api", api);
  inject("blobApi", blobApi);
}
