<script setup>
import { Transition } from "vue";
import CurrentWork from "../utilities/CurrentWork.vue";
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
    <strong class="flex flex-col items-center work-header">Current Work</strong>
    <CurrentWork
      imgName="pie.png"
      alt="Harkness Pies Logo"
      imgClass="pie-logo"
      client="Harkness Pies"
      industry="Food & Beverages"
      duration="ongoing"
      description="Insight Internet created a React Web Application for Harkness Pies. The system features a user-friendly interface for customers to view products and find out more about its ethos and the owner, Patrick Harkness. The project is ongoing, with Patrick currently undergoing a shop redesign. Once complete, he will supply new photos and content to update the web app, which was initially developed from a UX design he supplied."
      tech="React, Tailwind, Node.js, ES6, UX Design"
      hrefAddress="https://matherton.github.io/harkness-pies/"
    />

    <CurrentWork
      imgName="ewp-transparent.png"
      alt="Edinburgh Wheels Project"
      imgClass="ewp-logo"
      client="Edinburgh Wheels Project"
      industry="Charity"
      duration="onhold"
      description="InsightInternet volunteered to help the Edinburgh Wheels Project setup their new skate facility in Edinburgh. I also created a React App holding page to be updated with content once the skate facility is ready."
      tech="React"
      hrefAddress="https://matherton.github.io/wheels-project/"
    />
    <strong class="flex flex-col items-center work-header"
      >Previous Work</strong
    >
    <div class="flex flex-wrap">
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full"
      >
        <!-- Column 1 Lloyds -->
        <Transition name="fade" type="transition" duration="1000">
          <WorkItem
            :logoSrc="lloydsLogo"
            alt="Lloyds Bank"
            role="Sapient React Consultant"
            tech1="React"
            tech2="MUI"
            tech3="Cypress"
            @click="toggleFlag('showSelectFlag')"
          />
        </Transition>
        <!-- Column 2 - Arnold Clark -->
        <WorkItem
          :logoSrc="arnoldLogo"
          alt="Arnold Clark"
          role="React Native Developer"
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
          tech1="React"
          tech2="TypeScript"
          tech3="Storybook"
          @click="toggleFlag('showBJSS')"
        />
        <!-- Column 4 Connect Auto-->
        <WorkItem
          :logoSrc="connectLogo"
          alt="Connect-Auto"
          role="React Web Developer"
          tech1="React"
          tech2="styled-components"
          tech3="ES6"
          @click="toggleFlag('showConnectAuto')"
        />
      </div>
    </div>

    <div class="project container">
      <div v-show="showSelectFlag">
        <img :src="lloydsLogo" alt="Lloyds Banking Group Logo" />
        <h2>Banking Staff Support Application</h2>
        <p><strong>Client:</strong> Lloyds Banking Group</p>
        <p><strong>Industry:</strong> Finance</p>
        <p><strong>Project Duration:</strong> 6 months</p>
        <p>
          <strong>Project Description:</strong> Insight Internet provided React
          consulting services to Lloyds Banking Group through Sapient. The
          project involved the development of a reusable component library for a
          staff support application. The application was designed to assist
          banking staff in providing real-time loan eligibility information to
          customers over the phone. This innovative solution replaced a manual
          process that previously took up to two weeks, significantly improving
          efficiency and customer satisfaction.
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
      </div>
      <div v-show="showArnoldClark">
        <img src="/src/assets/arnold-clark-logo.png" alt="Arnold Clark Logo" />
        <h2>Car Reservation Mobile App</h2>
        <p><strong>Client:</strong> Arnold Clark</p>
        <p><strong>Industry:</strong> Automotive</p>
        <p><strong>Project Duration:</strong>5 months</p>
        <p>
          <strong>Project Description:</strong> Insight Internet undertook a
          remote contract with Arnold Clark to develop their car reservation
          mobile app. The app was developed using React and relied on Redux Saga
          for data management between web and mobile platforms. The project
          involved using VS Code and Xcode for actual device testing. Working
          within a small mobile team, the designs were delivered via Invision,
          and the app's functionality and design were implemented using ES6 and
          styled-components.
        </p>
        <p>
          <strong>Technologies Used:</strong> React, Redux Saga, VS Code, Xcode,
          ES6, styled-components, Invision
        </p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>
            Successfully developed a native mobile app for car reservations.
          </li>
          <li>
            Ensured seamless data flow between web and mobile using Redux Saga.
          </li>
          <li>
            Implemented design and functionality as per Invision prototypes.
          </li>
          <li>
            Conducted thorough testing on actual devices to ensure optimal
            performance.
          </li>
        </ul>
      </div>
      <div v-show="showBJSS">
        <img
          src="/src/assets/lloyds-bank-logo-long.png"
          alt="Lloyds Banking Group Logo"
        />
        <h2>React Loans Application Component Development</h2>
        <p><strong>Client:</strong> Lloyds Banking Group</p>
        <p><strong>Industry:</strong> Finance</p>
        <p><strong>Project Duration:</strong> 5 months</p>
        <p>
          <strong>Project Description:</strong> Insight Internet, through BJSS,
          provided React consulting services to Lloyds Banking Group. The
          project involved the development of reusable components in Storybook
          for their React Loans Application. The development was conducted in a
          fully agile environment, leveraging VS Code and TypeScript. Initially
          based at Lloyds' Head Office in Edinburgh, the team transitioned to
          remote work following a Covid-19 case. Each component, once approved
          by Product Owners, was integrated into the Loans App, enhancing its
          modularity and reusability.
        </p>
        <p>
          <strong>Technologies Used:</strong> React, Storybook, TypeScript, VS
          Code, MS Teams
        </p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>
            Successfully transitioned to remote work without impacting project
            timelines.
          </li>
          <li>
            Developed reusable components in Storybook, ensuring consistency and
            reusability.
          </li>
          <li>Enhanced collaboration and productivity using MS Teams.</li>
          <li>
            Provided comprehensive video demos to showcase component reusability
            across different brands.
          </li>
        </ul>
      </div>
      <div v-show="showConnectAuto" class="transition ease-in-out delay-150">
        <img src="/src/assets/connect-auto.png" alt="Connect Auto Logo" />
        <h2>Website Development and Enhancements</h2>
        <p><strong>Client:</strong> Connect Auto</p>
        <p><strong>Industry:</strong> Automotive</p>
        <p><strong>Project Duration:</strong>6 months</p>
        <p>
          <strong>Project Description:</strong> Insight Internet collaborated
          with Connect Auto on various high-profile automotive projects,
          including the development of a website for Lamborghini and updates to
          the Jaguar Land Rover site. The Lamborghini project involved creating
          a website based on designs provided via Invision. The Jaguar Land
          Rover project included adding new functionality such as data handling
          with Flow and updating the main page after form submission.
          Additionally, Insight Internet worked on various client websites,
          creating reusable styled components, bespoke ES6 functionality, SVG
          components, and integrating the markdown-to-jsx package to enhance the
          CMS WYSIWYG editor.
        </p>
        <p>
          <strong>Technologies Used:</strong> React, Flow, ES6,
          styled-components, SVG, JSON, markdown-to-jsx, Invision
        </p>
        <p><strong>Results:</strong></p>
        <ul>
          <li>
            Successfully developed a website for Lamborghini with high-fidelity
            design implementation.
          </li>
          <li>
            Enhanced Jaguar Land Rover site with advanced data handling and
            updated functionality.
          </li>
          <li>
            Created reusable components and bespoke functionality to improve
            efficiency and maintainability.
          </li>
          <li>
            Integrated markdown-to-jsx for enhanced content management
            capabilities.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Work",
  components: { Transition, CurrentWork, WorkItem },
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
.fade-leave-to,
.enter-from {
  opacity: 0;
}
.fade-leave-from,
.enter-to {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.work-intro {
  text-align: center;
  padding: 1rem 1rem 0;
}
.work-header {
  padding: 1rem;
  text-decoration: underline;
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

.project {
  text-align: left;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.project h2 {
  color: #003366;
}
.project p {
  margin: 1rem 0;
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
