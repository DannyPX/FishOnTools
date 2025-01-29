import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FishOnTools",
  description: "Tools for FishOnMC by DannyPX",
  base: "/FishOnTools/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/tools/' }
    ],

    sidebar: {
      '/tools/': [
        {
          text: 'Home',
          link: '/tools/'
        },
        {
          text: 'Pet Merge Calculator',
          link: '/tools/pet-merge-calculator'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  }
})
