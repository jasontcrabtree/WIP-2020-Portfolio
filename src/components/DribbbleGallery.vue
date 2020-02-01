<template>
  <ul id="shots" class="shots"></ul>
</template>

<script>
import axios from 'axios';

const accessToken = process.env.ACCESS_TOKEN;
//console.log(accessToken);

const apiURL =
  'https://api.dribbble.com/v2/user/shots?access_token=' + '{{accessToken}}';

// console.log(apiURL);

const baseURL = 'https://api.dribbble.com/v2/user/shots?access_token=';
const callURL = baseURL + accessToken;

// console.log(callURL);

export default {
  name: 'DribbbleGallery',
  data() {
    return {
      todos: null,
    };
  },
  async mounted() {
    try {
      // console.log(accessToken);
      const apiURL =
        'https://api.dribbble.com/v2/user/shots?access_token=' +
        '{{accessToken}}';
      const results = await axios.get(
        //'https://jsonplaceholder.typicode.com/todos'
        callURL
      );

      const shotsParent = document.querySelector('.shots');

      // console.log(results.data[0]);

      // console.log(results.data[0].images.hidpi);

      console.log(typeof results);

      const url = results.data[(0, 6)].html_url;
      const title = results.data[(0, 6)].title;
      const image = results.data[(0, 6)].images.hidpi;

      // console.table(url, title, image);
      // const {url, title, image} = results.data

      const apiDataReseponse = results.data;

      console.log(apiDataReseponse.length);

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
            <img src="${resultsObject.images.hidpi}"/>
            </a>
          </li>`;
        const appendResponse = document
          .createRange()
          .createContextualFragment(apiResponse);

        shotsParent.appendChild(appendResponse);
      });
      /* const apiResponse = `
        <li class="shot">
            <a target="_blank" href="${results.data[0].html_url}" title="${results.data[0].title}">
            <div class="title">${results.data[0].title}
            </div>
            <img src="${results.data[0].images.hidpi}"/>
            </a>
          </li>`;
      const appendResponse = document
        .createRange()
        .createContextualFragment(apiResponse);

      shotsParent.appendChild(appendResponse); */

      //   const resultsParse = JSON.parse(results);
      // this.todos = results.data;

      console.log('dribbble success!!');

      // console.log(results);

      // console.log(this.todos);

      //   console.log(typeof this.todos[0]);
    } catch (error) {
      console.log(error);
    }
  },
};

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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(44%, 1fr));
  grid-gap: 48px;
}

/* .shot:nth-child(odd) {
  margin: 24px 0px;
} */

.shot {
  padding: 48px 48px;
}

li > a > img {
  border: 1px solid #f1f1f1;
}

/* .shot:nth-child(even) {
  padding: 64px 0px;
} */

.shot {
  background: rgb(255, 255, 255);

  border: 1px solid #f1f1f1;

  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.1);
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

  padding: 1rem;
  width: 20ch;

  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.2px;

  color: #000;
  background: #fff;

  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>
