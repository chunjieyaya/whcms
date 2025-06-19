/**
 * 头部
 */
export let header = {
    imgUrl: `/complain/header.gif`, // 背景图片
    hugeText: 'JIMCLOUD举报平台',
    des: '与您一起打造清朗的互联网空间',
    btn: {
        text: '我的举报',
        path: '' // 跳转链接
    }
}


export let complain = {
    hugeText: '举报投诉',
    data: [
        {
            icon: `/complain/ts1.png`,
            title: 'IP滥用投诉',
            des: '包括涉黄、涉赌、涉政、涉恐、涉毒等',
            btn: {
                text: '我要举报',
                path: '/complain/inForm'
            }
        },
        {
            icon: `/complain/ts2.png`,
            title: '非法网站接入投诉',
            des: '包括涉黄、涉赌、涉政、涉恐、涉毒等',
            btn: {
                text: '我要举报',
                path: '/complain/inForm'
            }
        },
        {
            icon: `/complain/ts3.png`,
            title: '售前售后投诉',
            des: '包括涉黄、涉赌、涉政、涉恐、涉毒等',
            btn: {
                text: '我要举报',
                path: '/complain/inForm'
            }
        }
    ]
}
