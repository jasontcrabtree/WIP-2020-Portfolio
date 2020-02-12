<template>
  <figure class="img-container-left">
    <g-image :src="imageSrc" class="alt"></g-image>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: { type: String },
    caption: { type: String },
    alt: { type: String }
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
  .img-container-left {
    margin-left: -15%;
    width: 48vw;
  }
}
</style>