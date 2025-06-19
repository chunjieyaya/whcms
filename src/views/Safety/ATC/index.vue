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

    <!-- 产品优势 -->
    <ModuleCard :headline-text="advantage.headline">
        <ProductAdvantage :data="advantage.data"></ProductAdvantage>
    </ModuleCard>

    <!-- 帮助文档 -->
    <ModuleCard id="docs" bg-color="#f7f9fc" :headline-text="docs.headline">
        <HelpDocs :data="docs.data" :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, datashow,advantage,docs } from './configData'

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

// 应用场景
.scene {
    .content {
        height: 410px;
        background-size: cover;
        display: flex;

        .item-img {
            flex: 1;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .item-txt {
            color: @primary-text-color;
            display: inline-block;
            font-size: 14px;
            vertical-align: top;
            width: 700px;
            font-size: @h4-text-size;
            flex: 1;

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
    }
}

// 宣传
.publicity {
    padding-top: 30px;

    .item {
        height: 175px;
        background-color: #fff;
        border-radius: 5px;
        padding: 24px;
        text-align: center;
        position: relative;

        .icon {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: -30px;

            img {
                width: 72px;
                height: 76px;
            }
        }

        .title {
            margin-top: 50px;
            font-size: @h5-text-size;
            margin-bottom: 10px;
        }

        .txt {
            font-size: @h6-text-size;
            color: @regular-text-color;
        }
    }
}</style>