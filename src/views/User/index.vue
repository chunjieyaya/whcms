<template>
  <el-container>
    <!-- 导航 -->
    <el-aside>
      <el-scrollbar height="100%">
        <el-menu
          class="el-menu-vertical-demo"
          router
          default-active="/user/UserCenter"
        >
          <!-- 用户中心 -->
          <el-menu-item index="/user/UserCenter">
            <el-icon><icon-menu /></el-icon>
            <span>用户中心</span>
          </el-menu-item>

          <!-- 产品服务 -->
          <el-sub-menu index="2">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>产品服务</span>
            </template>
            <el-menu-item-group title="我的服务">
              <el-menu-item index="/user/myServe/1">云服务器</el-menu-item>
              <el-menu-item index="/user/myServe/2">物理机服务器</el-menu-item>
              <el-menu-item index="/user/myServe/3">SSL证书</el-menu-item>
              <el-menu-item index="/user/myServe/4">域名管理</el-menu-item>
              <el-menu-item index="/user/myServe/5">内容分发</el-menu-item>
            </el-menu-item-group>

            <el-menu-item-group title="其他服务">
              <el-menu-item index="2-2">购买服务</el-menu-item>
              <el-menu-item index="2-3">附加服务</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <!-- 财务管理 -->
          <el-sub-menu index="3">
            <template #title>
              <el-icon>
                <Setting />
              </el-icon>
              <span>财务管理</span>
            </template>
            <el-menu-item index="/user/billMange">账单管理</el-menu-item>
            <el-menu-item index="/user/charges">账户充值</el-menu-item>
            <el-menu-item index="/user/costsDetail">费用明细</el-menu-item>
          </el-sub-menu>

          <!-- 财务管理 -->
          <el-sub-menu index="/technicalSupport">
            <template #title>
              <el-icon>
                <Setting />
              </el-icon>
              <span>技术支持</span>
            </template>
            <el-menu-item index="/user/billMange">我的工单</el-menu-item>
            <el-menu-item index="/user/submitTicket">提交工单</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!-- 内容 -->
    <el-main>
      <el-scrollbar height="100%">
        <!-- <div class="breadcrumb">用户中心</div> -->
        <div class="content">
          <router-view></router-view>
        </div>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>


<style lang="less" scoped>
.el-container {
  min-width: 1200px;
  height: calc(100vh - 60px);

  .el-aside {
    transition: 0.3s;
    width: 200px;
    border-right: 1px solid #dcdfe6;

    .el-menu {
      border: none;
    }
  }

  .el-main {
    background-color: #f2f2f2;
    padding: 0;

    .breadcrumb {
      background-color: #fff;
      padding: 15px 20px;
      font-size: @h4-text-size;
      border-bottom: 1px solid #ddd;
    }

    .content {
      height: 600px;
      margin: auto;
      padding: 20px;
    }
  }
}
</style>