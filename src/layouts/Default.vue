<template>
  <div class="top-parent-container">
    <g-link class="return-home-link" to="/">
      <h2 class="return-home-h2">Jason Crabtree</h2>
    </g-link>
    <MainNav />
    <slot />
    <BgColumn />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import BgColumn from "@/components/BgColumn";

export default {
  components: {
    MainNav,
    BgColumn
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
  opacity: 0.5;
}

.return-home-h2 {
  text-transform: uppercase;
  color: #36364f;
}

#app > a:first-child {
  text-decoration: none;
}

@media screen and (min-width: 960px) {
  /*  html {
     border-top: 8px solid var(--primary-blue);
  } */

  .return-home-h2 {
    font-size: 40px;
  }

  .return-home-link {
    grid-column: 1 / 8;
    grid-row-start: 1;
  }

  .top-parent-container {
    /* TODO: Figure out with margin I prefer */
    /* margin: 48px 120px; */
    /* margin: 48px 160px; */
    margin: 48px 9.6vw;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: auto auto auto 0.5fr 144px;
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
    margin-top: 64px;
  }
}

/* screens larger than 1440px */
@media screen and (min-width: 1440px) {
  .top-parent-container {
    margin-top: 64px;
  }
}

@media screen and (max-width: 959px) {
  html {
    margin: auto 64px;
    display: grid;
    padding: 16px;
    max-width: fit-content;
    width: auto;

    margin-bottom: 64px;
    padding-top: 32px;

    margin-top: 0px;
  }

  h1 {
    font-size: 40px;
  }
}
@media screen and (max-width: 459px) {
  html {
    margin: 16px auto;
    padding: 16px;
    max-width: fit-content;
    width: auto;

    margin-bottom: 80px;
    padding-top: 32px;

    margin-top: 0px;
    border-top: 8px solid var(--primary-blue);
  }

  h1 {
    font-size: 40px;
  }
}

@media (prefers-color-scheme: dark) {
  .return-home-h2 {
    color: var(--primary-link-dark);
  }
}

.top-parent-container {
  margin-bottom: 112px;
}
</style>
