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
  margin: 96px 0px;
  /* display: grid;
  grid-template-columns: repeat(13, 1fr); */
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-column: 1 / 13;
  grid-template-rows: repeat(8, auto);
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
  font-size: 64px;
  /* font-size: min(max(40px, 5vw), 72px); */
  word-wrap: break-word;
  line-height: 1.2;
  letter-spacing: -1.8px;
}

.hero-header-h1--layout {
  grid-column: 1 / 13;
  grid-row-start: 1;
}

h2 {
  font-size: min(max(32px, 5vw), 40px);
  margin-bottom: 1rem;
}

.work-list-card {
  background: #f8f9fa;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
}

@media (prefers-color-scheme: dark) {
  .work-list-card {
    background: #0d0b1b;
    color: #aba5e6;
  }
}

.work-container {
  /* display: grid; */
  grid-column: 1 / 14;
  margin-top: 4rem;
  grid-row-start: 2;
  margin: 4rem 0;
}

.work-container > .work-list-card > p {
  margin-block-end: 0px;
  margin-bottom: 0px;
}

.work-list-card > p,
.work-list-card > * > p {
  margin-bottom: 8px;
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
  grid-auto-flow: dense;
  /* grid-template-columns: repeat(auto-fill, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
  grid-gap: 48px;
}
</style>
