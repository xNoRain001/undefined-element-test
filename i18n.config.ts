import en from '@/locales/en.yml'
import zh from '@/locales/zh.yml'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    en,
    zh
  }
}))
