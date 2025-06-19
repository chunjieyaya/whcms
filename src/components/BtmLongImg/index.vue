<template>
    <!-- 图片-->
    <div class="image" :style="{ height: height}">
        <div class="text viewMinAndMax" :style="{  }">
            <div class="title">推广链接设置</div>
            <div class="des">他人通过您的推广链接访问JIMCLOUD并购买产品，即为有效推广。</div>
            <div class="btn">
                <el-button type="primary">设置链接</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    height: {
        type: String,
        default: '200px'
    }
})
</script>
<style lang="less" scoped>
// 图片
.image {
    min-width: 1200px;
    position: relative;
    background-image: url('./bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    .text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;

        .title {
            font-size: @h2-text-size;
            margin-bottom: 5px;
            font-weight: 600;
        }

        .des {
            font-size: @h5-text-size;
            margin-bottom: 20px;
        }
    }
}
</style>