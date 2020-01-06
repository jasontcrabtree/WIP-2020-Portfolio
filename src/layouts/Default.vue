<template>
  <nav class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <ul class="nav">
        <g-link class="nav-ul__link" to="/">Home</g-link>
        <g-link class="nav-ul__link" to="/contact/">Contact</g-link>
        <g-link class="nav-ul__link" to="/about/">About</g-link>
      </ul>
    </header>
    <slot />
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 18px;
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #181818;
    color: #f0f0d2;
  }

  a:any-link {
    color: sandybrown;
  }
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  height: 80px;
}

.nav-ul__link {
  margin-left: 24px;
}
</style>
