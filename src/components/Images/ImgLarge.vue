<template>
  <figure class="large-image--layout">
    <g-image :src="imageSrc" alt="alt"></g-image>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: { type: String },
    caption: { type: String },
    alt: { type: String },
    source: { type: String },
    date: { type: String }
  }
};
</script>


<style scoped>
figcaption {
  font-style: italic;
}

@media screen and (min-width: 960px) {
  .large-image--layout {
    margin: 40px 0px;
    margin-right: calc(-40vw + 61.9%);
  }
}
</style>
