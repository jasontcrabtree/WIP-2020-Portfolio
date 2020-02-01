<template>
  <ul id="shots" class="shots"></ul>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DribbbleGallery',
  data() {
    return {
      todos: null,
    };
  },
  async mounted() {
    try {
      const results = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
      );

      this.todos = results.data;

      console.log(results);
    } catch (error) {
      console.log(error);
    }
  },
};

const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken);

// const shotsParent = document.querySelector('.shots');
/*
const request = new XMLHttpRequest();
request.open(
  'GET',
  `https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`,
  true
); */

/* request.onload = function(data) {
  if (this.status >= 200 && this.status < 400) {
    // Success!

    const apiCallDataJson = JSON.parse(this.response);

    /*     // const dataReversed = apiCallDataJson.reverse();
    const dataReversed = apiCallDataJson;

    dataReversed.forEach(function(dataResponseCall) {
      const apiResponse = `
        <li class="shot">
            <a target="_blank" href="${dataResponseCall.html_url}" title="${dataResponseCall.title}">
            <div class="title">${dataResponseCall.title}
            </div>
            <img src="${dataResponseCall.images.hidpi}"/>
            </a>
          </li>`;
      const appendResponse = document
        .createRange()
        .createContextualFragment(apiResponse);

      shotsParent.appendChild(appendResponse);
    });
  } else {
    // We reached our target server, but it returned an error
    console.log('Error, sorry!');
    console.log("nah ya'll");
  }
};

request.send(); */
</script>

<style>
.shots {
  min-height: 32vh;
}
</style>
