<script setup>
import BulletListVue from "./utilities/BulletList.vue";
import Thought from "./Thought.vue";
import reactLogo from "../assets/react-icon.png";
import viteLogo from "/vite.svg";
import vueLogo from "../assets/vue-logo.svg";
</script>
<!-- TODO put all images in the public folder in order for them to available in dist folder like globe-icon.gif -->
<template>
  <main
    :class="`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColMD} lg:grid-cols-${gridColLG} gap-4 pt-4 pr-4 pl-4 pb-4 md:pb-0`"
  >
    <section>
      <h2>{{ title1 }}</h2>
      <strong>{{ subTitle1 }}</strong>
      <router-link to="/insightinternetApp/contact">
        <button
          v-if="btnText"
          class="bg-white hover:var(--accent-orange) text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          {{ btnText }}
        </button>
      </router-link>
      <p>{{ copy1 }}</p>
    </section>
    <section v-if="imgName" class="positionMe">
      <Thought />
      <img
        :src="`./${imgName}`"
        class="mx-auto"
        alt=""
        type="image"
        style="z-index: 2; position: relative"
      />
    </section>

    <section v-if="img2ndCol">
      <img
        :src="`./${img2ndCol}`"
        class="mx-auto max-w-40"
        alt=""
        type="image"
      />
    </section>

    <section v-if="img3rdCol">
      <div class="grid grid-cols-3">
        <a href="https://vitejs.dev" target="_blank">
          <img :src="`${viteLogo}`" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org" target="_blank">
          <img :src="`${vueLogo}`" className="logo vue" alt="Vue logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img :src="`${reactLogo}`" className="logo react" alt="React logo" />
        </a>
      </div>
    </section>

    <section v-if="subTitleList">
      <h2>{{ title2 }}</h2>
      <strong>{{ subTitle2 }}</strong>
      <p>{{ copy2 }}</p>

      <strong>{{ subTitle3 }}</strong>
      <p>{{ copy3 }}</p>

      <strong>{{ subTitle4 }}</strong>
      <p>{{ copy4 }}</p>

      <div><BulletListVue /></div>
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

      <strong>{{ subTitle5 }}</strong>
      <p>{{ copy5 }}</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "Page",
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
    copy4: String,
    subTitleList: Boolean,
    img2ndCol: String,
    img3rdCol: Boolean,
    gridColMD: {
      type: Number,
      default: 2,
    },
    gridColLG: {
      type: Number,
      default: 2,
    },
    subTitle5: {
      type: String,
      default: "",
    },
    copy5: {
      type: String,
      default: "",
    },
  },
};
</script>

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

.positionMe {
  position: static;
}

@media (min-width: 768px) {
  .positionMe {
    position: relative;
  }
  .positionMe img {
    position: absolute;
    bottom: 0;
  }
}
</style>
