<template>
  <div class="background-elem"></div>
</template>

<script></script>

<style scoped>
.background-elem {
  grid-column: 9 / 11;
  grid-row: 1 / -1;

  z-index: -1;
  margin-top: -96px;
}

@media (prefers-color-scheme: light) {
  .background-elem {
    background: linear-gradient(
      180deg,
      var(--blue-white-100) 0%,
      var(--med-blue) 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .background-elem {
    background: linear-gradient(180deg, #0e7c86 0%, #1e4d53 100%);
  }
}
</style>
