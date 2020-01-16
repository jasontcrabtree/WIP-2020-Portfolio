<template>
  <div class="default-layout">
    <header class="header header--debugging">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>-->
      <nav class="nav">
        <g-link class="nav-ul__link" to="/">Home</g-link>
        <g-link class="nav-ul__link" to="/contact/">Contact</g-link>
        <g-link class="nav-ul__link" to="/about/">About</g-link>
        <g-link class="nav-ul__link" to="/blog/">Blog</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
nav a:any-link {
  padding: 0px 16px;
}

.header {
  /* display: flex;
  grid-column: 2 / 12; */
}

.header--debugging {
  /* border: 1px solid tomato; */
}

.default-layout {
  /* display: grid; */
  /* margin: 24px;
  display: grid;
  grid-template-columns: repeat(13, 1fr); */
}
</style>
