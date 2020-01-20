<template>
  <li class="list-item">
    <hr class="line" />
    <p class="date" v-html="post.date" />
    <h1 class="title" v-html="post.title" />
    <p class="description" v-html="post.description" />
    <!-- <b>{{ post.timeToRead }} min read</b> &nbsp; -->
    <g-link :to="post.path" class="read">Read blog post</g-link>
  </li>
</template>

<script>
export default {
  props: ['post'],
};
</script>

<style scoped>
.list-item {
  /* padding: 8px 0px; */
  margin: 40px 0px;
  padding: 16px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 8px;
}

.list-item > * {
  margin: 8px 0;
}

hr {
  border: 0px;
  /* border-top: solid #0000001a 2px; */
  /* box-shadow: 0 2px 4px 0 #0000001a; */
  /* width: 32%; */
  /* position: absolute; */
  /* margin: 40px 0px; */
}

.read {
  font-size: 20px;
}
</style>
