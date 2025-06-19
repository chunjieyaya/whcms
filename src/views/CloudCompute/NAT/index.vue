<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="right top" height="430px">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div class="btns">
                <el-button v-for="item in header.btns" size="large" :type="item.type" :link="item.link"
                    :plain="item.plain">{{ item.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品特性 -->
    <ModuleCard :headline-text="publicity.headline">
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

    <!-- 应用场景 -->
    <ModuleCard id="scene" :headline-text="scene.headline" bg-color="#f7f9fc">
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

    
    <!-- 产品优势 -->
    <ModuleCard :headline-text="advantage.headline">
        <ProductAdvantage :data="advantage.data"></ProductAdvantage>
    </ModuleCard>



    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, publicity, advantage, scene, docs } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}


// 应用场景
let currentScene = ref(scene.data[0].list)
let getSceneData = (data: any) => {
    currentScene.value = data.list
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
        border-radius: 5px;
        padding: 24px;
        text-align: center;
        position: relative;
        cursor: pointer;

        &:hover .icon{
            top: -20px;
        }
        .icon {
            position: absolute;
            transition: .3s;
            left: 50%;
            transform: translateX(-50%);
            top: -10px;
            img {
                width: 72px;
            }
        }

        .title{
            margin-top: 50px;
            font-size: @h5-text-size;
            margin-bottom: 10px;
        }
        .txt{
            font-size: @h6-text-size;
            color: @regular-text-color;
        }
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