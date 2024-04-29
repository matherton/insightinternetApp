<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./style.css";
</script>

<template>
  <Header />
  <br />
  <div style="min-height: 90%">body content</div>
  <br />
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
