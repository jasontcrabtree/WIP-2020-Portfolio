<template>
  <layout class="blog-parent__container--layout">
    <main class="blog-content__container--layout">
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
.blog-parent__container--layout {
  display: grid;

  padding: 2rem 0px;

  grid-gap: 1rem;
}

.parent-container {
  margin: 48px 10%;
}

.parent-container {
  grid-template-columns: repeat(11, 1fr);
}

.blog-content__container--layout {
  display: grid;
  grid-column: 2 / 11;
}

img {
  /* grid-column: 2 / 9; */
}

p {
  max-width: 56ch;
  width: auto;
}
</style>
