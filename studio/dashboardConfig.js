export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d44470168b917d1620214a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-51ohh631',
                  apiId: 'c7ae3915-f9e2-4c5c-aa5a-01afb61bfadf'
                },
                {
                  buildHookId: '5d444701f2135440ac3f6e4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3uwiwff7',
                  apiId: '57f16104-12f7-4311-ac87-586fde9a93fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Azaan1/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3uwiwff7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
