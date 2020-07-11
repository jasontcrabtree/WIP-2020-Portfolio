<script>
export default {
  components: {},
  metaInfo: {
    title: "404"
  }
};
</script>

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
    </main>
  </layout>
</template>

<style scoped>
.four-oh-four-parent {
  grid-column: 1 / -7;
}

.four-oh-four-parent > * {
  margin-bottom: var(--size-72);
}
</style>
