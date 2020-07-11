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
export default {
  // components: {
  // },
  metaInfo() {
    return {
      title: this.$page.work.title,
      meta: [{ name: "description", content: this.$page.work.excerpt }]
    };
  }
};
</script>

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

<style>
.work-post-parent--layout {
  grid-column: 2 / 9;
}

.work-container {
  display: grid;
  grid-column: 2 / 9;
}

.work-title-container > * {
  margin: 16px 0px;
}

.work-container > ol,
.work-container > ul {
  padding-inline-start: 24px;
}

.work-container > ol > *,
.work-container > ul > * {
  padding-bottom: var(--size-8);
}

img {
  border: 1px solid var(--grey-200);
}

article > * + * {
  margin-top: 1.4em;
}

.split-title {
  margin-top: 2rem;
  margin-bottom: -1rem;
}

@media screen and (max-width: 960px) {
  .work-title--style {
    font-size: var(--size-32);
  }
}
</style>
