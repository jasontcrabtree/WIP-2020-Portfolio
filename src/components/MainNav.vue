<template>
  <header class="primary-nav">
    <div class="header-background-src"></div>
    <nav class="nav-list">
      <g-link to="/">Home</g-link>
      <!-- <g-link to="/contact/">Contact</g-link> -->
      <g-link to="/">Resume</g-link>
      <!-- <g-link to="/about/">About</g-link> -->
      <g-link to="/#work">Work</g-link>
      <g-link to="/blog/">Blog</g-link>
    </nav>
  </header>
</template>

<script>
/* import Background from '/assets/images/NavBackground.svg';

export default {
  components: {
    NavBackground,
  },
}; */
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

  .nav-list > * {
    margin-right: 16px;
  }

  .primary-nav > * {
    margin: 8px 0;
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

@media screen and (min-width: 920px) {
  .nav-list {
    flex-direction: column;
  }
  .nav-list {
    position: fixed;
  }

  .nav-list {
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 8px;
    padding: 0px 8px;
  }

  .nav-list {
    font-size: 20px;
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
</style>
