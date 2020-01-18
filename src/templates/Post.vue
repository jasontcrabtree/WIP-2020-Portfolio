<template>
  <layout>
    <article>
      <span>
        <g-link to="/blog" class="link">&larr; Blog</g-link>
        <span>
          /
          {{ $page.post.title }}
        </span>
      </span>

      <div class="post-info-container">
        <h1>{{ $page.post.title }}</h1>

        <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
      </div>
      <!-- <div class="post-content"> -->
      <p v-html="$page.post.content" class="post-container"></p>
      <!-- </div> -->
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
        timeToRead
    }
}
</page-query>

<script>
export default {};
</script>

<style>
p {
  max-width: 56ch;
  width: auto;
}

article {
  grid-column: 2/ 8;
}

.post-info-container {
  margin: 16px 0;
  padding-top: 8px;
}

.post-container > p {
  margin: 24px 0;
}

@media screen and (max-width: 919px) {
  p {
    max-width: 40ch;
    width: auto;
    font-size: 20px;
  }
}
</style>
