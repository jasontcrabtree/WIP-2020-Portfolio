<template>
  <header class="primary-nav">
    <!-- <div class="header-background-src"></div> -->
    <nav class="nav-list">
      <NavDots style="box-sizing: content-box" class="nav-dots--layout decoration-dots--color" />
      <g-link to="/#home" class>Home</g-link>
      <g-link to="/contact/">Contact</g-link>
      <a href="/jason-crabtree-resume.pdf">Résumé</a>
      <!-- <g-link to="/about/">About</g-link> -->
      <g-link class="nav-hidden" to="/#work">Work</g-link>
      <g-link to="/blog/">Blog</g-link>
    </nav>
  </header>
</template>

<script>
import NavDots from "~/assets/svgs/NavDots.svg";

export default {
  components: {
    NavDots
  }
};
</script>

<style scoped>
.nav-list {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}

.primary-nav {
  z-index: 1;
}

.nav-list > *:first-child {
  margin-bottom: -16px !important;
}

.decoration-dots--color {
  color: #2cb1bc;
}

@media screen and (max-width: 960px) {
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
}

@media screen and (min-width: 960px) {
  .nav-list {
    flex-direction: column;
  }
  .nav-list {
    position: fixed;
  }

  .nav-list {
    border-radius: 8px;

    /* TODO TESTING NAV PADDING */
    padding: 0px 0px;

    padding: 0px 8px;
  }

  .nav-list {
    background-color: var(--white-opacity-80);
  }

  .nav-list > * {
    margin: 8px 0px;
  }

  .primary-nav {
    grid-row-start: 1;
    grid-column: 12 / 13;

    /* TODO: TESTING COLUMN POSITION */
    grid-column: 13 / 14;
  }
}

@media screen and (max-width: 960px) {
  .nav-dots--layout {
    display: none;
  }
}

@media screen and (max-width: 350px) {
  .primary-nav {
    max-width: calc(100vw - 32px);
    width: auto;
  }
}

@media all and (max-width: 960px) and (prefers-color-scheme: light) {
  .nav-list {
    border: 1px solid var(--card-background-white);
  }
}

@media (prefers-color-scheme: dark) {
  .nav-list {
    background-color: #102a43;
    opacity: 0.95;
  }

  .decoration-dots--color {
    /* opacity: 0.3; */
    color: #92e6ee;
  }
}
</style>
