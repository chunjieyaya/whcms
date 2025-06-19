/**
 * 公司介绍
 */
export let header = {
    hugeText: '云硬盘',
    des: '云硬盘（CDS，Cloud Disk Service）是为您的云主机CVM提供低时延、高可用、持久性的块级存储服务。云硬盘CDS的数据以多副本存储，避免意外带来的数据不可用，数据可靠性高达99.9999999%，云硬盘CDS的容量可按需弹性扩展，同时支持快照和自定义镜像，在相同可用区内，可实现秒级容量调整，以及灵活的挂载/卸载，满足您的业务需求。  ',
    bgImg: `/hardDisk/header.jpg`,
    btn: {
        text: '立即咨询',
        path: ''
    }
}

/**
 * 产品特性
 */
export let feature = {
    headline: '产品特性',
    featureOne: {
        bgImage: `/ecs/feature1.jpg`,
        title: '快捷易用，帮您实现轻松上云',
        list: [
            {
                icon: `/ecs/feature3.png`,
                title: '高可靠性',
                des: '无采用分布式系统架构和多副本数据备份技术，保证数据安全可靠和高可用性'
            },
            {
                icon: `/ecs/feature3.png`,
                title: '高弹性',
                des: '支持实时扩容和缩容，按需调整存储容量和性能参数，满足业务的动态变化需求'
            }
        ]
    },
    featureTwo: {
        left: {
            bgImage: `/ecs/feature2.jpg`,
            title: '丰富的产品功能，支持全面业务开展',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: '数据备份',
                    des: '通过多副本备份和异地容灾等机制，确保数据备份安全与完整，并能够实现备份数据的快速恢复'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: '存储扩容',
                    des: '支持在线扩容，无需停机即可实现存储空间的扩展和性能的提升'
                }
            ]
        },
        right: {
            bgImage: `/ecs/feature2.jpg`,
            title: '容灾备份，确保数据安全可靠',
            list: [
                {
                    icon: `/ecs/feature3.png`,
                    title: ' 数据加密',
                    des: '提供多种数据加密方式，包括硬件加密和软件加密等，确保数据传输过程中的安全性'
                },
                {
                    icon: `/ecs/feature3.png`,
                    title: ' 备份恢复',
                    des: '支持备份数据的快速恢复，包括定期备份和实时备份等多种方式，确保数据安全可靠'
                }
            ]
        }

    },
    featureThree: {
        bgImage: `/ecs/feature1.jpg`,
        title: '快捷易用，帮您实现轻松上云',
        list: [
            {
                icon: `/ecs/feature3.png`,
                title: '高性能',
                des: '采用SSD闪存硬盘和高速网络传输技术，提供快速、稳定、低延迟的存储服务'
            },
            {
                icon: `/ecs/feature3.png`,
                title: '简单易用',
                des: '提供简单易用的控制台和API接口，方便用户管理和操作云硬盘及相关资源'
            }
        ]
    }

}

// 应用场景
export let scene = {
    data: [
        {
            name: '数据备份与恢复',
            imgUrl: `/hardDisk/scene1.svg`,
            datas: [
                {
                    title: '数据备份与恢复',
                    list: [
                        '为云硬盘提供在线备份，通过备份快速恢复数据，保证业务安全可靠'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '简单易用：自定义策略进行在线备份，配置简单',
                        '高效：增量备份、增量恢复，备份窗口短，RTO可达分钟级',
                        '高持久性：对象存储设计规格为99.99999999%（11个9）持久性'
                    ]
                }
            ]
        },
        {
            name: '快速业务部署',
            imgUrl: `/hardDisk/scene2.svg`,
            datas: [
                {
                    title: '快速业务部署',
                    list: [
                        '为云服务器的系统盘创建镜像、数据盘创建备份，利用镜像和备份，可快速复制一个或多个与现有云服务器相同配置的云服务器，支持业务系统跨AZ快速批量部署'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '简单易用：3步完成备份配置，2步完成备份创建云硬盘配置',
                        '低成本：备份存储资源弹性伸缩，按需付费',
                        '提高可靠性：可跨AZ使用备份创建新卷，满足业务数据可靠性要求'
                    ]
                }
            ]
        }
    ],
    btns: [
        {
            text: '弹性云主机',
            path: '/ecs'
        }
    ]
}

// 产品文档
export let document = {
    headline: '产品文档',
    data: [
        {
            title: '产品介绍',
            bgImg: '',
            list: [
                {
                    name: '什么是天翼云弹性云主机',
                    path: ''
                },
                {
                    name: '天翼云弹性云主机的功能',
                    path: ''
                },
                {
                    name: '天翼云弹性云主机的实例规格组',
                    path: ''
                }
            ]
        },
        {
            title: '操作指导',
            bgImg: '',
            list: [
                {
                    name: '购买云主机',
                    path: ''
                },
                {
                    name: '登录云主机',
                    path: ''
                },
                {
                    name: '变更云主机规格',
                    path: ''
                }
            ]
        },
        {
            title: '最佳实践',
            bgImg: '',
            list: [
                {
                    name: '手动部署Java Web',
                    path: ''
                },
                {
                    name: '搭建FTP',
                    path: ''
                },
                {
                    name: '在天翼云上配置NTP服务器',
                    path: ''
                }
            ]
        }
    ]
}