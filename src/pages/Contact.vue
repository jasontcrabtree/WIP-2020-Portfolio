<template>
  <layout>
    <header class="contact-header">
      <h1>Contact:</h1>
      <p>
        Hello! Want to chat? I'm on twitter!
        <a
          href="http://twitter.com/jasontcrabtree"
        >@jasontcrabtree</a>
      </p>
    </header>
    <main>
      <ImgSmall image="https://picsum.photos/536/354" caption="People laughing while eating salad" />
    </main>
  </layout>
</template>

<script>
import ImgSmall from "@/components/ImgSmall";

export default {
  components: {
    ImgSmall
  }
};
</script>

<style>
.contact-header {
  grid-column: 1 / 7;
}
</style>
