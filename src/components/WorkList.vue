<template>
  <li class="list-item work-list-card">
    <img :src="work.image" :alt="work.title" class="cover-image" />
    <div class="card-details">
      <h2 class="title" v-html="work.title" />
      <p class="date" v-html="work.date" />
      <p class="description" v-html="work.description" />
      <b>{{ work.timeToRead }} min read</b> &nbsp;
      <g-link :to="work.path" class="read">View case study</g-link>
    </div>
  </li>
</template>

<page-query>
query Work ($path: String!) {
    work: work (path: $path) {
      image
        title
        content
        date (format: "D MMMM YYYY")
        timeToRead
    }
}
</page-query>


<script>
export default {
  props: ["work"]
};
</script>

<style>
.card-details {
  padding: 1rem;
  margin: auto 0;
}

.cover-image {
  /* border: 1px solid slategray; */
  box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.1);

  border-radius: 8px 8px 0 0;
}

.card-details > * {
  margin-bottom: 8px;
}

@media screen and (max-width: 919px) {
  .work-list-card {
    margin: 1rem 0px;
  }
}
</style>
