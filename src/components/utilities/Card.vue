<script setup>
import { ref } from "vue";
</script>
<template>
  <v-card>
    <v-card-image><img :src="imgSrc" /></v-card-image>
    <v-card-title
      ><strong>{{ header }}</strong></v-card-title
    >
    <v-card-body>{{ body }}</v-card-body>
    <v-card-footer
      ><router-link
        to="/insightinternetApp/contact"
        class="button-secondary px-4 pt-1 pb-1 lg:py-2 mr-4 lg:mt-0 mr-2 text-sm"
      >
        {{ footer }}
      </router-link></v-card-footer
    >
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
  background: var(--secondary-light-gray);
  border: 0.15rem solid var(--secondary-dark-gray);
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom: 0.15rem dashed var(--accent-green);
}

strong,
v-card-body {
  margin: 0 -1rem;
  padding: 0.5rem 1rem;
}

strong {
  text-decoration: underline;
  background: var(--primary-navy);
  color: #fff;
}

v-card-body {
  background: #fff;
  margin-top: -0.6rem;
}

v-card img {
  max-height: 221px;
  width: 100%;
}

.imgSpacer img {
  margin: 3.5rem 0;
}

v-card-footer {
  background: var(--primary-sky);
  margin: -1rem;
  padding: 1rem;
  color: #fff;
  text-align: center;
}
</style>
