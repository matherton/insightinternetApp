<script setup>
import BulletListVue from "./utilities/BulletList.vue";
</script>
<template>
  <main
    :class="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColMD} lg:grid-cols-${gridColLG} gap-4 pt-4 pr-4 pl-4 pb-4`"
  >
    <section>
      <h2>{{ title1 }}</h2>
      <strong>{{ subTitle1 }}</strong>
      <button
        v-if="btnText"
        class="bg-white hover:var(--accent-orange) text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        @click="goToVeiw"
      >
        {{ btnText }}
      </button>
      <p>{{ copy1 }}</p>
    </section>

    <section v-if="imgName">
      <img :src="`/src/assets/${imgName}`" class="mx-auto" alt="" />
    </section>

    <section v-if="img2ndCol">
      <img :src="`/src/assets/${img2ndCol}`" class="mx-auto max-w-40" alt="" />
    </section>

    <section v-if="subTitleList">
      <h2>{{ title2 }}</h2>
      <strong>{{ subTitle2 }}</strong>
      <p>{{ copy2 }}</p>

      <strong>{{ subTitle3 }}</strong>
      <p>{{ copy3 }}</p>

      <strong>{{ subTitle4 }}</strong>
      <p>{{ copy4 }}</p>

      <div>
        <BulletListVue />
      </div>
    </section>

    <section v-else>
      <strong>{{ subTitle2 }}</strong>
      <p>{{ copy2 }}</p>

      <strong>{{ subTitle3 }}</strong>
      <p>{{ copy3 }}</p>
    </section>
    <section v-if="!subTitleList">
      <strong>{{ subTitle4 }}</strong>
      <p>{{ copy4 }}</p>
    </section>
  </main>
</template>
<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  display: block;
  margin: 1.5rem auto;
}

button:hover {
  color: #fff;
  background-color: var(--accent-orange);
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
<script>
export default {
  name: "Page",
  methods: {
    goToVeiw() {
      window.location.href = "/contact";
    },
  },
  props: {
    title1: String,
    subTitle1: String,
    btnText: String,
    copy1: String,
    title2: String,
    subTitle2: String,
    copy2: String,
    imgName: String,
    subTitle3: String,
    copy3: String,
    subTitle4: String,
    subTitleList: Boolean,
    img2ndCol: String,
    copy4: String,
    gridColMD: {
      type: Number,
      default: 2,
    },
    gridColLG: {
      type: Number,
      default: 2,
    },
  },
};
</script>
