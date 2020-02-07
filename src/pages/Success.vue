<template>
  <layout>
    <main class="contact-parent">
      <header class="contact-header">
        <h1 class="contact-h1-title--style">Getting in touch 👋</h1>
        <p>Hello! If you want to talk about a commercial project, I'd love to learn more. Please contact me with the form below.</p>
        <p>
          If you want to chat about a personal project, I'd love to hear about that too! Get in touch on twitter at
          <a
            href="https://twitter.com/jasontcrabtree"
          >@jasontcrabtree</a>,
          <a href="mailto:jasontcrabtree@gmail.com">email</a>, or the contact form below. ✌️✌️
        </p>
      </header>
      <section class="contact-form--layout contact-form--spacing">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <section class="contact-form-fieldset--style">
            <h2>Success!</h2>
            <p>The form successsfully submitted 🎉</p>
            <p>Thanks for getting in touch! I'll respond to you as quickly as possible, which mostly means in 2-4 days.</p>
          </section>
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
  },
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => this.$router.push("/success"))
        .catch(error => alert(error));
    }
  }
};
</script>

<style>
.contact-header > p {
  margin: 1.4em 0px;
}

.contact-parent {
  display: grid;
  grid-column: 1/ 9;
}

.contact-form--spacing > * > * > * {
  margin: 1em 0px;
}

.contact-form-fieldset--style > p {
  line-height: 1.2;
}

.contact-form-fieldset--style {
  border-radius: 8px;
  border: 1px solid var(--primary-blue);
  box-shadow: var(--shadow-medium);
}

@media screen and (min-width: 960px) {
  .contact-form--layout {
    display: grid;
    grid-column: 1/ 5;
  }

  .contact-form-fieldset--style > * > input,
  .contact-form-fieldset--style > * > select,
  .contact-form-fieldset--style > * > textarea {
    width: 60%;
  }

  .contact-form-fieldset--style {
    padding: 8px 24px;
  }
}

@media screen and (max-width: 960px) {
  .contact-h1-title--style {
    font-size: var(--size-32);
  }
  .contact-form-fieldset--style {
    padding: 8px 16px;
  }

  .contact-form-fieldset--style > * > input,
  .contact-form-fieldset--style > * > select,
  .contact-form-fieldset--style > * > textarea {
    width: 100%;
  }
}

.hidden {
  display: none;
}
</style>
