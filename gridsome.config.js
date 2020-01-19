// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jason Crabtree's Internet Hangtime",
  siteDescription: 'A buncha words by Jason',

  templates: {
    Post: '/blog/:title',
    Tag: '/tag/:id',
    // BlogPost: '/blog/:year/:month/:day/:slug',
  },

  templates: {
    Work: '/work/:title',
    Tag: '/tag/:id',
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Work',
        path: 'work/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    /*     {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './blog/',
      },
    }, */
    /*     {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work',
        baseDir: './work',
      },
    }, */
    /*{  use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation',
        baseDir: './content/docs',
        pathPrefix: '/docs',
        // template: './src/templates/Post.vue',
      },
    },*/
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      // plugins: ['remark-attr'],

      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      // plugins: ['@gridsome/remark-prismjs', '@gridsome/remark-attr'],
    },
  },
  // templates: {
  //   BlogPost: '/blog/:year/:month/:day/:slug'
  // }
};
