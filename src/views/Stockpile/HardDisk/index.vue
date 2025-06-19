<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="top" height="460px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div>
                <el-button type="primary" @click="gotoView(header.btn.path)">{{header.btn.text}}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品特性 -->
    <ModuleCard :headline-text="feature.headline">
        <div class="ecs-feature">
            <div class="f-one" :style="{ backgroundImage: `url(${feature.featureOne.bgImage})` }">
                <div class="feature-item">
                    <div class="title">{{ feature.featureOne.title }}</div>
                    <div class="item" v-for="item in feature.featureOne.list">
                        <div class="item-title">
                            <img :src="item.icon" alt="">{{ item.title }}
                        </div>
                        <div class="item-des">{{ item.des }}</div>
                    </div>
                </div>
            </div>
            <div class="f-two">
                <div :style="{ backgroundImage: `url(${feature.featureTwo.left.bgImage})` }" class="left feature-item">
                    <div class="title">{{ feature.featureTwo.left.title }}</div>
                    <div class="item" v-for="item in feature.featureTwo.left.list">
                        <div class="item-title">
                            <img :src="item.icon" alt="">{{ item.title }}
                        </div>
                        <div class="item-des">{{ item.des }}</div>
                    </div>
                </div>
                <div :style="{ backgroundImage: `url(${feature.featureTwo.right.bgImage})` }" class="right feature-item">
                    <div class="title">{{ feature.featureTwo.right.title }}</div>
                    <div class="item" v-for="item in feature.featureTwo.right.list">
                        <div class="item-title">
                            <img :src="item.icon" alt="">{{ item.title }}
                        </div>
                        <div class="item-des">{{ item.des }}</div>
                    </div>
                </div>
            </div>
            <div class="f-one" :style="{ backgroundImage: `url(${feature.featureThree.bgImage})` }">
                <div class="feature-item">
                    <div class="title">{{ feature.featureThree.title }}</div>
                    <div class="item" v-for="item in feature.featureThree.list">
                        <div class="item-title">
                            <img :src="item.icon" alt="">{{ item.title }}
                        </div>
                        <div class="item-des">{{ item.des }}</div>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 应用场景 -->
    <ApplicationScenario :data="scene.data" :btns="scene.btns"></ApplicationScenario>

    <!-- 帮助文档 -->
    <ModuleCard :headline-text="document.headline">
        <HelpDocs :data="document.data"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>


<script lang="ts" setup>
import { websiteUrl } from '@/units/config'
import { header, feature,scene,document} from './configData'
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 产品特性
const scenceMneus = ['网站应用', '游戏部署', '小程序应用', '电子商务', '自建数据库', '图形渲染', '染大数据分析', '深度学习']
</script>


<style lang="less" scoped>
// 公司介绍
.header {
    padding: 90px 0;
    height: 100%;
    width: 640px;
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
        color: @regular-text-color;
        margin-bottom: 20px;
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


// 产品定价
.product-price {
    .product-item {
        background-color: rgba(255, 255, 255, 1);
        border: 1px solid rgba(187, 187, 187, 0.27);

        .item-header {
            padding: 30px 20px;
            background-size: cover;

            .title {
                font-size: @h3-text-size;
                margin-bottom: 13px;
            }

            .des {
                font-size: @h7-text-size;
                color: @regular-text-color;
            }
        }

        .item-content {
            padding: 0 20px;

            .content-item {
                margin: 10px 0;
                font-size: @h6-text-size;

                .title {
                    color: @primary-text-color;
                    margin-bottom: 5px;
                }

                .des {
                    color: @regular-text-color;
                }
            }
            .price{
                margin-top: 34px;
                font-size: @h3-text-size;
                color: @primary-color;
                font-weight: 600;
            }
        }
        .btn{
            margin-top: 19px;
            .el-button{
                width: 100%;
            }
        }
    }
}


// 接入流程
.process {
    .menu {
        display: flex;
        justify-content: space-between;

        .menu-item {
            display: flex;
            align-items: center;
            color: @regular-text-color;
            cursor: pointer;
            position: relative;

            &:hover {
                color: @primary-text-color;
            }

            .num {
                font-size: 56px;
                margin-right: 24px;
            }

            .txt {
                font-size: @h6-text-size;
            }

            img {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 20px;
                left: 20px;
            }
        }

        .active {
            color: @primary-text-color;
        }
    }

    .content {
        margin-top: 100px;
        background-color: #fff;
        padding: 80px 120px;

        .content-item {
            margin-bottom: 45px;

            &:last-child {
                margin: 0;
            }

            .item-title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 27px;
            }

            .item-list {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin-bottom: 20px;

                &:last-child {
                    margin: 0;
                }
            }
        }
    }
}

// 产品特性
.ecs-feature {

.f-one {
    background-size: cover;
    margin-bottom: 26px;

    &>div {
        padding: 49px 620px 1px 53px;
    }
}

.feature-item {
    border-radius: 8px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    .title {
        color: @primary-text-color;
        display: block;
        font-size: @h3-text-size;
        margin-bottom: 49px;
    }

    .item {
        font-size: @h6-text-size;
        margin-bottom: 30px;

        .item-title {
            font-weight: 600;
            margin-bottom: 20px;
            color: @primary-text-color;
        }

        .item-des {
            color: @regular-text-color;
        }

        img {
            width: 22px;
            height: 22px;
            margin-right: 13px;
            vertical-align: text-bottom;
        }
    }
}

.f-two {
    width: 100%;
    height: 501px;
    display: flex;
    margin-bottom: 26px;

    .left,
    .right {
        flex: 1;
        background-size: cover;
        padding-bottom: 70px;
        padding-left: 55px;
        padding-top: 50px;
        vertical-align: top;

        .item {
            width: 275px;
        }

    }

    .left {
        margin-right: 20px;
    }
}

.f-three {
    background-color: #f1f1f1;
    display: flex;
    height: 470px;


    .f-three-item {
        flex: 1;
        position: relative;
        padding-bottom: 70px;
        padding-left: 55px;
        padding-top: 50px;
        border-radius: 10px;
        vertical-align: top;

        .item {
            width: 275px;
        }

        .image {

            background: linear-gradient(169.94deg, rgba(255, 0, 0, .3) 23.34%, rgba(255, 15, 15, 0) 92.47%);
            right: 0;
            bottom: -5;
            filter: blur(50px);
            height: 227px;
            position: absolute;
            width: 227px;


        }

        .img {
            width: 260px;
            height: 260px;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
}

}
</style>