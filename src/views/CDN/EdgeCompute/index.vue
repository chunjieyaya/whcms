<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" height="410px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div class="btns">
                <el-button size="large" type="primary" @click="gotoView(header.btns.path)">{{ header.btns.text
                }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 介绍 -->
    <div class="introduce">
        <div class="content viewMinAndMax">
            <div class="introduce-item" v-for="item in datashow">
                <div class="left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="right">
                    <div class="title">{{ item.title }}</div>
                    <div class="des">{{ item.des }}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 基础设施 -->
    <ModuleCard :headline-text="baseInstallation.hugeText" bg-color="#f5f7fa">
        <div class="base-installation">
            <div class="left">
                <div class="left-title">{{ baseInstallation.title }}</div>
                <div class="left-des">{{ baseInstallation.des }}</div>
                <div class="btn">
                    <el-button size="large" type="primary" plain round>{{ baseInstallation.btn.text }}</el-button>
                </div>
                <div class="data">
                    <GridLayout :col="2" :gutterRow="50">
                        <div class="data-item" v-for="item in baseInstallation.data">
                            <div class="item-title">{{ item.title }}</div>
                            <div class="item-txt">{{ item.txt }}</div>
                        </div>
                    </GridLayout>
                </div>
            </div>
            <div class="right">
                <Earth :height="600" bg-color="#f5f7fa"></Earth>
            </div>
        </div>

    </ModuleCard>


    <!-- 产品功能 -->
    <div class="functions">
        <ModuleCard bg-color="#fefefe" :headline-text="functions.hugeText">
            <GridLayout>
                <div class="functions-item" v-for="item in functions.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.text }}</div>
                </div>
            </GridLayout>
        </ModuleCard>
    </div>


    <!-- 帮助文档 -->
    <ModuleCard bg-color="#f7f9fc" id="docs" :headline-text="docs.headline">
        <HelpDocs :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header,datashow, functions,baseInstallation, docs } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>
<style lang="less" scoped>
// 头部
.header {
    padding-top: 80px;
    height: 100%;
    color: @primary-text-color;
    position: relative;
    z-index: 1;

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

// 介绍
.introduce {
    position: absolute;
    width: 100%;
    left: 0;
    top: 385px;
    z-index: 88;

    background-color: rgba(255, 255, 255, 0.7);

    .content {
        height: 85px;
        display: flex;
        justify-content: space-between;

        .introduce-item {
            display: flex;
            align-items: center;

            .left {
                margin-right: 5px;

                img {
                    width: 52px;
                    height: 40px;
                }
            }

            .right {
                .title {
                    font-size: @h6-text-size;
                    color: @primary-text-color;
                    margin-bottom: 5px;
                }

                .des {
                    font-size: @h7-text-size;
                    color: @regular-text-color;
                }
            }
        }
    }

}

// 基础设施
.base-installation {
    height: 700px;
    display: flex;
    align-items: center;

    .left {
        flex: 1;
        padding-right: 100px;

        .left-title {
            font-size: @h2-text-size;
            color: @primary-text-color;
            margin-bottom: 10px;
        }

        .left-des {
            font-size: @h6-text-size;
            color: @regular-text-color;
            margin-bottom: 30px;
        }

        .btn {
            margin-bottom: 60px;
        }

        .data {
            .data-item {
                .item-title {
                    font-size: @h1-text-size;
                    color: @primary-text-color;
                    margin-bottom: 15px;
                }

                .item-txt {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }
        }
    }

    .right {
        flex: 1;
        height: 600px;
    }
}

// 产品特性
.functions {
    text-align: center;

    .functions-item {
        cursor: pointer;
        transition: .3s;

        .img {
            img {
                width: 78px;
                height: 108px;
            }
        }

        .s-title {
            font-size: @h4-text-size;
            color: @primary-text-color;
            margin-bottom: 19px;
        }

        .s-text {
            font-size: @h6-text-size;
            color: @regular-text-color;
            line-height: @paragraph-line-height;
        }
    }
}

</style>