<template>
  <Layout>
    <main class="main-parent">
      <section class="hero-container">
        <h1 class="hero-header-h1--style">
          UX Designer and
          Functional
          <br />Design Enthusiast
        </h1>
        <div class="hero-children-container">
          <Social />
          <p class="hero-bio--layout hero-bio--bg large-paragraph-text">
            Hello, I’m Jason. I'm a Designer interested in thoughtfully,
            creatively solving meaningful problems. I’m motivated by
            mission-driven work, shared values and a diverse, welcoming and
            inclusive workplace culture.
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
              <span class="block-quote-callout">“</span>Jason has a creative but practical out of the box way of thinking and to top it off, a relaxed demeanor that makes you naturally feel at ease around him.
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
              <span class="block-quote-callout">“</span>When I think about Jason I think of his wealth of knowledge and intellect.
            </p>
            <p>He automatically creates a safe space to share, learn and collaborate; inviting others opinions before his own, Jason actively asks questions to understand the ‘why’ and seeks to see things from a different perspective.</p>
            <p>
              Jason has a creative yet pragmatic approach & you can rely on him to stand up for what’s right.
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
        <h2 class="h2-section-title">Latest Blog Posts</h2>
        <ul class="posts index-blog-list-title--style">
          <PostList
            v-for="edge in $page.allPost.edges.slice(0, 3)"
            :key="edge.node.id"
            :post="edge.node"
          />
        </ul>
      </section>

      <hr />

      <section class="latest-posts-container">
        <h2>Latest Dribbble Shots</h2>
        <DribbbleGallery />
      </section>
    </main>
    <BgColumn />
  </Layout>
</template>

<script>
import WorkList from "@/components/WorkList";
import PostList from "@/components/PostList";

import BgColumn from "@/components/BgColumn";
import Social from "@/components/Social";

import DribbbleGallery from "@/components/DribbbleGallery";

export default {
  components: {
    WorkList,
    BgColumn,
    Social,
    PostList,
    DribbbleGallery
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
  opacity: 0.8;
}

.hero-children-container {
  display: flex;
  flex-direction: row;
}

.hero-bio--layout {
  max-width: 48ch;
  width: auto;
}

/* .latest-posts-container > .index-blog-list-title--style {
   font-size: 28px;
} */

.latest-posts-container > .index-blog-list-title--style > li > a > * + * {
  font-size: 28px;
}

/* main
  > section.latest-posts-container
  > ul
  > li
  > a
  > h3 */
.hero-header-h1--style {
  font-weight: 900;
  color: var(--primary-blue);

  line-height: 1.1;
  letter-spacing: -1.8px;
}

.hero-container > * {
  padding: 16px 0px;
}

hr {
  border: 0px;
  border-top: solid #fec7b2 4px;
  width: 32%;
  margin: 40px 0px;
  grid-column: 1 / -1;
}

.work-list-card {
  background: #f8f9fa;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0px;
}

.work-list-card:hover {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.25);
}

.work-container {
  grid-column: 1 / -1;
}

/* Desktop Media Query */
@media screen and (min-width: 920px) {
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
    font-size: 64px;
  }

  .hero-children-container {
    align-items: center;
  }

  .work-title,
  .h2-section-title {
    font-size: 40px;
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
    margin: 1.6rem 0px;
  }
}

/* 1x1 Pixel Size Hero Font Size */
@media screen and (max-width: 1440px) {
  .hero-header-h1--style {
    font-size: 56px;
  }
}

/* 1/1.3 Scaled Size Hero Font Size */
@media screen and (min-width: 1440px) {
  .hero-header-h1--style {
    font-size: 72px;
  }
}

/* Narrow screens, tablets & phones */
@media screen and (max-width: 919px) {
  .hero-children-container > ul {
    margin-right: 24px;
  }

  .hero-header-h1--style {
    font-size: 40px;
    max-width: 88vw;
  }

  .hero-children-container {
    align-items: center;
  }

  .hero-children-container {
    display: flex;
    flex-direction: column-reverse;
  }

  .latest-posts-container {
    padding-top: 24px;
    margin-top: 72px;
  }

  .work-title {
    font-size: 30px;
    margin-bottom: 24px;
  }

  .card-title {
    font-size: 28px;
  }

  .top-parent-container {
    padding-bottom: 96px;
  }
}
</style>
