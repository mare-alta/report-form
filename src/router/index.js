import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/criar-reporte',
    name: 'criar-reporte',
    component: () => import('../views/form-view.vue'),
  },
  {
    path: '/id',
    name: 'id',
    component: () => import('../views/id-view.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search-view.vue'),
  },


  {
    path: '/',
    name: 'home',
    component: () => import('../views/reports-view.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
