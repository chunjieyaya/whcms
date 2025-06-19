import { defineStore } from 'pinia'

import {
    reqClientLogin,
    reqClientRegister,
    reqClientLogout,
    reqClientDetail,
    reqClientSales,
    reqClientToken,
    reqClientTodo,
    reqClientResetpw
} from '@/api/user'

const useUserStore = defineStore('useUserStore', {
    state: () => {
        return {
            userInfo: {} as any,
            isLogin: false
        }
    },
    actions: {
        // 用户注册
        async ClientRegister(firstname: string, lastname: string, email: string, phone: string, password: string,sales:string) {
            const res: any = await reqClientRegister(firstname, lastname, email, phone, password,sales)
            if (res.status == 'success') {
                return res.msg
            } else {
                return Promise.reject(new Error(res.msg))
            }
        },

        // 用户登录
        async ClientLogin(email: string, phone: string) {
            const res: any = await reqClientLogin(email, phone)
            debugger
            if (res.status == 'success') {
                window.localStorage.setItem("token", res.data.token);
                this.isLogin = true
                return res.msg
            } else {
                return Promise.reject(new Error(res.msg))
            }
        },

        // 用户退出登录
        async ClientLogout() {
            const res = await reqClientLogout()
            window.localStorage.removeItem("token")
            this.isLogin = false
            return res
        },

        // 获取用户详情
        async ClientDetail() {
            const res: any = await reqClientDetail()
            if (res.status == 'success') {
                this.userInfo = res.data
            } else {
                console.log(res)
            }
        },

        // 获取销售代表
        async ClientSales() {
            const res: any = await reqClientSales()
            if (res.status == 'success') {
                return res.data
            } else {
                console.log(res)
            }
        },

        // 检测token是否有效
        async ClientToken() {
            const res: any = await reqClientToken()
            if (res.status == 'success') {
                this.isLogin = true
            } else {
                this.isLogin = false
            }
        },

        // 获取用户代办事项
        async ClientTodo() {
            const res: any = await reqClientTodo()
            if (res.status == 'success') {
                return res.data
            } else {
                console.log(res)
            }
        },

        // 重置密码
        async ClientResetpw(email: string) {
            const res: any = await reqClientResetpw(email)
            if (res.status == 'success') {
                window.localStorage.setItem("token", res.data.token);
                this.isLogin = true
                return res.msg
            } else {
                return Promise.reject(new Error(res.msg))
            }
        },

    },
    persist: {
        enabled: true, // 开启数据缓存
    }

})

export default useUserStore