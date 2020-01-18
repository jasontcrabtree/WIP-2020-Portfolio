<template>
  <layout>
    <main>
      <br />
      <span>
        <g-link to="/blog" class="link">&larr; Blog</g-link>
        <span>
          /
          {{ $page.post.title }}
        </span>
      </span>

      <div class="post-title">
        <h1>{{ $page.post.title }}</h1>
        <p class="post-date">{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
      </div>
      <div class="post-content">
        <p v-html="$page.post.content"></p>
      </div>
    </main>
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

<style scoped>
p {
  max-width: 56ch;
  width: auto;
}

main {
  grid-column: 2/ 8;
}
</style>
