import { createRouter, createWebHashHistory } from 'vue-router';
import { user } from '@/api';
import store from '@/store';
import { message } from 'ant-design-vue';

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
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  let res = {};

  try {
    res = await user.info();
  } catch (e) {
    if (e.message.includes('code 401')) {
      res.code = 401;
    }
  }

  const { code } = res;

  if (code === 401) {
    if (to.path === '/auth') {
      next();
      return;
    }

    message.error('认证失败，请重新登入');
    next('/auth');

    return;
  }

  const reqArr = [];

  if (!store.state.characterInfo.length) {
    reqArr.push(store.dispatch('getCharacterInfo'));
  }

  if (!store.state.userInfo.account) {
    reqArr.push(store.dispatch('getUserInfo'));
  }

  await Promise.all(reqArr);

  next();
});

export default router;
