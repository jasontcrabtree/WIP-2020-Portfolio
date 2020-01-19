<template>
  <figure>
    <g-image :src="image"></g-image>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    image: { type: String },
    caption: { type: String }
  }
};
</script>

<style scoped>
img {
  width: 1000px !important;
  border: 12px solid tomato;
  margin: 24px;
}
</style>