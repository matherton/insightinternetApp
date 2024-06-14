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
    path: "/:subpath*",
    component: Home,
  },
  {
    path: "/:subpath*/about",
    component: About,
  },
  {
    path: "/:subpath*/services",
    component: Services,
  },
  {
    path: "/:subpath*/contact",
    component: ContactForm,
  },

  {
    path: "/:subpath*/work",
    component: Work,
  },
  {
    path: "/:subpath*/*",
    redirect: "/:subpath*",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");
