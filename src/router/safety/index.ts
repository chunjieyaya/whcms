// DDoS
const DDOS = () => import('@/views/Safety/DDOS/index.vue')
// 防盗链
const ATC = () => import('@/views/Safety/ATC/index.vue')
// AI WAF
const WAF = () => import('@/views/Safety/WAF/index.vue')
// 智能DNS
const DNS = () => import('@/views/Safety/DNS/index.vue')
// cc防火墙
const CCFirewall = () => import('@/views/Safety/CCFirewall/index.vue')
// 主机监控
const HM = () => import('@/views/Safety/HM/index.vue')

export default [
    {
        path: '/safety/ddos',
        name: 'DDOS',
        component: DDOS
    },
    {
        path: '/safety/atc',
        name: 'ATC',
        component: ATC
    },
    {
        path: '/safety/waf',
        name: 'WAF',
        component: WAF
    },
    {
        path: '/safety/dns',
        name: 'DNS',
        component: DNS
    },
    {
        path: '/safety/ccfirewall',
        name: 'CCFirewall',
        component: CCFirewall
    },
    {
        path: '/safety/hm',
        name: 'HM',
        component: HM
    },
]