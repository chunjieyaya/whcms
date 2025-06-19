<template>
    <!-- 大图 -->
    <HeaderPad :bgImage="header.imgUrl" bg-position="70% top" height="450px">
        <div class="header">
            <div class="headline">{{ header.title }}</div>
            <div class="card">{{ header.text }}</div>
            <div class="btns">
                <el-button type="primary" @click="gotoView(header.btn1.url)">{{header.btn1.text}}</el-button>
                <el-button type="primary" @click="gotoView(header.btn2.url)" plain>{{header.btn2.text}}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 优势 -->
    <Advantage :advantages="advantage"></Advantage>

    <!-- 合作流程 -->
    <CooperationProcess :flows="flow"></CooperationProcess>

    <!-- 细节 -->
    <Server :servers="server"></Server>

    <!-- 优秀合作伙伴 -->
    <HoneycombPartners :partner="partner"></HoneycombPartners>

    <!-- 邀请-->
    <Invite :invite="invite"></Invite>
</template>

<script lang="ts" setup>
import Server from './Server/index.vue'
import Advantage from './Advantage/index.vue'
import Invite from './Invite/index.vue'
import { header,advantage,flow,server,invite,partner } from './configData'

let router = useRouter()

// 跳转页面
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headline {
        font-size: @h1-text-size;
        color: @primary-text-color;
        margin-bottom: 10px;
    }

    .card {
        font-size: @h5-text-size;
        color: @primary-text-color;
        margin-bottom: 52px;
    }

    .btns {
        .el-button {
            margin-right: 35px;
        }
    }


}
</style>