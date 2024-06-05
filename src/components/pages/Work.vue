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
          @click="toggleFlag('showSelectFlag')"
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
          @click="toggleFlag('showArnoldClark')"
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
          @click="toggleFlag('showBJSS')"
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
          @click="toggleFlag('showConnectAuto')"
        />
      </div>
    </div>

    <div class="intro container" v-show="showSelectFlag">
      <img :src="lloydsLogo" alt="Lloyds Banking Group Logo" />
      <h2>Banking Staff Support Application</h2>
      <p><strong>Client:</strong> Lloyds Banking Group</p>
      <p><strong>Industry:</strong> Finance</p>
      <p><strong>Project Duration:</strong> 6 months</p>
      <p>
        <strong>Project Description:</strong> Insight Internet provided React
        consulting services to Lloyds Banking Group through Sapient. The project
        involved the development of a reusable component library for a staff
        support application. The application was designed to assist banking
        staff in providing real-time loan eligibility information to customers
        over the phone. This innovative solution replaced a manual process that
        previously took up to two weeks, significantly improving efficiency and
        customer satisfaction.
      </p>
      <p><strong>Technologies Used:</strong> React, Cypress, REST APIs</p>
      <p><strong>Results:</strong></p>
      <ul>
        <li>
          Streamlined loan eligibility checks from two weeks to real-time.
        </li>
        <li>Enhanced customer service with instant data retrieval.</li>
        <li>
          Developed reusable components with comprehensive Cypress test
          coverage.
        </li>
        <li>
          Seamless integration with live APIs in collaboration with backend
          developers.
        </li>
      </ul>
      <p class="testimonial">
        "Insight Internet's expertise in React transformed our internal
        processes. The new application has drastically reduced the time required
        for loan decisions, enhancing our service delivery." - Lloyds Banking
        Group
      </p>
    </div>
    <div v-show="showArnoldClark">Arny Clarky.................</div>
    <div v-show="showBJSS">BJSS.................</div>
    <div v-show="showConnectAuto">Connect Auto.................</div>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      showSelectFlag: false,
      showArnoldClark: false,
      showBJSS: false,
      showConnectAuto: false,
    };
  },
  methods: {
    toggleFlag(flagName) {
      this[flagName] = !this[flagName];
      this.resetFlags(flagName);
    },
    resetFlags(flagName) {
      Object.keys(this.$data).forEach((key) => {
        if (key !== flagName && key.startsWith("show")) {
          this[key] = false;
        }
      });
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

.container {
  margin: auto;
  overflow: hidden;
  background: #fff;
}
.header {
  background-color: #003366;
  color: white;
  padding: 10px 0;
  text-align: center;
}
.intro {
  padding: 20px;
  text-align: left;
  background-color: #fff;
}
.project {
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.project h2 {
  color: #003366;
}
.project p {
  line-height: 1.6;
}
.project img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}
.testimonial {
  font-style: italic;
  color: #666;
}
</style>
