import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/MainView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Main,
    },
    {
      path: "/mode",
      name: "mode",
      component: () => import("@/views/ModeView.vue"),
    },
    {
      path: "/quiz",
      name: "quiz",
      component: () => import("@/views/QuizView.vue"),
    },
    {
      path: "/learn",
      name: "learn",
      component: () => import("@/views/LearnView.vue"),
    },
  ],
});

export default router
