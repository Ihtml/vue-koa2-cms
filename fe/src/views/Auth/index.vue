<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <h2 class="title">互联网医院后台管理系统</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登入">
          <div class="item">
            <a-input
              size="large"
              placeholder="账户"
              v-model:value="loginForm.account"
            >
              <template
                v-slot:prefix
              >
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input-password size="large" v-model:value="loginForm.password" placeholder="密码">
              <template
                v-slot:prefix
              >
                <LockOutlined />
              </template>
            </a-input-password>
          </div>


          <div class="item">
            <a-button
              size="large"
              type="primary"
              @click="login"
            >
              登入
            </a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              size="large"
              placeholder="账户"
              v-model:value="regForm.account"
            >
              <template
                v-slot:prefix
              >
                <UserOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-input-password size="large" v-model:value="regForm.password" placeholder="密码">
              <template
                v-slot:prefix
              >
                <LockOutlined />
              </template>
            </a-input-password>
          </div>

          <div class="item">
            <a-input
              size="large"
              placeholder="邀请码"
              v-model:value="regForm.inviteCode"
            >
              <template
                v-slot:prefix
              >
                <MailOutlined />
              </template>
            </a-input>
          </div>

          <div class="item">
            <a-button
              @click="register"
              size="large"
              type="primary"
            >
              注册
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scpoed>
  @import './index.scss';
</style>
