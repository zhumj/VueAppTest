import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "index",
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('@v/HomeView.vue'),
  },
  {
    path: '/fonts',
    name: 'FontsView',
    component: () => import('@v_func/FontsView.vue'),
  },
  {
    path: '/mourn',
    name: 'MournView',
    component: () => import('@v_func/MournView.vue'),
  },
  {
    path: '/cardRotate',
    name: 'CardRotateView',
    component: () => import('@v_func/CardRotateView.vue'),
  },
  {
    path: '/randomRollCall',
    name: 'RandomRollCallView',
    component: () => import('@v_func/RandomRollCallView.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;