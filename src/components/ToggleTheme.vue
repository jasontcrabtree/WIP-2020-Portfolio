<template>
  <button
    role="button"
    aria-label="Toggle dark/light"
    @click.prevent="toggleTheme"
    class="toggle-theme"
  >Dark Mode</button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
    };
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme;
      // This is using a script that is added in index.html
      window.__setPreferredTheme(this.darkTheme ? "dark" : "light");
    },
  },
  mounted() {
    if (window.__theme == "dark") this.darkTheme = true;
  },
};
</script>

<style>
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;
  box-shadow: none;
  padding: 0px;
  margin: 0px;
}
</style>