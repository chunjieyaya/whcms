import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import mitt from 'mitt'

const Mit = mitt() //全局事件总线
const app = createApp(App)
//vue3挂载全局API
app.config.globalProperties.$Bus = Mit


// element-ui 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 全局配置element-ui图标
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons]);
});


//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

// 动画
import 'animate.css';
import 'animate.css/animate.compat.css'


// less全局配置
import '@/assets/global.less'


// 引入pinia
import store from '@/stores/index'


/**
 * 全局组件
 */
// 模块卡片
import ModuleCard from '@/components/ModuleCard/index.vue'
app.component('ModuleCard', ModuleCard)
// 头部大图
import HeaderPad from '@/components/HeaderPad/index.vue'
app.component('HeaderPad', HeaderPad)
// 合作伙伴
import Partner from '@/components/Partner/index.vue'
app.component('Partner', Partner)
// 底部长图
import BtmLongImg from '@/components/BtmLongImg/index.vue'
app.component('BtmLongImg', BtmLongImg)
// 谷歌地图
import GooleMap from '@/components/GooleMap/index.vue'
app.component('GooleMap', GooleMap)
// 地球 
import Earth from '@/components/Earth/index.vue'
app.component('Earth', Earth)
// 网格热力地图
import GirdhotMap from '@/components/GooleMap/index.vue'
app.component('GirdhotMap', GirdhotMap)
// 合作流程
import CooperationProcess from '@/components/CooperationProcess/index.vue'
app.component('CooperationProcess', CooperationProcess)
// 蜂窝合作伙伴
import HoneycombPartners from '@/components/HoneycombPartners/index.vue'
app.component('HoneycombPartners', HoneycombPartners)
// 网络产品布点合作伙伴
import NPDistribution from '@/components/NPDistribution/index.vue'
app.component('NPDistribution', NPDistribution)
// grid布局
import GridLayout from '@/components/GridLayout/index.vue'
app.component('GridLayout', GridLayout)
// 水平菜单
import HorizontalMenu from '@/components/HorizontalMenu/index.vue'
app.component('HorizontalMenu', HorizontalMenu)
// 帮助文档
import HelpDocs from '@/components/HelpDocs/index.vue'
app.component('HelpDocs', HelpDocs)
// 应用场景
import ApplicationScenario from '@/components/ApplicationScenario/index.vue'
app.component('ApplicationScenario', ApplicationScenario)
// 文字懒加载
import LazyText from '@/components/LazyText/index.vue'
app.component('LazyText', LazyText)
// 流程
import Process from '@/components/Process/index.vue'
app.component('Process', Process)
// 固定导航
import FixedNav from '@/components/FixedNav/index.vue'
app.component('FixedNav', FixedNav)
// 相关产品
import RelatedProducts from '@/components/RelatedProducts/index.vue'
app.component('RelatedProducts', RelatedProducts)
// 产品优势
import ProductAdvantage from '@/components/ProductAdvantage/index.vue'
app.component('ProductAdvantage', ProductAdvantage)





app.use(store)
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})

app.mount('#app')

export default {
    store
}
