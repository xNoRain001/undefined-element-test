// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  // @ts-ignore
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
})
