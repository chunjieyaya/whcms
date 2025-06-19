<template>
    <!-- 公司介绍 -->
    <HeaderPad :bg-image="header.bgImage" bg-position="right" height="430px">
        <div class="header">
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
            <el-tag effect="dark">产品优势</el-tag>{{ item.text }}
        </div>
    </div>

    <!-- 产品特性 -->
    <ModuleCard :headline-text="character.hugeText">
        <div class="character">
            <!-- 导航 -->
            <div class="character-nav">
                <div class="item" v-for="(nav, index) in character.data" @click="switchCharacterIndex(index)" :class="{ 'active': characterIndex == index }">
                    {{ nav.name }}</div>
            </div>
            <!-- 内容 -->
            <div class="character-content">
                <div class="item" v-for="item in character.data[characterIndex].content">
                    <div class="text">{{item.text}}</div>
                    <div class="btn">
                        <el-button type="primary" link @click="gotoView(item.btn.path)">{{item.btn.text}}</el-button>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 应用场景 -->
    <ModuleCard  bg-color="#f7f9fc" :headline-text="scene.headline">
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
    <ModuleCard :headline-text="ad.headline">
        <RelatedProducts theme="light" :data="ad.data"></RelatedProducts>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, character, dynamics, scene, ad } from './configData'

// 跳转链接
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 产品特性
let characterIndex = ref(0)
let switchCharacterIndex = (index: any) => {
    characterIndex.value = index
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
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    .title {
        font-size: @h1-text-size;
        margin-bottom: 23px;
    }

    .des {
        font-size: @h6-text-size;
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

// 产品特性
.character{
    display: flex;
    padding: 20px;
    .character-nav{
        width: 200px;
        border-right: 1px solid #eee;
        padding-right: 20px;
        .item{
            text-align: center;
            padding: 10px 0;
            font-size: @h5-text-size;
            color: @primary-text-color;
            cursor: pointer;
        }
        .active{
            background-color: @primary-color;
            color: #fff;
            border-radius: 5px;
        }
    }
    .character-content{
        flex: 1;
        padding: 20px 50px;
        background-color: #eeeeee85;
        .item{
            margin-bottom: 20px;
            font-size: @h5-text-size;
            color: @primary-text-color;
            .text{
                margin-bottom: 10px;
            }
            &:last-child{
                margin: 0;
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