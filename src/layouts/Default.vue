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

.nav {
  column-span: 5;
}

.header {
  /* display: flex;
  grid-column: 2 / 12; */
  column-span: 5;
}

.default-layout {
  border: 1px solid greenyellow;

  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(11, 1fr);

  margin: 0px 4%;
}
</style>
