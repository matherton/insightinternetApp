<script setup>
import Header from "./components/Header.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";
import "./style.css";

defineProps({
  myName: {
    type: String,
  },
  gridColLG: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <Header />

  <Page myName="Mark" :gridColMD="3" :gridColLG="4" />

  <Footer />
</template>

<style scoped></style>

<script>
export default {
  name: "App",
  components: {
    Page,
  },
};
</script>
