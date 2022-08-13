import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "index",
    redirect: "/homeView",
  },
  {
    path: '/homeView',
    name: 'HomeView',
    component: () => import('@v/HomeView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;