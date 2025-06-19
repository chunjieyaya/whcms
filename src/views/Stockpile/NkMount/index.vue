<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" height="360px">
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
                            </el-form>
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

    <!-- 相关产品 -->
    <ModuleCard id="same" bg-color="#f7f9fc" :headline-text="sameProduct.headline">
        <div class="same">
            <GridLayout :col="3">
                <div class="item" v-for="item in sameProduct.data">
                    <div class="title">{{ item.title }}</div>
                    <div class="des">{{ item.des }}</div>
                    <img :src="item.img" alt="">
                </div>
            </GridLayout>
        </div>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, fixNav, advantage, scene, sameProduct } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 应用场景
let currentScene = ref(scene.data[0])
let getSceneData = (data: any) => {
    currentScene.value = data
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
                margin-bottom: 50px;
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

// 相关产品
.same {
    .item {
        box-shadow: 2px 0px 6px 0px rgba(207, 207, 207, 40);
        border: 2px solid rgba(255, 255, 255, 1);
        border-radius: 5px;
        background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
        padding: 20px;
        position: relative;

        &>div{
            margin-bottom: 15px;
        }
        .title{
            font-size: @h5-text-size;
            color: @primary-text-color;
        }
        .des{
            font-size: @h7-text-size;
            color: @regular-text-color;
        }
        img{
            position: absolute;
            width: 78px;
            height: 108px;
            top: -35%;
            right: 10px;
        }
    }
}
</style>