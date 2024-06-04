<script setup></script>
<template>
  <v-card>
    <v-card-image><img :src="imgSrc" /></v-card-image>
    <v-card-title
      ><strong>{{ header }}</strong></v-card-title
    >
    <v-card-body>{{ body }}</v-card-body>
    <v-card-footer>{{ footer }}</v-card-footer>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: String,
    body: String,
    footer: String,
    imgSrc: String,
  },
};
</script>

<style scoped>
v-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 350px;
  margin: 1rem;
  padding: 1rem;
  border: 0.25rem solid var(--secondary-dark-gray);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 0.15rem dashed var(--accent-green);
}

v-card img {
  max-height: 221px;
  width: 100%;
}

.imgSpacer img {
  margin: 3.5rem 0;
}
</style>
