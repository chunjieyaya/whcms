// 头部 
export let header = {
    hugeText: '快照备份',
    des: '硬盘备份（Volume Backup Service）为云硬盘创建在线备份，无需关机/重启。针对病毒入侵、人为误删除、软硬件故障等场景，可将数据恢复到任意备份点',
    bgImg: `/public/serverRental/header.png`,
    btn: {
        text: '立即购买',
        path: ''
    }
}

/**
 * 产品优势
 */
export let advantage = {
    hugeText: '产品优势',
    bgImage: `/public/nwDistribution/problemBg.png`,
    data: [
        {
            navText: '简单易用',
            title: '咨询购买问题',
            imgUrl: `/public/nwDistribution/p1.png`,
            des: '致操作简单，3步完成备份配置，无需具备专业的备份软件技能。相比传统备份系统，无需关心备份服务器、备份存储的规划、扩容'
        },
        {
            navText: '灵活高效',
            title: '咨询购买问题',
            imgUrl: `/public/nwDistribution/p1.png`,
            des: '基于策略的自动备份，满足各种备份场景需求。永久增量备份，增量恢复，备份窗口短，恢复时间目标（RTO）达分钟级'
        },
        {
            navText: '经济实惠',
            title: '咨询购买问题',
            imgUrl: `/public/nwDistribution/p1.png`,
            des: '采用永久增量备份，首次备份为全量备份，后续备份均为增量备份，备份数据占用空间少。备份存储资源弹性伸缩，按需付费'
        },
        {
            navText: '安全可靠',
            title: '咨询购买问题',
            imgUrl: `/public/nwDistribution/p1.png`,
            des: '加密盘的备份数据自动加密，保证数据安全。备份数据跨数据中心保存，数据持久性高达99.999999999%（11个9），远高于传统备份'
        }
    ]
}


// 应用场景
export let scene = {
    headline: '应用场景',
    data: [
        {
            name: '数据备份与恢复',
            img: `/public/hardDisk/scene1.svg`,
            list: [
                {
                    title: '数据备份与恢复',
                    list: [
                        '为云硬盘提供在线备份，通过备份快速恢复数据，保证业务安全可靠'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '简单易用：自定义策略进行在线备份，配置简单',
                        '高效：增量备份、增量恢复，备份窗口短，RTO可达分钟级',
                        '高持久性：对象存储设计规格为99.99999999%（11个9）持久性'
                    ]
                }
            ]
        },
        {
            name: '快速业务部署',
            img: `/public/hardDisk/scene2.svg`,
            list: [
                {
                    title: '快速业务部署',
                    list: [
                        '为云服务器的系统盘创建镜像、数据盘创建备份，利用镜像和备份，可快速复制一个或多个与现有云服务器相同配置的云服务器，支持业务系统跨AZ快速批量部署'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '简单易用：3步完成备份配置，2步完成备份创建云硬盘配置',
                        '低成本：备份存储资源弹性伸缩，按需付费',
                        '提高可靠性：可跨AZ使用备份创建新卷，满足业务数据可靠性要求'
                    ]
                }
            ]
        }
    ],
}
// 相关产品
export let sameProduct = {
    headline: '相关产品',
    data: [
        {
            title: '香港独立服务器',
            des: '接入 CTGNet/CN2 GIA、HGC、HKBN 等高速回国网络,中国访问稳定时延 30-60ms',
            path: '',
            img: `/public/nkMount/same1.png`
        },
        {
            title: '美国独立服务器',
            des: '接入 CTGNet/CN2 GIA 高速回国，中国访问稳定时延 120-180ms',
            path: '',
            img: `/public/nkMount/same1.png`
        },
        {
            title: '香港站群服务器',
            des: '接入 CTGNet/CN2 GIA、HGC、HKBN 等高速回国网络务,中国访问稳定时延 30-60ms',
            path: '',
            img: `/public/nkMount/same1.png`
        }
    ]
}
