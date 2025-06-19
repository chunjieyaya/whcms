// 域名
const DomainName = () => import('@/views/DNS/DomainName/index.vue')
// SSL
const SSL = () => import('@/views/DNS/SSL/index.vue')

export default [
    {
        path: '/dns/domainname',
        name: 'DomainName',
        component: DomainName
    },
    {
        path: '/dns/ssl',
        name: 'SSL',
        component: SSL
    }
]