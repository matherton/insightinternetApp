import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";
import About from "./components/pages/About.vue";
import Home from "./components/pages/Home.vue";
import Services from "./components/pages/Services.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App).use(router);
app.mount("#app");
