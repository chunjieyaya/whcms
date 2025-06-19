
/**
 * 头部
 */
export let header = {
    hugeText: '基础网络设施布点',
    text: '天翼云服务分为四类：基础、主力、战略和其他产品。天翼云将服务部署到任何给定区域的一般策略主要由区域类型、服务类别和客户需求驱动。',
    bgImgUrl: `/nwDistribution/header.jpg`
}

// 固定导航
export let fixNav = [
    {
        label: '基础设施',
        href: '#baseFacility',
        top: 0
    },
    {
        label: 'JIMCLOUD基础设施',
        href: '#maps',
        top: 900
    },
    {
        label: '常见问题',
        href: '#problems',
        top: 2100
    }
]


/**
 * 基础设施
 */
export let baseFacility = {
    hugeText: '基础设施',
    des: '任何给定区域的一般策略主要由区域类型、服务类别和客户需求驱动',
    data: [
        {
            imgUrl: `/nwDistribution/n1.png`,
            title: '基础产品',
            des: '资源池部署广泛，可提供基础服务，逐步实现各省区域覆盖',
            list: [
                {
                    key: '产品总数',
                    value: 58
                },
                {
                    key: '产品总数',
                    value: 117
                }
            ]
        },
        {
            imgUrl: `/nwDistribution/n2.png`,
            title: '基础产品',
            des: '资源池部署广泛，可提供基础服务，逐步实现各省区域覆盖',
            list: [
                {
                    key: '产品总数',
                    value: 58
                },
                {
                    key: '产品总数',
                    value: 117
                }
            ]
        },
        {
            imgUrl: `/nwDistribution/n3.png`,
            title: '基础产品',
            des: '资源池部署广泛，可提供基础服务，逐步实现各省区域覆盖',
            list: [
                {
                    key: '产品总数',
                    value: 58
                },
                {
                    key: '产品总数',
                    value: 117
                }
            ]
        },
        {
            imgUrl: `/nwDistribution/n4.png`,
            title: '基础产品',
            des: '资源池部署广泛，可提供基础服务，逐步实现各省区域覆盖',
            list: [
                {
                    key: '产品总数',
                    value: 58
                },
                {
                    key: '产品总数',
                    value: 117
                }
            ]
        }
    ]
}


/**
 * 地图
 */
export let maps = {
    hugeText: 'JIMCLOUD基础设施',
    text: '遍布全球的基础设施节点为用户提供快速稳定、智能可靠的服务',
    list: [
        {
            key: '26',
            value: '物理地区'
        },
        {
            key: '70',
            value: '可用区'
        },
        {
            key: '2000+',
            value: '中国境内加速节点'
        },
        {
            key: '800+',
            value: '境外加速节点'
        }
    ],
    openArea: {
        text: '已开放区域',
        punctuations: {
            color: '#f00', // 标点颜色
            data: [
                {
                    name: "北京",
                    value: 5,
                    x: 0,
                    y: 0

                },
                {
                    name: "上海",
                    value: 10,
                    x: 133,
                    y: 35

                }
            ]
        }
    },
    cooperationArea: {
        text: '海外合作基础设施',
        punctuations: {
            color: '#FFA500', // 标点颜色
            data: [
                {
                    name: "杭州",
                    value: 5,
                    x: 5,
                    y: 5

                },
                {
                    name: "苏州",
                    value: 10,
                    x: 138,
                    y: 37

                }
            ]
        }

    },
    speedArea: {
        text: '边缘加速节点',
        punctuations: {
            color: '#A52A2A', // 标点颜色
            data: [
                {
                    name: "黑龙江",
                    value: 5,
                    x: 9,
                    y: 10

                },
                {
                    name: "河南",
                    value: 10,
                    x: 13,
                    y: 25

                }
            ]
        }
    }
}


/**
 * 常见问题
 */
export let problems = {
    hugeText: '常见问题',
    bgImage: `/nwDistribution/problemBg.png`,
    data: [
        {
            navText: '购买咨询',
            title: '咨询购买问题',
            imgUrl: `/nwDistribution/p1.png`,
            btn: {
                text: '立即咨询',
                path: ''
            },
            list: [
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                }
            ]
        },
        {
            navText: '常见问题',
            title: '咨询购买问题',
            imgUrl: `/nwDistribution/p1.png`,
            btn: {
                text: '立即咨询',
                path: ''
            },
            list: [
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                }
            ]
        },
        {
            navText: '常见问题',
            title: '咨询购买问题',
            imgUrl: `/nwDistribution/p1.png`,
            btn: {
                text: '立即咨询',
                path: ''
            },
            list: [
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                }
            ]
        }
        ,
        {
            navText: '常见问题',
            title: '咨询购买问题',
            imgUrl: `/nwDistribution/p1.png`,
            btn: {
                text: '立即咨询',
                path: ''
            },
            list: [
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                },
                {
                    text: '弹性云服务器如何收费？',
                    path: '' // 跳转链接
                }
            ]
        }
    ]
}


/**
 * 底部长图
 */
export let btmLongImg = `/dataCenter/megatwo-photo-1.jpg`