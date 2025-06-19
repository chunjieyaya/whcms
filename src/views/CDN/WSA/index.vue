<template>
     <!-- 公司介绍 -->
     <HeaderPad :bg-image="header.bgImage" bg-position="70% top" height="430px">
        <div class="header">
            <div class="title">{{ header.title }}</div>
            <div class="des">{{ header.des }}</div>
            <div class="btn">
                <el-button type="primary" @click="gotoView(header.btn.path)">{{ header.btn.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品动态 -->
    <div class="dynamics viewMinAndMax">
        <div class="item" v-for="item in dynamics" @click="gotoView(item.path)">
            <el-tag effect="dark">产品动态</el-tag>{{ item.text }}
        </div>
    </div>

    <!-- 产品特性 -->
    <ModuleCard id="feature" :headline-text="feature.hugeText">
        <div class="feature">
            <div class="feature-item" v-for="item in feature.data">
                <div class="icon"><img :src="item.imgUrl" alt=""></div>
                <div class="des">
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.des}}</div>
                </div>
            </div>
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

    <!-- 帮助文档 -->
    <ModuleCard id="docs" :headline-text="docs.headline">
        <HelpDocs :data="docs.data" :showArrows="false" :showBorder="false" :body-bg-img="docs.bodyImg"></HelpDocs>
    </ModuleCard>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header,dynamics,feature,docs,scene } from './configData'

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
    width: 700px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        font-size: @h1-text-size;
        color: @primary-text-color;
        margin-bottom: 8px;
    }

    .des {
        font-size: @h6-text-size;
        color: @regular-text-color;
        line-height: 1.5;
        margin-bottom: 20px;
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
.feature {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 10px;
    grid-column-gap: 60px;

    .feature-item {
        display: flex;
        align-items: center;

        .icon {
            img {
                width: 78px;
                height: 108px;
            }

            margin-right: 12px;
        }

        .des {
            .title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 14px;
            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin: 10px 0;
            }

            span {
                margin-right: 50px;
            }
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