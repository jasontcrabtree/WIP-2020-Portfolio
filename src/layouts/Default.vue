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
import MainNav from "@/components/MainNav";
import BgColumn from "@/components/BgColumn";

import Footer from "@/components/Footer";

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
  color: var(--link-low-emphasis-bluegrey);
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
    /* TODO: Figure out with margin I prefer */
    /* margin: 48px 120px; */
    /* margin: 48px 160px; */
    /* margin: 48px 9.6vw; */
    margin: 72px 144px 0px 144px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: auto auto auto auto auto auto auto;
  }

  main {
    grid-row-start: 2;
    grid-column: 1 / -1;
  }

  main {
    max-width: 1500px;
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
    margin-top: 64px;
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

    margin-bottom: 0px;
    padding-top: 32px;

    margin-top: 0px;
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

    margin-bottom: 32px;
    padding-top: 32px;

    margin-top: 0px;
    border-top: 8px solid var(--primary-blue);
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

.top-parent-container {
  margin-bottom: 0px;
}
</style>
