// 云硬盘
const HardDisk = () => import('@/views/Stockpile/HardDisk/index.vue')
// 网络挂载
const NkMount = () => import('@/views/Stockpile/NkMount/index.vue')
// 快照备份
const Snapshoot = () => import('@/views/Stockpile/Snapshoot/index.vue')

export default [
    {
        path: '/stockpile/harddisk',
        name: 'HardDisk',
        component: HardDisk
    },
    {
        path: '/stockpile/nkmount',
        name: 'NkMount',
        component: NkMount
    },
    {
        path: '/stockpile/snapshoot',
        name: 'Snapshoot',
        component: Snapshoot
    }
]