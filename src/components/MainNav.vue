<script>
import NavDots from '~/assets/svgs/NavDots.svg';
export default {
  components: {
    NavDots,
  },
};
</script>

<template>
  <header class="primary-nav">
    <NavDots
      style="box-sizing: content-box"
      class="nav-dots--layout decoration-dots--color"
    />
    <nav class="nav-list">
      <g-link to="/#home" class>Home</g-link>
      <g-link to="/contact/">Contact</g-link>
      <a href="/jason-crabtree-resume.pdf">Résumé</a>
      <g-link class="nav-hidden" to="/#work">Work</g-link>
      <g-link to="/blog/">Blog</g-link>
    </nav>
  </header>
</template>

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

.primary-nav > *:first-child {
  margin-bottom: -16px !important;
}

.decoration-dots--color {
  color: var(--dots-color);
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
    position: static;
  }

  .nav-list {
    border-radius: 8px;
    padding: 0px 8px;
    width: 112px;
  }

  .nav-list {
    background-color: var(--white-opacity-80);
  }

  .nav-list > * {
    margin: 8px 0px;
  }

  .primary-nav {
    grid-row-start: 1;
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

@media (prefers-color-scheme: dark) {
  .nav-list {
    opacity: 1;
    background: inherit;
  }

  .decoration-dots--color {
    color: var(--dots-color);
  }
}
</style>
