<template>
  <ul class="hero-social-list">
    <li>
      <a aria-label="twitter-link" href="https://twitter.com/jasontcrabtree">
        <Twitter />
      </a>
    </li>
    <li>
      <a aria-label="email-link" href="mailto:jasontcrabtree@gmail.com">
        <Email />
      </a>
    </li>
    <li>
      <a aria-label="dribbble-link" href="https://dribbble.com/jasontcrabtree">
        <Dribbble />
      </a>
    </li>
    <li>
      <a aria-label="github-link" href="https://github.com/jasontcrabtree">
        <Github />
      </a>
    </li>
    <li>
      <a aria-label="rss-link" href="/rss.xml">
        <RSS />
      </a>
    </li>
  </ul>
</template>

<script>
import Email from "~/assets/svgs/email.svg";
import Twitter from "~/assets/svgs/twitter.svg";
import Github from "~/assets/svgs/github.svg";
import Dribbble from "~/assets/svgs/dribbble.svg";
import RSS from "~/assets/svgs/rss.svg";

export default {
  components: {
    Email,
    Twitter,
    Github,
    Dribbble,
    RSS
  }
};
</script>

<style>
.hero-social-list {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  padding-inline-start: 0px;
}

.hero-social-list > * {
  padding: 8px 0px;
}

.hero-social-list > li {
  margin-bottom: 0px;
}

@media screen and (max-width: 961px) {
  .hero-social-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .hero-social-list > * {
    margin: 16px;
    margin-bottom: 0px;
  }
}
</style>