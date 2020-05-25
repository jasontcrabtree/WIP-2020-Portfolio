// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Jason Crabtree's Internet Hangtime",
  siteUrl: 'https://jasontcrabtree.com',
  // siteDescription: 'A buncha words by Jason',

  // icon: 'src/alligator-favicon.png',

  /*
  templates: {
    // Post: '/blog/:title',
    // Tag: '/tag/:id',
    // BlogPost: '/blog/:year/:month/:day/:slug',
  }, */

  /*   templates: {
    Writeup: '/work/:title',
    Tag: '/tag/:id',
  }, */

  // eslint-disable-next-line no-shadow
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },

  accessToken: process.env.ACCESS_TOKEN,

  plugins: [
    /*     {
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
     */
    /*     {
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
    }, */
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './posts/',
        pathPrefix: '/blog/',
        template: './src/templates/Post.vue',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work',
        baseDir: './work',
        pathPrefix: '/work/',
        template: './src/templates/Work.vue',
      },
    },
    // {
    //   use: 'gridsome-plugin-service-worker',
    //   options: {
    //     networkFirst: {
    //       cacheName: 'nf-v1',
    //       routes: ['/', /\.(js|css|png)/],
    //     },
    //   },
    // },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,
        feedOptions: {
          title: "Jason Crabtree's words on the ww wide",
          feed_url: 'https://jasontcrabtree.com/rss.xml',
          site_url: 'https://jasontcrabtree.com/',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: `https://jasontcrabtree.com/${node.path}`,
          content: node.content,
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.7,
          },
          '/work/*': {
            changefreq: 'monthly',
            priority: 0.5,
          },
          '/*': {
            changefreq: 'monthly',
            priority: 0.4,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1280,
        height: 900,
      },
    },
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        '@noxify/gridsome-plugin-remark-embed',
        {
          enabledProviders: ['Youtube', 'Twitter', 'Gist'],
        },
      ],
    },
  },
  // prefetch: { mask: '^$' },
};
const config = {
  accessToken: process.env.ACCESS_TOKEN,
};
