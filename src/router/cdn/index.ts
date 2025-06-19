// 内容分发CDN
const Cdn = () => import('@/views/CDN/Index/index.vue')
// 全站加速
const WSA = () => import('@/views/CDN/WSA/index.vue')
// 动态加速
const DT = () => import('@/views/CDN/DT/index.vue')
// 海外CDN
const OverSideCDN = () => import('@/views/CDN/OverSideCDN/index.vue')
// 边缘计算地区
const EdgeCompute = () => import('@/views/CDN/EdgeCompute/index.vue')
// 边缘计算服务器
const EC = () => import('@/views/CDN/EC/index.vue')

export default [
    {
        path: '/cdn/wsa',
        name: 'WSA',
        component: WSA
    },
    {
        path: '/cdn/dt',
        name: 'DT',
        component: DT
    },
    {
        path: '/cdn/oversidecdn',
        name: 'OverSideCDN',
        component: OverSideCDN
    },
    {
        path: '/cdn/index',
        name: 'Cdn',
        component: Cdn
    },
    {
        path: '/cdn/edgecompute',
        name: 'EdgeCompute',
        component: EdgeCompute
    },
    {
        path: '/cdn/ec',
        name: 'EC',
        component: EC
    },

]