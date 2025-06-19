<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="top" height="500px">
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
        <ProductAdvantage :data="advantage.data"></ProductAdvantage>
    </ModuleCard>


    <!-- 热门推荐 -->
    <ModuleCard id="hot" headline-text="热门推荐" bg-color="#f7f9fc">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header"
                            :style="{ backgroundImage: `url(/serverRental/hot1.png)` }">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>
                        <!-- 选项 -->
                        <div class="options">
                            <el-form label-width="68" label-position="left">
                                <el-form-item label="所在地">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="防护等级">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="带宽类型">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 支持 -->
                        <div class="support">
                            <div><el-icon color="#67C23A" size="18">
                                    <Check />
                                </el-icon>解封：支持人工解封</div>
                            <div><el-icon color="#F56C6C" size="18">
                                    <Close />
                                </el-icon>不支持CC防护</div>
                        </div>
                        <!-- 价格 -->
                        <div class="price">
                            <div class="discount">
                                <el-tag class="ml-2" effect="dark">限时优惠价</el-tag>
                                <div class="text"><span>$980</span>/月</div>
                            </div>
                            <div class="original">
                                <el-text tag="del">原价：1400/月</el-text>
                            </div>
                        </div>
                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button type="primary">立即抢购</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

    <!-- 基础设施 -->
    <ModuleCard id="installation" :headline-text="baseInstallation.hugeText" bg-color="#f5f7fa">
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
        <HelpDocs :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header,fixNav, advantage, baseInstallation, scene, docs } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 应用场景
let currentScene = ref(scene.data[0].list)
let getSceneData = (data: any) => {
    currentScene.value = data.list
}

// 热门推荐
const value = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    }
]
</script>
<style lang="less" scoped>
// 头部
.header {
    width: 610px;
    height: 100%;
    color: @primary-text-color;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 30px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @primary-text-color;
        margin-bottom: 30px;
    }
}

// 热门推荐
.hot {
    .products {
        .products-item {
            background-color: #f3f4f6;
            border-radius: 10px;
            overflow: hidden;
            transition: .2s;

            &:hover {
                transform: scale(1.05);
            }

            .item-header {
                padding: 20px;
                margin-bottom: 20px;
                background-size: cover;

                .txt {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    margin-bottom: 10px;
                }

                .des {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }

            .options {
                padding: 0 20px;
            }

            .support {
                padding: 0 20px;
                margin-bottom: 20px;
                font-size: @h7-text-size;

                div {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;

                    .el-icon {
                        margin-right: 5px;
                    }
                }
            }

            .price {
                padding: 0 20px;

                .discount {
                    .text {
                        font-size: @h5-text-size;
                        color: @primary-text-color;

                        span {
                            font-size: @h2-text-size;
                            color: @primary-color;
                            margin-right: 5px;
                        }
                    }

                }
            }

            .btn {
                margin-top: 20px;

                .el-button {
                    width: 100%;
                    height: 45px;
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
</style>