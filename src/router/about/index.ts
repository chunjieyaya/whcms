// 公司介绍
const Company = () => import('@/views/About/Company/index.vue')
// 网络布点
const NwDistribution = () => import('@/views/About/NwDistribution/index.vue')
// 加入我们
const Joinus = () => import('@/views/About/Joinus/index.vue')
// 投诉举报
const Complain = () => import('@/views/About/Complain/index.vue')
// 投诉举报表单
const InForm = () => import('@/views/About/Complain/InForm.vue')
// 服务公告
const Announcement = () => import('@/views/About/Announcement/index.vue')
// 联系我们
const Callus = () => import('@/views/About/Callus/index.vue')

export default [
    {
        path: '/about/company',
        name: 'Company',
        component: Company
    },
    {
        path: '/about/nwdistribution',
        name: 'NwDistribution',
        component: NwDistribution
    },
    {
        path: '/about/joinus',
        name: 'Joinus',
        component: Joinus
    }, {
        path: '/about/complain',
        name: 'Complain',
        component: Complain
    },
    {
        path: '/about/complain/inForm',
        name: 'InForm',
        component: InForm
    },
    {
        path: '/about/announcement',
        name: 'Announcement',
        component: Announcement
    },
    {
        path: '/about/callus',
        name: 'Callus',
        component: Callus
    }
]