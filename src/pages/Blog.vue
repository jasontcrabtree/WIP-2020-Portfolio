<template>
  <layout>
    <main class="blog-main">
      <header>
        <h1>Personal Blog</h1>
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
.blog-main {
  grid-column: 2 / 8;
}
</style>
