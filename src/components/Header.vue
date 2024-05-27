<script setup>
import ContactForm from "./ContactForm.vue";
defineProps({
  msg: String,
});
</script>

<template>
  <header class="header sticky-top">
    <nav class="flex items-center justify-between flex-wrap header p-6">
      <div class="flex items-center flex-shrink-0 text-white">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/src/assets/globe-icon.gif" alt="" />
          <h1 class="font-semibold text-xl tracking-tight pl-2">
            Insight Internet
          </h1>
          <sub class="slogan">Invent, Implement, React</sub>
        </div>
      </div>
      <div
        class="w-full block flex-grow pt-4 lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <a href="/" class="button-primary px-4 py-2 mr-2">Home</a>
          <a href="/services" class="button-primary px-4 py-2 mr-2">Services</a>
          <a href="/about" class="button-primary px-4 py-2 mr-2">About</a>
        </div>
        <div>
          <a
            href="/contact"
            class="button-secondary px-4 py-2 mt-4 lg:mt-0 mr-2 text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Only way I could find to overwrite Tailwind so the nav would remove the margin right on smaller screens 
andto remove the padding top on larger screens */
@media (min-width: 1024px) {
  .button-primary {
    margin-right: 10%;
  }
  .flex-grow.pt-4 {
    padding-top: 0;
  }
}
</style>
<script>
export default {
  name: "Header",
  methods: {
    showModal() {
      // how to show the modal
      window.alert("show modal");
    },
  },
  components: {
    "contact-form": ContactForm,
  },
};
</script>
