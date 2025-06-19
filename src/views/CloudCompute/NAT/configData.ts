
// 头部 
export let header = {
    hugeText: 'NAT网关',
    des: 'NAT（Network Address Translation）网关是一种网络设备，用于在不同网络之间转换IP地址。它的主要作用是将私有IP地址转换为公共IP地址，使得内部网络可以访问互联网。NAT网关通常用于家庭网络、办公网络或企业网络中，以提供网络连接共享和安全保护。',
    bgImg: `/nat/header.jpg`,
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


/**
 * 产品特性
 */
export let publicity = {
    headline: 'NAT网关产品特性',
    data: [
        {
            icon: `/nat/c1.png`,
            title: 'IP地址转换',
            txt: '能够将内部网络中的私有IP地址转换为公共IP地址，实现内部网络与外部网络之间的通信。'
        },
        {
            icon: `/nat/c2.png`,
            title: '地址映射',
            txt: 'NAT网关维护一个地址映射表，记录了内部网络的私有IP地址和对应的公共IP地址之间的映射关系。在数据包进出时，NAT网关可以根据映射表进行地址转换。'
        },
        {
            icon: `/nat/c3.png`,
            title: '网络连接共享',
            txt: '可以实现多个内部主机共享同一个公共IP地址访问互联网。通过使用网络地址转换，NAT网关可以将多个内部主机的数据包转发到正确的目的地。'
        },
        {
            icon: `/nat/c4.png`,
            title: '安全保护',
            txt: '隐藏了内部网络的真实IP地址，使得外部网络无法直接访问内部网络中的主机。这提供了一定程度的安全保护，减少了来自互联网的潜在攻击。'
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

/**
 * 产品优势
 */
export let advantage = {
    headline: '产品优势',
    data: [
        {
            imgUrl: `/nat/a1.png`,
            text: '简化网络配置',
            des: '可以简化网络配置，特别是在家庭网络和小型办公网络中。它允许内部网络中的主机使用私有IP地址，而无需为每个主机分配一个公共IP地址。这样，网络管理员可以更轻松地管理和维护网络。'
        },
        {
            imgUrl: `/nat/a2.png`,
            text: '端口转换',
            des: 'NAT网关可以实现端口转换，将内部网络中的私有端口映射到公共端口。这使得多个内部主机可以同时访问互联网上的相同服务，而无需冲突或分配额外的公共IP地址。'
        },
        {
            imgUrl: `/nat/a3.png`,
            text: '带宽管理',
            des: 'NAT网关产品提供带宽管理功能，可以对内部网络中的流量进行限制和调整，以实现带宽控制和优化。这使得网络管理员可以根据需求分配和管理带宽资源，确保网络的性能和稳定性。'
        },
        {
            imgUrl: `/nat/a4.png`,
            text: 'VPN支持',
            des: 'NAT网关产品提供VPN支持，允许远程用户通过加密隧道访问内部网络资源。这提供了安全的远程访问方式，使得用户可以在外部网络中安全地访问内部资源。'
        }
    ]
}




// 文档
export let docs = {
    headline: '产品文档',
    bodyImg: `/ssl/docs.png`
}