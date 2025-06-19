<template>
    <!-- 公司介绍 -->
    <HeaderPad height="220px" bg-color="#000000">
        <div class="announcement">
            <div class="detail">
                <div class="title">{{ header.hugeText }}</div>
                <div class="text">{{ header.des }}</div>
            </div>
            <div class="image">
                <img :src="header.imgUrl" alt="">
            </div>
        </div>
    </HeaderPad>

    <!-- 公告 -->
    <ModuleCard :showHeader="false" bg-color="#f7f8fa">
        <div class="announcements">
            <!-- 搜索 -->
            <div class="search">
                <el-input v-show="!$route.meta.isDAS" v-model="keyword" size="large" placeholder="请输入公告标题关键词"
                    :prefix-icon="Search" />
            </div>
            <!-- 导航 -->
            <div class="navs">
                <span :class="{ active: currentNav == 1 }" @click="searchAnnouncement(1)">全部公告</span>
                <span :class="{ active: currentNav == 2 }" @click="searchAnnouncement(2)">产品公告</span>
                <span :class="{ active: currentNav == 3 }" @click="searchAnnouncement(3)">促销公告</span>
                <span :class="{ active: currentNav == 4 }" @click="searchAnnouncement(4)">安全公告</span>
                <span :class="{ active: currentNav == 5 }" @click="searchAnnouncement(5)">平台公告</span>
            </div>
            <!-- 列表 -->
            <div class="list" v-loading="loading" element-loading-text="加载中...">
                <div class="list-item" v-for="item in announcements">
                    <div class="left">
                        <span>{{item.title}}</span>
                        <!-- <el-tag type="danger" v-if="item <= 4">促销</el-tag> -->
                    </div>
                    <div class="right">{{item.rawDate}}</div>
                </div>
            </div>
            <!-- 分页 -->
            <div class="pagination">
                <el-pagination layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { header } from './configData'
import useSiteStore from '@/stores/site'

let siteStore = useSiteStore()

let announcements = ref()
let loading = ref(true)
// 获取公告
onMounted(async ()=>{
    announcements.value = await siteStore.SiteAnnouncements()
    loading.value = false
})

let keyword = ref('')

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

let currentNav = ref(1)
let searchAnnouncement = (num: number) => {
    currentNav.value = num
}

</script>
<style lang="less" scoped>
// 公司介绍
.announcement {
    height: 100%;
    color: @primary-text-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .detail {
        .title {
            font-size: @h1-text-size;
            margin-bottom: 15px;
        }

        .text {
            font-size: @h6-text-size;
            line-height: @paragraph-line-height;
        }
    }

    .image {
        width: 226px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

.announcements {
    background-color: #fff;
    padding: 52px 40px 30px 40px;
    .search {
        margin-bottom: 64px;
    }

    .navs {
        margin-bottom: 45px;

        span {
            display: inline-block;
            font-size: @h6-text-size;
            color: @regular-text-color;
            margin-right: 42px;
            cursor: pointer;

            &:hover {
                color: @primary-color;
            }
        }

        .active {
            color: @primary-color;
        }
    }

    .list {
        margin-bottom: 50px;
        .list-item {
            display: flex;
            align-items: center;
            font-size: @h5-text-size;
            border-bottom: 1px solid rgba(243, 245, 248, 1);
            padding: 17px 0;
            cursor: pointer;

            &:hover .left {
                color: @primary-color;
            }

            .left {
                flex: 1;
                color: @primary-text-color;

                span {
                    margin-right: 43px;
                }
            }

            .right {
                width: 200px;
                color: @regular-text-color;
            }
        }
    }

    .pagination{
        display: flex;
        justify-content: end;
    }
}</style>