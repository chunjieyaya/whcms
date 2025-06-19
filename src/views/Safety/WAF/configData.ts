
// 头部 
export let header = {
    hugeText: '虚拟私有云VPC网络',
    des: 'DDoS 防护（Anti-DDoS）具有全面、高效、专业的 DDoS 防护能力，为企业组织提供 DDoS 高防包、DDoS 高防 IP 等多种 DDoS 解决方案，应对 DDoS 攻击问题。通过充足、优质的 DDoS 防护资源，结合持续进化的“自研+AI 智能识别”清洗算法，保障用户业务的稳定、安全运行。防护场景覆盖游戏、互联网、视频、金融、政府等行业。',
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
        label: '产品推荐',
        href: '#hot',
        top: 551
    },
    {
        label: '产品功能',
        href: '#function',
        top: 1555
    },
    {
        label: '常见问题',
        href: '#docs',
        top: 2132
    }
]

/**
 * 产品优势
 */
export let advantage = {
    headline: '产品优势',
    data: [
        {
            icon: `/ssl/p1.png`,
            title: '加密数据',
            txt: '保护网站访客的隐私信息不被监听，劫持窃取甚至篡改。'
        },
        {
            icon: `/ssl/p1.png`,
            title: '加密数据',
            txt: '保护网站访客的隐私信息不被监听，劫持窃取甚至篡改。'
        },
        {
            icon: `/ssl/p1.png`,
            title: '加密数据',
            txt: '保护网站访客的隐私信息不被监听，劫持窃取甚至篡改。'
        },
        {
            icon: `/ssl/p1.png`,
            title: '加密数据',
            txt: '保护网站访客的隐私信息不被监听，劫持窃取甚至篡改。'
        }
    ]
}


/**
 * 产品功能
 */
export let functions = {
    headline: '产品功能',
    data: [
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '数据安全',
            des: 'CDS提供实时监控IOPS和吞吐量，掌握硬盘监控情况',
            detail: '单盘容量最大支持32TB，单个主机CVM可挂载16块云硬盘，累计512TB。您可以自由配置存储容量，按需扩容，以满足您的业务数据需求，轻松应对 TB/PB 级的大数据处理。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '弹性配置',
            des: '支持自动化部署和弹性伸缩，随着业务需求变化，自动调整节点数量和计算资源，提高系统的可扩展性和灵活性',
            detail: '单磁盘容量最大支持32TB，单个 CVM 累计可挂载640TB，您可以自由配置存储容量，按需扩容，以满足您的业务数据扩容需求，灵活应对 TB/PB 级数据的大数据处理场景。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '容灾备份',
            des: '支持备份数据的快速恢复，包括定期备份和实时备份等多种方式，确保数据安全可靠',
            detail: 'JimCloud CBS 提供高达99.9999999%的数据可靠性以保护您的应用程序免受组件故障的威胁。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '简单易用',
            des: '提供简单易用的控制台和API接口，方便用户管理和操作硬盘及相关资源',
            detail: '通过简单的创建、挂载、卸载、删除等操作即可管理及使用云硬盘，节省人工管理部署成本。',
            btn: {
                text: '加入我们',
                url: ''
            }
        }
    ]
}

// 帮助文档
export let docs = {
    headline: '产品文档',
    data: [
        {
            title: '产品介绍',
            bgImg: `/domainName/docs.png`,
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
            bgImg: `/domainName/docs.png`,
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
            bgImg: `/domainName/docs.png`,
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
