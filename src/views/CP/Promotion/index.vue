<template>
    <!-- 公司介绍 -->
    <HeaderPad height="510px" bg-position="70% center" :bg-image="header.bgImg">
        <div class="header">
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text descriptive">{{ header.des }}</div>
            <div class="btn">
                <el-button type="primary" @click="gotoView(header.btn.path)" size="large">{{ header.btn.text }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 推荐福利 -->
    <div class="welfare">
        <ModuleCard :headline-text="welfare.hugeText">
            <div class="list">
                <div class="welfare-item" v-for="item in welfare.data">
                    <div class="left">
                        <div class="s-title card">{{ item.title }}</div>
                        <div class="s-text descriptive">{{ item.text }}</div>
                    </div>
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                </div>
            </div>
        </ModuleCard>
    </div>

    <!-- 推荐优势 -->
    <div class="advantage">
        <ModuleCard bg-color="#fbfbfc" :headline-text="advantage.hugeText" :des="advantage.text">
            <div class="list">
                <div class="advantage-item" v-for="item in advantage.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.text }}</div>
                </div>
            </div>
        </ModuleCard>
    </div>

    <!-- 推荐流程 -->
    <div class="process">
        <ModuleCard :headline-text="process.hugeText" :des="process.des">
            <div class="process-list">
                <template class="item-box" v-for="(item, index) in process.data">
                    <div class="item">
                        <div class="bg"></div>
                        <div class="card">
                            <div class="num">{{ item.num }}</div>
                            <div class="icon"><img :src="item.icon" alt=""></div>
                            <div class="title">{{ item.title }}</div>
                            <div class="des">{{ item.text }}</div>
                        </div>
                    </div>
                    <div class="processIcon" v-if="index < 3"><img :src="process.processInco" alt=""></div>
                </template>
            </div>
        </ModuleCard>
    </div>


    <!-- 佣金规则 -->
    <div class="rule">
        <ModuleCard bg-color="#fbfbfc" :headline-text="rule.hugeText" :des="rule.text">
            <div class="list">
                <div class="bg-color">
                    <img :src="rule.bgImg" alt="">
                </div>
                <div class="item" v-for="item in rule.data">
                    <div class="solution">{{ item.title }}</div>
                    <div class="title">{{ item.text }}</div>
                    <div class="des">{{ item.des }}</div>
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                </div>
            </div>
        </ModuleCard>
    </div>



    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { header, advantage, rule, welfare, process, btmLongImg } from './configData'


let router = useRouter()

// 跳转页面
let gotoView = (url: string) => {
    router.push(url)
}


</script>
<style lang="less" scoped>
// 头部
.header {
    height: 100%;
    padding-bottom: 100px;
    color: #fff;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 5px;
    }

    .text {
        font-size: @h3-text-size;
        line-height: @paragraph-line-height;
        margin-bottom: 50px;
    }

    .image {
        position: absolute;
        top: 26px;
        right: 0;
    }

    .el-button {
        width: 200px;
        height: 40px;
        font-size: @h5-text-size;
    }
}

// 推荐福利
.welfare {
    .list {
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-column-gap: 20px;
    }

    .welfare-item {
        height: 175px;
        border-radius: 5px;
        padding: 19px;
        background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
        box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        display: flex;
        transition: .3s !important;

        &:hover .img img {
            transform: scale(1.3);
        }

        .left {
            margin-right: 20px;

            .s-title {
                font-size: @h3-text-size;
                color: @primary-text-color;
                margin-bottom: 6px;
            }

            .s-text {
                font-size: @h6-text-size;
                color: @regular-text-color;
            }
        }

        .img {
            display: flex;
            align-items: end;

            img {
                transition: .3s;
                width: 80px;
            }
        }

    }
}

// 推荐流程
.process {

    .process-list {
        display: flex;
        justify-content: space-between;

        .processIcon {
            margin: 0 6px;
            display: flex;
            align-items: center;

            img {
                width: 24px;
                height: 24px;
            }
        }

        .item-box {
            display: flex;


        }

        .item {
            flex: 1;
            position: relative;
            z-index: 1;

            .bg {
                width: 135px;
                height: 87px;
                background-color: #FF9C53;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 10px;
                z-index: -10;
                top: -10px;
            }

            .card {
                box-shadow: 0px 0px 10px 5px rgba(255, 206, 169, .1);
                background-color: #fff;
                background: radial-gradient(ellipse 35.4376325692041522% 40.7690000000000001% at 50% 0.0999999999999999%, rgba(255, 156, 83, .8) 0%, rgba(255, 255, 255, 1) 100%);
                border: 1px solid rgba(255, 255, 255, 1);
                height: 210px;
                text-align: center;
                padding: 12px 24px;

                .num {
                    color: #fff;
                    font-size: @h2-text-size;
                    margin-bottom: 15px;
                }

                .icon {
                    margin-bottom: 8px;

                    img {
                        width: 32px;
                        height: 32px;
                    }
                }

                .title {
                    font-size: @h6-text-size;
                    color: @primary-text-color;
                    margin-bottom: 15px;
                }

                .des {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }
        }

    }
}

// 推荐优势
.advantage {
    text-align: center;

    .list {
        display: flex;
        justify-content: space-between;
    }

    .advantage-item {
        background-color: #fff;
        box-shadow: 0 0 10px #eee;
        padding: 30px;
        flex: 1;
        margin-right: 30px;

        &:last-child {
            margin: 0;
        }

        cursor: pointer;
        transition: .3s;

        .img {
            margin-bottom: 10px;

            img {
                width: 80px;
                transition: .3s;
                &:hover{
                    transform: rotate(360deg);
                }
            }
        }

        .s-title {
            font-size: @h4-text-size;
            color: @primary-text-color;
            margin-bottom: 6px;
        }

        .s-text {
            font-size: @h6-text-size;
            color: @regular-text-color;
            line-height: @paragraph-line-height;
        }
    }
}

// 佣金推荐规则
.rule {
    .bg-color {
        position: absolute;
        top: -150px;
        right: -350px;
    }

    .list {
        position: relative;
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
                right: 24px;
                top: 16px;
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