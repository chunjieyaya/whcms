import { defineStore } from 'pinia'

import {
    reqOtherLocalapi
} from '@/api/other'

const useOtherStore = defineStore('useOtherStore', {
    state: () => {
        return {
        }
    },
    actions: {
        // 获取站内公告
        async OtherLocalapi(command: string) {
            const res: any = await reqOtherLocalapi(command)
            if (res.status == 'success') {
                return res.data
            } else {
                console.log(res)
            }
        }
    },
    persist: {
        enabled: true, // 开启数据缓存
    }

})

export default useOtherStore