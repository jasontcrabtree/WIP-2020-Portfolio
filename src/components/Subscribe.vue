<template>
  <form
    class="subscribe-form--style"
    style
    action="https://tinyletter.com/jasontcrabtree"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/jasontcrabtree', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
  >
    <p>
      <label
        for="tlemail"
      >Subscribe to receive infrequent personal & professional blog posts by me, Jason Crabtree! Topics may include thoughts on: Design, Technology, Society.</label>
    </p>
    <p>
      <input type="text" placeholder="hello@email.com" name="email" id="tlemail" required />
    </p>
    <input type="hidden" value="1" name="embed" />
    <button class="newsletter-" type="submit" value="Subscribe">Subscribe</button>
  </form>
</template>

<script>
export default {};
</script>

<style>
.subscribe-form--style > * {
  margin: 8px 0px;
}

input {
  width: 24ch;
  height: 48px;
  padding: 8px;
  border: 1px solid var(--grey-400);
  border-radius: 4px;
}

button {
  background-color: var(--primary-blue);
  padding: 8px 32px;
  border-radius: 4px;
  color: var(--white-100);
  cursor: pointer;
}

.subscribe-credit--style {
  font-size: 16px;
}

@media screen and (max-width: 460px) {
  input {
    width: 80vw;
  }
}
</style>