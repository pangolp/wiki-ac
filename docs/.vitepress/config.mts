import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "AzerothCore",
  description: "Wiki and Documentation of the AzerothCore project",
  base: '/wiki-ac/',
  ignoreDeadLinks: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 3000
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        editLink: {
          pattern: 'https://github.com/pangolp/wiki-ac/edit/master/docs/:path',
          text: 'Edit page'
        },
      }
    },
    es: {
      label: 'Spanish',
      lang: 'es',
      link: '/es/',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' },
        ],
        outline: {
          label: 'En esta página'
        },
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        },
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        editLink: {
          pattern: 'https://github.com/pangolp/wiki-ac/edit/master/docs/:path',
          text: 'Editar página'
        },
        sidebar: [
          {
            text: 'Instalación',
            collapsed: true,
            items: [
              { text: 'Guía de instalación', link: 'installation' }
            ]
          },
          {
            text: 'Guía de instalación clásica',
            collapsed: false,
            items: [
              { text: 'Requisitos', link: 'requirements' },
              { text: 'Instalación del núcleo', link: 'core-installation' },
              { text: 'Configuración del servidor', link: 'server-setup' },
              { text: 'Instalación de la base de datos', link: 'database-installation' },
              { text: 'Configuración de red', link: 'networking' },
              { text: 'Pasos finales del servidor', link: 'final-server-steps' },
              { text: 'Mantener el servidor actualizado', link: 'keeping-the-server-up-to-date' },
              { text: 'Configuración del cliente', link: 'client-setup' },
              { text: '(Opcional) Instalar un módulo', link: 'installing-a-module' }
            ]
          },
          {
            text: 'Documentación',
            collapsed: true,
            items: [
              { text: 'Índice de documentación', link: 'documentation-index' },
              { text: 'Documentación Doxygen', link: 'https://www.azerothcore.org/doxygen' },
              { text: 'Procedimiento estándar', link: 'standard-operating-procedure' },
              { text: 'Preguntas frecuentes', link: 'faq' },
              { text: 'Errores comunes', link: 'common-errors' }
            ]
          },
          {
            text: 'Base de datos',
            collapsed: true,
            items: [
              { text: 'Auth', link: 'auth/' },
              { text: 'Characters', link: 'database-characters' },
              { text: 'World', link: 'database-world' }
            ]
          },
          {
            text: 'Contribuir',
            collapsed: true,
            items: [
              { text: 'Guía de clasificación de errores', link: 'guide-to-triaging' },
              { text: 'Cómo contribuir', link: 'contribute' },
              { text: 'Cómo crear un PR', link: 'how-to-create-a-pr' },
              { text: 'Cómo probar un PR', link: 'how-to-test-a-pr' },
              { text: 'Cómo probar cambios solo en la BD', link: 'how-to-test-db-only-changes' }
            ]
          },
        ],
      }
    }
  },

  themeConfig: {
    siteTitle: 'Wiki',
    lastUpdated: {
      text: 'Update',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          es: {
            translations: {
              button: {
                buttonText: 'Buscar',
                buttonAriaLabel: 'Buscar'
              },
              modal: {
                displayDetails: 'Mostrar lista detallada',
                resetButtonTitle: 'Restablecer búsqueda',
                backButtonTitle: 'Cerrar búsqueda',
                noResultsText: 'No hay resultados',
                footer: {
                  selectText: 'Seleccionar',
                  selectKeyAriaLabel: 'Intro',
                  navigateText: 'Navegar',
                  navigateUpKeyAriaLabel: 'Flecha arriba',
                  navigateDownKeyAriaLabel: 'Flecha abajo',
                  closeText: 'Cerrar',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: 'Install',
        collapsed: true,
        items: [
          { text: 'Installation Guide', link: 'installation' }
        ]
      },
      {
        text: 'Classic Installation Guide',
        collapsed: false,
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
        collapsed: true,
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
        collapsed: true,
        items: [
          { text: 'Auth', link: 'auth/' },
          { text: 'Characters', link: 'database-characters' },
          { text: 'World', link: 'database-world' }
        ]
      },
      {
        text: 'Contribute',
        collapsed: true,
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
