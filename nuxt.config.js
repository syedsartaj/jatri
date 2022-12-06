export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: process.env.PORT || 3000,
  },
  head: {
    title: "Jatri Ticket",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: 'h-full'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Buy online bus tickets from Jatri. Visit our website and book your tickets." },
      { hid: "keywords", name: "keywords", content: "bus ticket bd, bus ticket online, bus ticket price, bus ticket booking online" },
      { hid: "og-title", name: "og:title", content: "Online bus tickets for everyone" },
      { hid: "og-desc", name: "og:description", content: "Buy online bus tickets from Jatri. Visit our website and book your tickets." },
      { name: "format-detection", content: "telephone=no" },
      { hid: 'og-image', name: 'og:image', content: '/assets/images/favicon.png' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    "@/assets/css/tailwind.css",
    "epic-spinners/dist/lib/epic-spinners.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/v-calendar.js", ssr: false },
    { src: '~plugins/vue-html2pdf.client.js', mode: 'client' },
    "~/plugins/axios.js",
    "~/plugins/date.js",
    "~/plugins/api",
    "~/plugins/vee-validate.js",
    "~/plugins/facebook-events.js",
    '~/plugins/gtm'
  ],

  

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/dotenv",
    "@nuxtjs/auth-next",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    "primevue/nuxt",
    "vue-toastification/nuxt",
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: process.env.GTM_ID || 'GTM-MWP6J24',
    scriptDefer: true,
    pageTracking: true,
    // layer: 'test',
    variables: {
      test: '1'
    }
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GTM_ID || 'GTM-MWP6J24'
    }
  },
  
  toast: {
    timeout: 2000,
    closeOnClick: false
  },
  primevue: {
    theme: "md-light-indigo",
    ripple: true,
    components: ["Button", "Dialog", "RadioButton", "InputText", "Skeleton"],
    directives: [],
  },
  axios: {
    proxy: true,
    retry: { retries: 3 },
  },

  proxy: {
    "/api/": process.env.PARIBAHAN_FULL_URL,
    "/ssl/":
      process.env.NODE_ENV === "development"
        ? process.env.DEV_SSL_BACKEND_URL
        : process.env.PROD_SSL_BACKEND_URL,
    // "/ssl/": process.env.LOCAL_SSL_BACKEND_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    transpile: ["primevue", "vee-validate/dist/rules"],
  },
  loading: "~/components/loader/Loader.vue",
  // server: {
  //   port: 5000, // default: 3000
  // },
};
