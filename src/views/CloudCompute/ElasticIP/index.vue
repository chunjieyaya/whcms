<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="right top" height="410px">
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

    <!-- 应用场景 -->
    <ModuleCard :headline-text="scene.headline">
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

    <!-- 宣传 -->
    <ModuleCard :headline-text="publicity.headline" bg-color="#f7f9fc">
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

    <!-- 相关产品 -->
    <ModuleCard :headline-text="ad.headline">
        <RelatedProducts :data="ad.data"></RelatedProducts>
    </ModuleCard>



    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, datashow, scene, publicity,ad } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

let currentScene = ref(scene.data[0])
let getSceneData = (data: any) => {
    currentScene.value = data
}

</script>
<style lang="less" scoped>
// 头部
.header {
    width: 550px;
    padding-top: 80px;
    height: 100%;
    color: @primary-text-color;
    position: relative;
    z-index: 1;

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 10px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @primary-text-color;
        margin-bottom: 30px;
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
                margin-right: 8px;

                img {
                    width: 52px;
                }
            }

            .right {
                .title {
                    font-size: @h5-text-size;
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
        background-color: #fff;
        border-radius: 5px;
        padding: 24px;
        text-align: center;
        position: relative;

        .icon {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 50%);
            top: -50%;

            img {
                width: 100px;
            }
        }

        .title {
            margin-top: 40px;
            font-size: @h5-text-size;
            margin-bottom: 10px;
        }

        .txt {
            font-size: @h6-text-size;
            color: @regular-text-color;
        }
    }
}</style>