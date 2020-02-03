<template>
  <transition name="fade" appear>
    <ul id="shots" class="shots"></ul>
  </transition>
</template>

<script>
import axios from "axios";

const accessToken = process.env.ACCESS_TOKEN;

const apiURL =
  "https://api.dribbble.com/v2/user/shots?access_token=" + "{{accessToken}}";

const baseURL = "https://api.dribbble.com/v2/user/shots?access_token=";
const callURL = baseURL + accessToken;

export default {
  name: "DribbbleGallery",
  data() {
    return {
      todos: null
    };
  },
  async mounted() {
    try {
      const apiURL =
        "https://api.dribbble.com/v2/user/shots?access_token=" +
        "{{accessToken}}";
      const results = await axios.get(callURL);
      const shotsParent = document.querySelector(".shots");

      // console.log(results.data[0].images.hidpi);

      const apiDataReseponse = results.data;

      apiDataReseponse.slice(0, apiDataReseponse.length);

      apiDataReseponse.slice(0, 6).forEach(function(resultsObject) {
        const apiResponse = `
        <li class="shot">
            <a target="_blank"
            href="${resultsObject.html_url}"
            title="${resultsObject.title}">
                <div class="title">
                    ${resultsObject.title}
                </div>
            <img src="${resultsObject.images.hidpi}" loading="lazy" width="800" height="auto"/>
            </a>
          </li>`;
        const appendResponse = document
          .createRange()
          .createContextualFragment(apiResponse);

        shotsParent.appendChild(appendResponse);
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.shot {
  padding: 0px;
}

.shot {
  margin: 24px 0px;
}

.shot > a > img {
  border: 1px solid #f1f1f1;
}

.shot {
  background: rgb(255, 255, 255);

  border: 1px solid #f1f1f1;

  box-shadow: var(--shadow-large);
  border-radius: 8px;
}

.shot > img:hover {
  opacity: 0.1;
}

.title:hover {
  opacity: 1;
}

.title {
  position: absolute;

  padding: 16px;
  width: 20ch;

  font-size: var(--size-20);
  font-weight: 700;
  letter-spacing: -0.2px;

  background: var(--white-100);

  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-active {
  transition: opacity 2.5s;
}

.fade-enter {
  opacity: 0;
}

@media screen and (min-width: 720px) {
  .shots {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(44%, 1fr));
    grid-gap: 48px;
  }

  .shot {
    padding: 48px 48px;
  }
}
</style>
