// 合作伙伴
const EP = () => import('@/views/CP/EP/index.vue')
// 渠道代理
const Agency = () => import('@/views/CP/Agency/index.vue')
// 推广联盟
const Promotion = () => import('@/views/CP/Promotion/index.vue')

export default [
    {
        path: '/cp/ep',
        name: 'EP',
        component: EP
      },
      {
        path: '/cp/agency',
        name: 'Agency',
        component: Agency
      },
      {
        path: '/cp/promotion',
        name: 'Promotion',
        component: Promotion
      }
]