<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <div class="title">药品库存管理系统</div>
      </div>
      <div class="right">
        <img src="https://cms.drstrong.cn/static/images/user.jpg" alt="">

        <div class="hello-msg">你好，{{ store.userInfo.account }}</div>
        <div class="logout" @click="logout">退出</div>
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <div class="left">
        <app-nav />
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
