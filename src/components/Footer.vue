<template>
  <footer class="footer-parent footer-parent--layout footer-parent--spacing">
    <section class="footer-text--layout footer-text-style">
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
      <p>
        <small>
          &copy; Copyright 2018-2020. Jason Crabtee.
          <br />All rights reserved.
        </small>
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

.footer-parent--layout {
  border-top: 2px solid var(--horiz-spacer);
}

@media screen and (min-width: 1061px) {
  /* FLEXBOX WRAP ALIGNMENT */
  .footer-parent--layout {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .footer-parent--layout > * {
    width: 10%;
  }

  .footer-parent--layout > *:first-child {
    padding-right: 80px;
    width: 40%;
  }

  .footer-parent--layout > *:last-child {
    padding-left: 80px;
    width: 40%;
  }

  .footer-text-style > p {
    padding-bottom: 16px;
    line-height: 1.5;
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
    padding-bottom: 24px;
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

  .nav-list > * {
    line-height: 2;
  }

  .footer-parent > * > .nav-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .footer-parent > * > .nav-list > * {
    margin-right: 24px;
  }

  .footer-parent > * > .hero-social-list {
    display: flex;
    flex-direction: row;
  }
  .footer-parent > * > .social-parent > * {
    margin: 24px 24px 0px 0px;
  }
}

/* tiny little screen */
@media screen and (max-width: 360px) {
  .footer-parent--layout {
    width: calc(100vw - 32px);
  }
}
</style>