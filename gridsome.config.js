module.exports = {
  siteName: "Jason Crabtree's Internet Hangtime",
  siteUrl: 'https://jasontcrabtree.com',
  icon: './static/star.svg',
  // siteDescription: 'A buncha words by Jason',
  // eslint-disable-next-line no-shadow
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  accessToken: process.env.ACCESS_TOKEN,
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './src/blog-posts/',
        pathPrefix: '/blog/',
        template: './src/_templates/Post.vue',
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work',
        baseDir: './src/case-studies',
        pathPrefix: '/work/',
        template: './src/_templates/Work.vue',
      },
    },
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
};
