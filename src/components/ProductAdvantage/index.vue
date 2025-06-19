<template>
    <!-- 产品优势 -->
    <div class="advantage">
        <div v-for="(item, index) in data">
            <div v-if="parseInt(index) % 2 == 0" class="item">
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="content">
                    <div class="text">{{ item.text }}</div>
                    <div class="des">{{ item.des }}</div>
                </div>
            </div>
            <div v-if="parseInt(index) % 2 == 1" class="item">
                <div class="content">
                    <div class="text">{{ item.text }}</div>
                    <div class="des">{{ item.des }}</div>
                </div>
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
let props = defineProps({
    data: {
        type: Object,
        default: []
    }
})

</script>
<style lang="less" scoped>
// 产品优势
.advantage {
    &>div:last-child {
        .item {
            border: none;
        }
    }

    .item {
        display: flex;
        align-items: center;
        padding: 71px 0;
        border-bottom: 1px solid rgba(239, 239, 239, 1);

        &>div {
            flex: 1;
        }

        .img {
            text-align: center;

            img {
                width: 350px;
            }
        }

        .content {
            .text {
                font-size: @h3-text-size;
                color: @primary-text-color;
                margin-bottom: 20px;
            }

            .des {
                font-size: @h5-text-size;
                color: @regular-text-color;
                line-height: 1.5;
            }
        }
    }
}
</style>