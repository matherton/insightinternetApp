<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "./style.css";
</script>

<template>
  <Header />
  <br />
  <div className="grid grid-cols-2 gap-4">
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </div>
  <br />
  <Footer />
</template>

<style scoped></style>
