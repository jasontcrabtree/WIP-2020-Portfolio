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
    /*   background: linear-gradient(180deg, #ededf1 0%, #e0dff3 100%); */
    background: linear-gradient(180deg, #fec7b2 0%, #df7d57 100%);
    /* background: linear-gradient(180deg, #fce588 0%, #f0b429 100%); */
  }
}
@media (prefers-color-scheme: dark) {
  .background-elem {
    background: linear-gradient(180deg, #0e7c86 0%, #1e4d53 100%);
  }
  /*   .background-elem {
    background: linear-gradient(180deg, #a12e00 0%, #922900 100%);
  } */
}
</style>
