// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles.css';
import '~/assets/reset.css';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
    head.link.push({
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Libre+Franklin:400,700,900&display=swap',
    });
}
