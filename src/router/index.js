import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/MainView.vue"),
    },
    {
      path: "/mode/:name",
      name: "mode",
      component: () => import("@/views/ModeView.vue"),
    },
    {
      path: "/quiz/:mode/:category/:difficulty",
      name: "quiz",
      component: () => import("@/views/QuizView.vue"),
    },
    {
      path: "/learn/:mode/:category",
      name: "learn",
      component: () => import("@/views/LearnView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/ProfileView.vue"),
    },
  ],
});
