<template>
  <img :src="gifSource" :alt="altGIF" />
</template>

<script>
export default {
  props: {
    gifSource: { type: String },
    altGIF: { type: String }
  }
};
</script>

<style>
</style>