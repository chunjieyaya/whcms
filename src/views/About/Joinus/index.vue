<template>
    <!-- 大图 -->
    <HeaderPad height="365px" bg-position="center top" :bg-image="header.imgUrl">
        <div class="header">
            <div class="headline">{{ header.text }}</div>
            <div class="normal">{{ header.des }}</div>
            <div class="btn">
                <el-button size="large" @click="gotoView(header.btn.url)">{{ header.btn.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 优势 -->
    <Advantage :advantage="advantage"></Advantage>

    <!-- 公司福利 -->
    <Welfare :wels="wels"></Welfare>

    <!-- 职位position -->
    <Position :jobs="jobs"></Position>

    <!-- 公司环境 -->
    <Environment :environments="environments"></Environment>

    <!-- 底部长图 -->
    <BtmLongImg></BtmLongImg>
</template>

<script lang="ts" setup>
import Advantage from './Advantage/index.vue'
import Position from './Position/index.vue'
import Welfare from './Welfare/index.vue'
import Environment from './Environment/index.vue'
import { header, advantage, jobs, wels, environments } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
@media only screen and (max-width: 1400px) {
    .bg-img {
        left: 0 !important;
    }
}

.header {
    height: 100%;
    width: 575px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    color: #fff;
    z-index: 1;

    .bg-img {
        position: absolute;
        left: 575px;
        z-index: -1;
        height: 100%;

        img {
            height: 100%;
        }
    }

    .headline {
        font-size: @h1-text-size;
        margin-bottom: 11px;
    }


    .normal {
        margin-bottom: 43px;
        font-size: @h5-text-size;
        line-height: 1.5;
    }
}
</style>