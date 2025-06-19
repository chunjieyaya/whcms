<template>
  <!-- 轮播图 -->
  <Banner :tags="tags"></Banner>

  <!-- 推荐 -->
  <Recommend></Recommend>

  <!-- 解决方案 -->
  <Solution :solution="solution"></Solution>

  <!-- 合作伙伴 -->
  <Partner :hugeText="partners.hugeText" :imgDatas="partners.data"></Partner>

  <!-- 基础设施 -->
  <ModuleCard
    bg-color="#f5f7fa"
    headline-text="安全合规、高速稳定的基础设施建设"
    des="遍布全球的基础设施节点为用户提供快速稳定、智能可靠的服务 "
  >
    <div class="infrastructure">
      <div class="item">
        <div class="title"><span>70</span>个可用区</div>
        <div class="des">为企业提供有力的技术支持，助力业务飞速扩展</div>
      </div>
      <div class="item">
        <div class="title"><span>26</span>个地理区域</div>
        <div class="des">提供集计算、数据、运营于一体的全球云端服务体验</div>
      </div>
      <div class="item">
        <div class="title"><span>2800+ </span>全球加速节点</div>
        <div class="des">通过将服务内容分发至全网加速节点，降低访问延迟</div>
      </div>
      <div class="bt">
        <ul>
          <li v-for="item in 9">
            <div class="img"><img :src="`/home/jc1.png`" alt="" /></div>
            <div class="text">ISO 27001</div>
          </li>
        </ul>
      </div>
      <div class="earth">
        <Earth></Earth>
      </div>
    </div>
  </ModuleCard>

  <!-- 广告语 -->
  <Advertisement :advertisement="advertisement"></Advertisement>
</template>

<script lang="ts" setup>
import Banner from "./Banner/index.vue";
import Recommend from "./Recommend/index.vue";
import Solution from "./Solution/index.vue";
import Advertisement from "./Advertisement/index.vue";
import { solution, partners, advertisement, tags } from "./configData";
</script>

<style lang="less" scoped>
.infrastructure {
  position: relative;
  z-index: 1;
  padding-bottom: 200px;

  .item {
    margin-bottom: 50px;

    .title {
      font-size: @h3-text-size;
      color: @primary-text-color;
      margin-bottom: 10px;

      span {
        display: inline-block;
        margin-right: 10px;
        font-size: @h2-text-size;
        color: @primary-color;
      }
    }

    .des {
      font-size: @h6-text-size;
      color: @regular-text-color;
    }
  }

  .bt {
    position: absolute;
    padding: 0 68px;
    z-index: 10;
    width: 100%;
    max-width: 1400px;
    left: 50%;
    bottom: -60px;
    transform: translate(-50%, 50%);
    background-image: linear-gradient(0deg, #fff, #f3f5f8);
    border: 2px solid #fff;
    box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, 0.1);
    border-radius: 4px;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        display: block;
        padding: 20px 8px 22px;
        font-size: 14px;
        color: @primary-text-color;
        text-align: center;
        line-height: 20px;

        &:hover {
          color: @primary-color;
        }
        &:hover .img {
          background-color: #f7f7f7;
          box-shadow: 0 0 5px 5px #eee;
          border-color: #fff;
        }
        .img {
          width: 80px;
          height: 80px;
          background: #fff;
          border: 1px solid #e5e8ed;
          border-radius: 50%;
          box-sizing: border-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin: 0 auto 6px;
          overflow: hidden;
          transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
          padding: 15px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .earth {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1400px;
    height: 100%;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 99;
      left: 0;
      top: 0;
      background-color: rgba(255, 255, 255, 0);
    }
  }
}
</style>