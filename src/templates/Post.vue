<template>
  <layout>
    <article class="blog-post--layout">
      <br />
      <span>
        <g-link to="/blog" class="link">&larr; Blog</g-link>
        <span>
          /
          {{ $page.post.title }}
        </span>
      </span>

      <div class="post-title-container">
        <h1 class="blog-post-title--style">{{ $page.post.title }}</h1>
      </div>
      <VueRemarkContent class="post-container" />
      <br />
    </article>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        content
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  components: {
    // PostList
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.description }]
    };
  }
};
</script>

<style>
.blog-post--layout {
  grid-row-start: 3;
  grid-column: 2/ 9;
}

.post-title-container {
  margin: 16px 0;
  padding-top: 8px;
}

.blog-post-title--style {
  font-weight: 900;
}

@media screen and (max-width: 960px) {
  p {
    max-width: 40ch;
    width: auto;
  }

  article {
    margin-bottom: 96px;
  }

  .blog-post-title--style {
    font-size: var(--size-32);
  }
}

@media screen and (min-width: 920px) {
  .blog-post-title--style {
    font-size: var(--size-48);
  }
}
</style>
