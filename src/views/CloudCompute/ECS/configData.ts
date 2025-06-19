/**
 * 公司介绍
 */
export let introduction = {
    hugeText: '弹性云主机',
    des: '弹性云主机是一种可以随时获取、弹性可拓展的计算服务。云主机由cpu、内存、镜像、云硬盘组成，同时结合VPC、安全组、数据多副本保存等能力，打造一个即高效又可靠安全的计算环境，确保服务持久稳定。 ',
    bgImg: `/ecs/header.jpg`,
    btns: [
        {
            text: '立即订购',
            type: 'primary',
            path: '/cloudcompute/ecsconfig',
            color: '',
            plain: false,
            link: false
        },
        {
            text: '管理控制台',
            type: 'primary',
            color: '',
            path: '',
            plain: true,
            link: false
        },
        {
            text: '产品价格 >',
            type: 'primary',
            color: '#ffffff',
            path: '',
            plain: false,
            link: true
        },
        {
            text: '价格计算器 >',
            color: '#ffffff',
            type: '',
            path: '',
            plain: false,
            link: true
        },
        {
            text: '产品文档 >',
            type: 'primary',
            color: '#ffffff',
            path: '',
            plain: false,
            link: true
        },
    ]

}



/**
 * 数据展示
 */
export let datashow = {
    left: [
        {
            title: '云主机特惠',
            text: '新用户低至36元/月',
            bgImage: `/ecs/dataShow1.jpg`,
            path: ''
        },
        {
            title: '客户特惠',
            text: '每天4款秒杀0.2折',
            bgImage: `/ecs/dataShow2.jpg`,
            path: ''
        },
        {
            title: '推荐有礼',
            text: '赢超值优惠卷+电信卡',
            bgImage: `/ecs/dataShow3.png`,
            path: ''
        }
    ],
    right: [
        {
            text: '一键重装云主机',
            path: ''
        },
        {
            text: '管理云主机快照',
            path: ''
        },
        {
            text: '国产鲲鹏云主机、海光云主机、飞腾云主机全新上线',
            path: ''
        }
    ]
}

/**
 * 产品规格
 */
export let productStandard = {
    bgImg: "/ecs/productStandard.jpg"
}

/**
 * 产品特性
 */
export let feature = {
    featureOne: {
        bgImage: `/ecs/feature1.jpg`,
        title: '快捷易用，帮您实现轻松上云',
        list: [
            {
                icon: `/ecs/feature3.png`,
                title: '即开即用',
                des: '无论一台还是百台，均可在几分钟内通过官网、app等多种方式开通使用'
            },
            {
                icon: `/ecs/feature3.png`,
                title: '弹性伸缩',
                des: '提供弹性伸缩服务，可根据业务灵活调整云主机数量'
            }
        ]
    },
    featureTwo: {
        left: {
            bgImage: `/ecs/feature2.jpg`,
            title: '配置丰富，支持根据业务按需选购',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: '多种实例规格',
                    des: '提供通用型、通用计算型等多种规格，同时支持规格升级，面向各类场景满足用户的实时需求'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: '多种存储类型',
                    des: '支持单独购买云硬盘挂载到云主机上，并提供多种存储类型，满足不同的 I/O 性能要求'
                }
            ]
        },
        right: {
            bgImage: `/ecs/feature2.jpg`,
            title: '专有网络，可灵活自定义网络空间',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: ' 安全隔离',
                    des: '通过隧道技术实现100%二层网络隔离，满足不同行业客户的安全隔离需要'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: ' 访问控制',
                    des: '基于虚拟防火墙和安全组进行三层网络双重访问控制，满足行业用户的网络安全规范 I/O 性能要求'
                }
            ]
        }

    },
    featureThree: [
        {
            img: `/ecs/feature4.png`,
            title: '多种镜像，助力业务批量快速部署',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: '多种镜像',
                    des: '支持Linux、Windows的多种镜像'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: '私有镜像',
                    des: '可将云主机导成私有镜像，实现业务的批量快速部署，支持共享，方便多用户统一部署'
                }
            ]
        },
        {
            img: `/ecs/feature4.png`,
            title: '高效管理，多维监控保驾护航',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: '多种管理方式',
                    des: '提供可视化管理平台及控制台、远程终端等多种管理方式，操作便捷'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: '多维度监控',
                    des: '支持多维度资源监控，提供全面监控及告警机制，方便数据出现异常及时处理'
                }
            ]
        }
    ]

}


// 应用场景
export let applicationScenarios =
    [
        {
            name: '网站应用',
            imgUrl: '/ecs/website.png',
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
            imgUrl: '/ecs/game.png',
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
            imgUrl: '/ecs/miniApp.png',
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
            imgUrl: '/ecs/Ecommerce.png',
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
            imgUrl: '/ecs/data.png',
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
            imgUrl: '/ecs/render.png',
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
            imgUrl: '/ecs/bigData.png',
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
            imgUrl: '/ecs/deepLearning.png',
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

/**
 * 底部长图
 */
export let btmLongImg = `/dataCenter/megatwo-photo-1.jpg`