import undefinedElement from 'undefined-element'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(undefinedElement)
})

