<template>
    <!-- 公司介绍 -->
    <HeaderPad :bg-image="header.bgImage" bg-position="right top" height="430px">
        <div class="header">
            <div class="tag">{{ header.tag }}</div>
            <div class="title">{{ header.title }}</div> 
            <div class="des">{{ header.des }}</div>
            <div class="btn">
                <el-button type="primary" size="large" @click="gotoView(header.btn.path)">{{ header.btn.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品动态 -->
    <div class="dynamics viewMinAndMax">
        <div class="item" v-for="item in dynamics" @click="gotoView(item.path)">
            <el-tag effect="dark">产品动态</el-tag>{{ item.text }}
        </div>
    </div>


    <!-- 热门推荐 -->
    <ModuleCard :headline-text="hot.headline" :des="hot.des">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>

                        <div class="center">DigiCertxxxxxxxx</div>

                        <!-- 介绍 -->
                        <div class="introduce">
                            <div class="introduce-item"><el-icon color="#f87242" size="22">
                                    <Check />
                                </el-icon>仅支持DV域名级</div>
                            <div class="introduce-item"><el-icon color="#f87242" size="22">
                                    <Check />
                                </el-icon>仅支持单个域名申请</div>
                            <div class="introduce-item"><el-icon color="#f87242" size="22">
                                    <Check />
                                </el-icon>不支持公网IP证书申请</div>
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

    <!-- 宣传 -->
    <ModuleCard :headline-text="publicity.headline" :des="publicity.des" bg-color="#f7f9fc">
        <div class="publicity">
            <GridLayout :col="4" :gutterRow="50">
                <div class="item" v-for="item in publicity.data">
                    <div class="icon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="title">{{ item.title }}</div>
                    <div class="txt">{{ item.txt }}</div>
                </div>
            </GridLayout>
        </div>
    </ModuleCard>

    <!-- 产品优势 -->
    <div class="advantage">
        <ModuleCard bg-color="#fefefe" :headline-text="advantage.hugeText" :des="advantage.text">
            <GridLayout :col="4">
                <div class="advantage-item" v-for="item in advantage.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.text }}</div>
                </div>
            </GridLayout>
        </ModuleCard>
    </div>



    <!-- 常见问题 -->
    <ModuleCard :headline-text="docs.headline" bg-color="#f7f9fc">
        <HelpDocs :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, hot, dynamics, publicity, advantage, docs } from './configData'

// 跳转链接
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}




</script>
<style lang="less" scoped>
// 头部
.header {
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .tag {
        width: 335px;
        text-align: center;
        height: 35px;
        line-height: 35px;
        background: linear-gradient(89.56deg, rgba(255, 156, 83, 1) 0.39%, rgba(255, 255, 255, 0) 104.5%);
        color: #fff;
        margin-bottom: 5px;
        font-size: @h6-text-size;
    }

    .title {
        font-size: @h1-text-size;
        color: @primary-text-color;
        margin-bottom: 23px;
    }

    .des {
        font-size: @h6-text-size;
        color: @regular-text-color;
        line-height: 1.5;
        margin-bottom: 53px;
    }

    .btn {
        .el-button {
            width: 140px;
            height: 45px;
        }
    }

}

// 产品动态
.dynamics {
    height: 70px;
    background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
    border: 2px solid rgba(255, 255, 255, 1);
    box-shadow: 2px 0px 6px 0px rgba(207, 207, 207, 40);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: -35px;
    z-index: 1;
    border-radius: 10px;

    .item {
        font-size: @h6-text-size;
        color: @regular-text-color;
        display: flex;
        align-items: center;

        .el-tag {
            margin-right: 10px;
        }
    }
}

// 热门推荐
.hot {
    .products {
        .products-item {
            padding: 28px;
            background-color: #fff;
            box-shadow: 0px 0px 7px 0px rgba(167, 167, 167, 25);
            border-radius: 10px;
            overflow: hidden;
            transition: .2s;

            &:hover {
                transform: scale(1.05);
            }

            .item-header {
                margin-bottom: 19px;
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

            .center {
                background-color: rgba(242, 243, 248, 1);
                font-size: @h6-text-size;
                color: @regular-text-color;
                padding: 10px;
                margin-bottom: 19px;
            }

            .introduce {
                margin-bottom: 20px;
                border-bottom: 1px solid rgba(231, 231, 232, 1);

                .introduce-item {
                    margin: 10px 0;
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    display: flex;
                    align-items: center;

                    .el-icon {
                        margin-right: 5px;
                    }
                }
            }

            .price {
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
}

// 产品优势
.advantage {
    text-align: center;

    .advantage-item {
        cursor: pointer;
        transition: .3s;

        .img {
            img {
                width: 78px;
                height: 108px;
            }
        }

        .s-title {
            font-size: @h5-text-size;
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