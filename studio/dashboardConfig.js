export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f600d37a297b60ef6cbe05c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-yosh-studio',
                  apiId: 'ad4161fe-e2ae-496c-bcfb-96d66ef1f9f9'
                },
                {
                  buildHookId: '5f600d372b54f110a952af40',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-yosh',
                  apiId: 'a9494f37-2886-4239-b823-7cfe44195874'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ollynov/sanity-nextjs-yosh',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-yosh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
