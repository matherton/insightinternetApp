<script setup>
import emailjs from "@emailjs/browser";
</script>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="from_name" />
    <label>Email</label>
    <input type="email" name="from_email" />
    <label>Message</label>
    <textarea name="message"></textarea>
    <button
      type="submit"
      value="Send"
      class="bg-white hover:var(--accent-orange) text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      send
    </button>
  </form>
</template>

<script>
export default {
  name: "EmailJSForm",
  methods: {
    sendEmail() {
      emailjs
        .sendForm("service_vdaz4di", "template_dzrk3pt", this.$refs.form, {
          publicKey: "ekCMxzOZE8WLkxngL",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
