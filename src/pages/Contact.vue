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
      <form
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" v-model="formData.name" />
          </div>
          <div>
            <label for="email">Your email</label>
            <input type="email" name="email" v-model="formData.email" />
          </div>
        </div>

        <div class="message-wrapper">
          <label for="message">Message</label>
          <textarea name="message" v-model="formData.message"></textarea>
        </div>

        <button type="submit">Submit form</button>
      </form>
      <!--     <section class="contact-form--layout contact-form--spacing">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <fieldset class="contact-form-fieldset--style">
            <h2>Contact Form</h2>
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden" hidden>
              <label>
                Don’t fill this out if you're human:
                <input name="bot-field" />
              </label>
            </p>
            <p class="sender-info">
              <label for="name" class="label">Your Name</label>
              <input type="text" name="name" v-model="formData.name" autocomplete="name" />
            </p>
            <p class="sender-info">
              <label for="email">Your Email*</label>
              <input
                type="email"
                name="email"
                v-model="formData.email"
                required
                autocomplete="email"
              />
            </p>
            <p>
              <label type="select" for="project">Project Type:</label>
              <select name="project" id="project" v-model="formData.project">
                <option value disabled></option>
                <option value="website-design">Website Design</option>
                <option value="website-development">Website Development</option>
                <option value="mobile-design">Mobile Design</option>
                <option value="personal">Personal</option>
                <option value="other">Other</option>
              </select>
            </p>
            <p>
              <label for="budget">Available Budget</label>
              <input type="text" name="budget" placeholder="$" v-model="formData.budget" />
            </p>
            <p class="message-wrapper">
              <label for="message">Project Details</label>
              <textarea name="message" v-model="formData.message" rows="4"></textarea>
            </p>
            <p>
              <button class="base-button--style" type="submit">Submit</button>
            </p>
          </fieldset>
        </form>
      </section>-->
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
