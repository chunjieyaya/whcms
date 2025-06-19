<template>
    <div class="partner">
        <Farme :showDetail="false" :showRight="currentPage == 1" :left-width="300">
            <template #nav>
                <div class="detail" style="height: 100%;">
                    <el-menu default-active="999">
                        <el-menu-item @click="currentPage = 0" index="9999">
                            <el-icon>
                                <setting />
                            </el-icon>
                            <span>查看全部云产品 ></span>
                        </el-menu-item>
                        <el-menu-item @click="currentPage = 0" index="999">
                            <span>推荐</span>
                        </el-menu-item>
                        <el-menu-item v-for="(menu, index) in menus" @click="switchMenu(menu)" :index="`${index}`">
                            <span>{{ menu.name }}</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </template>

            <template #content>
                <div class="search"><el-input v-show="!$route.meta.isDAS" placeholder="搜索" :suffix-icon="Search" />
                </div>

                <div class="nav-visable-right" v-if="currentPage == 0">
                    <div class="hot">
                        <div class="title">热门产品</div>
                        <div class="hot-content">
                            <div class="hot-content-left">
                                <div class="hot-content-main" @click="gotoView('/cloudcompute/ecs')">
                                    <div class="number">01</div>
                                    <div class="text">
                                        <div class="caption">弹性云主机</div>
                                        <div class="des">安全稳定，高弹性的计算服务</div>
                                    </div>
                                </div>
                                <div class="hot-content-main">
                                    <div class="number">02</div>
                                    <div class="text">
                                        <div class="caption" @click="gotoView('/server/serverrental')">云服务器租赁</div>
                                        <div class="des">安全稳定，高弹性的计算服务</div>
                                    </div>
                                </div>
                                <div class="hot-content-main" @click="gotoView('/cdn/index')">
                                    <div class="number">03</div>
                                    <div class="text">
                                        <div class="caption">内容分发CDN</div>
                                        <div class="des">安全稳定，高弹性的计算服务</div>
                                    </div>
                                </div>
                            </div>
                            <div class="hot-content-right">
                                <GridLayout :col="2" :gutterCol="50" :gutterRow="40">
                                    <div class="hot-content-item" @click="gotoView('/dns/domainname')">04 域名注册</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">08 站群服务器</div>
                                    <div class="hot-content-item" @click="gotoView('/stockpile/harddisk')">05 云硬盘</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">09 智能DNS</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">06 DDoS防护</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">10 AI WAF</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">07 GPU服务器</div>
                                    <div class="hot-content-item" @click="gotoView('/safety/ddos')">11 边缘计算</div>
                                </GridLayout>
                            </div>
                            <div class="hot-content-img">
                                <img :src="`/ecs/feature1.jpg`" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="new">

                        <div class="new-cp">
                            <div class="title">最新产品</div>
                            <div class="new-cp-content">
                                <div>AI WAF</div>
                                <div>AI WAF</div>
                                <div>AI WAF</div>
                                <div>智能DNS</div>
                                <div>智能DNS</div>
                                <div>智能DNS</div>
                                <div>热迁移</div>
                                <div>热迁移</div>
                                <div>热迁移</div>
                                <div>边缘计算</div>
                                <div>边缘计算</div>
                                <div>边缘计算</div>
                            </div>
                        </div>

                        <div class="new-dt">
                            <div class="title">最新动态</div>
                            <div class="new-dt-content">
                                <div><el-tag type="danger" effect="plain">新功能</el-tag>短信-申请短信签名上传的资料自动添加水印</div>
                                <div><el-tag type="danger" effect="plain">新功能</el-tag>短信-申请短信签名上传的资料自动添加水印</div>
                                <div><el-tag type="danger" effect="plain">新功能</el-tag>短信-申请短信签名上传的资料自动添加水印</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="links" v-if="currentPage == 1">
                    <div class="col" v-for="item in currentMenu.children">
                        <div class="categroy">{{ item.name }}</div>
                        <div class="list">
                            <div v-for="li in item.children" class="item" @click="gotoView(li.path)">
                                <div>{{ li.name }}</div>
                                <div style="font-size: 1px; color: gray;margin-top: 5px;">{{ li.name }}{{ li.name }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Farme>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import Farme from './Farme.vue'

const emit = defineEmits(['closeTopNav'])

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
    emit('closeTopNav')
}

let currentPage = ref(0)

// 产品菜单
const menus = reactive([
    {
        name: '云计算',
        children: [
            {
                name: '弹性云',
                children: [
                    {
                        name: '香港云服务器',
                        path: '/cloudcompute/ecs'
                    },
                    {
                        name: '美国云服务器',
                        path: '/cloudcompute/ecs'
                    },
                    {
                        name: '日本云服务器',
                        path: '/cloudcompute/ecs'
                    },
                    {
                        name: '新加坡云服务器',
                        path: '/cloudcompute/ecs'
                    }
                ]
            },
            {
                name: '云网络',
                children: [
                    {
                        name: 'VPC网络',
                        path: '/cloudcompute/vpc'
                    },
                    {
                        name: '负载均衡',
                        path: '/cloudcompute/clb'
                    },
                    {
                        name: '弹性IP',
                        path: '/cloudcompute/elasticIP'
                    },
                    {
                        name: 'NAT网关',
                        path: '/cloudcompute/nat'
                    }
                ]
            }
        ]
    },
    {
        name: '服务器租赁',
        children: [
            {
                name: '香港地区',
                children: [
                    {
                        name: '香港独立服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '香港站群服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '香港大宽带服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '香港GPU服务器服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '美国地区',
                children: [
                    {
                        name: '美国独立服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '美国站群服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '美国大宽带服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '新加坡地区',
                children: [
                    {
                        name: '新加坡独立服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '菲律宾地区',
                children: [
                    {
                        name: '菲律宾独立服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '韩国地区',
                children: [
                    {
                        name: '韩国独立服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '韩国大宽带服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '台湾地区',
                children: [
                    {
                        name: '台湾独立服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '柬埔寨地区',
                children: [
                    {
                        name: '柬埔寨独立服务器',
                        path: '/server/serverrental'
                    }
                ]
            },
            {
                name: '日本地区',
                children: [
                    {
                        name: '日本独立服务器',
                        path: '/server/serverrental'
                    },
                    {
                        name: '日本大宽带服务器',
                        path: '/server/serverrental'
                    }
                ]
            }
        ]
    },
    {
        name: '内容分发CDN',
        children: [
            {
                name: 'CDN与加速',
                children: [
                    {
                        name: '全站加速',
                        path: '/cdn/wsa'
                    },
                    {
                        name: '海外CDN',
                        path: '/cdn/oversidecdn'
                    },
                    {
                        name: '动态加速',
                        path: '/cdn/dt'
                    },
                    {
                        name: '内容分发CDN',
                        path: '/cdn/index'
                    }
                ]
            },
            {
                name: '边缘计算',
                children: [
                    {
                        name: '边缘计算地区',
                        path: '/cdn/edgecompute'
                    },
                    {
                        name: '边缘计算服务器',
                        path: '/cdn/ec'
                    }
                ]
            }

        ]
    },
    {
        name: '域名与SSL',
        children: [
            {
                name: '域名',
                children: [
                    {
                        name: '域名注册',
                        path: '/dns/domainname'
                    },
                    {
                        name: '域名whos查询',
                        path: '/dns/domainname'
                    }
                ]
            },
            {
                name: 'SSL',
                children: [
                    {
                        name: '企业级DV SSL',
                        path: '/dns/ssl'
                    },
                    {
                        name: '企业级EV SSL',
                        path: '/dns/ssl'
                    }
                ]
            }

        ]
    },
    {
        name: '储存',
        children: [
            {
                name: '云硬盘',
                children: [
                    {
                        name: '云硬盘',
                        path: '/stockpile/harddisk'
                    }
                ]
            },
            {
                name: '网络挂载',
                children: [
                    {
                        name: '网络挂载',
                        path: '/stockpile/nkmount'
                    }
                ]
            },
            {
                name: '快照备份',
                children: [
                    {
                        name: '快照备份',
                        path: '/stockpile/snapshoot'
                    }
                ]
            }
        ]
    },
    {
        name: '安全',
        children: [
            {
                name: '应用安全',
                children: [
                    {
                        name: '防盗链',
                        path: '/safety/atc'
                    },
                    {
                        name: 'DDoS防护',
                        path: '/safety/ddos'
                    },
                    {
                        name: 'AI WAF',
                        path: '/safety/waf'
                    }
                ]
            },
            {
                name: '网络安全',
                children: [
                    {
                        name: 'CC防火墙',
                        path: '/safety/ccfirewall'
                    },
                    {
                        name: '智能DNS',
                        path: '/safety/dns'
                    },
                    {
                        name: '主机监控',
                        path: '/safety/hm'
                    }
                ]
            }

        ]
    },
])
// 切换菜单
let currentMenu = ref(menus[0] as any)
let switchMenu = (menu: object) => {
    currentMenu.value = menu
    currentPage.value = 1
}

</script>

<style lang="less" scoped>
::v-deep .el-menu {
    border: none !important;
    height: 100%;
    padding: 0 !important;
}

.partner {
    height: 100%;

    .links {
        padding: 0 40px;
        -moz-column-count: 3;
        /* Firefox */
        -webkit-column-count: 3;
        /* Safari 和 Chrome */
        column-count: 3;
        column-gap: 30px;

        .col {
            margin-bottom: 50px;
            break-inside: avoid;

            .categroy {
                font-size: @h5-text-size;
                color: @primary-color;
                margin-bottom: 15px;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }

            .list {
                .item {
                    margin: 20px 0;
                    font-size: @h6-text-size;
                    cursor: pointer;

                    &:hover {
                        color: @primary-color;
                    }
                }
            }
        }
    }
}

// 搜索
.search {
    padding: 0 40px;
    margin-bottom: 20px;
    .el-input {
        width: 330px;
    }
}

.nav-visable-right {
    padding: 0 40px;

    .title {
        color: @primary-color;
        font-size: @h6-text-size;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(187, 187, 187);
    }

    // 热门产品
    .hot {
        .hot-content {
            height: 250px;
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;

            .hot-content-left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .hot-content-main {
                    cursor: pointer;
                    padding: 20px 10px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    line-height: 20px;
                    border-radius: 5px;
                    background: linear-gradient(180deg, rgba(245, 247, 250, 1) 0%, rgba(255, 255, 255, 1) 100%);
                    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.06);
                    border: 1px solid rgba(255, 255, 255, 1);

                    .number {
                        color: @primary-color;
                        font-size: @h5-text-size;
                        margin-right: 20px;
                    }

                    .caption {
                        font-size: @h5-text-size;
                        color: @primary-color;
                        margin-bottom: 5px;
                    }

                    .des {
                        font-size: @h6-text-size;
                    }
                }
            }

            .hot-content-right {
                padding: 20px 40px;

                .hot-content-item {
                    cursor: pointer;
                    font-size: @h6-text-size;
                }
            }

            .hot-content-img {
                flex: 1;
                height: 100%;
                background-color: red;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }

    // 最新
    .new {
        display: flex;
        justify-content: space-between;

        .new-cp {
            flex: 1;
            margin-right: 10px;

            .new-cp-content {
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(3, auto);
                grid-row-gap: 10px;
                font-size: @h6-text-size;
            }
        }

        .new-dt {

            .new-dt-content {
                margin-top: 20px;

                div {
                    margin: 20px 0;

                    .el-tag {
                        margin-right: 10px;
                        font-size: @h6-text-size;
                    }
                }
            }
        }
    }
}
</style>
