import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  // @ts-ignore
  vite: {
    server: {
      fs: {
        strict: false
      }
    },
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      })
    ]
  },

  css: ['virtual:svg-icons-register', 'assets/css/main.css']
})
