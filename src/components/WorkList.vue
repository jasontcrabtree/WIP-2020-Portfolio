<template>
  <li class="post-list-item work-list-card">
    <img :src="work.image" :alt="work.title" />
    <h1 class="title" v-html="work.title" />
    <p class="date" v-html="work.date" />
    <p class="description" v-html="work.description" />
    <b>{{ work.timeToRead }} min read</b> &nbsp;
    <g-link :to="work.path" class="read">Read blog post</g-link>
  </li>
</template>

<style scoped></style>

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
export default {
  props: ["work"]
};
</script>
