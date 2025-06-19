<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" bg-position="center" height="460px">
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
                    <div class="title">{{item.title}}</div>
                    <div class="des">{{item.des}}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 热门推荐 -->
    <ModuleCard headline-text="热门推荐">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header"
                            :style="{ backgroundImage: `/serverRental/hot1.png)` }">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>
                        <!-- 选项 -->
                        <div class="options">
                            <el-form label-width="68" label-position="left">
                                <el-form-item label="带宽">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="硬盘">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="IP数">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="购买时长">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 价格 -->
                        <div class="price">
                            <div class="discount">
                                <el-tag class="ml-2" effect="dark">限时优惠价</el-tag>
                                <div class="text"><span>$980</span>/月</div>
                            </div>
                            <div class="original">
                                <el-text tag="del">原价：1400/月</el-text>
                            </div>
                        </div>
                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button type="primary">立即抢购</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

    <!-- 服务器列表 -->
    <ModuleCard headline-text="服务器列表" bg-color="#f7f9fc">
        <div class="serve-list">
            <!-- 导航 -->
            <HorizontalMenu :menus="scenceMneus"></HorizontalMenu>
            <!-- 内容 -->
            <div class="content">
                <div class="item" v-for="item in 5">
                    <div class="product">
                        <div class="title">XEON E3 1230 <el-tag effect="dark">热销</el-tag></div>
                        <div class="configs">
                            <div class="config-item" v-for="item in 4">
                                <div>内存</div>
                                <div>8GB DDR3</div>
                            </div>
                        </div>
                    </div>
                    <div class="price">
                        <div><span>$ 49.70USD</span>/月</div>
                        <div><el-button type="primary">立即购买</el-button></div>
                    </div>
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
import { header, datashow ,applicationScenarios} from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

// 热门推荐
const value = ref('')
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
    },
    {
        name: '图形渲染',
        datas: [
            {
                title: '场景说明',
                list: [
                    '专业级CAD、视频渲染、图形处理等场景需要强大计算能力，追求极致性能体验，以及超高性价比'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    'GPU价格高昂，硬件升级和维护需要较高成本',
                    '需求多样化，不同业务下对GPU的型号、显存等参数有不同要求',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '采用业界先进的GPU硬件，同步业界前沿技术，无缝切换新款硬件',
                    '功能强大，全面支持多种GPU应用程序、深度学习框架，如OpenGL、DirectX',
                    '方便快捷，提供和标准云主机一致的使用方式和管理功能',
                    '规格丰富，提供多种显存，满足不同的图形图像场景',
                    '通过云监控服务进行GPU资源的监控与告警'
                ]
            }
        ]
    },
    {
        name: '大数据分析',
        datas: [
            {
                title: '场景说明',
                list: [
                    '海量数据需要低成本存储、高速度数据处理能力，如日志分析、商业数据分析、交通数据分析等场景，需要将基础云服务与大数据组建结合起来'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '在满足高性能处理能力的同事，需要降低服务器成本，提升资源利用率',
                    '业务压力不断变化，需要进行灵活的实时弹性扩展，提升处理能力',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '使用本地盘云主机，提供高可靠存储资源，便于安全存储数据、文件和应用程序',
                    '对于重点保护数据，可通过对象存储的多副本冗余功能，实现异地数据容灾',
                    '可按需在线弹性扩展，不需要迁移数据，满足大容量、高并发请求的挑战'
                ]
            }
        ]
    },
    {
        name: '深度学习',
        datas: [
            {
                title: '场景说明',
                list: [
                    '深度学习的训练或预测平台，需要消耗大量计算资源，追求卓越的性能表现'
                ]
            },
            {
                title: '场景痛点',
                list: [
                    '产生大量临时数据，对存储的要求较高',
                    '对网络时延有极高的要求',
                ]
            },
            {
                title: '产品优势',
                list: [
                    '搭配使用对象存储、云数据库、云监控等服务，可快速搭建功能完备的深度学习离线训练系统',
                    '功能强大，全面支持多种GPU应用程序、深度学习框架，如CUDA、OpenCL',
                    '方便快捷，提供和标准云主机一致的使用方式和管理功能',
                    '规格丰富，提供多种显存，满足不同的图形图像场景',
                    '通过云监控服务进行GPU资源的监控与告警'
                ]
            }
        ]
    }
]
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
</script>
<style lang="less" scoped>
// 头部
.header {
    padding-top: 80px;
    height: 100%;
    color: @primary-text-color;
    position: relative;
    z-index: 1;

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

// 介绍
.introduce {
    position: absolute;
    width: 100%;
    left: 0;
    top: 435px;
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
                margin-right: 5px;

                img {
                    width: 52px;
                    height: 40px;
                }
            }

            .right {
                text-align: center;
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

// 热门推荐
.hot {
    .products {
        .products-item {
            background-color: #f3f4f6;
            border-radius: 10px;
            overflow: hidden;
            transition: .2s;

            &:hover{
                transform: scale(1.05);
            }

            .item-header {
                padding: 20px;
                margin-bottom: 20px;
                background-size: cover;

                .txt {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    margin-bottom: 10px;
                }

                .des {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }

            .options {
                padding: 0 20px;
            }

            .price {
                padding: 0 20px;

                .discount {
                    .text {
                        font-size: @h5-text-size;
                        color: @primary-text-color;

                        span {
                            font-size: @h2-text-size;
                            color: @primary-color;
                            margin-right: 5px;
                        }
                    }

                }
            }

            .btn {
                margin-top: 20px;

                .el-button {
                    width: 100%;
                    height: 45px;
                }
            }
        }
    }
}

// 服务器列表
.serve-list {
    .content {
        .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: .2s;
            background: linear-gradient(180deg, rgba(243, 245, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
            border: 1px solid #fff;
            padding: 20px 30px;
            margin-bottom: 10px;

            &:hover{
                transform: scale(1.05);
            }

            .product {
                .title {
                    font-size: @h5-text-size;
                    margin-bottom: 20px;
                }

                .configs {
                    display: flex;

                    .config-item {
                        margin-right: 30px;
                        font-size: @h7-text-size;

                        div:first-child {
                            color: @regular-text-color;
                            margin-bottom: 10px;
                        }
                    }
                }

            }

            .price {
                div {
                    text-align: right;
                    margin: 10px 0;
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                }

                span {
                    font-size: @h3-text-size;
                    color: @primary-color;
                    margin-right: 5px;
                }
            }


        }
    }
}
</style>