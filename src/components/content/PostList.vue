<template>
  <li class="blog-list-item post-list-card card-details">
    <g-link :to="post.path" class="read">
      <p class="date--style" v-html="post.date" />
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
  margin: 40px 0px;
  padding: 32px 24px;
  box-shadow: var(--shadow-medium);
  border-radius: 8px;
}

.blog-list-item {
  background: var(--white-100);
}

.blog-list-item > * > * + * {
  margin: 8px 0;
}

.post-list-card > a:any-link {
  text-decoration: none;
  color: var(--text-black);
}

.post-list-card:hover {
  box-shadow: var(--shadow-small);
}

.card-title {
  color: var(--primary-blue);
}

.card-title {
  font-size: var(--size-28);
}

.post-link {
  color: var(--primary-link);
  text-decoration: underline;
  font-weight: bold;
}

@media screen and (max-width: 360px) {
}
</style>
