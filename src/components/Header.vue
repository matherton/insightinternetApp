<script setup>
import ContactForm from "./pages/ContactForm.vue";
defineProps({
  msg: String,
});
</script>

<template>
  <header class="header sticky-top">
    <nav class="flex items-center justify-between flex-wrap header p-6">
      <div class="flex items-center flex-shrink-0 text-white">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/src/assets/globe-icon.gif" alt="globe" />
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
          <router-link
            to="/insightinternetApp/"
            class="button-primary sm:px-4 p-1 lg:py-2 mr-2"
            >Home</router-link
          >
          <router-link
            to="/insightinternetApp/services"
            class="button-primary sm:px-4 p-1 lg:py-2 mr-2"
            >Services</router-link
          >
          <router-link
            to="/insightinternetApp/about"
            class="button-primary sm:px-4 p-1 lg:py-2 mr-2"
            >Why us</router-link
          >
          <router-link
            to="/insightinternetApp/work"
            class="button-primary sm:px-4 p-1 lg:py-2 mr-2"
            >Work</router-link
          >
        </div>
        <div class="pt-2 lg:pt-0">
          <router-link
            to="/insightinternetApp/contact"
            class="button-secondary px-4 pt-1 pb-1 lg:py-2 mr-4 lg:mt-0 mr-2 text-sm"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Only way I could find to overwrite Tailwind so the nav would remove the margin right on smaller screens 
andto remove the padding top on larger screens */
@media (min-width: 1280px) {
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
