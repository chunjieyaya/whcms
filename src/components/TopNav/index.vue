<template>
    <div class="top-nav" mode="horizontal">
        <li v-for="nav in navs" :class="{ 'is-hover': currentID == nav.id }" :index="nav.id"
            @mouseenter="mouseenterNav(nav.id)" @click="gotoView(nav.path)">
            <span>{{ nav.name }}</span>
        </li>
    </div>

    <!-- 弹出框 -->
    <div class="nav-box" :class="{ 'nav-box-show': navVisable }" @mouseleave="closeVisable" :before-close="closeVisable">
        <!-- 产品 -->
        <productTop v-if="currentID == '2'" @closeTopNav="closeVisable"></productTop>
        <!-- 合作伙伴 -->
        <partnerTop v-if="currentID == '3'" @closeTopNav="closeVisable"></partnerTop>
        <!-- 数据中心 -->
        <datacenterTop v-if="currentID == '4'" @closeTopNav="closeVisable"></datacenterTop>
        <!-- 用户指南 -->
        <handbook v-if="currentID == '5'" @closeTopNav="closeVisable"></handbook>
        <!-- 关于我们 -->
        <aboutTop v-if="currentID == '6'" @closeTopNav="closeVisable"></aboutTop>
    </div>
</template>

<script setup lang="ts">
import partnerTop from './partnerTop.vue'
import aboutTop from './aboutTop.vue'
import datacenterTop from './datacenterTop.vue'
import productTop from './productTop.vue'
import handbook from './handbook.vue'
import { getCurrentInstance } from 'vue'
import { debounce } from 'lodash'
const instance = getCurrentInstance()
let router = useRouter()

// 导航
let navs = ref([
    {
        id: '1',
        name: '最新活动',
        path: '/news',
    },
    {
        id: '2',
        name: '产品',
        path: '',
    },
    {
        id: '3',
        name: '合作伙伴',
        path: '/cp/ep',
    },
    {
        id: '4',
        name: '数据中心',
        path: '/datacenter/1',
    },
    {
        id: '5',
        name: '用户指南',
        path: '',
    },
    {
        id: '6',
        name: '关于我们',
        path: '/about/company',
    }
])
// 产品
let navVisable = ref(false)
let currentID = ref('0')
let mouseenterNav = (num: string) => {
    if(num == '1'){
        return 
    }
    currentID.value = num
    navVisable.value = true

}

// 关闭弹出层
let closeVisable = () => {
    navVisable.value = false
    currentID.value = '0'
}

// 跳转
let gotoView = (path: string) => {
    router.push(path)
    closeVisable()
}



</script>

<style lang="less" scoped>
.nav-box {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    z-index: -1;
    padding-top: 40px;
}

.nav-box-show {
    max-height: 700px;
    transition: .6s;
    box-shadow: 0 0 10px 5px #d1d1d1;
}

// 导航样式
.top-nav {
    width: 100%;
    display: flex;
    background-color: #fff;
    flex: 1;
    position: relative;
    z-index: 999; 
    li{
        display: flex;
        color: #606266;
        align-items: center;
        margin-right: 30px;
        font-size: @h6-text-size;
        cursor: pointer;
        &:hover{
            color: @primary-color;
        }
    }
}

/deep/ .is-active {
    color: @primary-color !important;
    border-bottom: none !important;
}

/deep/ .is-hover {
    color: @primary-color !important;
    border-bottom: 2px solid @primary-color !important;
}

/deep/ .el-menu-item:hover {
    color: @primary-color !important;
    background-color: #fff !important;
}

::v-deep .el-scrollbar__view {
    height: 100%;
}

.el-menu--horizontal {
    border: none;
}
</style>
