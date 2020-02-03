<template>
  <aside>
    <p>{{ $page.post.date }} | {{ readTime }} min read</p>
  </aside>
</template>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        id
        title
        content
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  props: {
    readTime: { type: String }
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
}
</style>