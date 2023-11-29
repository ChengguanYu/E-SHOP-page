import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
