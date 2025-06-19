<template>
    <!-- 大图 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="right top" height="360px">
        <div class="header">
            <div class="headline">{{ header.hugeText }}</div>
            <el-button type="primary" @click="gotoView(header.btn.path)" size="large">{{ header.btn.text }}</el-button>
        </div>
    </HeaderPad>

    <!-- 售前咨询 -->
    <Advisory :advisory="advisory"></Advisory>

    <!-- 售后服务 -->
    <Server :server="server"></Server>

    <!-- 市场合作 -->
    <Cp :cp="cp"></Cp>

    <!-- 公司地址 -->
    <Address :address="address"></Address>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>

<script lang="ts" setup>
import Advisory from './Advisory/index.vue'
import Server from './Server/index.vue'
import Address from './Address/index.vue'
import Cp from './Cp/index.vue'
import { header, advisory, server,cp, address } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.header {
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    .headline {
        font-size: @h1-text-size;
        margin-bottom: 30px;
    }

    .el-button {
        width: 100px;
    }
}





</style>