import _ from '../common';

export default [
  {
    title: `${_.KEYWORD}管理`,
    url: '/goods',
    onlyAdmin: false,
  },
  {
    title: `药品分类管理`,
    url: '/good-classify',
    onlyAdmin: true,
  },
  {
    title: '用户管理',
    url: '/user',
    onlyAdmin: true,
  },
  {
    title: '操作日志',
    url: '/log',
    onlyAdmin: true,
  },

  {
    title: '邀请码管理',
    url: '/invite-code',
    onlyAdmin: true,
  },
  {
    title: '个人设置',
    url: '/user-config',
    onlyAdmin: false,
  },
];
