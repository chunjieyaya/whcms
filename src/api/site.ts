import request from './baseRequest'

// 用户注册
export const reqSiteAnnouncements = () => {
    return request({
        url: '/site/announcements',
        method: 'post',
    })
}

// 获取帮助中心文章
export const reqSiteKnowledgebase = () => {
    return request({
        url: '/site/knowledgebase',
        method: 'post',
    })
}