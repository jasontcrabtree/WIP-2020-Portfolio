<template>
  <li class="list-item work-list-card">
    <g-link :to="work.path" class="read">
      <g-image :src="work.image" :alt="work.title" class="cover-image" />
      <div class="card-details">
        <h2 class="card-title" v-html="work.title" />
        <span class="date--style">Project time: {{ work.date }}</span>
        <!-- <p class="date" v-html="work.date" /> -->
        <p class="description" v-html="work.description" />
        <!-- <b>{{ work.timeToRead }} min read</b>
        &nbsp;-->
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
// (width: 463, height: 321, quality: 90)
// "~/assets/images/dribbble-shots/app-platform-website.png"

export default {
  props: ["work"]
};
</script>

<style>
.card-details {
  padding: 20px;
  margin: auto 0;
}

.cover-image {
  /* Internal shadow */
  box-shadow: var(--shadow-extra-small);
  border-radius: 8px 8px 0 0;
}

.cover-image {
  width: auto;
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

.date--style {
  color: var(--subheading-black-blue);
  text-transform: uppercase;
  font-weight: 500;
}

@media screen and (max-width: 960px) {
  .work-list-card {
    margin: 32px 0px;
  }

  .work-list-card {
    max-width: fit-content;
    max-width: -moz-max-content; /* Firefox/Gecko */
    max-width: -webkit-max-content; /* Chrome */
    padding: 0px;
  }

  .card-title {
    font-size: var(--size-24);
  }
}
</style>
