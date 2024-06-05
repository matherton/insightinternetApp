<script setup>
defineProps({
  logoSrc: String,
  alt: String,
  role: String,
  body: String,
  tech1: String,
  tech2: String,
  tech3: String,
  imgResise: Boolean,
});
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg p-4 hover:bg-sky-500/50"
  >
    <img
      :class="imgResise ? 'w-full img-resize' : 'w-full'"
      :src="logoSrc"
      :alt="alt"
    />
    <hr class="mt-4" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ role }}</div>
      <p class="text-gray-700 text-base">
        {{ body }}
      </p>
    </div>
    <hr />
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ tech1 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ tech2 }}</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >{{ tech3 }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "WorkItem",
};
</script>
<style scoped>
.img-resize {
  width: 90%;
  margin: 0 auto;
}
</style>
