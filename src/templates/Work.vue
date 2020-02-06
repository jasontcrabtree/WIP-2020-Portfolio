<template>
  <layout>
    <main class="work-post-parent--layout">
      <br />
      <g-link to="/" class="link">&larr; Go Back</g-link>
      <!-- <img :src="work.image" :alt="work.title" /> -->
      <div class="work-title-container">
        <h1 class="work-title--style">{{ $page.work.title }}</h1>
        <!-- <p class="post-date">{{ $page.work.date }} | {{ $page.work.timeToRead }} min read</p> -->
      </div>
      <article>
        <VueRemarkContent class="work-container" />
      </article>
      <!--       <article v-html="$page.work.content" class="post-content"></article> -->
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
    }
}
</page-query>

<script>
// timeToRead
export default {
  // components: {
  //   BgColumn,
  // },
  metaInfo() {
    return {
      title: this.$page.work.title,
      meta: [{ name: "description", content: this.$page.work.excerpt }]
    };
  }
};
</script>

<style>
.work-post-parent--layout {
  grid-column: 2 / 9;
}

.work-container {
  display: grid;
  grid-column: 2 / 9;
}

.work-title-container > * {
  /* margin: 8px 0; */
  margin: 16px 0px;
  /* padding-bottom: 8px; */
}

article > * + * {
  margin-top: 1.4em;
}

@media screen and (max-width: 960px) {
  p {
    max-width: 40ch;
    width: auto;
  }

  article {
    margin-bottom: 96px;
  }

  .work-title--style {
    font-size: var(--size-32);
  }
}
</style>
