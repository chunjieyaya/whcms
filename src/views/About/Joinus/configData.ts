/**
 * 顶部大图部分
 * imgUrl: 背景图连接
 * text: 标题文本
 */
export let header = {
    bgColor: '#cfd6ea',
    text: 'JimCloud人才招聘',
    des: 'JimCloud"厚币以招贤者",期待与您共赴前程',
    btn: {
        text: '立即加入我们',
        url: ''
    },
    imgUrl: `/joinusImgs/header.jpg`,

}


/**
 * 为什么选择我们？
 * hugeText: 顶部标题
 * data: 数据列表
 *       imgUrl: 图标连接
 *       title : 图标下面的大文本
 *       des   : 最下面的描述
 */
export let advantage = {
    hugeText: '为什么加入我们',
    des: '提供新一线国际化薪资，福利待遇',
    data: [
        {
            imgUrl: `/joinusImgs/ad1.png`,
            title: '领先同行业的专业性',
            des: '团队可以让您与行业内最优秀的人才一起工作，深入了解这个行业的最新动态。同时，您还可以通过JimCloud获得各种培训和学习机会，提高自己的技能水平'
        },
        {
            imgUrl: `/joinusImgs/ad2.png`,
            title: '具备无限的创新能力',
            des: '不断推出新产品、新技术以满足客户需求。中您将有机会参与到一系列创新项目中，新思路。如果您想寻找一个充满激情、追求创新的工作环境，欢迎加入我们！'
        },
        {
            imgUrl: `/joinusImgs/ad3.png`,
            title: '具备无限的发展机会',
            des: '有更多的机会去承担重要的工作任务，接受更高级别的培训，晋升到更高级别的职位。对员工的职业生涯规划和发展提供了全面的支持，帮助您实现职业目标'
        },
        {
            imgUrl: `/joinusImgs/ad4.png`,
            title: '拥有国际化公司文化',
            des: '注重员工的工作环境和福利待遇，秉承“以人为本”的原则，关注员工的各种需求和权益。公司内部也鼓励积极向上、勇于创新的企业文化，这将激励员工充满活力'
        }

    ]
}


/**
 * 公司福利
 */
export let wels = {
    hugeText: '公司福利待遇',
    data: [
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '丰厚的薪资待遇'
        },
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '定期周边国家旅游'
        },
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '优越的办公环境'
        },
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '充足的年假'
        },
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '休闲娱乐设施'
        },
        {
            imgUrl: `/joinusImgs/welfare.png`,
            text: '弹性工作时间'
        }
    ]
}


/**
 * 招聘职位
 */
export let jobs = {
    hugeText: '招聘职位',
    data: [
        {
            title: '后端研发工程师',
            list: [
                {
                    key: '工作职责：',
                    val: [
                        '负责负责DevOps 2  OpenPitrix 2  Serverless 2 定制化产品/项目的前端或后端开发。',
                        
                    ]
                },
                {
                    key: '工作要求：',
                    val: [
                        '1.较强的自主学习能力能够阅读英文技术文档',
                        '2.良好的编程 / 设计基础，至少熟悉一种常用编程语言，如 Python/Go/Java/Scala 等；',
                        '3.熟悉至少一种开源分布式系统：如 Hadoop/Spark/HBase/Kafka/Kylin 等少一种分布式协调服务',
                        '4.自主学习能力，有技术追求，沟通能力好',
                    ]
                },
                {
                    key: '投递方式：',
                    val: [
                        '请发送简历到 noc@jimcloud.net, 并注明应聘职位名称'
                        
                        
                    ]
                }
            ]
        },
        {
            title: '前端开发工程师',
            list: [
                {
                    key: '工作职责：',
                    val: [
                        '1. 官网以及专题页面的维护',
                        '2.营活动页面的开发（如促销活动、拼团购活动等以前端交互为主的高频活动）',
                    ]
                },
                {
                    key: '工作要求：',
                    val: [
                        '1. 掌握html/css/javascript',
                        '2. 有 vue3 + router4 + pinia + ts + axios + vite 开发经验',
                        '3. 对用户交互和用户界面的开发有兴趣；',
                        '4. 对网络协议、计算机系统、基础算法有所掌握；',
                        '5. 对学习前端技术、跟踪新技术有热情；',
                    ]
                },
                {
                    key: '投递方式：',
                    val: [
                        '请发送简历到 noc@jimcloud.net, 并注明应聘职位名称'
                      
                    ]
                }
            ]
        },
        {
            title: '产品（视觉/UI/UX）设计师',
            list: [
                {
                    key: '工作职责：',
                    val: [
                        '1. 在设计前期与产品负责人沟通讨论，理解产品目标及意义',
                        '2. 参与产品的交互设计。发散思维，分析竞品或从其他产品设计中获取灵感，为产品注入更合适、有效的交互、UI 展示及落地的解决方案',
                        '3. 参与UI 及 视觉设计，输出高质量的设计稿',
                        '4. 负责日常的产品更新及维护，不断提升产品的用户体验',
                        
                    ]
                },
                {
                    key: '工作要求：',
                    val: [
                        '1. 设计或其他设计相关专业',
                        '2. 良好的沟通和表达能力，较强的团队协作能力和自驱力。',
                        '3. 有完整真实的项目经验',
                        '4. 熟悉 HTML、CSS 等 Web 专业知识，了解云计算行业及产品功能',
                    ]
                },
                {
                    key: '投递方式',
                    val: [
                        '请发送简历到 noc@jimcloud.net, 并注明应聘职位名称',
                       
                    ]
                }
            ]
        },
        {
            title: '售后技术支持',
            list: [
                {
                    key: '工作职责：',
                    val: [
                        '1.向已购买我公司产品的客户，提供各类IDC业务进行售后维护和技术支持',
                        '2.负责解答客户在线提交的技术疑难问题',
                        '3.负责积极处理客户遇到的业务故障',
                    ]
                },
                {
                    key: '工作要求：',
                    val: [
                        '1. 熟悉WIN2000/2003，或linux等操作系统；',
                        '2. 了解asp、asp.net、php、java、c、VB语言中的一种或多种；',
                        '3. 掌握英文，具有较强的沟通能力、领悟能力和学习能力；',
                        '4. 心理素质好，责任心强，性格活泼；',
                    ]
                },
                {
                    key: '投递方式：',
                    val: [
                        '请发送简历到 noc@jimcloud.net, 并注明应聘职位名称',
                        
                    ]
                }
            ]
        },
        {
            title: '大客户业务经理',
            list: [
                {
                    key: '工作职责：',
                    val: [
                        '1. 拓展IDC 业务大客户群体，有效沟通交流，了解客户需求，促成合作',
                        '2. 老客户的跟踪、回访，维护与老客户的合作关系，并根据新需求制定方案；',
                        '3. 整理与存档客户信息，汇总客户需求、市场信息等，每季度提交客户信息分析报告',
                        
                    ]
                },
                {
                    key: '工作要求：',
                    val: [
                        '1. 掌握中文或英文，具备良好的沟通和协作能力；',
                        '2. 具有较强的应变能力、协调能力、学习能力，能独立处理问题；',
                        '3. 一定的客户接待发掘能力 (有做过互联网销售客服工作经验者优先)；',
                        '4. 要求一定要有“客户为先”的服务精神，一切从帮助客户、满足客户角度出发；',
                        
                    ]
                },
                {
                    key: '联系方式：',
                    val: [
                        '请发送简历到 noc@jimcloud.net, 并注明应聘职位名称',
                    ]
                }
            ]
        }
    ]
}



/**
 * 公司环境
 */
export let environments = {
    hugeText: '公司环境',
    data: [
        `/joinusImgs/welfare1.jpg`,
        `/joinusImgs/welfare2.jpg`,
        `/joinusImgs/welfare3.jpg`
    ],
    details: [
        {
            key: '公司地址：',
            value: '5001 BEACH ROAD #07-37 GOLDEN MILE COMPLEX SINGAPORE 19958'
        },
        {
            key: '联系电话：',
            value: '+65-666-678-0016'
        }
    ]
}
