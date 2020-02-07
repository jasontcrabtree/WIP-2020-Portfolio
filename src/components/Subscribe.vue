<template>
  <form
    class="subscribe-form--style tinyletter-sub-form"
    style
    action="https://tinyletter.com/jasontcrabtree"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/jasontcrabtree', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
  >
    <p>Subscribe to receive new blog posts and updates. Loose Topics; Design, Technology, Society, Life!</p>
    <fieldset class="subscribe-form-fieldset--layout sub-fieldset--style">
      <label class="subscribe-label--style" for="tlemail">Your Email</label>
      <input
        class="subscribe-email-input"
        type="text"
        placeholder="hello@email.com"
        name="email"
        id="tlemail"
        required
      />
    </fieldset>

    <input type="hidden" value="1" name="embed" />

    <button class="newsletter-" type="submit" value="Subscribe">Subscribe</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
fieldset {
  margin: 8px 0px;
}

.sub-fieldset--style {
  border: 0px;
  padding: 0px;
  margin: 0px;
}

.subscribe-form-fieldset--layout {
  margin: 24px 0px;
}

.tinyletter-sub-form > * > input {
  max-width: 32ch;
  width: 100%;
  height: 48px;
  padding: 8px;
  border: 1px solid var(--grey-400);
  border-radius: 4px;
}

.subscribe-credit--style {
  font-size: var(--size-16);
}

@media screen and (max-width: 460px) {
  .subscribe-email-input {
    width: 80vw;
  }
}
</style>