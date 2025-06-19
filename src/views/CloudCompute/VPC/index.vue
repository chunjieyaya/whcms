<template>
    <!-- 头部 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="100% top" height="430px">
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
    <div id="character" class="character">
        <ModuleCard bg-color="#fefefe" :headline-text="character.hugeText">
            <GridLayout>
                <div class="character-item" v-for="item in character.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.text }}</div>
                </div>
            </GridLayout>
        </ModuleCard>
    </div>

    <!-- 产品优势 -->
    <ModuleCard id="advantage" :headline-text="advantage.headline">
        <ProductAdvantage :data="advantage.data"></ProductAdvantage>
    </ModuleCard>

    <!-- 应用场景 -->
    <ModuleCard id="scene" bg-color="#f3f4f6" :headline-text="scene.headline">
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
    <ModuleCard id="docs" :headline-text="docs.headline">
        <HelpDocs :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, fixNav, character, advantage, scene, docs } from './configData'

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
    width: 600px;
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
.character {
    text-align: center;
    .character-item {
        cursor: pointer;
        transition: .3s;
        &:hover .img{
            top: -10px;
            transform: rotateY(180deg);
        }
        .img {
            transition: .3s;
            position: relative;
            top: 10px;
            img {
                width: 78px;
            }
        }

        .s-title {
            font-size: @h4-text-size;
            color: @primary-text-color;
            margin-bottom: 5px;
        }

        .s-text {
            font-size: @h6-text-size;
            color: @regular-text-color;
            line-height: @paragraph-line-height;
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