<template>
  <Layout>
    <main class="home-container--layout">
      <h1
        class="hero-header-h1--style hero-header-h1--layout"
      >UX Designer & Functional Design Enthusiast</h1>

      <!--       <li class="post-list-item">
        <hr class="line" />
        <p class="date" v-html="work.date" />
        <h1 class="title" v-html="work.title" />
        <p class="description" v-html="work.description" />
        <b>{{ work.timeToRead }} min read</b> &nbsp;
        <g-link :to="work.path" class="read">Read work</g-link>
      </li>-->

      <section>
        <ul class="posts">
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
    // PostList
  },
  metaInfo: {
    title: "Home, Jason Crabtree"
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
  grid-column: 1 / 10;
}
/*
.header-two {
  grid-column-start: 1;
  grid-column-end: 10;
} */

.nav {
  grid-column: 10 / 11;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: fit-content;
}

.header {
  display: flex;
  grid-column: 9 / 12 !important;
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
  grid-column: 1 / 10;
}

.work-list-card {
  background: lightgoldenrodyellow;
  border: 1px solid red;
}
</style>
