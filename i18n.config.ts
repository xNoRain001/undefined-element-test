import en from '@/locales/en.yml'
import zh from '@/locales/zh.yml'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zh
  },
  // detectBrowserLanguage: {
  //   useCookie: true,
  //   cookieKey: 'i18n_redirected',
  //   redirectOn: 'root',  // recommended
  // }
}))
