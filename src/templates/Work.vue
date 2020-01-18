<template>
  <layout>
    <main>
      <br />
      <g-link to="/" class="link">&larr; Go Back</g-link>

      <!-- <img :src="work.image" :alt="work.title" /> -->
      <div class="post-title">
        <h1>{{ $page.work.title }}</h1>
        <p class="post-date">{{ $page.work.date }} | {{ $page.work.timeToRead }} min read</p>
      </div>
      <div class="post-content">
        <p v-html="$page.work.content"></p>
      </div>
    </main>
  </layout>
</template>

<page-query>
query Work ($path: String!) {
    work: work (path: $path) {
      image
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
  max-width: 72ch;
  width: auto;
}
</style>
