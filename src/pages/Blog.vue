<template>
  <layout>
    <main class="blog-main">
      <header>
        <h1>Personal Blog</h1>
        <p class="large-paragraph-text">
          A personal and professional blog by
          <a
            href="http://twitter.com/jasontcrabtree"
          >@jasontcrabtree.</a>
          Future topics likely to include design, product strategy, front-end
          code and general stuff about tech as it relates to my view on ethical,
          sustainable good for the world. Plus whatever else I'm thinking about
          related to humanities and society!
        </p>
      </header>

      <section class="blog-list-section--layout">
        <h2>Latest Posts:</h2>
        <ul class="posts">
          <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
        </ul>
      </section>
    </main>
    <BgColumn />
  </layout>
</template>

<script>
import PostList from "@/components/PostList";
import BgColumn from "@/components/BgColumn";

export default {
  components: {
    PostList,
    BgColumn
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
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<style scoped>
/* timeToRead */
/* .background-elem {
  opacity: 0.5;
}
 */
.blog-main {
  grid-column: 2 / 8;
}

header > * {
  margin-bottom: 24px;
}

.blog-list-section--layout {
  margin-top: 48px;
}

.blog-list-section--layout > h2 {
  margin-bottom: -16px;
}
</style>
