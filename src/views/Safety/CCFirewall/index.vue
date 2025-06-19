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

    <!-- 产品特性 -->
    <ModuleCard id="feature" :headline-text="feature.hugeText">
        <div class="feature">
            <div class="feature-item" v-for="item in feature.data">
                <div class="icon"><img :src="item.imgUrl" alt=""></div>
                <div class="des">
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.des}}</div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 产品功能 -->
    <div id="functions" class="functions">
        <ModuleCard :headline-text="functions.hugeText">
            <div class="list">
                <div class="functions-item" v-for="item in functions.data">
                    <div class="left">
                        <div class="s-title card">{{ item.title }}</div>
                        <div class="s-text descriptive">{{ item.text }}</div>
                    </div>
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                </div>
            </div>
        </ModuleCard>
    </div>

    <!-- 热门推荐 -->
    <ModuleCard id="hot" bg-color="#f7f9fc" headline-text="热门推荐">
        <div class="product-price">
            <GridLayout :col="3">
                <div class="product-item" v-for="item in 3">
                    <div class="item-header" :style="{ backgroundImage: `url(/cdn/p1.png)` }">
                        <div class="title">推荐1：专业版</div>
                        <div class="des">为企业级客户量身打造，专业、综合能力强大的一站式防护方案</div>
                    </div>
                    <div class="item-content">
                        <div v-for="li in 3" class="content-item">
                            <div class="title">业务宽带</div>
                            <div class="des">提供500Mbps业务带宽，攻击流量不额外收费</div>
                        </div>
                        <div class="price">$18800元/月</div>
                    </div>
                    <div class="btn">
                        <el-button type="primary">购买</el-button>
                    </div>
                </div>
            </GridLayout>
        </div>
    </ModuleCard>

    <!-- 应用场景 -->
    <ModuleCard id="scene" :headline-text="scene.headline">
        <div class="scene">
            <HorizontalMenu :menus="scene.data" @sandNavData="getSceneData" align="space-evenly"></HorizontalMenu>
            <div class="content">
                <div class="item-img">
                    <img :src="currentScene.img" alt="">
                </div>
                <div class="item-txt">
                    <div v-for="(item, index) in currentScene.list" class="li-item"><span>{{ item.title }}</span>
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
import { header,fixNav,feature,functions,scene,docs } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 应用场景
let currentScene = ref(scene.data[0])
let getSceneData = (data: any) => {
    currentScene.value = data
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

// 热门推荐
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
                    border-left: 2px solid @primary-color;
                    margin-bottom: 5px;
                    padding-left: 8px;

                }

                .des {
                    color: @regular-text-color;
                }
            }

            .price {
                margin-top: 34px;
                font-size: @h3-text-size;
                color: @primary-color;
                font-weight: 600;
            }
        }

        .btn {
            margin-top: 19px;

            .el-button {
                width: 100%;
            }
        }
    }
}

// 产品特性
.feature {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 10px;
    grid-column-gap: 60px;

    .feature-item {
        display: flex;
        align-items: center;

        .icon {
            img {
                width: 78px;
                height: 108px;
            }

            margin-right: 12px;
        }

        .des {
            .title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 14px;
            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin: 10px 0;
            }

            span {
                margin-right: 50px;
            }
        }
    }
}

// 产品功能
.functions {
    .list {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 20px;
    }

    .functions-item {
        height: 175px;
        border-radius: 5px;
        padding: 19px;
        background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
        box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        display: flex;
        transition: .3s !important;

        &:hover {
            width: 385px;
        }

        &:hover .img img {
            width: 140px;
            height: 130px;
        }

        .left {
            margin-right: 20px;

            .s-title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 6px;
            }

            .s-text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                line-height: @paragraph-line-height;
            }
        }

        .img {
            display: flex;
            align-items: end;

            img {
                transition: .3s;
                width: 84px;
                height: 78px;
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
</style>