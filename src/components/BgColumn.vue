<template>
  <div class="background-elem"></div>
</template>

<script></script>

<style scoped>
.background-elem {
  grid-column: 8 / 11;
  grid-row: 1 / -1;

  z-index: -1;
  margin-top: -96px;
}

@media (prefers-color-scheme: light) {
  .background-elem {
    background: linear-gradient(180deg, #fec7b2 0%, #df7d57 100%);
  }
}
@media (prefers-color-scheme: dark) {
  .background-elem {
    background: linear-gradient(180deg, #a12e00 0%, #922900 100%);
  }
}
</style>
