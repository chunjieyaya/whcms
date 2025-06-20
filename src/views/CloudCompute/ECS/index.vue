<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="introduction.bgImg" bg-position="top" height="526px">
        <div class="introduction">
            <div class="headline-title ">{{ introduction.hugeText }}</div>
            <div class="text">{{ introduction.des }}</div>
            <div class="btns">
                <el-button v-for="item in introduction.btns" size="large" :style="{color: item.color}" :plain="item.plain" :link="item.link"
                    :type="item.type" @click="gotoView(item.path)">{{ item.text }}</el-button>
            </div>
        </div>
  
        <!-- 数据展示 -->
        <div class="datashow viewMinAndMax">
            <div class="left">
                <GridLayout :col="3" :gutterCol="6">
                    <div class="left-item" v-for="item in datashow.left" @click="gotoView(item.path)"
                        :style="{ backgroundImage: `url(${item.bgImage})` }">
                        <div class="title">{{ item.title }}</div>
                        <div class="text">{{ item.text }}/月</div>
                    </div>
                </GridLayout>
            </div>
            <div class="right">
                <li v-for="item in datashow.right" @click="gotoView(item.path)"><el-tag type="warning">动态</el-tag>
                    {{ item.text }}</li>
            </div>
        </div>
    </HeaderPad>

    <!-- 产品规格 -->
    <div class="productStandard">
        <ModuleCard headline-text="产品规格" :is-padding="false">
            <HorizontalMenu :menus="scenceMneus"></HorizontalMenu>
        </ModuleCard>
        <ModuleCard bg-color="#f8f9fb" :is-padding="false" :showHeader="false">
            <div class="products">
                <div class="pro-item">
                    <div class="left" :style="{ backgroundImage: `url(${productStandard.bgImg})` }">
                        <div class="title">通用入门型T6</div>
                        <div class="text">通用入门型云主机主要用于平时CPU都保持较低利用率而又需要瞬间冲高的场景，性能受到基准性能和CPU积分的的约束，是成本最低的通用型实例</div>
                        <div class="scenes">
                            <div class="scenes-title">应用场景：</div>
                            <div class="scenes-item">
                                <el-icon color="#f87242" size="22">
                                    <Check />
                                </el-icon>
                                <div>适合平时都保持很低的CPU利用率，但偶尔需要瞬时CPU占用超高的场景，例如Web应用服务器、轻负载应用、微服务等</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="bottom-item">
                                <div class="key">CPU/内存配比</div>
                                <div class="val">1:1/1:2/1:4</div>
                            </div>
                            <div class="bottom-item">
                                <div class="key">vCPU数量范围</div>
                                <div class="val">1-16</div>
                            </div>
                            <div class="bottom-item">
                                <div class="key">基频/睿频</div>
                                <div class="val">2.2GHz/3.0GHz</div>
                            </div>
                            <div class="bottom-item">
                                <div class="key">最大网络收发包</div>
                                <div class="val">60万PPS</div>
                            </div>
                            <div class="bottom-item">
                                <div class="key">最大内网带宽</div>
                                <div class="val">3Gbps</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <el-form label-width="100" label-position="left">
                            <el-form-item label="区域：">
                                <el-select v-model="value" placeholder="Select" :teleported="false">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="实例：">
                                <el-select v-model="value" placeholder="Select" :teleported="false">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="系统盘：">
                                <el-select v-model="value" placeholder="Select" :teleported="false">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="带宽：">
                                <el-select v-model="value" placeholder="Select" :teleported="false">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="购买时长：">
                                <el-select v-model="value" placeholder="Select" :teleported="false">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div class="price">¥ 74.00</div>
                        <div class="btn">
                            <el-button type="primary">立即订购</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </ModuleCard>
    </div>


    <!-- 产品特性 -->
    <ModuleCard headline-text="产品特性">
        <div class="ecs-feature">
            <div class="f-one" :style="{ backgroundImage: `url(${feature.featureOne.bgImage})` }">
                <div class="feature-item">
                    <LazyText>
                        <div class="title">{{ feature.featureOne.title }}</div>
                    </LazyText>
                    <div class="item" v-for="item in feature.featureOne.list">
                        <LazyText>
                            <div class="item-title">
                                <img :src="item.icon" alt="">{{ item.title }}
                            </div>
                        </LazyText>
                        <LazyText>
                            <div class="item-des">{{ item.des }}</div>
                        </LazyText>
                    </div>
                </div>
            </div>
            <div class="f-two">
                <div :style="{ backgroundImage: `url(${feature.featureTwo.left.bgImage})` }" class="left feature-item">
                    <LazyText>
                        <div class="title">{{ feature.featureTwo.left.title }}</div>
                    </LazyText>
                    <div class="item" v-for="item in feature.featureTwo.left.list">
                        <LazyText>
                            <div class="item-title">
                                <img :src="item.icon" alt="">{{ item.title }}
                            </div>
                        </LazyText>
                        <LazyText>
                            <div class="item-des">{{ item.des }}</div>
                        </LazyText>
                    </div>
                </div>
                <div :style="{ backgroundImage: `url(${feature.featureTwo.right.bgImage})` }" class="right feature-item">
                    <LazyText>
                        <div class="title">{{ feature.featureTwo.left.title }}</div>
                    </LazyText>

                    <div class="item" v-for="item in feature.featureTwo.left.list">
                        <LazyText>
                            <div class="item-title">
                                <img :src="item.icon" alt="">{{ item.title }}
                            </div>
                        </LazyText>
                        <LazyText>
                            <div class="item-des">{{ item.des }}</div>
                        </LazyText>
                    </div>
                </div>
            </div>
            <div class="f-three">
                <div class="f-three-item feature-item" v-for="item in feature.featureThree">
                    <LazyText>
                        <div class="title">{{ item.title }}</div>
                    </LazyText>
                    <div class="item" v-for="li in item.list">
                        <LazyText>
                            <div class="item-title">
                                <img :src="li.icon" alt="">{{ li.title }}
                            </div>
                        </LazyText>
                        <LazyText>
                            <div class="item-des">{{ li.des }}</div>
                        </LazyText>
                    </div>
                    <div class="image">
                    </div>
                    <img class="img" :src="item.img" alt="">
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 应用场景 -->
    <ApplicationScenario :data="applicationScenarios"></ApplicationScenario>

    <!-- 帮助文档 -->
    <ModuleCard headline-text="产品文档">
        <HelpDocs></HelpDocs>
    </ModuleCard>


    <!-- 底部长图-->
    <BtmLongImg></BtmLongImg>
</template>
<script lang="ts" setup>
import { introduction, productStandard,datashow, feature ,applicationScenarios} from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}


// 产品表单

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
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

const scenceMneus = [
    {
        name: '网站应用',
        datas: [
            {
                title: '场景说明',
                list: [
                    '个人或企业的上云需求，搭建门户网站、办公OA等压力适中的网站，需要保证业务顺畅运行，系统稳定可靠'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '个人、小型公司部署普通业务，需要自行采购硬件设施，花费较高',
                    '中大型公司开展跨地域类业务，需要部署大范围的数据中心，维护困难，成本高',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '天翼云弹性云主机即开即用，分钟级交付，快速接入部署在全国范围的数据中心',
                    '可按需变更规格、按需扩容，不影响业务正常运行，既兼顾成本，又能保障用户体验',
                    '通过负载均衡方式将业务分摊到多台云主机，提升业务处理能力',
                    '通过对象存储的高并发支持能力，解决网站频繁访问时的页面崩溃问题'
                ]
            }
        ]
    },
    {
        name: '游戏部署',
        datas: [
            {
                title: '场景说明',
                list: [
                    '游戏产业生态升级，传统游戏厂商对计算、网络、数据处理、图像渲染等都有较高的要求，亟需低成本快速构建云游戏业务'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '游戏数据量大、数据类型多、实时计算量大',
                    '业务压力不断变化，需要进行灵活的实时弹性扩展',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '多节点多可用区，有助于游戏业务快速实现大范围布局',
                    '根据需求快速弹性扩容，合理利用资源，节约成本',
                    '专业的GPU虚拟化技术，进程层面资源调度，每台服务器提供更大的并发，降低上云成本',
                    '先进的编解码协议，结合优化的网络传输，保证更低的时延和体验效果'
                ]
            }
        ]
    },
    {
        name: '小程序应用',
        datas: [
            {
                title: '场景说明',
                list: [
                    '对计算与网络有一定要求的应用，需要保证最优用户体验'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '传统服务器无法灵活扩容，现有服务器无法负荷会导致用户体验差',
                    '无法保障可用性、可靠性，需要及时备份、及时恢复等能力',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '云主机支持按需扩容，在保障用户流畅访问小程序的同时，合理优化成本支出',
                    '数据自动备份到对象存储，多种备份策略，一键配置',
                    '主备实例支持手工/自动切换，秒级切换，快速升级'
                ]
            }
        ]
    },
    {
        name: '电子商务',
        datas: [
            {
                title: '场景说明',
                list: [
                    '业务波动大、内存消耗高，传统商超零售面临产业升级，跨境电商面临业务高峰、安全威胁'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '直播秒杀等活动对网站性能要求高，系统响应慢会影响用户体验',
                    '访问量高时页面加载慢、网络延时大，访问量低时又容易造成资源浪费',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '自动调整弹性计算资源，随时应对业务高峰',
                    '利用对象存储技术，将流式数据或文件数据存储到云端，解决高吞吐量、高并发业务压力',
                    '对于访问量较大的情况，可通过负载均衡将业务分摊到多台云主机，保障用户体验'
                ]
            }
        ]
    },
    {
        name: '自建数据库',
        datas: [
            {
                title: '场景说明',
                list: [
                    '对内存要求较高，搭配超高IO云硬盘，满足海量数据处理需求'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '满足高性能内存的设备价格高昂',
                    '处理数据时负载高，传统主机扩缩容困难',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '超高IO云硬盘的读写性能强、吞吐带宽高，可满足用户各类数据库（如 MySQL、Oracle、NoSQL）的部署需求',
                    '可实时通知弹性伸缩策略执行结果，使用户掌握伸缩的动态情况，便于及时调整策略以保证数据库业务稳定性',
                    '快速实现网络接入互联互通，多副本保障数据安全'
                ]
            }
        ]
    }
]
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
        margin-bottom: 20px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @primary-text-color;
        margin-bottom: 86px;
    }

    .el-button {
        margin-right: 26px;
    }
}

// 数据展示
.datashow {
    width: 100%;
    height: 132px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    z-index: 1;
    display: flex;

    .left {
        flex: 2;
        height: 100%;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        border-radius: 10px;
        padding: 10px;
        margin-right: 10px;

        .left-item {
            cursor: pointer;
            height: 110px;
            background-size: 100% 100%;
            padding: 5px;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            transition: .3s;
            justify-content: center;

            &:hover {
                background-size: 110% 110%;
            }

            .title {
                font-size: @h5-text-size;
                font-weight: 600;
                color: @primary-text-color;
                margin-bottom: 6px;

            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
            }


            &:last-child {

                .title,
                .text {
                    color: #fff !important;
                }
            }
        }
    }

    .right {
        flex: 1;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        li {
            cursor: pointer;
            margin-bottom: 5px;
            font-size: @h7-text-size;
            .el-tag {
                margin-right: 10px;
            }

            &:hover {
                color: @primary-color;
            }
        }

    }
}

// 产品规格
.productStandard {
    margin-top: 130px;

    .menu {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;

        li {
            cursor: pointer;
            width: 150px;
            text-align: center;
            transition: .3s;
            font-size: @h5-text-size;
            color: @regular-text-color;
            padding-bottom: 18px;

            &:hover {
                color: @primary-color;
            }
        }

        .active {
            color: @primary-color;
            border-bottom: 3px solid @primary-color;
        }
    }

    .products {
        padding: 40px 0;

        .pro-item {
            padding: 15px;
            height: 510px;
            background-color: #fff;
            box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
            display: flex;

            &:hover {
                box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
            }

            .left {
                width: 728px;
                height: 100%;
                background-size: cover;
                border: 1px solid #e6e6e6;
                border-radius: 8px;
                height: 467px;
                padding: 23px 25px;
                position: relative;
                display: flex;
                flex-direction: column;

                .title {
                    font-size: @h3-text-size;
                    color: @primary-text-color;
                    margin-bottom: 15px;
                }

                .text {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    line-height: 1.5;
                    margin-bottom: 30px;
                }

                .scenes {
                    flex: 1;

                    .scenes-title {
                        font-size: @h5-text-size;
                        margin-bottom: 30px;
                    }

                    .scenes-item {
                        display: flex;
                        width: 380px;
                        font-size: @h6-text-size;
                        line-height: 1.5;
                        color: @regular-text-color;

                        .el-icon {
                            margin-right: 20px;
                        }

                    }
                }

                .bottom {
                    display: flex;

                    .bottom-item {
                        text-align: center;
                        flex: 1;
                        border-right: 1px solid #c2c2c2;

                        .key {
                            font-size: @h7-text-size;
                            color: @regular-text-color;
                            margin-bottom: 8px;
                        }

                        .val {
                            font-size: @h6-text-size;
                            color: @primary-text-color;
                        }

                        &:last-child {
                            border: none;
                        }
                    }
                }
            }

            .right {
                flex: 1;
                margin-left: 40px;
                padding: 20px 0;

                .el-select {
                    width: 100%;
                }

                .el-form-item {
                    margin-bottom: 25px;
                }

                :deep(.el-form-item__label) {
                    font-size: @h5-text-size;
                }

                :deep(.el-input__inner) {
                    color: @primary-text-color;
                    font-weight: 600;
                }

                .price {
                    margin-top: 85px;
                    font-size: @h2-text-size;
                    color: @primary-color;
                }

                .btn {
                    margin-top: 10px;

                    .el-button {
                        width: 100%;
                        height: 45px;
                    }
                }
            }
        }
    }
}

// 产品特性
.ecs-feature {

    .f-one {
        background-size: cover;
        margin-bottom: 26px;

        &>div {
            padding: 49px 620px 1px 53px;
        }
    }

    .feature-item {
        border-radius: 8px;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;

        .title {
            color: @primary-text-color;
            display: block;
            font-size: @h3-text-size;
            margin-bottom: 49px;
        }

        .item {
            font-size: @h6-text-size;
            margin-bottom: 30px;

            .item-title {
                font-weight: 600;
                margin-bottom: 20px;
                color: @primary-text-color;
            }

            .item-des {
                color: @regular-text-color;
            }

            img {
                width: 22px;
                height: 22px;
                margin-right: 13px;
                vertical-align: text-bottom;
            }
        }
    }

    .f-two {
        width: 100%;
        height: 501px;
        display: flex;
        margin-bottom: 26px;

        .left,
        .right {
            flex: 1;
            background-size: cover;
            padding-bottom: 70px;
            padding-left: 55px;
            padding-top: 50px;
            vertical-align: top;

            .item {
                width: 275px;
            }

        }

        .left {
            margin-right: 20px;
        }
    }

    .f-three {
        background-color: #f1f1f1;
        display: flex;
        height: 470px;


        .f-three-item {
            flex: 1;
            position: relative;
            padding-bottom: 70px;
            padding-left: 55px;
            padding-top: 50px;
            border-radius: 10px;
            vertical-align: top;

            .item {
                width: 275px;
            }

            .image {

                background: linear-gradient(169.94deg, rgba(90, 77, 77, 0.3) 23.34%, rgba(255, 15, 15, 0) 92.47%);
                right: 0;
                bottom: -5;
                filter: blur(50px);
                height: 227px;
                position: absolute;
                width: 227px;


            }

            .img {
                width: 260px;
                height: 260px;
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }

}
</style>