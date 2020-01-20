<template>
  <li class="list-item work-list-card">
    <g-link :to="work.path" class="read">
      <img :src="work.image" :alt="work.title" class="cover-image" />
      <div class="card-details">
        <h2 class="card-title" v-html="work.title" />
        <span class="card-date">Work completed: {{ work.date }}</span>
        <!-- <p class="date" v-html="work.date" /> -->
        <p class="description" v-html="work.description" />
        <!-- <b>{{ work.timeToRead }} min read</b>
        &nbsp; -->
        <span class="card-link">View case study</span>
      </div>
    </g-link>
  </li>
</template>

<page-query>
query Work ($path: String!) {
    work: work (path: $path) {
      image
        title
        content
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
// timeToRead
export default {
  props: ['work'],
};
</script>

<style>
.card-details {
  padding: 1rem;
  margin: auto 0;
}

.cover-image {
  box-shadow: 0 2px 4px 0 #0000001a;
  border-radius: 8px 8px 0 0;
}

.card-details > * {
  margin-bottom: 16px;
}

.work-list-card > *:last-child {
  padding-bottom: 32px;
}

.work-list-card > a:any-link {
  text-decoration: none;
  color: var(--text-black);
}

.card-title {
  color: var(--primary-blue);
}

.card-link {
  text-decoration: underline;
  color: var(--primary-link);
  font-weight: bold;
}

.card-date {
  color: var(--subheading-black);
  text-transform: uppercase;
  font-weight: 500;
}

@media screen and (max-width: 919px) {
  .work-list-card {
    margin: 32px 0px;
  }
}
</style>
