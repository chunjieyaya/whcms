<template>
  <!-- 更多细节 -->
  <ModuleCard bg-color="#F7F9FC" :headline-text="moreDetail.hugeText">
    <div class="box">
      <swiper :modules="modules" :slides-per-view="3" navigation :pagination="{ clickable: true }"
        :autoplay="{ delay: 1000, disableOnInteraction: false }" :space-between="40" :centeredSlides="true" :loop="true">
        <swiper-slide v-for="item in moreDetail.data">
          <div class="img"><img :src="item.imgUrl" alt=""></div>
          <div class="text">
            <div class="normal">{{ item.title }}</div>
            <div class="descriptive">{{ item.des }}</div>
          </div>
        </swiper-slide>

      </swiper>
    </div>

  </ModuleCard>
</template>

<script lang="ts" setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头

const modules = [Navigation, Pagination, Scrollbar];

// props
const props = defineProps({
  moreDetail: {
    type: Object,
    default: {}
  }
})


</script>

<style lang="less" scoped>
/deep/ .swiper-button-prev,
/deep/ .swiper-button-next {
  --swiper-navigation-color: #666666 !important;
  --swiper-navigation-size: 20px;
  background-color: #fff;
  padding: 25px;
  border-radius: 50%;
}

/deep/ .swiper-button-prev {
  left: -50px;
}

/deep/ .swiper-button-next {
  right: -50px;
}

.box {
  position: relative;
}

.swiper {
  position: static;
}

/deep/ .swiper-pagination {
  bottom: -50px;
}



.text {
  padding: 20px;
}

.swiper-slide {
  width: 515px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  transition: 300ms;
  transform: scale(0.8);

}


.swiper-slide-prev {
  position: relative;

  // &::before {
  //   position: absolute;
  //   content: '';
  //   width: 120%;
  //   height: 100%;
  //   top: 0;
  //   left: -10px;
  //   background-image: linear-gradient(to left, rgba(247, 249, 252, .5 ), rgba(247, 249, 252, 1));
  //   z-index: 999;
  // }
}

.swiper-slide-next {
  position: relative;

  // &::before {
  //   position: absolute;
  //   content: '';
  //   width: 120%;
  //   height: 100%;
  //   top: 0;
  //   right: 0;
  //   background-image: linear-gradient(to right, rgba(247, 249, 252, .5), rgba(247, 249, 252, 1));
  //   z-index: 999;
  // }
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}



.img {
  width: 100%;
  height: 160px;

  img {
    width: 100%;
    height: 100%;
  }
}

.normal {
  font-size: @h3-text-size;
  color: @primary-text-color;
  margin-bottom: 6px;
}
.descriptive{
  font-size: @h6-text-size;
  color: @regular-text-color;
  line-height: 1.5;
}
</style>