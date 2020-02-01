<template>
  <layout>
    <header class="contact-header">
      <h1>Contact:</h1>
      <p>
        Hello! Want to chat? I'm on twitter!
        <a href="http://twitter.com/jasontcrabtree">@jasontcrabtree</a>
      </p>
    </header>
    <main>
      <div id="shots"></div>
      <g-image
        src="~/cover-slack.png"
        class="cover-image"
        with="500"
        blur="40"
      />
    </main>
  </layout>
</template>

<script>
export default {
  components: {
    // ImgSmall
  },
  metaInfo: {
    title: 'Contact',
  },
};
</script>

<style>
.contact-header {
  grid-column: 1 / 7;
}
</style>
