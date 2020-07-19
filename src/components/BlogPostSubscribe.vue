<template>
  <div class="blog-post-subscribe-field">
    <h2>Enjoying the post?</h2>
    <Subscribe />
  </div>
</template>

<script>
import Subscribe from "@/components/utils/Subscribe";

export default {
  components: {
    Subscribe
  }
};
</script>

<style>
.blog-post-subscribe-field {
  background: var(--blue-white-100);
  padding: 2rem;
}
</style>