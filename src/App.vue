

<template>
  <!-- 头部 -->
  <el-affix :offset="0">
    <div class="top">
      <!-- logo -->
      <div @click="gotoView('/')" class="el-header-logo">
        <img class="el-header-logo-img" src="./assets/logo.png" />
      </div>

      <!-- 导航 -->
      <div class="el-header-nav" v-if="!$route.meta.isDAS">
        <TopNav></TopNav>
      </div>

      <!-- 功能 -->
      <div class="el-header-units">
        <!-- 搜索框 -->
        <el-input
          v-if="!$route.meta.isDAS"
          v-model="keyword"
          placeholder="搜索"
          :suffix-icon="Search"
        />

        <!-- 中英文切换 -->
        <el-dropdown :teleported="false">
          <span class="el-dropdown-link">
            简体中文
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- 登录注册按钮 -->
        <el-button
          v-if="!$route.meta.isDAS && !userStore.isLogin"
          @click="gotoView('/login')"
          link
          >登录</el-button
        >
        <el-button
          v-if="!$route.meta.isDAS && !userStore.isLogin"
          @click="gotoView('/signin')"
          type="primary"
          >注册有礼</el-button
        >

        <!-- 登录成功信息 -->
        <el-button 
          link
          @click="gotoView('/user/usercenter')"
          v-if="userStore.isLogin"
          style="margin-right: 20px">
          控制台
          </el-button>

        <el-popover
          placement="top-start"
          v-if="userStore.isLogin"
          :teleported="false"
          :width="250"
          trigger="hover"
        >
          <template #reference>
            <div @click="gotoView('/user/usercenter')" class="login-picture">
              <img src="./assets/user.svg" />
            </div>
          </template>
          <div class="menu-list">
            <div class="item">
              <div class="user-name" v-if="userStore.userInfo">
                {{ userName }}
              </div>
            </div>
            <div class="item">
              <el-button link>用户中心</el-button>
            </div>
            <div class="item">
              <el-button link>我的服务</el-button>
            </div>
            <div class="item">
              <el-button link>账单管理</el-button>
            </div>
            <div class="item">
              <el-button link>我的工单</el-button>
            </div>
            <div class="btn">
              <el-button v-if="userStore.isLogin" @click="logout()"
                >退出账号</el-button
              >
            </div>
          </div>
        </el-popover>
        <el-button v-if="$route.meta.isDAS" link @click="gotoView('/')"
          >首页</el-button
        >
      </div>
    </div>
  </el-affix>

  <!-- 中间主要部分 -->
  <router-view></router-view>

  <!-- 底部 -->
  <Footer v-if="!$route.meta.isDAS && !$route.meta.isUserCenter"></Footer>

  <!--公司版权 -->
  <div class="footer-copyright" v-if="!$route.meta.isUserCenter">
    <div class="viewMinAndMax">
      {{ !$route.meta.isUserCenter }}Copyright@2019-2023 JIMCLOUD TECHNOLOGY
      PTE. LTD 版权所有 All Rights Reserved
    </div>
  </div>
</template>

<script setup lang="ts">
import TopNav from "@/components/TopNav/index.vue";
import Footer from "@/components/Footer/index.vue";
import { Search } from "@element-plus/icons-vue";

import useUserStore from "@/stores/user";
const userStore = useUserStore();

// 用户名
let userName = computed(() => {
  return userStore.userInfo.details.fullname || "";
});

let keyword = ref("");

// 修改elememnt样式
onMounted(() => {
  document.body.style.setProperty("--el-color-primary", "#ff8500");
  document.body.style.setProperty("--el-color-primary-light-9", "#ffffff");
  document.body.style.setProperty("--el-color-primary-light-7", "#f89875");
  document.body.style.setProperty("--el-color-primary-light-5", "#f89875");
  document.body.style.setProperty("--el-color-primary-light-3", "#f89875");
  document.body.style.setProperty("--el-color-primary-dark-2", "#ff8500");

  if (userStore.isLogin) {
    userStore.ClientDetail();
  }
});

// 退出登录
let logout = () => {
  userStore.ClientLogout();
};

// 跳转页面
let router = useRouter();
function gotoView(url: string) {
  router.push(url);
}
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  min-width: 1200px;
  height: 60px;
  padding: 0 60px;
  background-color: #fff;
  box-shadow: 0px 0 5px 1px #dddada;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;

  @media only screen and (max-width: 1282px) {
    padding: 0;
  }

  .el-header-logo {
    width: 170px;
    height: 100%;
    margin-right: 20px;
    cursor: pointer;

    .el-header-logo-img {
      height: 90%;
    }
  }

  .el-header-nav {
    width: 500px;
    height: 100%;
    display: flex;
  }

  .el-header-units {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;

    .el-input {
      width: 200px;
      margin-right: 30px;
    }

    .username {
      font-size: @h6-text-size;
      color: @primary-color;
      cursor: pointer;
      margin-right: 10px;
    }

    .el-tooltip__trigger {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }

    .login-picture {
      cursor: pointer;
      transition: 0.3s;
      border: 3px solid #fff;
      width: 45px;
      height: 45px;
      padding: 1px;
      border-radius: 50%;

      &:hover {
        border: 3px solid rgb(250, 228, 218);
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.menu-list {
  .user-name {
    font-size: @h4-text-size;
    padding: 10px 0;
  }
  .item {
    margin-bottom: 10px;
  }

  .btn {
    .el-button {
      width: 100%;
    }
  }
}

.footer-copyright {
  background-color: #fff;
  position: relative;
  z-index: 99;

  div {
    padding: 10px 0;
    text-align: center;
    font-size: @h6-text-size;
    color: #bbbbbb;
  }
}
</style>
