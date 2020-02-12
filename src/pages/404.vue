<template>
  <layout>
    <main class="four-oh-four-parent">
      <header class="four-oh-four-header">
        <h1>Shit! Something's broken 🛠</h1>
      </header>
      <section>
        <p>
          Uhh, the link you clicked on didn't work. I better fix that. In the
          meantime, let's give you some sweet content that actually works.
        </p>
      </section>
      <g-link to="/">Return Home</g-link>

      <SplitContent
        left="true"
        leftTitle="Hello World"
        leftImage="https://picsum.photos/601/301"
        leftAlt="Hello Picsum"
        leftCaption="Understanding art takes more than just knowing different styles of art. To know and understand art you have to unlearn everything you know about art because what you know as “art” is through someone's eyes (the artist)."
        right="true"
        rightTitle="Hello World"
        rightImage="https://picsum.photos/600/300"
        rightAlt="Hello Picsum"
        rightCaption="Understanding art takes more than just knowing different styles of art. To know and understand art you have to unlearn everything you know about art because what you know as “art” is through someone's eyes (the artist)."
      />
    </main>
  </layout>
</template>

<script>
import SplitContent from "@/components/content/SplitContent";

export default {
  components: {
    SplitContent
  },
  metaInfo: {
    title: "404"
  }
};
</script>
<style scoped>
.four-oh-four-parent {
  grid-column: 1 / -7;
}

.four-oh-four-parent > * {
  margin-bottom: 72px;
}
</style>
