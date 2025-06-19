// 头部
export let header = {
    bgImg: `/agency/header.jpg`,
    hugeText: '渠道代理',
    des: '我们将给予经销商大力的市场支持，经销商仅需把注意力放在市场开拓上，我们将给予完善的技术支持及售后服务。我们诚挚地邀请您加入我们！'
}


/**
 * 优势介绍
 */
export let advantage = {
    hugeText: '优势介绍', // 大字标题
    data: [
        {
            imgUrl: `/agency/advantage1.png`, // 图标路径
            title: '经销商优惠折扣', //卡片标题
            des: '具备丰富的市场资源，涵盖多地区服务系统，市场资源供给丰富。', //卡片描述
            btn: {
                text: '加入我们', // 按钮文字
                path: '', // 跳转链接
            }
        },
        {
            imgUrl: `/agency/advantage2.png`, // 图标路径
            title: '完善的经销商制度', //卡片标题
            des: '我们拥有完善的经销商制度来支持您进行业务开展。', //卡片描述
            btn: {
                text: '加入我们', // 按钮文字
                path: '', // 跳转链接
            }
        },
        {
            imgUrl: `/agency/advantage3.png`, // 图标路径
            title: '优先级售后服务', //卡片标题
            des: '经销商将获得更高的工单处理优先权和更高效的售后。', //卡片描述
            btn: {
                text: '加入我们', // 按钮文字
                path: '', // 跳转链接
            }
        },
        {
            imgUrl: `/agency/advantage4.png`, // 图标路径
            title: '开放的合作态度', //卡片标题
            des: '开放、务实、创新、共赢的生态体系，真心实意为客户着想，共同帮助客户实现业务超级增长', //卡片描述
            btn: {
                text: '加入我们', // 按钮文字
                path: '', // 跳转链接
            }
        }
    ]
}

// 固定导航
export let fixNav = [
    {
        label: '优势介绍',
        href: '#advantage',
        top: 0
    },
    {
        label: '等级折扣制度',
        href: '#discount',
        top: 900
    },
    {
        label: '合作流程',
        href: '#cooperationProcess',
        top: 1600
    },
    {
        label: '了解更多细节',
        href: '#moreDetail',
        top: 2100
    }
]

/**
 * 等级折扣制度
 */
export let discount = {
    hugeText: '等级折扣制度', // 大字标题
    des: '我们将按照经销商的等级划分不同的折扣等级，每个等级的经销商都将享有比市场更优惠的价格以及更多经销商专属权益。JimCloud 完善的经销商制度能让经销商更快地推动业务发展，高效达成经销商目标。', //表格描述
    tableCol: [  //表格列配置
        {
            key: 'title',
            value: ''
        },
        {
            key: 'date',
            value: '黄金代理商'
        },
        {
            key: 'name',
            value: '铂金代理商'
        },
        {
            key: 'address',
            value: '钻石代理商'
        }

    ],
    data: [  //表格数据
        {
            title: '充值金额',
            date: '$5000',
            name: '$15000',
            address: '$30000',
        },
        {
            title: '折扣',
            date: '10%',
            name: '25%',
            address: '35%',
        },
        {
            title: '在线数量（物理机）',
            date: '10-29台',
            name: '30-49台',
            address: '50台以上',
        },
        {
            title: '在线云服务器',
            date: '20台以上',
            name: '40台以上',
            address: '60台以上',
        },
        {
            title: '资源',
            date: '优先',
            name: '优先',
            address: '优先',
        },
        {
            title: '技术支持',
            date: '优先',
            name: '优先',
            address: '优先',
        },
        {
            title: '重装/重启',
            date: '免费',
            name: '免费',
            address: '免费',
        },
        {
            title: '分销平台',
            date: `/agency/right.png`,
            name: `/agency/right.png`,
            address: `/agency/right.png`,
        },
        {
            title: 'API',
            date: `/agency/right.png`,
            name: `/agency/right.png`,
            address: `/agency/right.png`,
        }
    ]
}

/**
 * 合作流程
 * hugeText: 顶部标题
 * num: 圆圈里面的数字
 * des: 最下面的提示文字
 * percent: 填充的百分比
 */
export let flow = {
    hugeText: '合作流程',
    data: [
        {
            num: 1,
            des: '注册JimCloud账号',
            percent: 0
        },
        {
            num: 2,
            des: '完成企业认证',
            percent: 25
        },
        {
            num: 3,
            des: '签约线上合作协议',
            percent: 50
        },
        {
            num: 4,
            des: '分配商务经理',
            percent: 75
        },
        {
            num: 5,
            des: '成为JIMCLOUD合作伙伴',
            percent: 100
        }
    ]
}

/**
 * 了解更多细节
 */
export let moreDetail = {
    hugeText: '了解更多细节', //大字标题
    data: [
        {
            imgUrl: `/dataCenter/megatwo-photo-1.jpg`, // 图片连接
            title: '提供完善的售后服务', // 标题
            des: 'JimCloud提供7x24小时的技术支持，包括电话、邮件、在线客服等多种方式，确保客户在使用过程中遇到任何问题都能及时得到解决.如果遇到故障或者问题，JimCloud的运维人员会第一时间进行处理和修复。我们会采用预警机制、监控系统和自动化工具等技术手段，确保客户得到及时的响应和支持。'  // 描述
        },
        {
            imgUrl: `/dataCenter/megatwo-photo-1.jpg`, // 图片连接
            title: '自动化体系', // 标题
            des: 'JimCloud提供自动化部署和管理工具，可以帮助客户快速部署和管理云计算环境。这些工具可以自动化完成服务器的配置、软件的安装、网络的搭建等操作，使得客户不需要手动干预，降低了部署和管理的难度。'  // 描述
        },
        {
            imgUrl: `/dataCenter/megatwo-photo-1.jpg`, // 图片连接
            title: '自助服务', // 标题
            des: 'JimCloud提供自助管理和监控工具，可以帮助客户对云计算环境进行自我管理和监控。客户可以通过这些工具自行管理和监控服务器的状态、应用程序的性能、网络的质量等指标，从而实现更加精细化的管理和监控。'  // 描述
        },
        {
            imgUrl: `/dataCenter/megatwo-photo-1.jpg`, // 图片连接
            title: 'API资源池对接', // 标题
            des: '通过API资源池对接，客户可以灵活地访问和管理JimCloud的云计算资源，从而实现更加精细化的管理和控制。比如，客户可以通过API接口自动化完成服务器的部署、应用程序的配置、网络的设置等操作，从而降低了管理成本和提高了服务质量。'  // 描述
        },
        {
            imgUrl: `/dataCenter/megatwo-photo-1.jpg`, // 图片连接
            title: '自建品牌', // 标题
            des: 'JimCloud的渠道伙伴可以根据自己的需求定制营销策略，包括价格政策、推广活动、客户服务等方面。通过这些策略，渠道伙伴可以更好地满足客户需求，提升品牌竞争力。可以自定义品牌标识，包括公司名称、商标、标志等，从而建立自己的品牌形象，并且获得更好的市场认可度'  // 描述
        }
    ]
}


/**
 * 底部图片链接
 */
export let bottomImgUrl = `/dataCenter/megatwo-photo-1.jpg`