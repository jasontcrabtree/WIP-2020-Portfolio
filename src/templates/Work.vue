<template>
  <layout>
    <main>
      <br />
      <g-link to="/" class="link">&larr; Go Back</g-link>

      <!-- <img :src="work.image" :alt="work.title" /> -->
      <div class="post-info-container">
        <h1>{{ $page.work.title }}</h1>
        <p class="post-date">{{ $page.work.date }} | {{ $page.work.timeToRead }} min read</p>
      </div>
      <article v-html="$page.work.content" class="post-content"></article>
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
/* p {
  max-width: 72ch;
  width: auto;
} */

/* header > * {
  margin-bottom: 24px;
} */

/* img {
  margin: 16px 0;
} */

main {
  grid-column: 1/ 8;
}

img {
  margin-left: -200px !important;
}

/* p {
  max-width: auto;
  width: 22ch;
} */

.post-info-container > * {
  margin: 8px 0;
  padding-bottom: 8px;
}

article > * + * {
  margin-top: 1.4em;
}
@media screen and (max-width: 919px) {
  p {
    max-width: 40ch;
    width: auto;
    font-size: 20px;
  }
}
</style>
