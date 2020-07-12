/* eslint-disable */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/_layouts/Default.vue';
import '~/assets/styles.css';
import '~/assets/reset.css';
import { siteDescription } from '../gridsome.config';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    head.link.push({
      rel: 'stylesheet',
      href: 'https://use.typekit.net/npd1kgb.css',
    });
  head.meta.push({
    key: 'og:description',
    name: 'og:description',
    content: siteDescription,
  });
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    content: siteDescription,
  });
  head.meta.push({
    key: 'og:image',
    content:
      'https://res.cloudinary.com/jasontcrabtree/image/upload/v1594587665/Portfolio-2020/social-card.png',
  });
  head.meta.push({
    key: 'twitter:card',
    content: 'summary_large_image',
  });
  head.meta.push({
    key: 'twitter:creator',
    content: '@jasontcrabtree',
  });
  head.meta.push({
    key: 'twitter:image',
    content:
      'https://res.cloudinary.com/jasontcrabtree/image/upload/v1594587665/Portfolio-2020/social-card.png',
  });
  head.meta.push({
    key: 'twitter:url',
    content: 'https://jasontcrabtree.com/',
  });
}
