<template>
  <figure class="img-container-right">
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
.img-container-right {
  /* Moves image 50% to the right */
  /*   transform: translateX(50%); */
  margin-left: 40%;
  width: 48vw;
}
</style>