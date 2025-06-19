// 头部 
export let header = {
    hugeText: '虚拟私有云VPC网络',
    des: '私有网络（VPC，Virtual Private Cloud）是为您专属云上网络空间，不同的 VPC 之间完全逻辑隔离。每个 VPC 由子网、路由表、安全组、ACL等虚拟组件组成，您可通过软件定义网络，快速管理您的网络划分、路由策略、安全策略等网络配置。 VPC 可通过弹性公网 IP 、NAT 网关、负载均衡等多种方式连接互联网。同时，可通过 专线/ VPN 等连接方式，与数据中心打通，灵活构建混合多云。',
    bgImg: `/vpc/header.jpg`,
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
        label: '产品特性',
        href: '#character',
        top: 0
    },
    {
        label: 'VC网络优势',
        href: '#advantage',
        top: 1089
    },
    {
        label: '应用场景',
        href: '#scene',
        top: 2589
    },
    {
        label: '帮助文档',
        href: '#docs',
        top: 3198
    }
]

/**
 * 产品特性
 */
export let character = {
    hugeText: '产品特性',
    data: [
        {
            title: '高效稳定',
            text: '云计算产品和服务具有高效的性能和处理能力。我们采用先进的硬件设备和软件架构，通过负载均衡、分布式架构、容器化部署等方式，支持客户进行快速应用开发和部署',
            imgUrl: `/vpc/dy1.png`
        },
        {
            title: '安全可靠',
            text: '云计算基础架构采用先进的技术和设备，具有高可用、高稳定性和高弹性等特点。我们通过多级备份、灾备机房、红蓝分离等措施，保障客户数据的安全性和可用性。',
            imgUrl: `/vpc/dy2.png`
        },
        {
            title: '丰富的解决方案',
            text: '在多个行业拥有丰富的解决方案经验，包括政府、金融、制造、医疗、教育、电商等领域。我们可以根据客户需求和行业特点，提供更加专业化、针对性更强的解决方案。',
            imgUrl: `/vpc/dy3.png`
        },
        {
            title: '新型基础设施',
            text: '拥有多个新型基数设施，包含软件定义网络（SDN）,软件定义存储（SDS）,超融合基础设施（HCI）,边缘计算（Edge Computing）等领先全球的云计算设施。',
            imgUrl: `/vpc/dy4.png`
        }
    ]
}


/**
 * 产品优势
 */
export let advantage = {
    headline: '产品优势',
    data: [
        {
            imgUrl: `/vpc/a1.png`,
            text: '逻辑隔离和安全性',
            des: 'VPC允许您在云中创建逻辑隔离的网络环境，确保您的资源与其他用户的资源相互隔离。您可以使用安全组、网络访问控制列表和路由表等工具来控制网络流量，并保护您的数据和应用程序免受未经授权的访问'
        },
        {
            imgUrl: `/vpc/a2.png`,
            text: '灵活的网络配置',
            des: 'VPC允许您根据自己的需求自定义网络配置。您可以定义IP地址范围、创建子网，并配置路由表以控制流量的转发。这使您能够根据应用程序的要求创建不同的子网，并为其分配不同的IP地址。'
        },
        {
            imgUrl: `/vpc/a3.png`,
            text: '扩展性和弹性',
            des: 'VPC提供了高度可扩展的网络架构，可以根据需要轻松地扩展网络资源。您可以根据业务需求增加或减少子网的数量，而无需中断现有的网络连接。这种灵活性使您能够根据业务需求快速调整网络资源'
        },
        {
            imgUrl: `/vpc/a4.png`,
            text: '高可用性和容错性',
            des: 'VPC提供了高可用性和容错性的网络架构。它使用多个可用区域和可用区域间的冗余设计，以确保即使在某个区域发生故障时，您的应用程序和数据仍然可用。这种设计使您的网络具有高度的可靠性和容错性，确保您的业务持续运行。'
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
    bodyImg: `/ssl/docs.png`
}