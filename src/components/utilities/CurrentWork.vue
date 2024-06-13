<template>
  <div class="project container" style="margin-bottom: 0.5rem">
    <img :src="`./${imgName}`" :alt="`${alt}`" :class="`${imgClass}`" />
    <p><strong>Client:</strong>{{ " " }}{{ client }}</p>
    <p><strong>Industry:</strong>{{ " " }}{{ industry }}</p>
    <p><strong>Project Duration:</strong>{{ " " }}{{ duration }}</p>
    <p><strong>Project Description:</strong>{{ " " }}{{ description }}</p>
    <p><strong>Technologies Used so far:</strong>{{ " " }}{{ tech }}</p>

    <a
      :href="`${hrefAddress}`"
      class="flex flex-col items-center"
      target="_blank"
    >
      <button
        class="bg-white hover:var(--accent-orange) text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        target="_blank"
        title="opens in new window"
      >
        View Live
      </button>
    </a>
  </div>
</template>
<script>
export default {
  name: "CurrentWork",
  methods: {},
  props: {
    client: String,
    industry: String,
    duration: String,
    description: String,
    tech: String,
    hrefAddress: String,
    imgName: String,
    alt: String,
    imgClass: String,
  },
};
</script>
<style scoped>
.pie-logo,
.ewp-logo {
  width: 179px;
  height: auto;
  margin-right: 0.5rem;
  position: relative;
  float: left;
}

.project p {
  margin: 0.5rem 0;
}
</style>
