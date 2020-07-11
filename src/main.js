/* eslint-disable */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/_layouts/Default.vue';
import '~/assets/styles.css';
import '~/assets/reset.css';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    head.link.push({
      rel: 'stylesheet',
      href: 'https://use.typekit.net/npd1kgb.css',
    });
}
