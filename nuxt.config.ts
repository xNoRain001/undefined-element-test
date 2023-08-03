import path from 'path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

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
    },

    plugins: [
      VueI18nPlugin({ include: [path.resolve(__dirname, "./locales/**")] })
    ]
  },

  css: [
    'assets/css/index.css', 
    'undefined-element/dist/index.css'
  ]
})
