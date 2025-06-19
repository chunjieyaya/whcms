// 头部
export let header = {
    bgImage: `/clb/header.jpg`,
    title: '负载均衡CLB',
    des: '负载均衡（Load Balancer）是一种用于在多个服务器之间分配网络负载的技术。负载均衡器（Load Balancer）是实现负载均衡的设备或服务，而负载均衡CLB（Classic Load Balancer）是云服务提供商提供的一种负载均衡器',
    btn: {
        text: '立即选购',
        path: ''
    }
}

// 产品动态
export let dynamics = [
    {
        text: '多种协议和应用类型',
        path: ''
    },
    {
        text: '监控和报警功能',
        path: ''
    },
    {
        text: '高级负载均衡算法',
        path: ''
    },
    {
        text: '自动扩展和弹性能力',
        path: ''
    }
    
]

/**
 * 产品特性
 */
export let character = {
    hugeText: '产品特性',
    data: [
        {
            name: '均衡负载分发',
            content: [
                {
                    text: '负载均衡CLB可以将流量均匀地分发到多个后端服务器上，确保每个服务器都能得到适当的负载。这有助于避免单个服务器过载，提高应用程序的响应能力和性能',
                    btn: {
                        text: '了解详情 >',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '高可用性',
            content: [
                {
                    text: '负载均衡CLB具有高可用性，即使其中一个负载均衡实例发生故障，仍然可以保持应用程序的可用性。它可以自动检测故障的实例，并将流量转移到其他正常运行的实例上，确保应用程序的连续性。',
                    btn: {
                        text: '了解详情',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '可扩展性',
            content: [
                {
                    text: '负载均衡CLB可以根据需要扩展以处理更高的流量。您可以根据应用程序的需求增加或减少负载均衡实例的数量，以适应不断变化的负载情况。',
                    btn: {
                        text: '了解详情',
                        path: ''
                    }
                }
            ]
        },
        {
            name: '会话保持',
            content: [
                {
                    text: '负载均衡CLB支持会话保持功能，可以确保来自同一客户端的请求始终被转发到同一个后端服务器。这对于需要保持会话状态的应用程序非常重要，如在线购物网站或登录系统。',
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

// 相关产品
export let ad = {
    headline: '相关产品',
    data: [
        {
            icon: `/elasticIP/ad1.svg`,
            title: '弹性云主机',
            des: '可以将EIP实例与云服务器、负载均衡、NAT网关、VPN网关等实例绑定或解绑。',
            path: ''
        },
        {
            icon: `/elasticIP/ad1.svg`,
            title: 'NAT网关',
            des: '可以将EIP实例与云服务器、负载均衡、NAT网关、VPN网关等实例绑定或解绑。',
            path: ''
        },
        {
            icon: `/elasticIP/ad1.svg`,
            title: 'VPC 网络',
            des: '可以将EIP实例与云服务器、负载均衡、NAT网关、VPN网关等实例绑定或解绑。',
            path: ''
        },
        {
            icon: `/elasticIP/ad1.svg`,
            title: '云硬盘',
            des: '可以将EIP实例与云服务器、负载均衡、NAT网关、VPN网关等实例绑定或解绑。',
            path: ''
        }
    ]
}