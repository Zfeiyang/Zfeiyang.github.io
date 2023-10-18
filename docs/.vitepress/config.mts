import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '2023',
        items: [
          { text: 'Vue3 学习(1)', link: '/2023/ref-reacitive-toRef-toRefs-toRaw' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zfeiyang/Zfeiyang.github.io' }
    ]
  }
})
