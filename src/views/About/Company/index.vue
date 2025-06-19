<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="introduction.bgImg" bg-position="right center" height="600px">
        <div class="introduction">
            <div class="headline-title">{{ introduction.hugeText }}</div>
            <div class="second-title">{{ introduction.title }}</div>
            <div class="text descriptive">{{ introduction.des }}</div>
        </div>
        <!-- 数据展示 -->
        <div class="datashow viewMinAndMax">
            <div class="data-item" v-for="item in datashow.data">
                <div class="data-title">{{ item.title }}</div>
                <div class="data-text">{{ item.text }}</div>
            </div>
        </div>
    </HeaderPad>




    <!-- 优质服务 -->
    <div class="serve">
        <ModuleCard bg-color="#fefefe" :headline-text="serve.hugeText" :des="serve.text">
            <div class="list">
                <div class="serve-item" v-for="item in serve.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.text }}</div>
                </div>
            </div>
        </ModuleCard>
    </div>

    <!-- 网路产品布点 -->
    <NPDistribution :maps="maps"></NPDistribution>

    <!-- 生态服务 -->
    <ModuleCard :headline-text="eserve.hugeText" :des="eserve.text">
        <div class="ecological-service">
            <div class="list">
                <div class="item" v-for="item in eserve.data">
                    <div class="solution">{{ item.title }}</div>
                    <div class="title">{{ item.text }}</div>
                    <div class="des">{{ item.des }}</div>
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 优秀合作伙伴 -->
    <HoneycombPartners :partner="partner"></HoneycombPartners>

    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { introduction, datashow, serve, eserve, maps, partner, btmLongImg } from './configData'

// 当前展示标点
let currentActive = ref(0)
// 标点数据
let dataList = reactive([
    maps.openArea.punctuations,
    maps.cooperationArea.punctuations,
    maps.speedArea.punctuations
])

// 设置数据
let setData = (num: any) => {
    currentActive.value = num
    dataList.splice(0, dataList.length);
    switch (num) {
        case 1:
            dataList.push(maps.openArea.punctuations)
            break;
        case 2:
            dataList.push(maps.cooperationArea.punctuations)
            break;
        case 3:
            dataList.push(maps.speedArea.punctuations)
            break;
    }
}

</script>
<style lang="less" scoped>
// 公司介绍
.introduction {
    padding: 90px 0;
    height: 100%;
    width: 640px;
    color: @primary-text-color;
    position: relative;
    z-index: 1;

    .img {
        position: absolute;
        top: 0;
        left: 180px;
        z-index: -1;
    }

    .headline-title {
        font-size: @h1-text-size;
    }

    .second-title {
        font-size: @h2-text-size;
        margin-bottom: 35px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @regular-text-color;
    }
}

// 数据展示
.datashow {
    width: 100%;
    height: 180px;
    box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    z-index: 1;

    .data-title {
        font-size: @h2-text-size;
        color: @primary-color;
        margin-bottom: 15px;
    }

    .data-text {
        font-size: @h3-text-size;
        color: @regular-text-color;
    }
}



// 网络产品布点
.infrastructure {

    /deep/.el-card__body {
        padding: 0;
        border: 2px solid #fff;
    }

    .data {
        display: flex;
        justify-content: center;
        margin: 30px 0 50px 0;

        &>div {
            margin: 0 50px;
            text-align: center;
        }

        .number {
            font-size: @h2-text-size;
            color: @primary-color;
        }

        .text {
            font-size: @h3-text-size;
            color: @regular-text-color;
        }
    }

    .btn {
        text-align: center;
        position: relative;
        z-index: 1;
        transform: translateY(50%);

        button {
            width: 230px;
            height: 60px;
            border: 1px solid #fff;
            border-radius: 34px;
            background-image: linear-gradient(0deg, #fff, #f3f5f8);
            box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
            margin: 0 20px;
            font-size: @h5-text-size;
            color: @regular-text-color;
            transition: .3s;
            cursor: pointer;

            &:hover {
                transition: .3s;
                box-shadow: 8px 8px 20px 0 rgba(12, 53, 136, 0.2), -8px -8px 20px 0 #fff;
            }
        }
    }

    .btn-active {
        color: @primary-text-color !important;
        font-weight: 600;
    }
}

@keyframes serveIcon {
    0% {
        top: 0px;
    }

    50% {
        top: -20px;
    }

    100% {
        top: 0px;
    }
}

// 服务
.serve {
    text-align: center;
    margin-top: 100px;

    .list {
        display: flex;
        justify-content: space-between;
    }

    .serve-item {
        width: 209px;
        cursor: pointer;
        transition: .3s;

        &:hover .img {
            animation: serveIcon .3s 1;
        }

        .img {
            margin-bottom: 5px;
            position: relative;
            transition: .3s;
            img {
                width: 70px;
            }


        }

        .s-title {
            font-size: @h4-text-size;
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

// 生态服务
.ecological-service {

    .list {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        .item {
            position: relative;
            height: 155px;
            padding: 45px 24px 50px 45px;
            border: 1px solid #fff;
            box-shadow: 0 0 5px 2px #f7f7f77c;
            transition: .3s;

            &:hover {
                background-color: @primary-color;

                .solution {
                    color: #fff;
                    font-size: @h2-text-size;
                    margin-bottom: 5px;
                }

                .title {
                    display: none;
                }

                .des {
                    display: block;
                    color: #fff;
                }

                .img {
                    display: block;
                }
            }

            .solution {
                transition: .3s;
                font-size: @h6-text-size;
                color: @primary-text-color;
            }

            .img {
                position: absolute;
                transition: .3s;
                right: 10px;
                top: 8px;
                display: none;

                img {
                    width: 134px;
                    height: 139px;
                }
            }

            .title {
                font-size: @h2-text-size;
                color: @primary-text-color;
            }

            .des {
                font-size: @h6-text-size;
                display: none;
                transition: .3s;
            }
        }
    }
}
</style>