// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     head: {
          title: "Jatri Ticket",
          meta: [
               { charset: "utf-8" },
               { name: "viewport", content: "width=device-width, initial-scale=1" },
               { hid: "description", name: "description", content: "Buy online bus tickets from Jatri. Visit our website and book your tickets." },
               { hid: "keywords", name: "keywords", content: "bus ticket bd, bus ticket online, bus ticket price, bus ticket booking online" },
               { hid: "og-title", name: "og:title", content: "Online bus tickets for everyone" },
               { hid: "og-desc", name: "og:description", content: "Buy online bus tickets from Jatri. Visit our website and book your tickets." },
               { name: "format-detection", content: "telephone=no" },
          ],
          link: [
               { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
               {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500&display=swap",
               },
          ],
     },
     modules: ['@nuxtjs/tailwindcss']
})
