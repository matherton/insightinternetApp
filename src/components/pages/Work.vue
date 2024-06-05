<script setup>
import WorkItem from "../utilities/WorkItem.vue";
import connectLogo from "/src/assets/connect-auto.png";
import arnoldLogo from "/src/assets/ar-logo-long.png";
import lloydsLogo from "/src/assets/lloyds-bank-logo-long.png";
</script>

<template>
  <div class="wrapper">
    <p class="work-intro">
      Explore some of the projects we have successfully completed for our
      clients. Each project highlights our commitment to excellence and our
      expertise in delivering top-notch React applications.
    </p>

    <div class="flex flex-wrap">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full"
      >
        <!-- Column 1 Lloyds -->
        <WorkItem
          :logoSrc="lloydsLogo"
          alt="Lloyds Bank"
          role="Sapient React Consultant"
          body="Provided React consulting services to Lloyds Banking Group through Sapient to develop their loan's Journeys"
          tech1="React"
          tech2="MUI"
          tech3="Cypress"
          @click="toggleSelectFlag"
        />
        <!-- Column 2 - Arnold Clark -->
        <WorkItem
          :logoSrc="arnoldLogo"
          alt="Arnold Clark"
          role="React Native Developer"
          body="Provided React Native development services to Arnold Clark developing their mobile car reservation app"
          tech1="React Native"
          tech2="Redux Sagas"
          tech3="ES6"
          imgResise
        />
        <!-- Column 3 lloyds -->
        <WorkItem
          :logoSrc="lloydsLogo"
          alt="Lloyds Bank"
          role="BJSS React Consultant"
          body="Provided React consulting services to Lloyds Banking Group through BJSS working on their loan's React application"
          tech1="React"
          tech2="MUI"
          tech3="Storybook"
        />
        <!-- Column 4 Connect Auto-->
        <WorkItem
          :logoSrc="connectLogo"
          alt="Connect-Auto"
          role="React Web Developer"
          body="Employed React Web Application development services to Connect-Auto and their clients"
          tech1="React"
          tech2="styled-components"
          tech3="ES6"
        />
      </div>
    </div>
    <div v-show="showSelectFlag">
      <!-- content to be rendered if condition is true -->
      <p>showSetFlag True</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      showSelectFlag: false,
    };
  },
  methods: {
    toggleSelectFlag() {
      this.showSelectFlag = !this.showSelectFlag;
    },
  },
};
</script>
<style scoped type="text/css">
.work-intro {
  text-align: center;
  padding: 1rem;
}

.imgSpacer img {
  margin-bottom: 1rem;
}
</style>
