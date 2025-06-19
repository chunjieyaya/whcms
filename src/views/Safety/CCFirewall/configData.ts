// 头部 
export let header = {
    hugeText: 'CC防火墙',
    des: 'CC防火墙是一种用于保护网络免受CC攻击的安全设备。CC攻击（也称为DDoS攻击）是一种恶意行为，攻击者试图通过发送大量请求来超载目标服务器或网络设备，从而使其无法正常工作。CC防火墙旨在检测和过滤这些恶意请求，以确保网络的正常运行。',
    bgImg: `/serverRental/header.png`,
    btns: [
        {
            text: '立刻咨询',
            path: '',
            type: 'primary',
            plain: false,
            link: false
        }
    ]
}

// 固定导航
export let fixNav = [
    {
        label: '产品特性',
        href: '#feature',
        top: 0
    },
    {
        label: '产品功能',
        href: '#functions',
        top: 980
    },
    {
        label: '产品推荐',
        href: '#hot',
        top: 1352
    },
    {
        label: '应用场景',
        href: '#scene',
        top: 1954
    },
    {
        label: '常见问题',
        href: '#docs',
        top: 2645
    }
]

// 产品特性
export let feature = {
    hugeText: '产品特性',
    data: [
        {
            imgUrl: `/cooperativePartner/server1.png`,
            title: '访问控制列表（ACL）',
            des: 'ACL是一种规则集，用于控制网络流量的流入和流出。CC防火墙可以根据预定义的规则对流量进行过滤，例如限制特定IP地址或IP地址范围的访问'
        },
        {
            imgUrl: `/cooperativePartner/server1.png`,
            title: '连接速率限制',
            des: 'CC防火墙可以根据连接速率对流量进行限制。它可以检测到频繁的连接请求，并根据设定的阈值限制每个IP地址或连接的最大连接数。'
        },
        {
            imgUrl: `/cooperativePartner/server1.png`,
            title: '行为分析',
            des: 'CC防火墙可以分析流量的行为模式，以检测潜在的CC攻击。它可以监视连接的数量、频率和持续时间，并根据预定义的规则来识别异常行为。'
        },
        {
            imgUrl: `/cooperativePartner/server1.png`,
            title: '黑名单和白名单',
            des: 'CC防火墙可以使用黑名单和白名单来限制或允许特定的IP地址或IP地址范围。黑名单包含已知的恶意IP地址，而白名单包含受信任的IP地址。'
        }
    ]
}

// 产品功能
export let functions = {
    hugeText: '产品功能',
    data: [
        {
            title: '流量过滤和识别',
            text: 'CC防火墙可以对网络流量进行实时监控和分析，以识别潜在的CC攻击流量。',
            imgUrl: `/promotion/welfare.png`
        },
        {
            title: '自适应防护',
            text: 'CC防火墙通常具备自动学习和自适应防护功能。',
            imgUrl: `/promotion/welfare.png`
        },
        {
            title: '实时日志记录',
            text: 'CC防火墙通常提供实时告警和日志记录功能，以帮助管理员及时发现和应对CC攻击。',
            imgUrl: `/promotion/welfare.png`
        },
        {
            title: '连接速率限制',
            text: 'CC防火墙可以根据预设的阈值和连接速率限制策略来限制连接请求的数量和速度。',
            imgUrl: `/promotion/welfare.png`
        }
    ]
}

// 应用场景
export let scene = {
    headline: '应用场景',
    data: [
        {
            name: '本地联动防护',
            img: `/elasticIP/1.png`,
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
            img: `/elasticIP/1.png`,
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
            img: `/elasticIP/1.png`,
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

// 文档
export let docs = {
    headline: '产品文档',
    bodyImg: `/ssl/docs.png`,
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
