<template>
  <layout>
    <article>
      <br />
      <span>
        <g-link to="/blog" class="link">&larr; Blog</g-link>
        <span>
          /
          {{ $page.post.title }}
        </span>
      </span>

      <div class="post-info-container">
        <h1 class="blog-post-title--style">{{ $page.post.title }}</h1>

        <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
      </div>
      <VueRemarkContent class="post-container" />
      <!-- <div class="post-content"> -->
      <!-- <p v-html="$page.post.content" class="post-container"></p> -->
      <!-- </div> -->
      <br />
      <g-link to="/">{{ $page.post.title }} Test</g-link>
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
// import PostList from "@/components/PostList";
// timeToRead

export default {
  components: {
    // PostList
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.excerpt }]
    };
  }
};
</script>

<style>
p {
  max-width: 56ch;
  width: auto;
}

article {
  grid-row-start: 3;
  grid-column: 2/ 9;
}

.post-info-container {
  margin: 16px 0;
  padding-top: 8px;
}

.post-container > p {
  margin: 24px 0;
}

img {
  width: 40vw;
}

.blog-post-title--style {
  font-weight: 900;
}

@media screen and (max-width: 919px) {
  p {
    max-width: 40ch;
    width: auto;
    font-size: 20px;
  }

  article {
    margin-bottom: 96px;
  }

  .blog-post-title--style {
    font-size: 40px;
  }
}

@media screen and (min-width: 920px) {
  .blog-post-title--style {
    font-size: 48px;
  }
}
</style>
