<script>
import ScaffoldSVG from '~/assets/svgs/ScaffoldSVG.svg'
import SapwoodSVG from '~/assets/svgs/SapwoodSVG.svg'
import SalesEmailsAppSVG from '~/assets/svgs/SalesEmailsAppSVG.svg'
import CharacterCounterSVG from '~/assets/svgs/CharacterCounterSVG.svg'
import CSSPosterSVG from '~/assets/svgs/CSSPosterSVG.svg'
import ZoeSVG from '~/assets/svgs/ZoeSVG.svg'

export default {
    components: {
      ScaffoldSVG,
      SapwoodSVG,
      SalesEmailsAppSVG,
      CharacterCounterSVG,
      CSSPosterSVG,
      ZoeSVG
  },
  props: ["work"]
};
</script>


<template>
<ul class="work-list-container">
    <li class="websites-list-card">
      <a href="https://usescaffold.com/">
        <ScaffoldSVG class="cover-illustration"/>
        <h2 class="card-title">UseScaffold</h2>
        Eleventy Digital eComm Website</a>
    </li>
    <li class="websites-list-card">
        <a href="https://sapwood.netlify.app/">
        <SapwoodSVG class="cover-illustration"/>
        <h2 class="card-title">Sapwood Demo</h2>
        Demo Website: GatsbyJS & Prismic</a>
    </li>
    <li class="websites-list-card">
        <a href="https://sales-emails.netlify.app/">
        <SalesEmailsAppSVG class="cover-illustration"/>
        <h2 class="card-title">Sales-Email App</h2>
        NextJS App: Cold-Email Starters</a>
    </li>
    <li class="websites-list-card">
        <a href="https://charactercounter.netlify.app/">
         <CharacterCounterSVG class="cover-illustration"/>
        <h2 class="card-title">CharacterCounter</h2>
        Micro Website: Counts Characters</a>
    </li>
    <li class="websites-list-card">
        <a href="https://codepen.io/jasontcrabtree/pen/qBbQXJP">
        <CSSPosterSVG class="cover-illustration"/>
        <h2 class="card-title">CSS Poster Layout</h2>
        CodePen Public Link</a>
    </li>
    <li class="websites-list-card">
        <a href="https://zoelenziesmith.com">
        <ZoeSVG class="cover-illustration"/>
        <h2 class="card-title">Zoe LS Portfolio</h2>
        Website: ZoeLenzieSmith.com</a>
    </li>
</ul>
</template>

<style>

:root {
  --cover-rotation: -4deg;
}

.cover-illustration {
  box-shadow: var(--shadow-extra-small);
  border-radius: 16px;
  transform: rotate(var(--cover-rotation));
}

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
  --cover-rotation: 8deg;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
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
