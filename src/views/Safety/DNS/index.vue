<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" height="430px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div class="btns">
                <el-button v-for="item in header.btns" size="large" :type="item.type" :link="item.link"
                    :plain="item.plain">{{ item.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 固定导航 -->
    <FixedNav :navs="fixNav"></FixedNav>

    <!-- 产品优势 -->
    <ModuleCard id="advantage" :headline-text="advantage.headline">
        <div class="advantage">
            <el-card class="item" v-for="item in advantage.data">
                <div class="box">
                    <div class="main">
                        <div class="icon"><img :src="item.imgUrl" alt=""></div>
                        <div class="card">{{ item.title }}</div>
                        <div class="normal">{{ item.des }}</div>
                    </div>
                    <div class="detail">
                        <div class="bgImg"><img :src="`/cooperativePartner/joinus1.png`" alt=""></div>
                        <div class="card">{{ item.title }}</div>
                        <div class="descriptive">{{ item.detail }}</div>
                    </div>
                </div>
            </el-card>
        </div>
    </ModuleCard>

    <!-- 产品功能 -->
    <ModuleCard id="function" bg-color="#fcfcfc" :headline-text="functions.hugeText">
        <div class="functions">
            <!-- 导航 -->
            <div class="functions-nav">
                <div class="item" v-for="(nav, index) in functions.data" @click="switchFunctionsIndex(index)"
                    :class="{ 'active': functionsIndex == index }">
                    {{ nav.name }}</div>
            </div>
            <!-- 内容 -->
            <div class="functions-content">
                <div class="item" v-for="item in functions.data[functionsIndex].content">
                    <div class="text">{{ item.text }}</div>
                    <div class="btn">
                        <el-button type="primary" link @click="gotoView(item.btn.path)">{{ item.btn.text }}</el-button>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 应用场景 -->
    <ModuleCard id="scene" :headline-text="scene.headline">
        <div class="scene">
            <HorizontalMenu :menus="scene.data" @sandNavData="getSceneData" align="space-evenly"></HorizontalMenu>
            <div class="content">
                <div class="item-txt">
                    <div v-for="(item, index) in currentScene" class="li-item"><span>{{ item.title }}</span>
                        <ul>
                            <li v-for="li in item.list">
                                <el-icon v-if="index == 2" color="#f87242" size="22">
                                    <Check />
                                </el-icon>
                                {{ li }}
                            </li>
                        </ul>
                    </div>
                    <div class="li-block"><span>推荐搭配使用</span>
                        <div>
                            <el-button>弹性伸缩</el-button>
                            <el-button>弹性负载均衡</el-button>
                            <el-button>云数据库</el-button>
                        </div>
                    </div>
                </div>
                <img :src="scene.bgImg" alt="">
            </div>
        </div>
    </ModuleCard>

    <!-- 帮助文档 -->
    <ModuleCard id="docs" bg-color="#f7f9fc" :headline-text="docs.headline">
        <HelpDocs :data="docs.data" :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, fixNav, advantage, scene, functions, docs } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 产品特性
let functionsIndex = ref(0)
let switchFunctionsIndex = (index: any) => {
    functionsIndex.value = index
}


// 应用场景
let currentScene = ref(scene.data[0].list)
let getSceneData = (data: any) => {
    currentScene.value = data.list
}


</script>
<style lang="less" scoped>
// 头部
.header {
    width: 540px;
    height: 100%;
    color: @primary-text-color;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 20px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @primary-text-color;
        margin-bottom: 20px;
    }
}

// 应用场景
.scene {
    .content {
        height: 410px;
        position: relative;
        background-size: cover;
        z-index: 1;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
            background: linear-gradient(90.57deg, rgba(242, 246, 250, 1) 42.01%, rgba(242, 246, 246, 0) 99.32%);
        }

        .item-txt {
            color: @primary-text-color;
            display: inline-block;
            font-size: 14px;
            vertical-align: top;
            width: 700px;
            font-size: @h4-text-size;

            .li-item {
                border-bottom: 1px solid #ddd;
                margin: 0 56px;
                padding: 24px 0;

                ul {
                    padding: 0;

                    li {
                        .el-icon {
                            margin-right: 10px;
                        }

                        color: @regular-text-color;
                        font-size: @h6-text-size;
                    }
                }
            }

            .li-block {
                margin: 0 56px;
                padding: 24px 0;

                div {
                    margin-top: 20px;
                }
            }

        }

        img {
            position: absolute;
            right: 0;
            top: 0;
            z-index: -1;
        }
    }
}

// 产品功能
.functions {
    display: flex;

    .functions-nav {
        width: 200px;
        border-right: 1px solid rgba(187, 187, 187, 1);
        padding-right: 20px;

        .item {
            text-align: center;
            padding: 10px 0;
            font-size: @h5-text-size;
            color: @primary-text-color;
            cursor: pointer;
        }

        .active {
            background-color: @primary-color;
            color: #fff;
            border-radius: 5px;
        }
    }

    .functions-content {
        flex: 1;
        padding: 0 50px;

        .item {
            margin-bottom: 20px;
            font-size: @h6-text-size;
            color: @regular-text-color;

            .text {
                margin-bottom: 10px;
            }

            &:last-child {
                margin: 0;
            }
        }
    }
}

// 产品优势
.advantage {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: flex-end;
    height: 380px;

    .item {
        border-radius: 10px;
        width: 290px;
        text-align: center;

        .box {
            height: 324px;
            transition: .3s;
            overflow: hidden;

            &:hover .main {
                height: 0;
                padding: 0;
            }

            &:hover {
                height: 350px;
            }

            .main {
                height: 324px;
                padding-bottom: 32px;
                transition: .3s;
                overflow: hidden;

                .icon {
                    img {
                        width: 222px;
                        height: 210px;
                    }
                }

                .card {
                    font-size: @h5-text-size;
                    font-weight: 600;
                    color: @primary-text-color;
                    margin-bottom: 17px;
                }

                .normal {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }

            .detail {
                height: 330px;
                padding-bottom: 32px;
                position: relative;
                z-index: 1;

                .bgImg {
                    position: absolute;
                    top: 20px;
                    z-index: -1;

                    &::before {
                        content: '';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-image: linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 1));
                    }
                }

                .card {
                    font-size: @h3-text-size;
                    color: @primary-text-color;
                    font-weight: 600;
                }

                .descriptive {
                    color: @regular-text-color;
                    font-size: @h7-text-size;
                    margin-top: 15px;
                    text-align: left;
                    line-height: 1.7;
                }
            }
        }
    }
}</style>