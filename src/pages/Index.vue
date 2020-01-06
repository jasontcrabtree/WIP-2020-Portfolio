<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <main>
      <h1>A Wee Gridsome Blog</h1>

      <p>Description, description, description</p>

      <section class="posts">
        <PostList
          v-for="edge in $page.allPost.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
    </main>
  </Layout>
</template>

<script>
import PostList from '@/components/PostList';

export default {
  components: {
    PostList
  },
  metaInfo: {
    title: 'JC Write Words'
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

<style>
.home-links a {
  margin-right: 1rem;
}

main {
  background: darkblue;
  padding: 16px;
}
</style>
