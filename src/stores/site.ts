import { defineStore } from 'pinia'

import {
    reqSiteAnnouncements,
    reqSiteKnowledgebase
} from '@/api/site'

const useSiteStore = defineStore('useSiteStore', {
    state: () => {
        return {
        }
    },
    actions: {
        // 获取站内公告
        async SiteAnnouncements() {
            const res: any = await reqSiteAnnouncements()
            if (res.status == 'success') {
                return res.data
            } else {
                console.log(res)
            }
        },
        // 获取帮助中心文章reqSiteKnowledgebase
        async SiteKnowledgebase() {
            const res: any = await reqSiteKnowledgebase()
            if (res.status == 'success') {
                return res.data
            } else {
                console.log(res)
            }
        },
    },
    persist: {
        enabled: true, // 开启数据缓存
    }

})

export default useSiteStore