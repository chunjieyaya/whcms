<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" height="345px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div class="btn">
                <el-button type="primary" @click="gotoView(header.btn.path)">{{ header.btn.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品优势 -->
    <div id="advantage" class="advantage">
        <ModuleCard :bg-image="advantage.bgImage" :headline-text="advantage.hugeText">
            <ul class="nav">
                <li v-for="(item, index) in advantage.data" :class="{ active: currentProNum == index }"
                    @click="switchProItem(item, index)">{{ item.navText }}</li>
            </ul>
            <div class="detail">
                <div class="image">
                    <img :src="currentProItem.imgUrl" alt="">
                </div>
                <div class="box">
                    <div class="title">{{ currentProItem.title }}</div>
                    <div class="des">{{ currentProItem.des }}</div>
                </div>
            </div>
        </ModuleCard>
    </div>

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
import { header,advantage, scene, sameProduct } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

//常见问题模块
let currentProItem = ref(advantage.data[0])
let currentProNum = ref(0)
let switchProItem = (obj: any, index: number) => {
    currentProItem.value = obj
    currentProNum.value = index
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


// 应用场景
.scene {
    .content {
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

// 常见问题
.advantage {
    .nav {
        display: flex;
        justify-content: center;
        font-size: @h5-text-size;
        color: @regular-text-color;

        li {
            padding: 0 22px 16px 22px;
            border-bottom: 2px solid rgba(187, 187, 187, 1);
            cursor: pointer;
        }

        .active {
            color: @primary-color;
            border-color: @primary-color;

        }
    }

    .detail {
        display: flex;
        height: 305px;

        .image {
            width: 600px;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .box {
            flex: 1;
            background-color: #fff;
            padding: 35px;

            .title {
                font-size: @h3-text-size;
                color: @primary-text-color;
                margin-bottom: 22px;
            }
            .des{
                font-size: @h6-text-size;
                color: @regular-text-color;
                line-height: 1.5; 
            }
        }
    }
}
</style>