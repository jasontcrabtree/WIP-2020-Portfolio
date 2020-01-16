<template>
  <li class="post-list-item work-list-card">
    <hr class="line" />
    <p class="date" v-html="work.date" />
    <h1 class="title" v-html="work.title" />
    <p class="description" v-html="work.description" />
    <b>{{ work.timeToRead }} min read</b> &nbsp;
    <g-link :to="work.path" class="read">Read blog post</g-link>
  </li>
</template>

<style scoped></style>

<script>
export default {
  props: ["work"]
};
</script>
