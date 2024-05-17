<script setup>
defineProps({
  myName: String,
  gridColLG: Number,
});
</script>
<!-- TODO: gridColLG prop display corectly in tags but not correctly in the class??? -->
<template lang="">
  <main
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-{{gridColLG}} gap-4"
  >
    <div>{{ myName }}</div>
    <div>{{ gridColLG }}</div>
    <div>03</div>
    <div>04</div>
    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
  </main>
</template>
<script>
export default {
  name: "Page",
};
</script>
<style lang=""></style>
