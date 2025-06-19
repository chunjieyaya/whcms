

// 头部 
export let header = {
    hugeText: '弹性公网IP',
    des: '弹性公网IP（Elastic Public IP）是云计算中提供的一种静态公网IP地址，它与您的云资源（如云服务器、负载均衡器等）关联，并且可以在需要时灵活地进行分配和释放',
    bgImg: `/elasticIP/header.jpg`,
    btns: {
        text: '立即体验',
        path: '',
    }

}

/**
 * 数据展示
 */
export let datashow = [
    {
        imgUrl: `/elasticIP/d1.png`,
        title: '全球可访问性',
        des: '全球连通率可达99%'
    },
    {
        imgUrl: `/elasticIP/d2.png`,
        title: '弹性带宽',
        des: '应用程序的网络流量需求增减带宽'
    },
    {
        imgUrl: `/elasticIP/d3.png`,
        title: '节约成本',
        des: '节约更多网络流量'
    },
    {
        imgUrl: `/elasticIP/d4.png`,
        title: '安全性',
        des: '提供网络安全组功能'
    }
]

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
        }
    ]
}


// 宣传
export let publicity = {
    headline: '功能描述',
    data: [
        {
            icon: `/elasticIP/g1.png`,
            title: '全球可访问性',
            txt: '为您的云资源提供了一个全球可访问的公网IP地址。通过分配弹性公网IP，您可以使您的云资源能够从互联网上访问，并与其他公网资源进行通信。'
        },
        {
            icon: `/elasticIP/g2.png`,
            title: '灵活的分配和释放',
            txt: ' 可以根据需要灵活地分配和释放。您可以将弹性公网IP与您的云资源关联。如果您不再需要该IP地址，可以将其释放，以便在其他资源之间重新分配。'
        },
        {
            icon: `/elasticIP/g3.png`,
            title: '弹性带宽',
            txt: '弹性公网IP支持弹性带宽，可以根据您的需求调整带宽大小。您可以根据应用程序的网络流量需求增加或减少带宽，以满足业务的要求。'
        },
        {
            icon: `/elasticIP/g4.png`,
            title: '高可用性和容错性',
            txt: '具有高可用性和容错性.即使您的云资源发生故障，您可以将弹性公网IP重新关联到其他正常运行的资源上，以确保您的应用程序持续可用。'
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