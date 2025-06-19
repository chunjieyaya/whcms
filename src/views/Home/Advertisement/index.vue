<template>
    <!-- 底部长图-->
    <div class="box">
        <div class="advertisement viewMinAndMax">
            <div class="circle circle1"><img :src="`/circle.png`" alt=""></div>
            <div class="circle circle2"><img :src="`/circle.png`" alt=""></div>
            <div class="circle circle3"><img :src="`/circle.png`" alt=""></div>
            <div class="text">
                <div class="first">{{ advertisement.title }}</div>
                <div class="descriptive">{{ advertisement.des }}</div>
                <div>
                    <el-button type="primary" @click="gotoView(advertisement.btn.url)">{{ advertisement.btn.text
                    }}</el-button>
                </div>
            </div>
            <div class="image">
                <img :src="advertisement.imgUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

// props
const props = defineProps({
    advertisement: {
        type: Object,
        default: {}
    }
})

let router = useRouter()

// 跳转页面
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.box{
    width: 100%;
    overflow: hidden;
}
.advertisement {
    margin-top: 50px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    .circle {
        position: absolute;
    }

    .circle1 {
        right: -200px;
    }

    .circle2 {
        right: 400px;
        top: 20px;
        transform: rotate(-100deg);
    }

    .circle3 {
        left: -200px;
        bottom: -60px;
        transform: rotate(60deg);
    }

    .text {
        width: 577px;

        .first {
            font-size: @h2-text-size;
            color: @primary-text-color;
            margin-bottom: 10px;
        }

        .descriptive {
            font-size: @h4-text-size;
            color: @primary-text-color;
            margin-bottom: 31px;
        }

        .el-button {
            width: 150px;
            height: 40px;
            font-size: @h5-text-size;
        }
    }

    .image {
        position: relative;
        right: 50px;
        height: 200px;
        z-index: -1;

        img {
            height: 100%;
        }

        &::after {
            position: absolute;
            z-index: -1;
            content: '';
            width: 100000px;
            height: 100%;
            background: #ffcb37;
            top: 0;
            left: 100px;
        }
    }
}
</style>