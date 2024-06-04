<script setup>
import Card from "../utilities/Card.vue";
import WorkItem from "../utilities/WorkItem.vue";
import connectLogo from "/src/assets/connect-auto.png";
</script>

<template>
  <div class="wrapper">
    <p class="work-intro">
      Explore some of the projects we have successfully completed for our
      clients. Each project highlights our commitment to excellence and our
      expertise in delivering top-notch React applications.
    </p>

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/4 xl:w-1/4">
        <!-- Column 1 content -->
        <Card
          imgSrc="https://imgs.search.brave.com/3zvhcaTE_a-hTnRRddvadsgioBLKrZ9awcQ2eGdT3QI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/bGxveWRzLnN2Zw.svg"
          header="Lloyd's Banking Group"
          body="Provided React consulting services to Lloyds Banking Group through Sapient"
          footer="view details"
        />
      </div>
      <div class="w-full md:w-1/4 xl:w-1/4">
        <!-- Column 2 content -->
        <Card
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f5/Arnold_Clark_Logo.svg"
          header="Arnold Clark"
          body="Provided React Native development services to Arnold Clark developing their mobile car reservation app"
          footer="view details"
        />
      </div>
      <div class="w-full md:w-1/4 xl:w-1/4">
        <!-- Column 3 content -->
        <Card
          imgSrc="https://imgs.search.brave.com/3zvhcaTE_a-hTnRRddvadsgioBLKrZ9awcQ2eGdT3QI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/bGxveWRzLnN2Zw.svg"
          header="Lloyd's Banking Group"
          body="Provided React consulting services to Lloyds Banking Group through BJSS working on their loan's React application"
          footer="view details"
        />
      </div>
      <div class="w-full md:w-1/4 xl:w-1/4">
        <Card
          :imgSrc="connectLogo"
          header="Connect-Auto"
          body="Employed React Web Application development services to Connect-Auto and their clients"
          footer="view details"
          class="imgSpacer"
        />
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full"
      >
        <!-- Column 1 -->
        <WorkItem />
        <!-- Column 2 -->
        <WorkItem />
        <!-- Column 3 -->
        <WorkItem />
        <!-- Column 4 -->
        <WorkItem />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
};
</script>
<style scoped>
.work-intro {
  text-align: center;
  padding: 1rem;
}
</style>
