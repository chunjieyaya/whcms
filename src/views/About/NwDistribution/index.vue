<template>
    <!-- 大图 -->
    <HeaderPad height="480px" bg-position="right top" :bg-image="header.bgImgUrl">
        <div class="header">
            <div class="headline">{{ header.hugeText }}</div>
            <div class="card">{{ header.text }}</div>
        </div>
    </HeaderPad>

    <!-- 固定导航 -->
    <FixedNav :navs="fixNav"></FixedNav>


    <!-- 基础设施 -->
    <ModuleCard id="baseFacility" :headline-text="baseFacility.hugeText" class="baseFacility" :des="baseFacility.des">
        <GridLayout :gutterCol="30">
            <div class="item" v-for="item in baseFacility.data">
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="des">{{ item.des }}</div>
                <div class="list">
                    <div class="list-item" v-for="li in item.list">
                        <div><span>{{ li.key }}</span><span>{{ li.value }}</span></div>
                    </div>
                </div>
            </div>
        </GridLayout>
    </ModuleCard>

    <!-- 网路产品布点 -->
    <NPDistribution id="maps" :maps="maps"></NPDistribution>

    <!-- 常见问题 -->
    <div id="problems" class="problems">
        <ModuleCard :bg-image="problems.bgImage" :headline-text="problems.hugeText">
            <ul class="nav">
                <li v-for="(item, index) in problems.data" :class="{ active: currentProNum == index }"
                    @click="switchProItem(item, index)">{{ item.navText }}</li>
            </ul>
            <div class="detail">
                <div class="image">
                    <img :src="currentProItem.imgUrl" alt="">
                </div>
                <div class="box">
                    <div class="title">{{ currentProItem.title }}</div>
                    <div class="list">
                        <GridLayout :col="2" :gutterCol="58" :gutterRow="10">
                            <li v-for="item in currentProItem.list" @click="gotoView(item.path)">{{ item.text }}</li>
                        </GridLayout>
                    </div>
                    <div class="btn">
                        <el-button type="primary" @click="gotoView(currentProItem.btn.path)">{{ currentProItem.btn.text
                        }}</el-button>
                    </div>
                </div>
            </div>
        </ModuleCard>
    </div>

    <!-- 底部长图 -->
    <BtmLongImg></BtmLongImg>
</template>

<script lang="ts" setup>
import { baseFacility, fixNav, header, maps, problems } from './configData'


// 路由跳转
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}


//常见问题模块
let currentProItem = ref(problems.data[0])
let currentProNum = ref(0)
let switchProItem = (obj: any, index: number) => {
    currentProItem.value = obj
    currentProNum.value = index
}


</script>

<style lang="less" scoped>
.header {
    padding-bottom: 150px;
    width: 560px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    .headline {
        font-size: @h1-text-size;
        margin-bottom: 30px;
    }

    .card {
        font-size: @h5-text-size;
        line-height: 1.5;
    }

    .el-button {
        width: 100px;
    }
}

.is-active {
    color: @primary-color;
}

// 基础设施
@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(0deg);
    }
}
.baseFacility {
    text-align: center;

    .item {
        border: 2px solid #eee;
        padding: 20px;
        box-shadow: 0 0 10px 0 #eee;
        cursor: pointer;

        &:hover .img {
            animation: rotate .5s 1;
        }
    }

    .img {
        margin-bottom: 10px;
        img {
            width: 70px;
        }
    }

    .title {
        font-size: @h4-text-size;
        color: @primary-text-color;
        margin-bottom: 5px;
    }

    .des {
        font-size: @h6-text-size;
        line-height: 1.5;
        color: @regular-text-color;
        margin-bottom: 13px;
    }

    .list {
        border-top: 1px solid #eee;
        padding-top: 13px;
        font-size: @h6-text-size;
        color: @regular-text-color;

        .list-item {
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }

            div {
                display: flex;
                justify-content: space-between;
            }
        }
    }

}

// 常见问题
.problems {
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
            padding: 35px 100px 35px 30px;

            .title {
                font-size: @h3-text-size;
                color: @primary-text-color;
                margin-bottom: 22px;
            }

            .list {
                font-size: @h6-text-size;
                color: @primary-text-color;
                margin-bottom: 30px;

                li {
                    list-style-type: disc;
                }
            }
        }
    }
}</style>