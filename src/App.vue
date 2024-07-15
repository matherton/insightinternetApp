<script setup>
import Header from "./components/Header.vue";
import Page from "./components/Page.vue";
import Footer from "./components/Footer.vue";
import "./style.css";

defineProps({
  title1: {
    type: String,
    default: "",
  },
  subTitle1: {
    type: String,
    default: "",
  },
  btnText: {
    type: Boolean,
    default: false,
  },
  copy1: {
    type: String,
    default: "",
  },
  title2: {
    type: String,
    default: "",
  },
  subTitle2: {
    type: String,
    default: "",
  },
  subTitle3: {
    type: String,
    default: "",
  },
  copy2: {
    type: String,
    default: "",
  },
  imgName: {
    type: String,
    default: "",
  },
  copy3: {
    type: String,
    default: "",
  },
  subTitle4: {
    type: String,
    default: "",
  },
  gridColMD: {
    type: Number,
    default: 2,
  },
  gridColLG: {
    type: Number,
    default: 2,
  },
});
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>

<script>
export default {
  name: "App",
  components: {
    Page,
  },
  mounted() {
    function addViewportMetaTag() {
      const head = document.head;
      const viewportTag = document.querySelector('meta[name="viewport"]');

      if (!viewportTag) {
        const metaTag = document.createElement("meta");
        metaTag.setAttribute("name", "viewport");
        metaTag.setAttribute(
          "content",
          "width=device-width, initial-scale=1.0"
        );
        head.appendChild(metaTag);
      }
    }

    window.addEventListener("DOMContentLoaded", addViewportMetaTag);
  },
};
</script>
