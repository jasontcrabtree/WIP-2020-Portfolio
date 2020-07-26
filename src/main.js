/* eslint-disable */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/_layouts/Default.vue';
import '~/assets/styles.css';
import '~/assets/reset.css';
import Meta from 'vue-meta';

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout),
    head.link.push({
      rel: 'stylesheet',
      href: 'https://use.typekit.net/npd1kgb.css',
    });
  Vue.use(Meta);
}
/*
(function() {
  let preferredTheme;
  window.__onThemeChange = function() {};
  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.setAttribute('data-theme', newTheme);
    window.__onThemeChange(newTheme);
  }

  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}

  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
})();
 */
