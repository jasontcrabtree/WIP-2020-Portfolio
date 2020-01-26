<template>
  <layout>
    <header class="contact-header">
      <h1>Contact:</h1>
      <p>
        Hello! Want to chat? I'm on twitter!
        <a
          href="http://twitter.com/jasontcrabtree"
        >@jasontcrabtree</a>
      </p>
    </header>
    <main>
      <div id="shots"></div>

      <ImgSmall image="https://picsum.photos/536/354" caption="People laughing while eating salad" />

      <g-image src="~/cover-slack.png" class="cover-image" with="500" blur="40" />
    </main>
  </layout>
</template>

<script>
import ImgSmall from "@/components/ImgSmall";

export default {
  components: {
    ImgSmall
  },
  metaInfo: {
    title: "Contact"
  }
  // data() {
  //   return {
  //     items: []
  //   };
  // },
  // async mounted() {
  //   const res = await axios.get(process.env.GRIDSOME_ACCESS_TOKEN);
  //   this.items = res.data;
  // }
};

// Call Dribble v2 API
/* $.ajax({
  url: "https://api.dribbble.com/v2/user/shots?access_token=" + accessToken,
  dataType: "json",
  type: "GET",
  success: function(data) {
    if (data.length > 0) {
      $.each(data.reverse(), function(i, val) {
        $("#shots").prepend(
          '<a class="shot" target="_blank" href="' +
            val.html_url +
            '" title="' +
            val.title +
            '"><div class="title">' +
            val.title +
            '</div><img src="' +
            val.images.hidpi +
            '"/></a>'
        );
      });
    } else {
      $("#shots").append("<p>No shots yet!</p>");
    }
  }
}); */

// Set the Access Token
const accessToken = process.env.GRIDSOME_ACCESS_TOKEN;

console.log(accessToken);

const request = new XMLHttpRequest();
request.open(
  "GET",
  '"https://api.dribbble.com/v2/user/shots?access_token=" + accessToken',
  true
);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    const resp = this.response;
    // console.log(resp);

    function successfulResponse(data) {
      if (data.length > 0) {
        console.log("length is over 0");
      }
    }

    successfulResponse();
  } else {
    // We reached our target server, but it returned an error
    console.log("Error, sorry!");
  }
};

request.onerror = function() {
  // There was a problem connecting to the URL
};

request.send();
</script>

<style>
.contact-header {
  grid-column: 1 / 7;
}
</style>
