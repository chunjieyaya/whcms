import request from './baseRequest'

// 用户注册
export const reqClientRegister = (firstname: string, lastname: string, email: string, phone: string, password: string,sales: string) => {
    return request({
        url: '/client/register',
        method: 'post',
        data: {
            firstname:firstname,
            lastname:lastname,
            email:email,
            phone:phone,
            password:password,
            sales: sales
        }
    })
}

// 用户登录
export const reqClientLogin = (email: string, password: string) => {
    return request({
        url: '/client/login',
        method: 'post',
        data: {
            email,
            password
        }
    })
}

// 用户退出登录
export const reqClientLogout = () => {
    return request({
        url: '/client/logout',
        method: 'post'
    })
}

// 获取账户详情
export const reqClientDetail = () => {
    return request({
        url: '/client/detail',
        method: 'post',
        data: {
            token: window.localStorage.getItem("token")
        }
    })
}

// 获取销售代表
export const reqClientSales = ()=>{
    return request({
        url: '/client/sales',
        method: 'post'
    })
}

// 检测token是否有效
export const reqClientToken = ()=>{
    return request({
        url: '/client/token',
        method: 'post',
        data: {
            token: window.localStorage.getItem("token")
        }
    })
}

// 获取账户代办事项 到期产品
export const reqClientTodo = ()=>{
    return request({
        url: '/client/todo',
        method: 'post',
        data: {
            token: window.localStorage.getItem("token")
        }
    })
}

// 重置密码
export const reqClientResetpw = (email: String)=>{
    return request({
        url: '/client/resetpw',
        method: 'post',
        data: {
            email: email
        }
    })
}

