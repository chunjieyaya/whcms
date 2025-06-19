/**
 * 头部
 */
export let header = {
    bgImg: `/callus/header.jpg`, // 背景图片
    hugeText: '联系我们',
    btn: {
        text: '人工客服',
        path: '' // 跳转链接
    }
}


/**
 * 售前咨询
 */
export let advisory = {
    hugeText: '售前咨询',
    data: [
        {
            imgUrl: `/callus/Advisory1.png`,
            title: '售前在线',
            des: '专属客户经理在线解答，提供1v1购买咨询，解决方案，机型推荐等服务，面向各种场景提供全流程调优服务，为企业提供帮助。工作时间：9:00-24:00.',
            btn: {
                text: '立即咨询',
                path: '' // 跳转链接
            }
        },
        {
            imgUrl: `/callus/Advisory2.png`,
            title: '咨询工单',
            des: '如果您遇见包括产品使用问题、技术支持、售后服务等方面问题，公司将会安排专业人员对问题进行跟踪和处理，为企业提供帮助。工作时间：0:00-24:00.',
            btn: {
                text: '立即提交',
                path: '' // 跳转链接
            }
        }


    ]
}


/**
 * 售后服务
 */
export let server = {
    hugeText: '售后服务',
    data: [
        {
            iconUrl: `/callus/s_consult.png`, //图标连接,
            title: '在线售后咨询',
            des: '秒级解答，为您匹配合适的人工服务，提供最佳解决方案人工服务时间：7×12小时（9:00-晚21:00）*24小时获取专业工程师帮助，快速解决您的问题',
            tags: ['1v1人工服务', '快速响应']
        },
        {
            iconUrl: `/callus/s_submit.png`, //图标连接,
            title: '售后工单提交',
            des: '工单支持：7x24小时工单支持，提供产品使用咨询及基础技术支援。工单响应时间：最快秒级响应，最长等待不超过10分钟',
            tags: ['快速响应', '7x24h技术支持']
        },
        {
            iconUrl: `/callus/s_phone.png`, //图标连接,
            title: '售后电话咨询',
            des: '公司设有24小时客服热线，客户可以通过电话拨打客服热线+65-666-678-0016，获得快速的售后服务和支持',
            tags: ['7x24h值班人员', '秒接入']
        },
        {
            iconUrl: `/callus/s_problem.png`, //图标连接,
            title: '常见问题文档',
            des: '7*24小时获取专业工程师帮助，快速解决您的问题',
            tags: ['自助服务','全方位解决方案']
        },
        {
            iconUrl: `/callus/s_email.png`, //图标连接,
            title: '售后电邮处理',
            des: '客户可以通过电子邮件向公司发送售后服务请求，并将问题详细描述，客服人员将会在30分钟之后响应并回复',
            tags: ['30分钟响应', '快速分配部门']
        },
        {
            iconUrl: `/callus/s_complaint.png`, //图标连接,
            title: '投诉与建议',
            des: '聆听您对JimCloud产品与服务的建议和投诉',
            tags: ['百分百跟进处理', '3天回复处理方案' ]
        }
    ]
}

/**
 * 市场合作
 */
export let cp = {
    hugeText: '更多服务',
    data: [
        {
            imgUrl: `/callus/schz.png`,
            title: '市场合作',
            des: '提供代理分销、推广返佣、产品赞助等相关服务支持，携手合作伙伴实现合作共赢',
        },
        {
            imgUrl: `/callus/tsjy.png`,
            title: '投诉建议',
            des: 'JimCloud运营部门将仔细参阅您的意见或建议，必要时将通过预留邮箱与您保持联络',
        },
        {
            imgUrl: `/callus/jbwg.png`,
            title: '举报违规',
            des: '如有JimCloud客户存在任何违法、违规、侵权行为，欢迎随时举报，联络我们快速处理',
        }
    ]
}


/**
 * 公司地址
 */
export let address = {
    title: '联系我们',
    imgUrl: `/callus/address.png`,
    rightImg: `/callus/right.png`,
    list: [
        {
            icon: `/dataCenter/location.svg`,
            text: '5001 BEACH ROAD #07-37 GOLDEN MILE COMPLEX SINGAPORE 19958'
        },
        {
            icon: `/dataCenter/st-phone.svg`,
            text: '+65-666-678-0016'
        },
        {
            icon: `/dataCenter/st-phone.svg`,
            text: 'support@jimcloud.net'
        }
    ]
}
