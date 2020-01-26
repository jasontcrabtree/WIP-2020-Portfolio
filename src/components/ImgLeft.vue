<template>
  <figure class="img-container-left">
    <g-image :src="imageSrc"></g-image>
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: { type: String },
    caption: { type: String }
  }
};
</script>

<style>
.img-container-left {
  margin-left: -15%;
  width: 48vw;
}
</style>