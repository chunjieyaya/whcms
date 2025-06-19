<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="70%" height="400px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
        </div>
    </HeaderPad>

    <!-- 产品特性 -->
    <character :servers="characters"></character>

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

    <!-- 产品定价 -->
    <ModuleCard headline-text="产品定价">
        <div class="product-price">
            <GridLayout :col="3">
                <div class="product-item" v-for="item in 3">
                    <div class="item-header" :style="{ backgroundImage: `url(/public/cdn/p1.png)` }">
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
    <ApplicationScenario></ApplicationScenario>

    <!-- 接入流程 -->
    <Process :process="process"></Process>

    <!-- 帮助文档 -->
    <ModuleCard headline-text="产品文档">
        <HelpDocs></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>


<script lang="ts" setup>
import { header, characters, baseInstallation, process } from './configData'
import character from './character/index.vue'


// 切换流程
let currentProcess = ref(0);
let switchProcess = (index: number) => {
    currentProcess.value = index
}
</script>


<style lang="less" scoped>
// 公司介绍
.header {
    padding: 90px 0;
    height: 100%;
    width: 640px;
    position: relative;
    z-index: 1;

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 20px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        margin-bottom: 86px;
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
</style>