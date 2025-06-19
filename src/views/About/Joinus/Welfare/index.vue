<template>
    <!-- 优势 -->
    <ModuleCard :headline-text="wels.hugeText">
        <div class="welfare">
            <div class="image">
                <img :src="currentImg" alt="">
            </div>
            <div class="navs">
                <div class="item" v-for="(item, index) in wels.data" :class="{ active: cuurentNum == index }"
                    @click="switchImg(item.imgUrl, index)">{{ item.text }}
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    wels: {
        type: Object,
        default: {}
    }
})

let currentImg = ref(props.wels.data[0].imgUrl)
let cuurentNum = ref(0)
let switchImg = (url: string, num: number) => {
    currentImg.value = url
    cuurentNum.value = num
}

</script>

<style lang="less" scoped>
.welfare {
    display: flex;
    height: 100%;
    height: 360px;

    .image {
        width: 900px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .navs {
        flex: 1;
        background-color: #f7f8fa;
        .item {
            width: 100%;
            height: 60px;
            padding-left: 45px;
            line-height: 60px;
            font-size: @h5-text-size;
            color: @primary-text-color;
            cursor: pointer;

            &:hover {
                color: @primary-color !important;
            }
        }
    }

    .active {
        color: @primary-color !important;
    }
}
</style>