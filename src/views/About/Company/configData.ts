/**
 * 公司介绍
 */
export let introduction = {
    hugeText: 'JIMCLOUD',
    title: '提供全球稳定高效，安全可信的新型基础设施',
    des: 'JimCloud 致力于成为全球电信增值服务提供商，为用户在全球范围内提供优质、稳定的互联网服务、IDC服务、服务器租赁、裸金属云、DDOS清洗、SD-WAN以及专线等服务。JimCloud 团队都具有丰富的行业经验，分别来自于蓝汛、世纪互联、IBM等企业，公司发展迅速，目前已经在香港、日本、美国。菲律宾等地区部署节点，并且将继续在东南亚地区进行战略布局，提升资源优势以及市场优势。JimCloud 先后与中国电信国际公司、中国移动国际公司、PCCW、Telia等知名运营商达成合作，同时依托于自身的全球网络资源及计算能力优势，运用自主研发的智能网络安全平台，抵御网络攻击保护数据安全。我们坚持以最友好的服务，最优质的资源以及具有竞争力的价格为用户提供优质的服务。',
    bgImg: `/about/header.jpg`,
    bgColor: '#fff'
}

/**
 * 数据展示
 */
export let datashow = {
    data: [
        {
            title: '10000+',
            text: '在线服务器数量'
        },
        {
            title: '40+',
            text: '签约运营商'
        },
        {
            title: '60+',
            text: '技术支持工程师'
        },
        {
            title: '92.7%',
            text: '用户满意度'
        },
        {
            title: '8000+',
            text: '活跃用户量'
        }
    ]
}

/**
 * 优质服务
 */
export let serve = {
    hugeText: '优质服务，全方位支持',
    text: 'JIMCLOUD 给您优质服务以及全方位支持您的产品使用',
    data: [
        {
            title: '高效稳定',
            text: 'JimCloud的云计算产品和服务具有高效的性能和处理能力。我们采用先进的硬件设备和软件架构，通过负载均衡、分布式架构、容器化部署等方式，支持客户进行快速应用开发和部署',
            imgUrl: `/about/serve1.png`
        },
        {
            title: '安全可靠',
            text: 'JimCloud的云计算基础架构采用先进的技术和设备，具有高可用、高稳定性和高弹性等特点。我们通过多级备份、灾备机房、红蓝分离等措施，保障客户数据的安全性和可用性。',
            imgUrl: `/about/serve2.png`
        },
        {
            title: '丰富的解决方案',
            text: 'JimCloud在多个行业拥有丰富的解决方案经验，包括政府、金融、制造、医疗、教育、电商等领域。我们可以根据客户需求和行业特点，提供更加专业化、针对性更强的解决方案。',
            imgUrl: `/about/serve3.png`
        },
        {
            title: '新型基础设施',
            text: 'JIMCLOUD拥有多个新型基数设施，包含软件定义网络（SDN）,软件定义存储（SDS）,超融合基础设施（HCI）,边缘计算（Edge Computing）等领先全球的云计算设施。',
            imgUrl: `/about/serve4.png`
        },
        {
            title: '服务保障',
            text: 'JimCloud拥有专业的安全团队，包括安全专家、网络安全工程师和数据安全专员等。他们具有丰富的安全经验和技能，能够及时响应客户需求，提供高质量的安全服务',
            imgUrl: `/about/serve5.png`
        }
    ]
}

/**
 * 生态服务
 */
export let eserve = {
    hugeText: '强大的生态服务',
    text: 'JIMCLOUD 给您优质服务以及全方位支持您的产品使用',
    data: [
        {
            title: '安全保障体系',
            text: '全方位的安全保障体系',
            des: '云上安全体系在JIMCLOUD内部经过大规模、稳定可靠的实践',
            imgUrl: `/about/es1.png`
        },
        {
            title: '云平台架构',
            text: '安全可靠的云平台架构',
            des: '通过大流量防护，独立策略，入侵检测等来保障安全可靠',
            imgUrl: `/about/es2.png`
        },
        {
            title: '安全产品',
            text: '卓越丰富的云产品安全',
            des: '通过Tb级别的防护标准，确保每台主机的正常运行',
            imgUrl: `/about/es3.png`
        },
        {
            title: '服务支持',
            text: '提供完善的服务支持',
            des: '提供7x24小时候全方位的技术支持，确保高速，快捷的解决用户问题',
            imgUrl: `/about/es4.png`
        }
    ]
}

/**
 * 网络产品布点
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
 * 全面领先实力
 */
export let statistics = {
    hugeText: '全面领先实力',
    data: [
        {
            title: '31省',
            des: '资源覆盖省'
        },
        {
            title: '200万+',
            des: '天翼云客户数'
        },
        {
            title: '700+',
            des: '全国数据中心'
        },
        {
            title: '100万+',
            des: '网络连接处理能力'
        },
        {
            title: '100万+',
            des: 'IT PaaS并发服务能力'
        },
        {
            title: '60,000+',
            des: '边缘节点'
        },
        {
            title: '1亿+',
            des: 'IT PaaS承载用户'
        },
        {
            title: '37,000+',
            des: '专属客户经理'
        }
    ]
}

/**
 * 优秀合作伙伴
 * hugeText: 顶部标题
 * row1: 第一行图片
 * row2: 第二行图片
 */
export let partner = {
    hugeText: '优秀合作伙伴',
    data: {
        row1: [
            `/partner/1.png`,
            `/partner/2.png`,
            `/partner/3.png`,
            `/partner/4.png`,
            `/partner/5.png`,
            `/partner/6.png`
        ],
        row2: [
            `/partner/7.png`,
            `/partner/8.png`,
            `/partner/9.png`,
            `/partner/10.png`,
            `/partner/11.png`,
            `/partner/12.png`,
            `/partner/1.png`,
        ]
    }
}
/**
 * 底部长图
 */
export let btmLongImg = `/dataCenter/megatwo-photo-1.jpg`