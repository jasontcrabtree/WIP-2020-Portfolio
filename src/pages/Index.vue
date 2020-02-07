<template>
  <Layout>
    <main class="main-parent" id="home">
      <section class="hero-container">
        <div class="hero-header-parent">
          <h1 class="hero-header-h1--style hero-header-h1--layout">
            UX Designer and Functional
            <br />Design Enthusiast
          </h1>
          <DecoDots
            style="box-sizing: content-box;"
            class="decoration-dots-header--layout decoration-dots--color"
          />
        </div>
        <div class="hero-children-container">
          <Social />
          <p class="hero-bio--layout hero-bio--bg large-paragraph-text">
            Hello, I’m Jason. I'm a Designer interested in thoughtfully solving meaningful, tough problems. I’m motivated by
            mission-driven work, shared values and a diverse, welcoming and
            inclusive workplace culture. I'm
            <span
              class="current-status-text"
            >currently looking</span> for a UX Designer role in London, UK.
          </p>
        </div>
      </section>

      <hr />

      <section class="work-container" id="work">
        <h2 class="work-title">Case Studies and Process</h2>
        <ul class="work-list-container">
          <WorkList v-for="edge in $page.allWork.edges" :key="edge.node.id" :work="edge.node" />
        </ul>
      </section>

      <hr />

      <section class="quote-container">
        <h2 class="h2-section-title">Kind words from past colleagues</h2>
        <div>
          <blockquote class="quote-item">
            <p>
              <span class="block-quote-callout">“</span>Jason has a creative but
              practical out of the box way of thinking and to top it off, a
              relaxed demeanor that makes you naturally feel at ease around him.
              <span
                class="block-quote-close"
              >”</span>
            </p>
            <footer>
              <cite class="quote-name--style">Dini Paranagama</cite>
              <div class="quote-details-text--layout">
                <span>
                  Digital Product Manager at IAG Insurance, NZ,
                  <a
                    href="https://www.linkedin.com/in/dini-paranagama/"
                  >LinkedIn</a>
                </span>
              </div>
            </footer>
          </blockquote>

          <blockquote class="quote-item">
            <p>
              <span class="block-quote-callout">“</span>When I think about Jason
              I think of his wealth of knowledge and intellect.
            </p>
            <p>
              He automatically creates a safe space to share, learn and
              collaborate; inviting others opinions before his own, Jason
              actively asks questions to understand the ‘why’ and seeks to see
              things from a different perspective.
            </p>
            <p>
              Jason has a creative yet pragmatic approach & you can rely on him
              to stand up for what’s right.
              <span
                class="block-quote-close"
              >”</span>
            </p>
            <footer>
              <cite class="quote-name--style">Natalie van Baarlen</cite>
              <div class="quote-details-text--layout">
                <span>
                  Customer Experience Design Lead at IAG Insurance, NZ,
                  <a
                    href="https://www.linkedin.com/in/natalie-van-baarlen-60ab73107/"
                  >LinkedIn</a>
                </span>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      <hr />

      <section class="latest-posts-container">
        <h2 class="h2-section-title">Latest Dribbble Shots</h2>
        <DribbbleGallery />
      </section>

      <hr />

      <section class="latest-posts-container">
        <h2 class="h2-section-title">Latest Blog Posts</h2>
        <ul class="posts index-blog-list-title--style">
          <PostList
            v-for="edge in $page.allPost.edges.slice(0, 3)"
            :key="edge.node.id"
            :post="edge.node"
          />
        </ul>
      </section>
    </main>
    <!-- <BgColumn /> -->
  </Layout>
</template>

<script>
import WorkList from "@/components/WorkList";
import PostList from "@/components/PostList";

import BgColumn from "@/components/BgColumn";
import Social from "@/components/Social";

import DribbbleGallery from "@/components/DribbbleGallery";

import DecoDots from "~/assets/svgs/DecoDots.svg";

export default {
  components: {
    WorkList,
    BgColumn,
    Social,
    PostList,
    DribbbleGallery,
    DecoDots
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
  allWork {
    totalCount
    edges {
      node {
        title
        id
        description
        date (format: "MMMM YYYY")
        path
        image
      }
    }
  },
  metadata {
    siteName
    siteDescription
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        date (format: "D MMMM YYYY")
        path
        content
      }
    }
  }
}
</page-query>

<style scoped>
.background-elem {
  opacity: 0.9;
}

.hero-children-container {
  display: flex;
  flex-direction: row;
}

.hero-bio--layout {
  max-width: 48ch;
  width: auto;
  font-size: 22px;
}

.latest-posts-container > .index-blog-list-title--style > li > a > * + * {
  font-size: var(--size-28);
}

.hero-header-h1--style {
  font-weight: 900;
  color: var(--primary-blue);
  color: #333;
  color: #ffffff;
  background: #fadb5f;
  background: #fab8d9;
  background: #3ebd93;
  background: #0c6b58;
  background: #421987;
  background: #01337d;
  background: #2e2282;

  max-width: fit-content;
  max-width: -moz-max-content; /* Firefox/Gecko */
  max-width: -webkit-max-content; /* Chrome */

  padding: 24px;

  line-height: 1.2;
  letter-spacing: -1.8px;

  margin: 24px 0px !important;
}

.hero-header-h1--layout {
  padding: 24px;
}

.work-list-card {
  background: var(--card-background-white);

  box-shadow: var(--shadow-large);
  border-radius: 8px;
  padding: 0px;
}

.work-list-card:hover {
  box-shadow: var(--shadow-medium);
}

.work-container {
  grid-column: 1 / -1;
}

/* Desktop Media Query */
@media screen and (min-width: 960px) {
  .main-parent {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    gap: 16px;
    grid-template-rows: auto;
  }

  .hero-container {
    grid-column: 1 / 12;
    grid-row: 1 / 2;
  }

  .work-list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30.5%, 1fr));
    grid-gap: 48px;
  }

  .latest-posts-container {
    grid-column: 1 / -1;
  }

  .quote-container {
    grid-column: 1/ -1;
  }

  .quote-container > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 48px;
  }

  .quote-container > div > * > * + * {
    margin-top: 8px;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 48px;
    flex-direction: row;
  }

  .hero-children-container > ul {
    margin-right: 40px;
  }

  .hero-header-h1--style {
    font-size: var(--size-64);
  }

  .hero-children-container {
    align-items: center;
  }

  .work-title,
  .h2-section-title {
    font-size: var(--size-40);
    margin-bottom: 40px;
  }

  .hero-bio-bg {
    background-color: var(--white-opacity-80);
  }

  /* home page blog list margin */
  .blog-list-item {
    margin: 0px;
  }

  main > * + * {
    margin: 32px 0px;
  }

  .decoration-dots-header--layout {
    z-index: 2;
    margin-left: -4.5em;
    /* margin-top: 3em; */
    margin-top: 7em;
  }

  .hero-header-parent {
    display: flex;
    flex-direction: row;
    box-sizing: content-box;
  }
}

/* 1/1.3 Scaled Size Hero Font Size */
@media screen and (min-width: 1440px) {
  .hero-header-h1--style {
    font-size: var(--size-64);
  }
}

/* 1x1 Pixel Size Hero Font Size */
@media screen and (max-width: 1440px) {
  .hero-header-h1--style {
    font-size: var(--size-56);
  }

  /*   hr {
    margin: 0px 0px;
  } */
}

/* Narrow screens, tablets & phones */
@media screen and (max-width: 960px) {
  .hero-children-container > ul {
    margin-right: 24px;
  }

  .hero-header-h1--style {
    font-size: var(--size-40);

    letter-spacing: -0.6px;
  }

  .hero-children-container {
    align-items: center;
  }

  .hero-children-container {
    display: flex;
    flex-direction: column-reverse;
  }

  /*   .latest-posts-container {
    padding-top: 24px;
    margin-top: 72px;
  } */

  .work-title {
    font-size: var(--size-32);
    margin-bottom: 24px;
  }

  .top-parent-container {
    padding-bottom: 96px;
  }

  .quote-container {
    margin-top: 24px;
  }

  .hero-header-h1--style {
    padding: 24px 8px;
  }

  .decoration-dots-header--layout {
    z-index: 1;
    /* margin-left: -4.5em; */
    /* margin-top: 3em; */
    /* padding-top: 4em; */
    transform: rotate(180deg);
    margin-bottom: 32px;
  }

  .hero-header-parent {
    display: flex;
    flex-direction: column;
  }
}

@media all and (max-width: 960px) and (prefers-color-scheme: light) {
  .nav-list {
    border: 1px solid var(--card-background-white);
  }
}

@media (prefers-color-scheme: light) {
  .decoration-dots--color {
    color: #2cb1bc;
  }

  .current-status-text {
    font-weight: bold;
    color: var(--primary-blue);
    border-bottom: 2px solid var(--primary-blue);
  }
}

@media (prefers-color-scheme: dark) {
  .hero-header-h1--style {
    color: var(--dm-white-text);
    background: inherit;
    padding-left: 0px;
  }
  .decoration-dots-header--layout {
    /* opacity: 0.3; */
    color: #19c0cf;
  }
}
</style>
