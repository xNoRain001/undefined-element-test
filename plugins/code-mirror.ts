import VueCodemirror from 'vue-codemirror'
import { basicSetup } from 'codemirror'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueCodemirror, {
    // optional default global options
    autofocus: true,
    disabled: false,
    indentWithTab: true,
    tabSize: 2,
    placeholder: 'Code goes here...',
    extensions: [basicSetup]
    // ...
  })
})
