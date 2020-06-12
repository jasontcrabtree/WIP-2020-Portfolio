<template>
  <section class="split-columns-parent">
    <article v-if="left">
      <h3 class="split-title" v-if="leftTitle">{{ leftTitle }}</h3>
      <g-image v-if="leftImage && leftAlt" :src="leftImage" :alt="leftAlt"></g-image>
      <p v-if="leftCaption">{{ leftCaption }}</p>
    </article>
    <article v-if="right">
      <h3 class="split-title" v-if="rightTitle">{{ rightTitle }}</h3>
      <g-image v-if="rightImage && rightAlt" :src="rightImage" :alt="rightAlt"></g-image>
      <p v-if="rightCaption">{{rightCaption}}</p>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    left: { type: String },
    leftTitle: { type: String },
    leftImage: { type: String },
    leftCaption: { type: String },
    leftAlt: { type: String },

    right: { type: String },
    rightTitle: { type: String },
    rightImage: { type: String },
    rightCaption: { type: String },
    rightAlt: { type: String }
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
  .split-columns-parent {
    display: flex;
    flex-direction: row;
    gap: 48px;

    width: 156%;
  }

  .split-columns-parent > * {
    width: 44%;
    padding-right: var(--size-40);
  }

  .split-columns-parent > * > h3 {
    /* border-bottom: 4px solid var(--grey-200); */
    width: fit-content;
  }

  .split-columns-parent > * > img {
    max-height: 16rem;
    width: auto;
  }
}
</style>
