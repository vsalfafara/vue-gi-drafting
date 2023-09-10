import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:roomId?",
    name: "Home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/room/:roomId",
    name: "Room",
    component: () => import("@/views/Room/index.vue"),
  },
  {
    path: "/draft",
    name: "Draft",
    component: () => import("@/views/Draft/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
