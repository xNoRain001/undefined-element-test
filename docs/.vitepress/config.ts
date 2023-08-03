import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: '什么是 Undefiend Element？', link: '/guide/' },
          { text: '为什么选择它？', link: '/guide/why' },
          { text: '开始使用', link: '/guide/get-started' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Input', link: '/components/' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Expansion', link: '/components/expansion' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Infinite Scroll', link: '/components/infinite-scroll' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'Scroll Area', link: '/components/scroll-area' },
          { text: 'Select', link: '/components/select' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Splitter', link: '/components/splitter' },
          { text: 'Table', link: '/components/table' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Tooltip', link: '/components/tooltip' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xnorain001/undefined-element' }
    ]
  },
  locales: {
    root: {
      label: 'Chinese',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
    }
  }
})
