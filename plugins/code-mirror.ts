import VueCodemirror from 'vue-codemirror'
import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueCodemirror, {
    // optional default global options
    autofocus: true,
    disabled: true,
    indentWithTab: true,
    tabSize: 2,
    placeholder: 'Code goes here...',
    extensions: [basicSetup, html(), css(), javascript()],
  })
})
