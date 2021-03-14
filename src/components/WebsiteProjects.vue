<template>
  <!-- <li class="list-item websites-list-card">
    <g-link :to="work.path" class="read">
      <img :src="work.image" :alt="work.title" class="cover-image" />
      <div class="card-details">
        <h2 class="card-title" v-html="work.title" />
        <span class="date--style">Project time: {{ work.date }}</span>
        <p class="description" v-html="work.description" />
        <span class="card-link">View case study</span>
      </div>
    </g-link>
  </li> -->
<ul class="work-list-container">
    <li class="websites-list-card">
        <h2 class="card-title">UseScaffold</h2>
        <a href="https://usescaffold.com/">Eleventy Digital eComm Website</a>
    </li>
    <li class="websites-list-card">
        <h2 class="card-title">Sapwood Demo</h2>
        <a href="https://sapwood.netlify.app/">Demo Website: GatsbyJS & Prismic</a>
    </li>
    <li class="websites-list-card">
        <h2 class="card-title">Sales-Email App</h2>
        <a href="https://sales-emails.netlify.app/">NextJS App: Cold-Email Starters</a>
    </li>
    <li class="websites-list-card">
        <h2 class="card-title">CharacterCounter</h2>
        <a href="https://charactercounter.netlify.app/">Micro Website: Counts Characters</a>
    </li>
    <li class="websites-list-card">
        <h2 class="card-title">CSS Poster Codepen</h2>
        <a href="https://codepen.io/jasontcrabtree/pen/qBbQXJP">Codepen Link</a>
    </li>
    <li class="websites-list-card">
        <h2 class="card-title">Zoe Lenzie-Smith</h2>
        <a href="https://zoelenziesmith.com">Website: Zoelenziesmith.com</a>
    </li>
</ul>
</template>


<script>

export default {
  props: ["work"]
};
</script>

<style>

.websites-list-card {
  box-shadow: var(--shadow-extra-small);
  border-radius: 8px 8px 0 0;
  background: var(--card-background-white);

  box-shadow: var(--shadow-large);
  border-radius: 8px;
  padding: 24px;

  display: grid;
  align-content: center;
  /* margin: auto 0; */
}


.websites-list-card:hover {
  box-shadow: var(--shadow-medium);
}


.websites-list-card > a:any-link {
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

@media screen and (max-width: 960px) {
  .websites-list-card {
    margin: 32px 0px;
  }

  .websites-list-card {
    max-width: 40ch;
    width: 100%;
    padding: 0px;
  }

  .websites-list-card {
    width: 100%;
    padding: 16px 24px;
    width: 100%;

  display: grid;
  align-content: center;
  }

  .card-title {
    font-size: var(--size-24);
  }
}
</style>
