<template>
  <ul class="hero-social-list">
    <li>
      <a href="https://twitter.com/jasontcrabtree">
        <Twitter />
      </a>
    </li>
    <li>
      <a href="mailto:jasontcrabtree@gmail.com">
        <Email />
      </a>
    </li>
    <li>
      <a href="https://dribbble.com/jasontcrabtree">
        <Dribbble />
      </a>
    </li>
    <li>
      <a href="https://github.com/jasontcrabtree">
        <Github />
      </a>
    </li>
    <li>
      <a href="#">
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

@media screen and (max-width: 919px) {
  .hero-social-list {
    display: flex;
    justify-items: space-around;
  }

  .hero-social-list > * {
    margin: 16px;
    margin-bottom: 0px;
    justify-items: space-around;
  }
}
</style>