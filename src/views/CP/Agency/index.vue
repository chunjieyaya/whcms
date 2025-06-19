<template>
  <!-- 大图 -->
  <HeaderPad height="390px" bg-position="right top" :bg-image="header.bgImg">
    <div class="header">
      <div class="headline">{{ header.hugeText }}</div>
      <div class="descriptive">{{ header.des }}</div>
    </div>
  </HeaderPad>

  <!-- 固定导航 -->
  <FixedNav :navs="fixNav"></FixedNav>

  <!-- 优势介绍 -->
  <div id="advantage">
    <Advantage :advantages="advantage"></Advantage>
  </div>

  <!-- 折扣制度 -->
  <div id="discount">
    <Discount :discount="discount"></Discount>
  </div>

  <!-- 合作流程 -->
  <div id="cooperationProcess">
    <CooperationProcess :flows="flow"></CooperationProcess>
  </div>

  <!-- 更多细节 -->
  <div id="moreDetail">
    <MoreDetail :moreDetail="moreDetail"></MoreDetail>
  </div>

  <!-- 底部长图 -->
  <BtmLongImg></BtmLongImg>
</template>

<script lang="ts" setup>
import { header, flow, fixNav, advantage, discount, moreDetail, bottomImgUrl } from './configData';
import Discount from './Discount/index.vue'
import MoreDetail from './MoreDetail/index.vue'
import Advantage from './Advantage/index.vue'



</script>

<style lang="less" scoped>
.header {
  width: 550px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: @primary-text-color;

  .headline {
    font-size: @h1-text-size;
    margin-bottom: 28px;
  }

  .descriptive {
    font-size: @h5-text-size;
    line-height: 1.5;
  }
}

#cooperationProcess {
  padding: 40px 0;
}
</style>