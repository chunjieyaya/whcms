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
    <ModuleCard id="advantage" :headline-text="advantage.headline">
        <div class="publicity">
            <GridLayout :col="4" :gutterRow="50">
                <div class="item" v-for="item in advantage.data">
                    <div class="icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="title">{{ item.title }}</div>
                    <div class="txt">{{ item.txt }}</div>
                </div>
            </GridLayout>
        </div>
    </ModuleCard>

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

    <!-- 产品功能 -->
    <ModuleCard id="function" :headline-text="functions.headline">
        <div class="advantage">
            <el-card class="item" v-for="item in functions.data">
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

    <!-- 常见问题 -->
    <ModuleCard id="docs" :headline-text="docs.headline">
        <HelpDocs :data="docs.data"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, advantage,functions,docs,fixNav } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
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

// 产品特性
.publicity {
    padding-top: 30px;

    .item {
        height: 175px;
        background-color: #fff;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.1);
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
</style>