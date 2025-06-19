<template>
  <UserCard>
    <el-tabs v-model="activeName">
      <el-tab-pane label="在线充值" name="first">
        <div class="line">
          <span class="label">充值账户</span>
          <span class="value">爱睡觉的神仙</span>
        </div>
        <div class="line">
          <span class="label">账户余额</span>
          <span class="value">$ 0.00</span>
        </div>
        <div class="line">
          <span class="label">充值金额</span>
          <span class="value">
            <el-input v-model="price" type="number">
              <template #prepend>$ (美元)</template>
            </el-input>
          </span>
          <span class="icon">
            <img src="./zfb.png" alt="" />
          </span>
        </div>
        <div class="line">
          <span class="label"></span>
          <span class="value">
            <el-button type="primary" plain>联系客服</el-button>
          </span>
        </div>
        <div class="line">
          <span class="label"></span>
          <span class="value">
            <el-alert type="warning" :closable="false">
              <p>1、充值金额只能用于JIMCLOUD消耗。</p>
              <p>2、最大支持360天内原路体现。</p>
            </el-alert>
          </span>
        </div>
        <div class="line">
          <span class="label"></span>
          <span class="value">
            <el-button type="primary">立即充值</el-button>
          </span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </UserCard>
</template>

<script lang="ts" setup>
import UserCard from "../UserCard/index.vue";

let activeName = ref("first");

// 充值金额
let price = ref(0);

// 是否同意
let consent = ref(false);
</script>


<style lang="less" scoped>
.line {
  margin-top: 20px;
  font-size: @h6-text-size;
  display: flex;
  align-items: center;
  position: relative;
  .label {
    width: 80px;
    color: @regular-text-color;
  }
  .value {
    flex: 1;
    color: @primary-text-color;
    .el-input {
      width: 300px;
    }
  }

  .icon {
    position: absolute;
    top: -7px;
    left: 380px;
    img{
        width: 100px;
    }
  }
}
</style>