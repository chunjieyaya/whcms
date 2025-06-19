import request from './baseRequest'

// 其他参数
export const reqOtherLocalapi = (command: string) => {
    return request({
        url: '/other/localapi',
        method: 'post',
        data: {
            command
        }
    })
}