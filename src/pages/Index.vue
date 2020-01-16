<template >
  <Layout class="page-container">
    <main class="home-container--layout">
      <h1 class="hero-header-h1--style hero-header-h1--layout">
        UX Designer &
        <br />Functional Design Enthusiast
      </h1>

      <div class="body-decoration">
        <div class="body-decoration"></div>
      </div>

      <section class="work-container">
        <h2>Case Studies, Visuals & Dribbbles</h2>
        <ul class="work-list-container">
          <WorkList v-for="edge in $page.allWork.edges" :key="edge.node.id" :work="edge.node" />
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
import WorkList from "@/components/WorkList";

export default {
  components: {
    WorkList
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
.home-container--layout {
  margin: 96px 4.5rem;
  /* display: grid;
  grid-template-columns: repeat(13, 1fr); */
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-column: 1 / 13;
  grid-template-rows: repeat(8, auto);
}
/*
.header-two {
  grid-column-start: 1;
  grid-column-end: 10;
} */

.nav {
  /* grid-column: 10 / 11; */
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: fit-content;
}

.header {
  display: flex;
  /* grid-column: 9 / 12 !important; */
}

.hero-header-h1--style {
  font-weight: 900;
  background: var(--primary-brand-500);
  -webkit-background-clip: text;
  background-clip: none;
  -webkit-text-fill-color: transparent;
  font-size: 72px;
  line-height: 1.2;
  letter-spacing: -1.8px;
}

.hero-header-h1--layout {
  grid-column: 1 / 13;
  grid-row-start: 1;
}

.work-list-card {
  background: #f8f9fa;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.work-container {
  display: grid;
  grid-column: 1 / 14;
  margin-top: 4rem;
  grid-row-start: 2;
}

.work-container > .work-list-card > p {
  margin-block-end: 0px;
  margin-bottom: 0px;
}

.page-container {
  display: grid;
}

.body-decoration {
  display: inline-flex;
  /* grid-column: 4 / 6; */
  grid-row: -1 / 1;

  top: 0;
  bottom: 0;
  height: 100vh;
  background: peachpuff;
}

.work-list-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
}
</style>
