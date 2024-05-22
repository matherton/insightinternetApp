<script setup>
import { ref } from "vue";

const items = ref(["Innovation", "Quality", "Collaboration", "Integrity"]);
</script>

<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: numeric;
  list-style-position: inside;
}
</style>
