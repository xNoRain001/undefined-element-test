// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  // @ts-ignore
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },

  // @ts-ignore
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },

  css: [
    'assets/css/index.css', 
    'undefined-element/src/assets/css/index.css'
  ]
})
