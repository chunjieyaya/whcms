// 服务器租用
const ServerRental = () => import('@/views/Server/ServerRental/index.vue')
// 弹性云主机配置
const ServerConfig = () => import('@/views/Server/ServerConfig/index.vue')

export default [
    {
        path: '/server/serverrental',
        name: 'ServerRental',
        component: ServerRental
    },
    {
        path: '/server/serverconfig',
        name: 'ServerConfig',
        component: ServerConfig,
        meta: { isDAS: true }
    },
]