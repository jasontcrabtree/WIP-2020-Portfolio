<template>
  <li class="post-list-item">
    <hr class="line" />
    <p class="date" v-html="post.date" />
    <h1 class="title" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <b>{{ post.timeToRead }} min read</b> &nbsp;
    <g-link :to="post.path" class="read">Read blog post</g-link>
  </li>
</template>

<style scoped></style>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.work-list-card {
  background: lightgoldenrodyellow;
  border: 1px solid red;
  padding: 24px !important;
  margin: 24px !important;
}
</style>