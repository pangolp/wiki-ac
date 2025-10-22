import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "AzerothCore",
  description: "Wiki and Documentation of the AzerothCore project",
  base: '/wiki-ac/',

  themeConfig: {
    siteTitle: 'Wiki',
    lastUpdated: {
      text: 'Update',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    editLink: {
      pattern: 'https://github.com/pangolp/wiki-ac/edit/master/docs/:path',
      text: 'Edit page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pangolp/wiki-ac' } // Actualiza con tu usuario
    ],

    i18nRouting: true,
    externalLinkIcon: true,

    footer: {
      message: 'This project is maintained by azerothcore',
      copyright: 'vitepress © 2025'
    }
  }
})
