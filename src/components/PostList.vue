<template>
  <li class="list-item post-list-card card-details">
    <g-link :to="post.path" class="read">
      <hr class="line" />
      <p class="card-date" v-html="post.date" />
      <h1 class="card-title" v-html="post.title" />
      <p class="description" v-html="post.description" />
      <!-- <b>{{ post.timeToRead }} min read</b> &nbsp; -->
      <span class="post-link">Read blog post</span>
    </g-link>
  </li>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.list-item {
  /* padding: 8px 0px; */
  margin: 40px 0px;
  padding: 16px 24px;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 8px;
}

.list-item > * > * + * {
  margin: 8px 0;
}

hr {
  border: 0px;
}

/* .read {
  font-size: 18px;
} */

/* .card-details > * {
  margin-bottom: 16px;
} */

/* .post-list-card > *:last-child {
  padding-bottom: 32px;
} */

.post-list-card > a:any-link {
  text-decoration: none;
  color: var(--text-black);
}

.post-list-card:hover {
  box-shadow: 0 8px 12px 0 hsla(0, 0%, 0%, 0.2);
  box-shadow: 0 8px 12px 0 hsla(258, 100%, 25%, 0.2);
}

.card-title {
  color: var(--primary-blue);
}

.post-link {
  color: var(--primary-link);
  text-decoration: underline;
  font-weight: bold;
}

.card-date {
  color: var(--subheading-black);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
}
</style>
