import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/MainView.vue"

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
      path: "/modus",
      name: "modus",
      component: () => import("../views/ModusView.vue"),
      params: { test: 1 },
      props: true,
    },
  ],
});

export default router;
