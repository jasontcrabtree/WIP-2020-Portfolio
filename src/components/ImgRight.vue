<template>
  <figure class="img-container-right">
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
  .img-container-right {
    /* Moves image 50% to the right */
    /*   transform: translateX(50%); */
    margin-left: 40%;
    width: 48vw;
  }
}
</style>