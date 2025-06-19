<template>
    <!-- 公司介绍 -->
    <HeaderPad :bg-image="header.bgImage" bg-position="50% bottom" height="430px">
        <div class="header">
            <div class="headline">{{ header.headline }}</div>
            <!-- 搜索框 -->
            <div class="search">
                <el-input v-model="keyword" placeholder="Please input">
                    <template #suffix>
                        <el-dropdown>
                            <span class="el-dropdown-link">
                                .com
                                <el-icon class="el-icon--right">
                                    <arrow-down />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>.com</el-dropdown-item>
                                    <el-dropdown-item>.cn</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>

                    </template>
                    <template #append>
                        域名查询
                    </template>
                </el-input>
            </div>
            <!-- 热门域名 -->
            <div class="hot-domain">
                <div class="left">
                    <span>热卖域名</span>
                    <span>.cn <span class="price">$68</span></span>
                    <span>.cn <span class="price">$68</span></span>
                    <span>.cn <span class="price">$68</span></span>
                    <span>.cn <span class="price">$68</span></span>
                </div>
                <div class="right">
                    <span>批量注册</span>
                </div>
            </div>
        </div>
    </HeaderPad>


    <!-- 热门推荐 -->
    <ModuleCard headline-text="热门推荐" des="海量精品域名，百万域名用户的选择，更安全，更值得信赖" bg-color="#fafbfb">
        <div class="hot">
            <div class="nav">
                <div :class="{ 'left-active': currentNav == 0 }" @click="switchNav(0)">{{ navs[0].name }}</div>
                <div :class="{ 'right-active': currentNav == 1 }" @click="switchNav(1)">{{ navs[1].name }}</div>
            </div>
            <div class="list">
                <GridLayout :col="3">
                    <div class="item" v-for="item in 6">
                        <div class="name">baidu.com</div>
                        <div class="des">最受欢迎的域名</div>
                        <div class="first-price"><span>283</span>元/首年</div>
                        <div class="renew">续费315元/年</div>
                        <div class="btn">
                            <el-button type="primary">域名查询</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

    <!-- 接入流程 -->
    <Process :process="process" @sandCurrentData="getProcessContent">
        <div class="process">
            <!-- 导航 -->
            <div class="process-nav" :style="{ backgroundImage: `url(${process.navBgImg})` }">
                <div class="li" v-for="(n, index) in currentProcessData" :class="{ active: index == currentProcessIndex }"
                    @click="switchProcessNav(index)">
                    <div class="title">{{ n.nav.title }}</div>
                    <div class="des">{{ n.nav.des }}</div>
                </div>
            </div>
            <!-- 内容 -->
            <div class="process-content">
                <div class="li" v-for="li in currentProcessData[currentProcessIndex].content">
                    <div class="title">{{ li.title }}</div>
                    <div class="des">{{ li.des }}</div>
                </div>
                <div class="btns">
                    <el-button type="primary">立即购买</el-button>
                    <el-button type="primary" link>了解更多 -></el-button>
                </div>
            </div>
        </div>
    </Process>

    <!-- 常见问题 -->
    <ModuleCard :headline-text="docs.headline">
        <HelpDocs :data="docs.data"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, process, docs } from './configData'

// 跳转链接
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 搜索框
let keyword = ref("")


// 热门推荐导航
let currentNav = ref(0)
let switchNav = (num: number) => {
    currentNav.value = num
}
let navs = [
    {
        name: '热门域名'
    },
    {
        name: '其他域名'
    }
]

// 获取接入流程数据
let currentProcessData = ref(process.menus[0].data as any)
let currentProcessIndex = ref(0)
let getProcessContent = (data: any) => {
    currentProcessData.value = data
    currentProcessIndex.value = 0
}
let switchProcessNav = (index: number) => {
    currentProcessIndex.value = index
}


</script>
<style lang="less" scoped>
// 头部
.header {
    width: 970px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headline {
        font-size: @h1-text-size;
        color: @primary-text-color;
        margin-bottom: 31px;
    }

    .search {
        margin-bottom: 24px;

        .el-dropdown-link {
            border-left: 1px solid #BBBBBB;
            padding-left: 50px;
        }

        .el-input {
            height: 60px;
            font-size: @h5-text-size;
        }

        /deep/ .el-input-group__append {
            background-color: @primary-color;
            color: #fff;
            box-shadow: none;
            width: 150px;
        }
    }

    .hot-domain {
        display: flex;
        justify-content: space-between;
        font-size: @h5-text-size;

        span {
            margin-right: 20px;
            cursor: pointer;

            &:last-child {
                margin: 0;
            }
        }

        .price {
            color: @primary-color;
            margin-left: 5px;
        }
    }
}

// 热门推荐
.hot {
    .nav {
        display: flex;
        height: 45px;
        border-bottom: 2px solid @primary-color;
        margin-bottom: 50px;

        div {
            flex: 1;
            text-align: center;
            font-size: @h4-text-size;
            color: @primary-text-color;
            height: 100%;
            line-height: 45px;
            position: relative;
            cursor: pointer;
        }

        .left-active {
            background-color: @primary-color;
            color: #fff;

            &::after {
                content: '';
                position: absolute;
                width: 92px;
                height: 45px;
                background-color: #fafbfb;
                right: -20px;
                top: -21.5px;
                transform: rotate(30deg);
            }
        }

        .right-active {
            background-color: @primary-color;
            color: #fff;

            &::after {
                content: '';
                position: absolute;
                width: 92px;
                height: 45px;
                background-color: #fafbfb;
                left: -20px;
                top: -21.5px;
                transform: rotate(-30deg);
            }
        }
    }

    .list {
        .item {
            background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(250, 250, 250, 1) 100%);
            border: 2px solid #fff;
            border-radius: 10px;
            transition: .3s;
            cursor: pointer;
            padding: 26px;

            &:hover {
                transform: scale(1.05);
            }

            .name {
                font-size: @h3-text-size;
                margin-bottom: 6px;
            }

            .des {
                font-size: @h7-text-size;
                color: @regular-text-color;
                margin-bottom: 40px;
            }

            .first-price {
                font-size: @h5-text-size;
                color: @primary-color;
                margin-bottom: 8px;

                span {
                    font-size: @h2-text-size;
                }
            }

            .renew {
                font-size: @h7-text-size;
                color: @regular-text-color;
                margin-bottom: 21px;
            }

            .btn {
                button {
                    width: 100%;
                }
            }
        }
    }
}

// 接入流程
.process {
    display: flex;
    height: 545px;
    margin-top: 50px;
    border-radius: 10px;
    overflow: hidden;


    .title {
        font-size: @h5-text-size;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .des {
        font-size: @h7-text-size;
        color: @regular-text-color;
    }

    .process-nav {
        width: 310px;
        padding-top: 20px;

        .li {
            padding: 35px 0;
            padding-left: 30px;
            position: relative;
            text-align: left;
            width: 100%;
            border-left: 2px solid rgba(243, 245, 248, 0);
            cursor: pointer;

            &:hover .title {
                color: @primary-color;
            }
        }

        .active {
            background: linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff);
            border-color: @primary-color ;
            color: @primary-color;
        }
    }

    .process-content {
        flex: 1;
        background-color: #fff;
        padding: 60px 40px;
        .li{
            width: 500px;
            line-height: 1.5;
        }
    }
    .btns{
        margin-top: 20px;
    }
}
</style>