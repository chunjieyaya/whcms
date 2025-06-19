// 头部 
export let header = {
    hugeText: 'DDoS防护服务',
    des: 'DDoS 防护（Anti-DDoS）具有全面、高效、专业的 DDoS 防护能力，为企业组织提供 DDoS 高防包、DDoS 高防 IP 等多种 DDoS 解决方案，应对 DDoS 攻击问题。通过充足、优质的 DDoS 防护资源，结合持续进化的“自研+AI 智能识别”清洗算法，保障用户业务的稳定、安全运行。防护场景覆盖游戏、互联网、视频、金融、政府等行业。',
    bgImg: `/ddos/header.jpg`,
    btns: [
        {
            text: '立即购买',
            path: '',
            type: 'primary',
            plain: false,
            link: false
        },
        {
            text: '价格详情',
            path: '',
            type: 'primary',
            plain: true,
            link: false
        },
        {
            text: '帮助文档',
            path: '',
            type: 'primary',
            plain: false,
            link: true
        }
    ]
}

// 固定导航
export let fixNav = [
    {
        label: '产品优势',
        href: '#advantage',
        top: 0
    },
    {
        label: '热门推荐',
        href: '#hot',
        top: 2000
    },
    {
        label: '高仿部署',
        href: '#installation',
        top: 2700
    },
    {
        label: '应用场景',
        href: '#scene',
        top: 3600
    },
    {
        label: '帮助文档',
        href: '#docs',
        top: 4300
    }
]

/**
 * 产品优势
 */
export let advantage = {
    headline: '产品优势',
    data: [
        {
            imgUrl: `/ddos/a1.png`,
            text: '实时流量监测和分析',
            des: 'DDoS防护产品能够实时监测和分析网络流量，以便及时检测和响应DDoS攻击。它们使用高级的流量分析算法和模式识别技术，能够识别异常的流量模式和攻击行为。通过实时监测和分析，DDoS防护产品可以迅速发现攻击，并采取相应的措施进行防御。'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '智能流量过滤和清洗',
            des: 'DDoS防护产品具备智能流量过滤和清洗能力。它们能够识别和过滤掉恶意流量，将合法的流量传递到目标服务器或网络设备。这些产品使用多种技术，如访问控制列表（ACL）、黑白名单过滤、基于行为的分析等，以确保只有合法的流量能够通过，从而减轻DDoS攻击对网络的影响。'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '弹性扩展和负载均衡',
            des: 'DDoS防护产品通常具备弹性扩展和负载均衡的能力。在面对大规模的DDoS攻击时，它们可以自动扩展资源以应对攻击流量的增加，并将流量均衡分发到多个防护节点上。这种弹性扩展和负载均衡的机制可以确保网络服务的可用性和稳定性，即使在遭受严重的DDoS攻击时也能够保持正常的运行。'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '实时告警和报告生成',
            des: 'DDoS防护产品通常提供实时告警和报告生成功能。它们可以生成详细的攻击报告，记录攻击流量的特征、攻击来源等信息。同时，它们可以通过各种方式（如邮件、短信、即时通知等）向管理员发送实时告警，以便及时采取措施来应对攻击。这种实时告警和报告生成的功能帮助管理员迅速了解和应对DDoS攻击，提高网络的安全性和可靠性。'
        }
    ]
}

/**
 * 基础设施
 */
export let baseInstallation = {
    hugeText: '基础设施即服务，让业务全球可达',
    title: '全球基础设施，T级带宽储备',
    des: '布局全球多个地理区域，提供高速稳定的全球云联接网络',
    btn: {
        text: '了解详情',
        path: ''
    },
    data: [
        {
            title: '100+',
            txt: '全行业解决方案'
        },
        {
            title: '8T+',
            txt: 'DDoS防御带宽'
        },
        {
            title: '4W+',
            txt: '解决DDos问题'
        },
        {
            title: '8K+',
            txt: '在线用户'
        }
    ]
}


// 应用场景
export let scene = {
    headline: '应用场景',
    bgImg: `/ddos/s1.png`,
    data: [
        {
            name: '本地联动防护',
            list: [
                {
                    title: '场景概述',
                    list: [
                        'DDoS 防护为个人和企业提供高可用、高可靠的防护服务，减少安全投入和运维成本，避免 DDoS 攻击带来的直接或间接经济损失。'
                    ]
                },
                {
                    title: '我们能提供',
                    list: [
                        '轻松部署强大的 DDoS 防护能力，有效应对黑产、DDoS 攻击给业务带来的威胁问题，保障业务安全稳定运营。'
                    ]
                }
            ]
        },
        {
            name: '多场景纵深防御',
            list: [
                {
                    title: '场景概述',
                    list: [
                        'DDoS 防护为个人和企业提供高可用、高可靠的防护服务，减少安全投入和运维成本，避免 DDoS 攻击带来的直接或间接经济损失。'
                    ]
                },
                {
                    title: '我们能提供',
                    list: [
                        '轻松部署强大的 DDoS 防护能力，有效应对黑产、DDoS 攻击给业务带来的威胁问题，保障业务安全稳定运营。'
                    ]
                }
            ]
        }
    ]
}


export let docs = {
    headline: '产品文档',
    bodyImg: `/ssl/docs.png`
}