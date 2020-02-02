<template>
  <layout>
    <main class="contact-parent">
      <header class="contact-header">
        <h1>Contact:</h1>
        <p>
          Hello! Want to chat? I'm on twitter!
          <a
            href="http://twitter.com/jasontcrabtree"
          >@jasontcrabtree</a>
        </p>
      </header>
      <section class="contact-form--layout">
        <h2>Contact Form</h2>
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
          <fieldset>
            <p class="hidden">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
            <p>
              <label>
                Your Name:
                <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email:
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message:
                <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </fieldset>
        </form>
      </section>
    </main>
  </layout>
</template>

<script>
export default {
  components: {
    // ImgSmall
  },
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style>
.contact-parent {
  grid-column: 1/ 9;
}

@media screen and (min-width: 960px) {
  .contact-form--layout {
    min-height: 600px;
    height: auto;
  }
}

.hidden {
  display: hidden;
}
</style>
