<template>
  <Layout>
    <main class="main-parent">
      <section class="hero-container">
        <!-- <h2 class="hero-h2">Jason Crabtree</h2> -->
        <h1 class="hero-header-h1--style">
          UX Designer &
          <br />Functional Design Enthusiast
        </h1>
        <div class="hero-children-container">
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
          <p class="hero-bio">
            Hello, I’m Jason. I'm a Designer interested in thoughtfully,
            creatively solving meaningful problems. I’m motivated by
            mission-driven work, shared values and a diverse, welcoming and
            inclusive workplace culture.
          </p>
        </div>
        <hr />
      </section>

      <section class="work-container" id="work">
        <h2 class="work-title">Case Studies, Visuals & Dribbbles</h2>
        <ul class="work-list-container">
          <WorkList v-for="edge in $page.allWork.edges" :key="edge.node.id" :work="edge.node" />
        </ul>
      </section>
    </main>
    <BgColumn />
  </Layout>
</template>

<script>
import WorkList from "@/components/WorkList";
import BgColumn from "@/components/BgColumn";
import Email from "~/assets/svgs/email.svg";
import Twitter from "~/assets/svgs/twitter.svg";
import Github from "~/assets/svgs/github.svg";
import Dribbble from "~/assets/svgs/dribbble.svg";
import RSS from "~/assets/svgs/rss.svg";

export default {
  components: {
    WorkList,
    BgColumn,
    Email,
    Twitter,
    Github,
    Dribbble,
    RSS
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
  }
}
</page-query>

<style scoped>
/* timeToRead */
.background-elem {
  opacity: 0.8;
}

.hero-children-container {
  display: flex;
  flex-direction: row;
}

.hero-bio {
  font-size: 20px;

  letter-spacing: -0.4px;

  max-width: 48ch;
  width: auto;
}

.hero-header-h1--style {
  font-weight: 900;

  line-height: 1.1;
  letter-spacing: -1.8px;
  /* color: var(--primary-blue); */
}

.hero-social-list {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  padding-inline-start: 0px;
}

.hero-social-list > * {
  padding: 8px 0px;
}

.hero-container > * {
  padding: 16px 0px;
}

hr {
  border: 0px;
  border-top: solid #fec7b2 4px;
  width: 32%;
  position: absolute;
  margin: 32px 0px;
}

.work-list-card {
  background: #f8f9fa;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0px;
}

.work-list-card:hover {
  box-shadow: 0 8px 12px 0 hsla(0, 0%, 0%, 0.2);
  /* box-shadow: 0 8px 12px 0 hsla(258, 100%, 25%, 0.2); */
}

.work-container {
  margin-top: 72px;
  grid-column: 1 / -1;
}

@media screen and (min-width: 920px) {
  .hero-container {
    grid-column: 1 / 11;
    grid-row: 1 / 2;
  }
  .work-list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-gap: 48px;
  }
  .main-parent {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    gap: 16px;

    grid-template-rows: auto;
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

  .work-title {
    font-size: 40px;
    margin-bottom: 40px;
  }

  .hero-bio {
    background-color: rgb(255, 255, 255, 0.8);
  }
}

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

  .hero-social-list {
    display: flex;
    justify-items: space-around;
  }

  .hero-social-list > * {
    margin: 16px;
    margin-bottom: 0px;
    justify-items: space-around;
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
