// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     head: {
          title: "Jatri Ticket",
          meta: [
               { charset: "utf-8" },
               { title: "Jatri Ticket" },
               { name: "format-detection", content: "telephone=no" },
               { hid: "description", name: "description", content: "" },
               { name: "viewport", content: "width=device-width, initial-scale=1" },
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
