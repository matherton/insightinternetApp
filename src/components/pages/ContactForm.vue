<script setup>
import emailjs from "@emailjs/browser";
import { useRouter } from "vue-router";
import Home from "./Home.vue";
const router = useRouter();
</script>

<template>
  <main class="p-4">
    <h2 class="text-2xl text-gray-500 font-semibold mb-2">Contact Us</h2>
    <div class="text-sm text-gray-600 mb-6">
      <p>
        Ready to transform your business with custom applications? Contact us
        today to discuss your project.
      </p>
    </div>
    <form id="contact_form" ref="form" @submit.prevent="sendEmail">
      <div class="flex mb-5">
        <div class="w-1/2 mr-2">
          <label for="first_name_field" class="block text-sm text-gray-500"
            >First Name:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="text"
            name="first_name"
            id="first_name_field"
            autocomplete="given-name"
          />
        </div>
        <div class="w-1/2">
          <label for="last_name_field" class="block text-sm text-gray-500"
            >Last Name:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="text"
            name="last_name"
            id="last_name_field"
            required
            autocomplete="family-name"
          />
        </div>
      </div>
      <div class="flex mb-5">
        <div class="w-1/2 mr-2">
          <label for="email_field" class="block text-sm text-gray-500"
            >Email:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="email"
            name="email"
            id="email_field"
            required
            autocomplete="off"
          />
        </div>
        <div class="w-1/2">
          <label for="phone_field" class="block text-sm text-gray-500"
            >Phone:</label
          >
          <input
            class="rounded border-gray-400 w-full"
            type="tel"
            name="phone"
            id="phone_field"
            autocomplete="off"
          />
        </div>
      </div>

      <div class="mb-4">
        <label for="message_field" class="block text-sm text-gray-500"
          >Message:</label
        >
        <textarea
          class="w-full rounded border-gray-400"
          name="message"
          id="message_field"
          rows="6"
          required
          auto-complete="message"
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.co/thanks.html"
        />
      </div>
      <button
        type="submit"
        class="bg-white hover:var(--accent-orange) text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Send
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formFields: ["first_name", "last_name", "email", "message"],
    };
  },
  methods: {
    async sendEmail() {
      try {
        const formData = this.$refs.form;
        const { first_name, last_name } = formData;
        const { value: firstName } = first_name;
        const { value: lastName } = last_name;

        await emailjs.sendForm(
          "service_vdaz4di",
          "template_dzrk3pt",
          formData,
          {
            publicKey: "ekCMxzOZE8WLkxngL",
          }
        );

        window.alert(
          `Thank you for your interest ${firstName} ${lastName}. We have received your message and will get back to you as soon as possible.`
        );

        formData.reset();
        this.$router.push("./");
      } catch (error) {
        console.error("Failed to send email:", error);
      }
    },
  },
};
</script>

<style scoped>
form input,
form textarea {
  background-color: #66ccff21;
  padding: 0.25rem 0.5rem;
}
form button {
  background-color: #fff;
}
form button:hover {
  background-color: var(--accent-orange);
  color: #fff;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.email-link:hover {
  color: var(--accent-orange);
  text-decoration: underline;
}
</style>
