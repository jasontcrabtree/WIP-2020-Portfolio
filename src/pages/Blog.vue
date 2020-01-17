<template>
  <layout class="blog-parent__container--layout">
    <main class="blog-content__container--layout">
      <header>
        <h1>Blog</h1>
        <p>
          A personal & professional blog by
          <a
            href="http://twitter.com/jasontcrabtree"
          >@jasontcrabtree.</a> Future topics likely to include design, product strategy, front-end code and general stuff about tech as it relates to my view on ethical, sustainable good for the world. Plus whatever else I'm thinking about related to humanities and society!
        </p>
      </header>

      <section>
        <ul class="posts">
          <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
        </ul>
      </section>
    </main>
  </layout>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "Jason is writing words online"
  }
};
</script>

<page-query>
query {
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
.blog-parent__container--layout {
  display: grid;

  /* padding: 2rem 0px; */

  grid-gap: 1rem;
}

.parent-container {
  margin: 48px 10%;
}

.parent-container {
  grid-template-columns: repeat(11, 1fr);
  margin: 48px 10%;
}

.blog-content__container--layout {
  display: grid;
  grid-column: 1 / 11;
  grid-row: 2;
  margin: 48px 10%;
}

p,
ul {
  max-width: 64ch;
  width: auto;
}
</style>
