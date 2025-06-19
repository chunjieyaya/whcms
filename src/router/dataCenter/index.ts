// 数据中心
const DataCenter = () => import('@/views/DataCenter/index.vue')

export default [
    {
        path: '/datacenter/:id',
        name: 'DataCenter',
        component: DataCenter
    },
]