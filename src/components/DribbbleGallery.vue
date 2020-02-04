<template>
  <transition name="fade" appear>
    <ul class="dribbble-gallery--layout">
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/app-platform-website.png"
            alt="A concept website showcasing different professional software tools and how they can fit and work together."
            width="1200"
            height="900"
            blur="100"
            quality="100"
          />
          <figcaption class="figcaption--layout">
            <span>
              App Stores & Platforms List concept
              <span class="date--style">Feb 2020</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/9879164-App-Stores-Platforms-List-Concept"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/portfolio-wip.png"
            alt="Exploring layouts for the Dribbble Gallery section of my website, which you're viewing now"
            width="1200"
            height="900"
            blur="50"
          />
          <figcaption class="figcaption--layout">
            <span>
              Portfolio: 2020 Edition Work in Progress
              <span class="date--style">Feb 2020</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/9841693-Portfolio-2020-Edition-AlwaysAWorkInProgress"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/open-med.png"
            alt="Two mobile screens showing the 'Home' and 'Calendar' views for a concept medical appointment app"
            width="1200"
            height="900"
            blur="50"
          />
          <figcaption class="figcaption--layout">
            <span>
              Medical Booking App Study
              <span class="date--style">Jan 2020</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/9830555-Medical-Booking-App-Study"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/blog-typesetting.png"
            alt="Portfolio redesign work in progress focused on setting the typography for my blog, and contrasting with overlapping images."
            width="1200"
            height="900"
            blur="50"
          />
          <figcaption class="figcaption--layout">
            <span>
              Personal blog layout design ft. Overlapping Grid
              <span class="date--style">Jan 2020</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/9556319-Personal-blog-layout-design-ft-Overlapping-Grid"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/stylingo-pricing.png"
            alt="An illustration heavy pricing page designed for a 99-designs submission."
            width="1200"
            height="900"
            blur="50"
          />
          <figcaption class="figcaption--layout">
            <span>
              Pricing & Packages Page Wireframe Concept
              <span class="date--style">Oct 2019</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/7556327-Pricing-Packages-Page-Wireframe-Concept"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <g-image
            src="~/assets/images/dribbble-shots/chris-vector.png"
            alt="A vector illustration of my good friend Chris riding a bike with his feet up on the handlebars"
            width="1200"
            height="900"
            blur="50"
          />
          <figcaption class="figcaption--layout">
            <span>
              Vector Illustration: Chris rides into the Sunset
              <span class="date--style">Oct 2019</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/7321621-Illustration-Riding-into-the-Sunset"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "DribbbleGallery"
};
</script>

<style>
.dribbble-gallery--layout > * > figure {
  background: rgb(255, 255, 255);

  border: 1px solid var(--blue-white-100);

  box-shadow: var(--shadow-medium);
  border-radius: 8px;
}

.dribbble-gallery--layout > * > figure:hover {
  box-shadow: var(--shadow-small);
}

.dribbble-gallery--layout > * > figure > img {
  border: 1px solid var(--blue-white-100);
}

.fade-enter-active {
  transition: opacity 2.5s;
}

.fade-enter {
  opacity: 0;
}

.dribbble-gallery--layout > * > figure > figcaption {
  margin-top: 16px;
}

@media screen and (max-width: 720px) {
  .dribbble-gallery--layout > * > figure {
    margin: 48px 0px;
    padding: 32px 16px;
  }
}

@media screen and (min-width: 720px) {
  .dribbble-gallery--layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(44%, 1fr));
    grid-gap: 48px;
  }

  .dribbble-gallery--layout > * > figure {
    padding: 48px;
  }
}

@media (prefers-color-scheme: dark) {
}
</style>
