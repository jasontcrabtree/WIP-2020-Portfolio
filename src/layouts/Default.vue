<template>
  <div class="top-parent-container">
    <g-link class="return-home-link" to="/">
      <h2 class="return-home-h2--color return-home-h2--type">Jason Crabtree</h2>
    </g-link>
    <MainNav />
    <slot />
    <BgColumn />
    <Footer />
  </div>
</template>

<script>
import MainNav from "@/components/layout-components/MainNav";
import BgColumn from "@/components/layout-components/BgColumn";

import Footer from "@/components/layout-components/Footer";

export default {
  components: {
    MainNav,
    BgColumn,
    Footer
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.background-elem {
  opacity: 0.1;
}

.return-home-h2--color {
  color: var(--subheading-black-blue);
}

.return-home-h2--type {
  text-transform: uppercase;
  font-size: var(--size-24);
}

#app > a:first-child {
  text-decoration: none;
}

@media screen and (min-width: 960px) {
  .return-home-link {
    grid-column: 1 / 8;
    grid-row-start: 1;
  }

  .top-parent-container {
    margin: 72px 144px 0px 144px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: auto auto auto auto auto auto;
  }

  main {
    grid-row-start: 2;
    grid-column: 1 / -1;
  }
}

/* 1440px sscreens */
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .top-parent-container {
    margin: 72px 112px 0px 112px;
  }
}

/* screens larger than 1440px */
@media screen and (min-width: 1440px) {
  .top-parent-container {
    margin-top: var(--size-64);
  }
}

@media screen and (max-width: 960px) {
  html {
    margin: auto 64px;
    display: grid;
    padding: 16px;
    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    width: auto;

    padding-top: 32px;
  }
}
@media screen and (max-width: 459px) {
  html {
    margin: 16px auto;
    padding: 16px;
    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    width: auto;

    margin-bottom: 72px;
    padding-top: 32px;

    border-top: 8px solid #2cb1bc;
  }
}

@media screen and (max-width: 360px) {
  main {
    margin-right: 16px;
    width: calc(100vw - 32px);
  }
}

@media (prefers-color-scheme: dark) {
  .return-home-h2--color {
    color: var(--primary-link-dark);
  }
}
</style>
