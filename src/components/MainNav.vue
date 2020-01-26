<template>
  <header class="primary-nav">
    <div class="header-background-src"></div>
    <nav class="nav-list">
      <g-link to="/" class>Home</g-link>
      <g-link to="/contact/">Contact</g-link>
      <g-link to="/">Résumé</g-link>
      <!-- <g-link to="/about/">About</g-link> -->
      <g-link class="nav-hidden" to="/#work">Work</g-link>
      <g-link to="/blog/">Blog</g-link>
      <!-- <g-link to="/docs/">Docs</g-link> -->
    </nav>
  </header>
</template>

<script>
</script>

<style scoped>
.nav-list {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}

@media screen and (max-width: 919px) {
  .nav-list {
    flex-direction: row;
  }

  .nav-list {
    flex-wrap: wrap;
  }

  .nav-list > * {
    margin-right: 16px;
  }

  .primary-nav > * {
    margin: 8px 0;
  }

  .nav-hidden {
    visibility: hidden;
    width: 0px;
    margin-right: 0px;
  }

  .header-background-src {
    background-image: url("/nav-bg.png");
    width: 60%;
    height: 40%;
    z-index: -1;
    position: fixed;
    right: -48px;
    top: -16px;
  }
}

@media screen and (min-width: 930px) {
  .nav-list {
    flex-direction: column;
  }
  .nav-list {
    position: fixed;
  }

  .nav-list {
    border-radius: 8px;
    padding: 0px 8px;
  }

  .nav-list {
    font-size: 20px;
  }

  .nav-list {
    background-color: var(--white-opacity-80);
  }

  .nav-list > * {
    margin: 8px 0px;
  }

  .header-background-src {
    background-image: url("/nav-bg.png");
    width: 30vw;
    height: 25vw;
    z-index: -1;
    position: fixed;
    right: 0;
    top: 0;
  }

  .primary-nav {
    grid-row-start: 1;
    grid-column: 12 / 13;
  }
}

@media all and (max-width: 929px) and (prefers-color-scheme: light) {
}

@media (prefers-color-scheme: dark) {
  .nav-list {
    background-color: #12121d;
  }
}
</style>
