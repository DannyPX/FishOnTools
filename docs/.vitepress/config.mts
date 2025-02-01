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
          text: 'Pets',
          items: [
            {         
              text: 'Pet Merge Calculator',
              link: '/tools/pet-merge-calculator'
            }
          ]
        },
        {
          text: 'Search',
          items: [
            {
              text: 'Fish Overview',
              link: '/tools/fish-search'
            },
            {
              text: 'Bait Overview',
              link: '/tools/bait-search'
            },
            {
              text: 'Search Fish by Bait',
              link: '/tools/fish-by-bait'
            }
          ]
        },
        {
          text: 'Character Sheet',
          items: [
            {
              text: 'Armor Calculations',
              link: '/tools/character/armor'
            },
            {
              text: 'Stat Calculations',
              collapsed: false,
              items: [
                {
                  text: 'Prospect',
                  link: '/tools/character/prospect'
                },
                {
                  text: 'Luck',
                  link: '/tools/character/luck'
                },
                {
                  text: 'Scale (WIP)'
                },
                {
                  text: 'Bite Speed (WIP)'
                },
                {
                  text: 'Progress (Reel Speed) (WIP)'
                },
                {
                  text: 'Variant Chance',
                  link: '/tools/character/variant'
                }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DannyPX/FishOnTools' }
    ],
  },
  markdown: {
    math: true
  }
})
