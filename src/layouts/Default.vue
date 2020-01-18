<template>
  <div class="top-parent-container">
    <g-link class="return-home-link" to="/">
      <h2 class="return-home-h2">Jason Crabtree</h2>
    </g-link>
    <MainNav />
    <slot />
    <div class="background-elem"></div>
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";

export default {
  components: {
    MainNav
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
.return-home-h2 {
  text-transform: uppercase;
  color: #36364f;
}

#app > a:first-child {
  text-decoration: none;
}

@media screen and (min-width: 920px) {
  .return-home-h2 {
    font-size: 40px;
  }

  .return-home-link {
    grid-column: 1 / 8;
    grid-row-start: 1;
    /* margin-bottom: 40px; */
  }

  .top-parent-container {
    margin: 64px 120px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(13, 1fr);
    /* grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr; */
    /* grid-template-rows: auto repeat(3, 0.2fr); */
    grid-template-rows: auto auto auto 0.5fr 144px;
  }

  main {
    grid-row-start: 2;
    grid-column: 1 / -1;
  }
  .background-elem {
    grid-column: 8 / 11;
    grid-row: 1 / -1;

    background: linear-gradient(180deg, #fec7b2 0%, #df7d57 100%);
    z-index: -1;
    margin-top: -96px;
    opacity: 0.5;
  }
}

@media screen and (max-width: 919px) {
  html {
    margin: 8px auto;
    padding: 16px;
    max-width: fit-content;
    width: auto;

    margin-bottom: 64px;
    padding-top: 32px;

    margin-top: 0px;
    border-top: 8px solid var(--primary-blue);
  }

  h1 {
    font-size: 40px;
  }
}
</style>
