<template>
  <footer class="footer-parent footer-parent--layout footer-parent--spacing">
    <section class="footer-text--layout">
      <h3>With thanks</h3>
      <p>
        Made with care in
        <strong>London, United Kingdom.</strong>
      </p>
      <p>My little online spot to show my ongoing work, learning and play.</p>
      <p>
        Built using the wonderful
        <a href="https://gridsome.org/">Gridsome</a>,
        <a href="https://www.netlify.com/">Netlify</a>,
        <a href="https://github.com/jasontcrabtree">Github</a>, and
        <a href="https://tinyletter.com/">Tinyletter.</a> A big thanks to those generous services.
      </p>
    </section>
    <section>
      <h3>Social</h3>
      <Social class="social-parent" />
    </section>
    <section>
      <h3>Explore</h3>
      <nav class="nav-list">
        <g-link to="/">Home</g-link>
        <g-link to="/contact/">Contact</g-link>
        <g-link to="/">Résumé</g-link>
        <!-- <g-link to="/about/">About</g-link> -->
        <g-link class="nav-hidden" to="/#work">Work</g-link>
        <g-link to="/blog/">Blog</g-link>
      </nav>
    </section>
    <section class="footer-subscribe--layout">
      <h3>Blog Newsletter</h3>
      <Subscribe />
    </section>
  </footer>
</template>

<script>
import MainNav from "@/components/MainNav";
import Social from "@/components/Social";
import Subscribe from "@/components/Subscribe";

export default {
  components: {
    Social,
    MainNav,
    Subscribe
  }
};
</script>

<style>
.footer-parent--layout {
  grid-column: 1 / -1;
}

@media screen and (min-width: 1060px) {
  /* FLEXBOX WRAP ALIGNMENT */
  .footer-parent--layout {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-parent--layout > * {
    padding-right: 112px;
    padding-right: 7.2vw;
    padding-left: 0px;
  }

  /*
  .footer-parent--layout > * {
    width: fit-content;
    justify-content: space-between;
  } */

  /*   .footer-parent--layout > section {
    margin: 0px 64px;
  } */

  .footer-parent--layout > section > p {
    padding-bottom: 16px;
    line-height: 1.5;
    font-size: 19px;
  }

  .footer-parent--layout > section > .nav-list {
    display: flex;
    text-align: left;
    flex-direction: column;
  }

  .footer-parent--layout > section > .nav-list > * {
    margin-top: 8px;
  }

  .footer-parent--layout > section > .nav-list > * {
    height: 40px;
  }

  .footer-parent--layout > section > h3 {
    padding-bottom: 16px;
    text-decoration: underline;
  }

  .footer-parent--layout {
    grid-column: 1 / -1;
  }

  .footer-parent--spacing {
    padding-top: 72px;
    padding-bottom: 144px;
  }
}

/* 1440px > 1060px screens */
@media screen and (max-width: 1440px) and (min-width: 1060px) {
  .footer-parent--layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-parent--layout > :first-child,
  .footer-parent--layout > :last-child {
    width: 320px;
  }

  .footer-parent--layout > section {
    /* margin-right: 16px; */
    margin: 8px 40px;
  }

  .footer-parent--layout {
    margin-top: 72px;
  }
}

/* 1060px and smaller screen */
@media screen and (max-width: 1060px) {
  .footer-parent--layout {
    margin-top: 136px;
  }

  .footer-parent--layout {
    display: flex;
    flex-direction: column-reverse;
  }

  .footer-parent--layout > section {
    margin: 24px 0px;
  }

  .footer-parent--layout > section > h3 {
    padding-bottom: -8px;
  }

  .nav-list > * {
    line-height: 2;
  }

  .social-parent > * > *:nth-child(:first-child) {
    margin-left: 0px;
  }

  .footer-parent > * > .nav-list {
    display: flex;
    flex-direction: row;

    margin: 8px 24px 8px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .footer-parent--layout {
    border-top: 4px solid var(--primary-peach);
  }
}

/* tiny little screen */
@media screen and (max-width: 360px) {
  .footer-parent--layout {
    width: calc(100vw - 32px);
  }
}
</style>