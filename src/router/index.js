import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/MainView.vue"
//import Modus from "../views/ModusView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
      props: true,
    },
    {
      path: "/modus/:item",
      name: "modus",
      component: () => import("../views/ModusView.vue"),
      //component: Modus,
      props: true
    },
  ],
});

export default router
