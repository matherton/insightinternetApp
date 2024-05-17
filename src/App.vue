<script setup>
import Header from "./components/Header.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";
import "./style.css";

import { defineProps } from "vue";

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
  <br />
  <Page myName="Mark" :gridColLG="2" />
  <br />
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
