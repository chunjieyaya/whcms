/**
 * 顶部大图部分
 * imgUrl: 背景图连接
 * text: 标题文本
 * btn: 
 *      text: 按钮文字
 *      url : 按钮跳转页面
 */
export let header = {
    imgUrl: `/cooperativePartner/header.gif`,
    title: 'JIMCLOUD合作伙伴体系',
    text: '欢迎成为JimCloud经销商，我们将于每一位经销商携手共进，共同成长',
    btn1: {
        text: '加入我们',
        url: ''
    },
    btn2: {
        text: '查询合作伙伴',
        url: ''
    }
}


/**
 * 为什么选择我们？
 * hugeText: 顶部标题
 * data: 数据列表
 *       imgUrl: 图标连接
 *       title : 图标下面的大文本
 *       des   : 最下面的描述
 *       detail: 鼠标悬浮详情文字
 *       btn: 
 *         text: 按钮文字
 *         url : 按钮跳转页面
 */
export let advantage = {
    hugeText: '为什么选择我们？',
    data: [
        {
            imgUrl: `/cooperativePartner/join1.png`,
            title: '丰富的市场资源',
            des: '具备丰富的市场资源，涵盖多地区服务系统，市场资源供给丰富',
            detail: 'JimCloud 致力于成为全球电信增值服务提供商，为用户在全球范围内提供优质、稳定的互联网服务、IDC服务、服务器租赁、裸金属云、DDOS清洗、SD-WAN以及专线等服务。JimCloud 团队都具有丰富的行业经验，分别来自于蓝汛、世纪互联、IBM等企业，公司发展迅速，目前已经在香港、日本、美国。菲律宾等地区部署节点。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/join2.png`,
            title: '领先的产品技术',
            des: '独特的云端能力，领跑全球云计算，拥有覆盖全行业的自研产品、联合生态产品，10亿级用户验证，稳定可靠',
            detail: 'JimCloud拥有领先的产品技术，为用户提供了一系列高效、稳定、安全的云计算产品。其中，云主机、云存储、云数据库等核心产品性能卓越，支持弹性扩容、快速备份恢复、多地域部署等功能，满足不同用户的需求。此外，JimCloud在人工智能、区块链等领域也开展了深入研究，推出了AI算力租赁、区块链服务等新兴产品，为用户实现数字化转型提供了有力支撑。JimCloud的产品技术目前已被广泛应用于金融、医疗、教育、政务等领域，得到了用户的认可和信赖。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/join3.png`,
            title: '强大的技术团队',
            des: '具备丰富的市场资源，涵盖多地区服务系统，市场资源供给丰富',
            detail: 'JimCloud的技术团队十分强大，由一批资深的技术专家组成。他们在各自领域拥有丰富的经验和深厚的技术功底，在软件开发、数据库设计、网络安全等方面都有着出色的表现。JimCloud的技术团队注重创新和研发，在云计算、人工智能、区块链等前沿技术方面进行了大量的研究和实践。同时，他们也非常重视用户需求，不断优化和改进产品，为用户提供更加稳定、高效、安全的服务。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/join4.png`,
            title: '快速获利',
            des: '使用我们的经销商模式，您可以管理对客户的定价、收款以及与客户的关系。',
            detail: '成为JimCloud的合作伙伴可以快速获利。首先，JimCloud拥有高品质且价格合理的产品线，您可以根据自身业务需求选购适合的云计算产品，降低运营成本。其次，作为JimCloud的合作伙伴，您可以享受丰厚的返利奖励政策和专属的技术支持，帮助您更好地促进销售、提高收益。最后，JimCloud致力于建立长期稳定的合作关系，不断探索新的商业模式和合作方式，与合作伙伴共同发展壮大。因此，成为JimCloud的合作伙伴是一个快速获利的机会，也是实现共赢的合作伙伴关系。',
            btn: {
                text: '加入我们',
                url: ''
            }
        }
    ]
}


/**
 * 合作流程
 * hugeText: 顶部标题
 * num: 圆圈里面的数字
 * des: 最下面的提示文字
 * percent: 填充的百分比
 */
export let flow = {
    hugeText: '合作流程',
    data: [
        {
            num: 1,
            des: '注册JimCloud账号',
            percent: 0
        },
        {
            num: 2,
            des: '完成企业实名认证',
            percent: 25
        },
        {
            num: 3,
            des: '签约线上合作协议',
            percent: 50
        },
        {
            num: 4,
            des: '分配商务经理',
            percent: 75
        },
        {
            num: 5,
            des: '成为JIMCLOUD合作伙伴',
            percent: 100
        }
    ]
}


/**
 * 合作优势
 * hugeText: 顶部标题
 * imgUrl: 圆圈里面的数字
 * title: 最下面的提示文字
 * des: '
 */
export let server = {
    hugeText: '合作优势',
    data: [
        {
            imgUrl: `/cooperativePartner/ys1.png`,
            title: '低成本投入',
            des: 'JimCloud拥有多元的产品线，您可以根据自身业务需求选购适合的云计算产品，并根据实际使用情况灵活调整规模和配置，减少不必要的投资。'
        },
        {
            imgUrl: `/cooperativePartner/ys2.png`,
            title: '丰厚利润',
            des: 'JimCloud的产品线丰富，价格合理，性能卓越，在市场上具有很强的竞争力，您可以在销售产品中获取较高的利润'
        },
        {
            imgUrl: `/cooperativePartner/ys3.png`,
            title: '自建品牌',
            des: '您可以在JimCloud的基础上自主开发和构建自己的品牌，并将其与JimCloud的云计算产品相结合，为客户提供更个性化、多元化的服务'
        },
        {
            imgUrl: `/cooperativePartner/ys4.png`,
            title: '服务支持',
            des: '成为JimCloud的合作伙伴可以获得全方位的服务支持。JimCloud为合作伙伴提供了专业的技术支持和运营管理服务'
        },
        {
            imgUrl: `/cooperativePartner/ys5.png`,
            title: '一键接入',
            des: 'JimCloud提供了完善的云计算服务平台，通过API接口等方式，实现与合作伙伴的快速对接。只需进行简单的配置和设置，即可轻松实现产品的部署和管理，减少了复杂的开发和维护成本'
        },
        {
            imgUrl: `/cooperativePartner/ys6.png`,
            title: '自建价格体系',
            des: '您可以根据自身业务需求和市场情况，制定自己的价格策略，实现灵活的定价和收益分配。同时，JimCloud也会根据市场需求和竞争情况不断调整和优化产品价格。'
        }
    ]
}

/**
 * 优秀合作伙伴
 * hugeText: 顶部标题
 * row1: 第一行图片
 * row2: 第二行图片
 */
export let partner = {
    hugeText: '优秀合作伙伴',
    data: {
        row1: [
            `/partner/1.png`,
            `/partner/2.png`,
            `/partner/3.png`,
            `/partner/4.png`,
            `/partner/5.png`,
            `/partner/6.png`
        ],
        row2: [
            `/partner/7.png`,
            `/partner/8.png`,
            `/partner/9.png`,
            `/partner/10.png`,
            `/partner/11.png`,
            `/partner/12.png`,
            `/partner/1.png`,
        ]
    }
}


/**
 * 加入我们
 * title: 标题
 * des: 描述,
 * imgUrl: 图片连接,
 * btn: 
 *      text: 按钮文字
 *      url: 跳转链接
 */
export let invite = {
    title: '加入我们',
    des: '您对我们感兴趣吗？百闻不如一见，JIMCLOUD诚邀您共同参与，我们很乐意为您提供帮助！来！马上行动吧！',
    imgUrl: `/cooperativePartner/invite.png`,
    btn: {
        text: '成为合作伙伴',
        url: ''
    }
}