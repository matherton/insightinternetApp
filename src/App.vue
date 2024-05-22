<script setup>
import Header from "./components/Header.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";
import "./style.css";

defineProps({
  copy1: {
    type: String,
  },
  copy2: {
    type: String,
    default: "",
  },
  imgName: {
    type: String,
    default: "",
  },
  gridColMD: {
    type: Number,
    default: 2,
  },
  gridColLG: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <Header />
  <RouterView />
  <!-- <Page copy2="Mark" :gridColMD="3" :gridColLG="4" /> -->

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
