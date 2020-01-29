<template>
  <section class="img-container-split">
    <figure class="split-figure">
      <g-image :src="imageLeftSrc"></g-image>
      <figcaption>{{ captionLeft }}</figcaption>
    </figure>
    <figure>
      <g-image :src="imageRightSrc"></g-image>
      <figcaption>{{ captionRight }}</figcaption>
    </figure>
  </section>
</template>

<script>
export default {
  props: {
    imageLeftSrc: { type: String },
    imageRightSrc: { type: String },
    captionLeft: { type: String },
    captionRight: { type: String },
    alt: { type: String },
    source: { type: String },
    date: { type: String }
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
  .img-container-split {
    display: inline-flex;
    flex-direction: row;
    /* justify-content: space-between;
    justify-content: center; */
    justify-content: flex-start;

    padding: 1rem;

    /* width: 100vw; */
  }
  .split-figure:first-child {
    margin-left: -9.6%;
  }

  .img-container-split > * {
    width: 40vw;
  }

  .img-container-split > *:nth-child(1) {
    /* padding-right: 1rem; */
    margin-right: 1rem;
  }
}
</style>