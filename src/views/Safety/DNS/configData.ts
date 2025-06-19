// 头部 
export let header = {
    hugeText: '智能DNS',
    des: '智能DNS（Domain Name System）是一种用于将域名转换为IP地址的技术。DNS是互联网中的一项基础服务，它允许用户使用易于记忆的域名来访问网站，而不是记住复杂的IP地址。',
    bgImg: `/serverRental/header.png`,
    btns: [
        {
            text: '立即使用',
            path: '',
            type: 'primary',
            plain: false,
            link: false
        },
        {
            text: '帮助文档',
            path: '',
            type: 'primary',
            plain: true,
            link: false
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
        label: '产品功能',
        href: '#function',
        top: 1128
    },
    {
        label: '应用场景',
        href: '#scene',
        top: 1489
    },
    {
        label: '常见问题',
        href: '#docs',
        top: 2180
    }
]

// 产品优势
export let advantage = {
    headline: '产品优势',
    data: [
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '智能负载均衡',
            des: '提高网站的性能和可用性，确保用户能够快速访问到最近和最快的服务器。',
            detail: '智能DNS可以根据用户的地理位置、网络状况和服务器负载等因素，将用户的请求分配到最合适的服务器上。这可以提高网站的性能和可用性，确保用户能够快速访问到最近和最快的服务器',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '全球流量管理',
            des: '智能DNS可以根据用户的地理位置，将流量分发到全球不同的服务器上',
            detail: '智能DNS可以根据用户的地理位置，将流量分发到全球不同的服务器上。这可以帮助企业在不同地区提供更好的服务，并优化网络资源的利用。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '智能故障转移',
            des: '智能DNS可以监测服务器的可用性，当某个服务器发生故障时，它可以自动将用户的请求转发到其他可用的服务器上',
            detail: '智能DNS可以监测服务器的可用性，当某个服务器发生故障时，它可以自动将用户的请求转发到其他可用的服务器上，从而确保服务的连续性和可靠性。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '安全增强',
            des: '智能DNS可以提供一些安全功能，如防止DDoS攻击、防止恶意软件和病毒的传播等',
            detail: '智能DNS可以提供一些安全功能，如防止DDoS攻击、防止恶意软件和病毒的传播等。它可以根据流量模式和行为分析来检测和阻止潜在的威胁，保护网络和用户的安全。',
            btn: {
                text: '加入我们',
                url: ''
            }
        }
    ]
}

// 产品功能
export let functions = {
    hugeText: '产品功能',
    data: [
        {
            name: '全球负载均衡',
            content: [
                {
                    text: '智能DNS可以根据用户的地理位置和网络条件，将用户的请求定向到最近和最优的服务器。通过全球负载均衡，智能DNS可以确保用户访问的网站或应用程序具有最佳的响应时间和性能。它可以根据实时的网络状况和服务器负载情况，智能地分配流量，避免单个服务器过载，提高整体的可用性和可靠性。',
                    btn: {
                        text: '了解详情 >',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '故障转移和高可用性',
            content: [
                {
                    text: '智能DNS可以实现故障转移和高可用性。当某个服务器或网络节点发生故障时，智能DNS可以自动将用户的请求重定向到备用服务器或备用网络节点，以确保服务的连续性。这种故障转移机制可以有效地减少因服务器故障而导致的服务中断时间，提高业务的可靠性和稳定性。',
                    btn: {
                        text: '了解详情',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '安全性和防御性',
            content: [
                {
                    text: '智能DNS可以提供安全性和防御性功能，以抵御各种网络威胁和攻击。它可以通过实施访问控制策略、阻止恶意流量和DDoS攻击，保护网络和服务器免受恶意行为的影响。智能DNS还可以实施安全策略，如DNSSEC（DNS安全扩展）来确保DNS解析的完整性和身份验证。',
                    btn: {
                        text: '了解详情',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '灵活性和可定制性',
            content: [
                {
                    text: '智能DNS提供了灵活性和可定制性，以满足不同组织的需求。它可以根据用户的具体要求进行配置和定制，如定制域名解析规则、定制负载均衡算法、定制缓存策略等。这种灵活性使得智能DNS能够适应不同规模和复杂度的网络环境，提供个性化的解决方案。',
                    btn: {
                        text: '了解详情',
                        path: ''
                    }
                }
            ]
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

// 常见问题
export let docs = {
    headline: '常见问题',
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