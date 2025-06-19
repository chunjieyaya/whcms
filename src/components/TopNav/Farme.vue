<template>
    <div class="farme">
        <!-- ,background: `url(/topNav/left.png)` -->
        <div class="f-left" :style="{width: `${leftWidth}px`}">
            <div class="detail" v-if="showDetail">
                <div class="image"><img :src="imgUrl" alt=""></div>
                <div class="title">{{title}}</div>
                <div class="des">{{des}}</div>
                <slot name="btn"></slot>
            </div>
            <slot name="nav"></slot>
        </div>
        <div class="f-content">
            <slot name="content"></slot>
        </div>
        <div class="f-right" v-if="showRight">
            <el-image :src="`/ecs/feature1.jpg`" fit="cover" />
        </div>
    </div>
</template>

<script setup lang="ts">
let props = defineProps({
    imgUrl: String,
    title: String,
    des: String,
    showDetail: {
        type: Boolean,
        default: true
    },
    leftWidth: {
        type: Number,
        default: 400
    },
    showRight: {
        type: Boolean,
        default: true
    },
})

</script>

<style lang="less" scoped>
.farme {
    max-width: 1600px;
    height: 100%;
    margin: auto;
    display: flex;

    &>div {
        padding: 40px 0;
    }

    .f-left {
        height: 100%;
        padding: 40px;
        background-size: 100% 100%;
        .detail {

            .image {
                height: 80px;

                img {
                    height: 100%;
                }
            }

            .title {
                font-size: @h2-text-size;
                color: @primary-text-color;
            }

            .des {
                font-size: @h6-text-size;
                color: @regular-text-color;
                line-height: 1.5;
            }

            .title,
            .des,
            .image {
                margin-bottom: 20px;
            }
        }
    }

    .f-content {
        border-left: 1px solid #dfe1e6;
        flex: 1;
    }

    .f-right {
        width: 300px;
        height: 100%;

        .el-image{
            width: 200px;
            height: 250px;
            border-radius: 10px;
        }
    }
}</style>
