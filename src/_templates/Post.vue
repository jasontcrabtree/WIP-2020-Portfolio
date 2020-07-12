<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        content
        description
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
      // meta: [{ name: "description", content: this.$page.post.description }]
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
        {
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          name: 'twitter:creator',
          content: '@jasontcrabtree',
        },
        {
          property: 'og:description',
          cotent: this.$page.post.description,
        },
        {
          property: 'og:image',
          content:
            this.$page.post.image ||
            'https://res.cloudinary.com/jasontcrabtree/image/upload/v1594587665/Portfolio-2020/social-card.png',
        },
      ],
    };
  },
};
</script>

<template>
  <layout>
    <article class="blog-post--layout blog-post-type">
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
    </article>
  </layout>
</template>

<style scoped>
.blog-post-type {
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  font-weight: 400;
}

h1 {
  font-family: 'p22-mackinac-pro', Georgia, serif;
  font-weight: 800;
}

.blog-post--layout {
  grid-row-start: 3;
  grid-column: 1 / -1;
  margin: 0px;
  max-width: 34rem;
  width: auto;
}

.post-title-container {
  margin: 16px 0;
  padding-top: 8px;
}

.blog-post-title--style {
  font-weight: 900;
}

.post-container > ol > li,
.post-container ul > li {
  padding-bottom: var(--size-16);
}

@media screen and (max-width: 960px) {
  p {
    max-width: 48ch;
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
