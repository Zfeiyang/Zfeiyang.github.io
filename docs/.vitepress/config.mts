import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "个人博客",
  description: "人间何处可白头",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
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
