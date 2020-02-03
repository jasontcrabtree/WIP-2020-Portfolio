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
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          autocomplete="on"
        >
          <fieldset class="contact-form-fieldset--style">
            <h2>Contact Form</h2>
            <p class="hidden">
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
            <p>
              <label>Name</label>
              <input type="text" name="name" placeholder autocomplete="name" />
            </p>
            <p>
              <label>Your Email*</label>
              <input type="email" name="email" required autocomplete="email" />
            </p>
            <p>
              <label>Project Type:</label>
              <select name id>
                <option value></option>
                <option value>Website Design</option>
                <option value>Website Development</option>
                <option value>Mobile Design</option>
                <option value>Personal</option>
                <option value>Other</option>
              </select>
            </p>
            <p>
              <label>Available Budget</label>
              <input type="text" name="budget" placeholder="$" />
            </p>
            <p>
              <label>Project Details</label>
              <textarea name="message" rows="4"></textarea>
            </p>
            <p>
              <button class="base-button--style" type="submit">Submit</button>
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
  line-height: 1.6;
  font-size: 17px;
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
    font-size: 32px;
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
