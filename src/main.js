import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import About from "./components/pages/About.vue";
import Home from "./components/pages/Home.vue";
import Services from "./components/pages/Services.vue";
import Work from "./components/pages/Work.vue";
import ContactForm from "./components/pages/ContactForm.vue";

const routes = [
  {
    path: "/insightinternetApp/",
    component: Home,
  },
  {
    path: "/insightinternetApp/about",
    component: About,
  },
  {
    path: "/insightinternetApp/services",
    component: Services,
  },
  {
    path: "/insightinternetApp/contact",
    component: ContactForm,
  },

  {
    path: "/insightinternetApp/work",
    component: Work,
  },
  {
    path: "/insightinternetApp/*",
    redirect: "/insightinternetApp/",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");

function addViewportMetaTag() {
  const head = document.head;
  const viewportTag = document.querySelector('meta[name="viewport"]');

  if (!viewportTag) {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("name", "viewport");
    metaTag.setAttribute("content", "width=device-width, initial-scale=1.0");
    head.appendChild(metaTag);
  }
}

window.addEventListener("DOMContentLoaded", addViewportMetaTag);
