import { createRouter, createWebHistory } from 'vue-router'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

import store from '@/stores/index'
import useUserStore from '@/stores/user'


// 关于我们
import about from './about'
// 数据中心
import dataCenter from './dataCenter'
// 合作伙伴
import cp from './cp'
// 云计算
import cloudCompute from './cloudCompute'
// 服务器
import server from './server'
// CDN
import cdn from './cdn'
// DNS
import dns from './dns'
// 储存
import stockpile from './stockpile'
// 安全
import safety from './safety'
// 用户中心
import user from './user'


// 首页
const Home = () => import('@/views/Home/index.vue')
// 登录
const Login = () => import('@/views/Login/index.vue')
// 注册
const SignIn = () => import('@/views/SignIn/index.vue')
// 订单页面
const Order = () => import('@/views/Order/index.vue')
// 支付
const Pay = () => import('@/views/Pay/index.vue')
// 最新活动
const News = () => import('@/views/News/index.vue')



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 关于我们
    ...about,
    // 数据中心
    ...dataCenter,
    // 合作伙伴
    ...cp,
    // 云计算
    ...cloudCompute,
    // 服务器
    ...server,
    // CDN
    ...cdn,
    // DNS
    ...dns,
    // 储存
    ...stockpile,
    // 安全
    ...safety,
    // 用户中心
    ...user,

    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { isDAS: true }
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      meta: { isDAS: true }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: { isDAS: true }
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay,
      meta: { isDAS: true }
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }

  ]
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore(store)




  // 需要用户登录的才能看的页面
  let identifications = ['/user/usercenter'] as any

  if (identifications.includes(to.path)) {
    await userStore.ClientToken()
    if (!userStore.isLogin) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }

  // 路由跳转回到顶部
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  document.documentElement.scrollTop = 0
  window.pageYOffset = 0


  //开始加载-进度条开始
  nprogress.start();

})


router.afterEach(() => {
  // 结束加载-进度条结束
  nprogress.done();
});

export default router
