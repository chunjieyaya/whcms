<template>
    <!-- 大图 -->
    <HeaderPad height="565px" bg-position="90% center" :bg-image="header.imgUrl" bg-color="#d7e1ed">
        <div class="header">
            <div class="introduce">
                <div class="headline">{{ datacenters.data[currentCgNum].name }}</div>
                <div class="normal">{{ datacenters.data[currentCgNum].introduce }}</div>
                <div class="btn">
                    <el-button @click="videoVisible = true" type="primary" round>
                        <el-icon size="24">
                            <VideoPlay />
                        </el-icon><span style="margin-left: 10px;">{{ datacenters.data[currentCgNum].videoTimeLong }}</span>
                    </el-button>
                </div>
            </div>
        </div>

        <el-dialog v-model="videoVisible" :show-close="false" @open="openVideoVisible" @close="closeVideoVisible"
            :align-center="true" width="1050">
            <video class="videoNode" ref="videoRef" width="1050" height="591" controls autoplay>
                <source :src="datacenters.data[currentCgNum].videoUrl" type="video/mp4">
            </video>
        </el-dialog>
    </HeaderPad>

    <!-- 数据分类 -->
    <div class="category">
        <div class="category-main viewMinAndMax">
            <div class="caption">{{ datacenters.hugeText }}</div>
            <el-carousel ref="carouselRef" height="40px" :loop="false" arrow="never" indicator-position="none"
                :autoplay="false">
                <el-carousel-item>
                    <div class="category-box">
                        <span v-for="index in 5" :class="{ 'active': currentCgNum == index - 1 }"
                            @click="switchCg(index - 1)">{{ datacenters.data[index - 1].name }}</span>
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="category-box">
                        <span v-for="index in 5" :class="{ 'active': currentCgNum == index + 4 }"
                            @click="switchCg(index + 4)">{{ datacenters.data[index + 4].name }}</span>
                    </div>
                </el-carousel-item>
                <!-- 箭头 -->
                <el-icon @click="switchPage(carouselRef, 'prev')" class="prev">
                    <ArrowLeft />
                </el-icon>
                <el-icon @click="switchPage(carouselRef, 'next')" class="next">
                    <ArrowRight />
                </el-icon>
            </el-carousel>
        </div>
    </div>

    <!-- 介绍 -->
    <Introduce :data="datacenters.data[currentCgNum]"></Introduce>

    <!-- 标准-->
    <Standard bg-color="#f9f9fa" :standard="datacenters.data[currentCgNum].standard"></Standard>

    <!-- 设施 -->
    <Facility :facility="datacenters.data[currentCgNum].facility"></Facility>

    <!-- 底部长图 -->
    <BtmLongImg></BtmLongImg>
</template>
    
<script lang="ts" setup>
import Introduce from './Introduce/index.vue'
import Standard from './Standard/index.vue'
import Facility from './Facility/index.vue'
import type { CarouselInstance } from 'element-plus'
import { header, datacenters } from './configData'

let route = useRoute()

onMounted(() => {
    datacenters.data.map((item, index) => {
        if (item.id == Number(route.params.id)) {
            switchCg(index)
            if (index > 4) {
                nextTick(() => {
                    switchPage(carouselRef.value, 'next')
                })
            }
        }
    })
})

watch(() => route.params.id, () => {
    datacenters.data.map((item, index) => {
        if (item.id == Number(route.params.id)) {
            switchCg(index)
            if (index > 4) {
                switchPage(carouselRef.value, 'next')
            } else {
                switchPage(carouselRef.value, 'prev')
            }
        }
    })
})

// 跳转页面
let router = useRouter()

// 导航切换
let carouselRef = ref<CarouselInstance>()
let switchPage = (carouselRef: CarouselInstance | undefined, type: string) => {
    if (!carouselRef) return
    switch (type) {
        case 'prev':
            carouselRef.prev()
            break;
        case 'next':
            carouselRef.next()
            break;
    }
}

// 视频弹出框
let videoVisible = ref(false)
let videoRef = ref()
let closeVideoVisible = () => {
    videoRef.value.pause()
}
let openVideoVisible = () => {
    videoRef.value.load()
}


// 当前数据中心
let currentCgNum = ref(0)
let switchCg = (num: number) => {
    currentCgNum.value = num
    router.push(`/datacenter/${datacenters.data[num].id}`)
}


</script>

<style lang="less" scoped>
.videoNode {
    display: block;
}

/deep/ .el-dialog__body {
    padding: 0 !important;

}

/deep/ .el-dialog__header {
    display: none;
}

.header {
    height: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .introduce {
        width: 761px;
        position: relative;
        z-index: 22;

        .headline {
            font-size: @h1-text-size;
            color: @primary-text-color;
            margin-bottom: 28px;
        }

        .normal {
            margin-bottom: 38px;
            font-size: @h5-text-size;
            line-height: @paragraph-line-height;
            color: @regular-text-color;
        }


    }

    .bgimg {
        width: 1006px;
        height: 565px;
        position: absolute;
        z-index: 1;
        left: 540px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .second {
        margin-top: 30px;
    }

}

.category {
    .category-main {
        width: @main-width;
        margin: auto;
        padding: 90px 0 30px 0;

        .caption {
            padding-bottom: 45px;
            font-size: @h2-text-size;
            text-align: center;
            color: @primary-text-color;
        }

        .category-content {
            padding: 25px 0;
        }

        .el-carousel {
            margin-top: 20px;

            .prev {
                cursor: pointer;
                position: absolute;
                left: 0;
                top: 4px;
                font-size: @h5-text-size;
            }

            .next {
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 4px;
                font-size: @h5-text-size;
            }

            .category-box {
                width: 100%;
                height: 100%;
                padding: 0 30px;
                display: flex;
                justify-content: space-between;

                span {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    cursor: pointer;

                    &:hover {
                        color: @primary-color;
                    }
                }

                .active {
                    color: @primary-color;
                    border-bottom: 2px solid @primary-color;
                }
            }
        }

    }
}
</style>