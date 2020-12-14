<template>
  <div>
    <meta content="Scaffold: {{- title | default: metadata.siteName -}}" name="title" />
    <meta name="description" content="{{- description | default: metadata.description -}}" />
    <meta name="twitter:image:alt" content="{{- imageAlt | default: metadata.imageAlt -}}" />
    <meta content="Scaffold: {{- title | default: metadata.siteName -}}" property="og:title" />
    <meta property="og:description" content="{{- description | default: metadata.description -}}" />
    <meta content="Scaffold: {{- title | default: metadata.siteName -}}" property="og:site_name" />
    <meta property="og:image:secure_url" content="{{- image | default: metadata.image -}}" />
    <meta property="twitter:image" content="{{- image | default: metadata.image -}}" />
    <meta content="Scaffold: {{- title | default: metadata.siteName -}}" property="twitter:title" />
    <meta
      property="twitter:description"
      content="{{- description | default: metadata.description -}}"
    />

    <meta content="website" property="og:type" />

    <meta content="https://jasontcrabtree.com/{{- canonical | default: -}}" property="og:url" />
    <meta content="{{- image | default: metadata.image -}}" property="og:image" />
    <meta content="{{- image | default: metadata.image -}}" property="twitter:image" />
    <meta content="https://jasontcrabtree.com/" property="twitter:url" />
    <meta content="@jasontcrabtree" name="twitter:site" />
    <meta content="@jasontcrabtree" name="twitter:creator" />
    <meta content="summary_large_image" property="twitter:card" />
    <link href="https://jasontcrabtree.com/" rel="canonical" />
  </div>
</template>