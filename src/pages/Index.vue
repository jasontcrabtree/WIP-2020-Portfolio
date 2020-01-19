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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
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

export default {
  components: {
    WorkList,
    BgColumn
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
        timeToRead
        description
        date (format: "D MMMM YYYY")
        path
        image
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

.hero-bio {
  font-size: 20px;

  letter-spacing: -0.4px;

  max-width: 48ch;
  width: auto;
}

.hero-header-h1--style {
  font-weight: 900;

  line-height: 1.2;
  letter-spacing: -1.8px;
  color: var(--primary-blue);
}

.hero-social-list {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  padding-inline-start: 0px;
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
    grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
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
    align-items: top;
  }
  .work-title {
    font-size: 40px;
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 919px) {
  .hero-children-container > ul {
    margin-right: 24px;
  }

  .hero-header-h1--style {
    font-size: 48px;
  }

  .hero-children-container {
    align-items: center;
  }

  .work-title {
    font-size: 32px;
    margin-bottom: 24px;
  }
}
</style>
