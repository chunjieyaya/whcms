// 头部 
export let header = {
    hugeText: '防盗链',
    des: '防盗链是一种用于保护网站资源不被其他网站盗用的技术措施。当一个网站设置了防盗链功能后，只有经过授权的网站才能正常访问该网站的资源，其他未经授权的网站则无法直接链接到这些资源。',
    bgImg: `/serverRental/header.png`,
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
        imgUrl: `/serverRental/headerbottom1.png`,
        title: '弹性灵活',
        des: '弹性配置,适用于全行业'
    },
    {
        imgUrl: `/serverRental/headerbottom1.png`,
        title: '弹性带宽',
        des: '应用程序的网络流量需求增减带宽'
    },
    {
        imgUrl: `/serverRental/headerbottom1.png`,
        title: '更低成本',
        des: '热卖产品特惠抢购'
    },
    {
        imgUrl: `/serverRental/headerbottom1.png`,
        title: '安全性较高',
        des: '多种协议支持，更安全'
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
            text: 'HTTP Referer检查',
            des: '服务器会检查HTTP请求的Referer字段，该字段记录了请求的来源网页。如果来源网页不在允许的列表中，服务器会拒绝提供资源。'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '全Token验证',
            des: '服务器会为合法的访问者生成一个特定的Token，并将其嵌入到资源的URL中。只有带有正确Token的请求才能成功获取资源'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '加密链接',
            des: '服务器会对资源的URL进行加密处理，只有解密后才能获取到真实的资源链接。这样即使盗链者获取到加密链接，也无法直接使用'
        },
        {
            imgUrl: `/ddos/a1.png`,
            text: '防止盗用和盗链',
            des: '防盗链产品可以有效防止其他网站盗用自己的资源或直接链接到自己的资源。通过验证HTTP请求的来源或使用加密链接等技术手段，可以防止非法的资源盗用和盗链行为，保护网站的知识产权和商业利益。'
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
