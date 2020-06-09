export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5edfa91b7fd4dc0224468570',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog--2-studio-snb88aqk',
                  apiId: '54253a4f-370b-47b7-8bdc-249cf0647abc'
                },
                {
                  buildHookId: '5edfa91c7123ccdcfbc1911d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog--2-web-19ynf413',
                  apiId: 'fdb1c9bb-2da3-4962-9308-2b9fd035717f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JRhodes95/sanity-gatsby-blog--2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog--2-web-19ynf413.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
