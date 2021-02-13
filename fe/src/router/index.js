import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  {
    path: '/',
    name: 'BasicLayout',
    // redirect: '/auth',
    component: () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'),
    children: [
      {
        path: 'goods',
        name: 'Goods',
        component: () => import(/* webpackChunkName: "Goods" */ '../views/Goods/index.vue'),
      },
      {
        path: 'goods/:id',
        name: 'GoodDetail',
        component: () => import(/* webpackChunkName: "BookDetail" */ '../views/GoodDetail/index.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
