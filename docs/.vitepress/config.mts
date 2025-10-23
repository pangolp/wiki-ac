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

    sidebar: [
      {
        text: 'Install',
        items: [
          { text: 'Installation Guide', link: 'installation' }
        ]
      },
      {
        text: 'Classic Installation Guide',
        items: [
          { text: 'Requirements', link: 'requirements' },
          { text: 'Core Installation', link: 'core-installation' },
          { text: 'Server Setup', link: 'server-setup' },
          { text: 'Database Installation', link: 'database-installation' },
          { text: 'Networking', link: 'networking' },
          { text: 'Final Server Steps', link: 'final-server-steps' },
          { text: 'Keeping the Server Up-to-Date', link: 'keeping-the-server-up-to-date' },
          { text: 'Client Setup', link: 'client-setup' },
          { text: '(Optional) Installing a Module', link: 'installing-a-module' }
        ]
      },
      {
        text: 'Documentation',
        items: [
          { text: 'Documentation Index', link: 'documentation-index' },
          { text: 'Doxygen Documentation', link: 'https://www.azerothcore.org/doxygen' },
          { text: 'Standard Operating Procedure', link: 'standard-operating-procedure' },
          { text: 'FAQ', link: 'faq' },
          { text: 'Common Errors', link: 'common-errors' }
        ]
      },
      {
        text: 'Database',
        items: [
          { text: 'Auth', link: 'database-auth' },
          { text: 'Characters', link: 'database-characters' },
          { text: 'World', link: 'database-world' }
        ]
      },
      {
        text: 'Contribute',
        items: [
          { text: 'Guide to bug triaging', link: 'guide-to-triaging' },
          { text: 'How to contribute', link: 'contribute' },
          { text: 'How to create a pr', link: 'how-to-create-a-pr' },
          { text: 'How to test a pr', link: 'how-to-test-a-pr' },
          { text: 'How to test db only changes', link: 'how-to-test-db-only-changes' }
        ]
      },
    ],

    editLink: {
      pattern: 'https://github.com/pangolp/wiki-ac/edit/master/docs/:path',
      text: 'Edit page'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pangolp/wiki-ac' }
    ],

    i18nRouting: true,
    externalLinkIcon: true,

    footer: {
      message: 'This project is maintained by azerothcore',
      copyright: 'vitepress © 2025'
    }
  }
})
