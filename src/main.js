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
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/contact",
    component: ContactForm,
  },

  {
    path: "/work",
    component: Work,
  },
  {
    path: "/*",
    redirect: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");
