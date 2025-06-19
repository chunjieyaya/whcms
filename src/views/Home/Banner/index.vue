<template>
  <div class="banner">
    <keep-alive>
      <div class="banner-content viewMinAndMax">
        <!-- 轮播图 -->
        <el-carousel arrow="never">
          <el-carousel-item>
            <div class="content">
              <div class="text">
                <div class="second">一站式采购</div>
                <div class="huge">惠普上云，精选专区</div>
                <div class="des">
                  汇聚全站年度销量TOP云产品，满足您一站式上云需求
                </div>
                <div class="btn">
                  <el-button type="primary" size="large" plain
                    >立即前往</el-button
                  >
                </div>
              </div>
              <div class="img"></div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="content">
              <div class="text">
                <div class="second">一站式采购</div>
                <div class="huge">惠普上云，精选专区</div>
                <div class="des">
                  汇聚全站年度销量TOP云产品，满足您一站式上云需求
                </div>
                <div class="btn">
                  <el-button type="primary" size="large" plain
                    >立即前往</el-button
                  >
                </div>
              </div>
              <div class="img"></div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </keep-alive>
    <!-- 底部文本框 -->
    <div class="tags">
      <div class="tags-main viewMinAndMax">
        <div class="tags-main-item" v-for="item in tags">
          <div class="title">{{ item.text }}</div>
          <div class="des">{{ item.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
let props = defineProps({
  tags: {
    type: Object,
    default: [],
  },
});
</script>
<style lang="less">
.banner {
  min-width: 1200px;
  height: 610px;
  margin: auto;
  background-image: url("/home/homeBanner.gif");
  background-size: cover;
  background-position: top;
  position: relative;

  .el-carousel {
    height: 520px;
    padding-bottom: 80px;
    .el-carousel__container {
      height: 100%;
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        & > div {
          margin: 20px 0;
        }

        .second {
          font-size: @h2-text-size;
        }

        .huge {
          font-size: @h1-text-size;
        }

        .des {
          font-size: @h5-text-size;
          margin-bottom: 50px;
        }
      }

      .img {
        width: 500px;
      }
    }
  }

  .tags {
    width: 100%;
    height: 200px;
    position: absolute;
    left: 50%;
    bottom: -110px;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.3);

    .tags-main {
      height: 90px;
      display: flex;
      justify-content: space-between;

      .tags-main-item {
        text-align: center;
        padding-top: 20px;
        cursor: pointer;

        .title {
          font-size: @h5-text-size;
          color: @primary-text-color;
          margin-bottom: 15px;
        }

        .des {
          font-size: @h6-text-size;
          color: @regular-text-color;
        }
      }
    }
  }
}
</style>