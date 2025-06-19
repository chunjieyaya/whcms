// 用户中心框架
const User = () => import('@/views/User/index.vue')

// 用户中心
const UserCenter = () => import('@/views/User/UserCenter/index.vue')

// 产品服务 我的服务
const myServe = ()=>import('@/views/User/ProductServer/myServer.vue')

// 财务管理 账单管理
const BillMange = ()=>import('@/views/User/FinanManage/billMange.vue')
// 财务管理 账户充值
const Charges = ()=>import('@/views/User/FinanManage/charges.vue')
// 财务管理 费用明细
const CostsDetail = ()=>import('@/views/User/FinanManage/costsDetail.vue')


// 技术支持 我的工单
const SubmitTicket = ()=>import('@/views/User/TechnicalSupport/submitTicket.vue')

export default [
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [
            {
                path: 'usercenter',
                name: 'UserCenter',
                component: UserCenter
            },
            {
                path: 'myServe/:id',
                name: 'myServe',
                component: myServe
            },
            {
                path: 'billMange',
                name: 'BillMange',
                component: BillMange
            },
            {
                path: 'charges',
                name: 'Charges',
                component: Charges
            },
            {
                path: 'costsDetail',
                name: 'CostsDetail',
                component: CostsDetail
            },
            {
                path: 'submitTicket',
                name: 'SubmitTicket',
                component: SubmitTicket
            },
            
        ],
        meta: {
            isUserCenter: true
        }
    }
]