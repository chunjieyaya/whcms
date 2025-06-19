<template>
    <!-- 大图 -->
    <div class="header-pad" :style="headerPadStyle">
        <div class="viewMinAndMax box">
            <slot></slot>
            <div class="image">
                <img :src="iconUrl" alt="">
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
const props = defineProps({
    iconUrl: String,
    bgColor: String,
    bgImage: {
        type: String
    }, // 背景图片
    height: {
        type: String,
        default: '600px'
    },
    bgPosition: {
        type: String
    }
})


let headerPadStyle = reactive({
    backgroundImage: `url(${props.bgImage})`,
    height: props.height,
    backgroundColor: props.bgColor,
    backgroundPosition: props.bgPosition
    
})

</script>

<style lang="less" scoped>
.box {
    position: relative;

    .image {
        top: 0;
        left: 100px;
        position: absolute;

    }
}

.header-pad {
    min-width: 1200px;
    background-size: cover;
    position: relative;
    z-index: 1;

    &>div {
        height: 100%;
    }
}</style>