<template>
  <li class="blog-list-item post-list-card card-details">
    <g-link :to="post.path" class="read">
      <p class="card-date" v-html="post.date" />
      <h3 class="card-title" v-html="post.title" />
      <p class="description" v-html="post.description" />
      <!-- <b>{{ post.timeToRead }} min read</b> &nbsp; -->
      <span class="post-link">Read blog post</span>
    </g-link>
  </li>
</template>

<script>
export default {
  props: ["post"]
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
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<style scoped>
.blog-list-item {
  /* padding: 8px 0px; */
  margin: 40px 0px;
  padding: 32px 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.blog-list-item {
  background: #fff;
}

.blog-list-item > * > * + * {
  margin: 8px 0;
}

.post-list-card > a:any-link {
  text-decoration: none;
  color: var(--text-black);
}

.post-list-card:hover {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.25);
  /* box-shadow: 0 8px 12px 0 hsla(258, 100%, 25%, 0.2); */
}

.card-title {
  color: var(--primary-blue);
}

.card-title {
  font-size: 1.6rem;
}

.post-link {
  color: var(--primary-link);
  text-decoration: underline;
  font-weight: bold;
}

.card-date {
  color: var(--subheading-black);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
}
</style>
