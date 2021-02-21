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
                  buildHookId: '6032a2b602ba89096f2f201f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5yosd924',
                  apiId: 'cfa1f66d-fc77-46c3-ae27-84e2382fc9a8'
                },
                {
                  buildHookId: '6032a2b602ba89096f2f2020',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4ofy676n',
                  apiId: 'e2e9a3b0-4ed6-4cd0-9a4e-fc9901e570f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomwrankmore/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4ofy676n.netlify.app', category: 'apps' }
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
