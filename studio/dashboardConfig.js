export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f54e40c9282d6ae8db081e3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r8hv3uqo',
                  apiId: '928e4911-be9a-4bbf-b039-9ca20cb3f9b5'
                },
                {
                  buildHookId: '5f54e40ce700ee634a5e9f8a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wnzuiivi',
                  apiId: '898328e1-9921-47d1-bcb8-78ac726d8c50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CBedzz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wnzuiivi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
