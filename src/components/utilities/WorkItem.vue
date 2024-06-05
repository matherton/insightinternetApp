<script setup>
defineProps({
  logoSrc: String,
});
</script>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="logoSrc" alt="Sunset in the mountains" />
      <hr class="mt-4" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Senior React Native Developer</div>
        <p class="text-gray-700 text-base">
          Provided React Native development services to Arnold Clark developing
          their mobile car reservation app.
        </p>
      </div>
      <hr />
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >React Native</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >Redux</span
        >
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >ES6</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
};
</script>
<style></style>
