export default {

  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  head: {
    title: "Jatri Ticket | Buy  online bus tickets",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: 'h-full'
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { hid: "description", name: "description", content: "Visit our website or download Jatri App to book your tickets. Find the best bus deals and reputable bus companies in one place." },
      { hid: "og:description", name: "og:description", content: "Visit our website or download Jatri App to book your tickets. Find the best bus deals and reputable bus companies in one place." },
      { hid: "keywords", name: "keywords", content: "bus ticket bd, bus ticket online, bus ticket price, bus ticket booking online" },
      { hid: "og:title", name: "og:title", content: "Online bus tickets for everyone" },
      { name: "format-detection", content: "telephone=no" },
      { hid: 'og:image', name: 'og:image', content: `${process.env.CLIENT_BASE_URL}/favicon.png` },
      {
        name: "facebook-domain-verification",
        content: `${process.env.VERIFICATION_CODE}`,
      },
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
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    display: "swap",
    families: {
      Inter: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }
  },
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
   id: 'GTM-MWP6J24',
   pageTracking: true,
   enabled: true,
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
    components: ["Button", "Dialog", "RadioButton", "InputText", "Skeleton",],
    directives: [],
  },
  axios: {
    proxy: true,
    retry: { retries: 3 },
  },

  proxy: {
    "/api": {
      target: process.env.PARIBAHAN_BASE_URL,
      changeOrigin: true
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          "custom-properties": false,
        },
      },
    },
    transpile: ["primevue", "vee-validate/dist/rules"],
  },
  loading: "~/components/loader/Loader.vue",
  router: {
    middleware: ["setSelectedServiceMiddleware"],
  },
};
