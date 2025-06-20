<template>
    <!-- 推荐 -->
    <ModuleCard headline-text="安全、可信、持续创新的产品与服务" des="基于30多年的技术沉淀，保护您在云上的应用系统和数据安全">
        <!-- 产品分类 -->
        <div class="category">
            <!-- 类别项 -->
            <div class="category-item" v-for="(navItem, index) in recommendNav" @click="switchRecommendNav(index)"
                :class="{ 'item-avtive': index == currentRecommendNavIndex }">
                <div class="header">
                    <div class="category-item-icon">
                        <img :src="navItem.icon" alt="">
                    </div>
                    <div class="category-item-text">{{ navItem.name }}</div>
                </div>
                <div class="underline" :class="{ 'underline-avtive': index == currentRecommendNavIndex }"></div>
            </div>
        </div>

        <div class="rm-box">
            <div class="bg"></div>
            <div class="recommend-main">
                <div class="hot">
                    <div class="hot-item" v-for="item in recommendNav[currentRecommendNavIndex].content.filter(item => item.isHot)" :key="item.title">
                        <div class="hot-item-title text-overflow">{{ item.title }}</div>
                        <div class="hot-item-des text-overflow">{{ item.description }}</div>
                        <div class="hot-item-btn text-overflow">
                            <el-button type="primary">查看详情</el-button>
                            <el-button>立即购买</el-button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-item" v-for="item in recommendNav[currentRecommendNavIndex].content.filter(item => !item.isHot)" :key="item.title">
                        <div class="list-item-title text-overflow">{{ item.title }}</div>
                        <div class="list-item-des text-overflow">{{ item.description }}</div>
                        <div class="list-item-tag text-overflow">
                            <el-tag size="small" type="info" v-for="tag in item.tags" :key="tag">{{ tag }}</el-tag>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </ModuleCard>
</template>
<script lang="ts" setup>


interface RecommendItem {
    title: string
    description: string
    tags?: string[]
    isHot?: boolean
}

interface NavItem {
    name: string
    icon: string
    content: RecommendItem[]
}

let recommendNav = reactive<NavItem[]>([
    {
        name: '精选推荐',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '弹性云主机', description: '随时自动获取、弹性伸缩的云服务器资源', tags: ['稳定可靠', '安全保障', '弹性伸缩'], isHot: true },
            { title: '物理服务器', description: '高性能独立服务器，物理硬件独享', tags: ['高可用', '安全可靠', '按需扩展'], isHot: true },
            { title: '集群云主机', description: '集群云主机，高性价比，高性能', tags: ['安全可靠', '成本优化'] },
            { title: 'CDN加速', description: '快速、稳定的内容分发服务', tags: ['高速稳定', '全球分发'] },
            { title: '域名服务', description: '一站式域名管理与解析服务', tags: ['便捷管理', '快速解析'] },
            { title: 'DDOSIP防护', description: '海量级别防护提供，确保业务高可用性', tags: ['1T防护接入', '快速恢复业务'] },
            { title: '云硬盘', description: '提供高性能的云硬盘，极速扩展', tags: ['便捷管理', '快速挂挂载'] },
            { title: '弹性IP', description: '庞大的海外IP资源，快速部署', tags: ['海量IP', '极速更换'] }
        ]
    },
    {
        
        name: '云服务器',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '香港云主机', description: '企业级云服务器，性能强劲', tags: ['高性能', '稳定可靠'], isHot: true },
            { title: '美国云主机', description: '适用于各类企业应用场景', tags: ['性价比高', '灵活配置'], isHot: true },
            { title: '韩国云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '新加坡云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '日本云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '台湾云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '菲律宾云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '泰国云主机', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
        ]
    },
    {
        name: '物理服务器',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '物理服务器', description: '独享硬件资源，性能强劲', tags: ['独享资源', '高性能'], isHot: true },
            { title: '站群服务器', description: '多IP站群服务器，满足特殊需求', tags: ['定制灵活', '批量IP'], isHot: true },
            { title: '香港物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '美国物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '日本物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '韩国物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '菲律物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
            { title: '新加坡物理服务器', description: '适合个人和小型网站使用', tags: ['经济实惠', '简单易用'] },
        ]
    },
    {
        name: '内容分发CDN',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '内容分发CDN', description: '全球节点分发，快速响应', tags: ['全球覆盖', '高速响应'], isHot: true },
            { title: '海外CDN', description: '全球节点分发，快速响应', tags: ['全球覆盖', '高速响应'], isHot: true },
            { title: '动态加速', description: '专业动态加速服务', tags: ['低延迟', '高带宽']},
            { title: '视频加速', description: '专业视频加速服务', tags: ['低延迟', '高带宽']},
            { title: '游戏加速', description: '专业游戏加速服务', tags: ['低延迟', '高带宽']},
            { title: '边缘计算', description: '专业边缘计算快，全球可用率99%', tags: ['低延迟', '高带宽']},
            { title: '高防CDN', description: '定制级别防护CDN', tags: ['低延迟', '高带宽']},
            { title: '优质回国CDN', description: '优化大陆带宽高速回国', tags: ['低延迟', '高带宽']},
        ]
    },
   /*{
        name: '云存储',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '对象存储', description: '海量数据存储服务', tags: ['大容量', '高可靠'], isHot: true },
            { title: '文件存储', description: '高性能文件存储服务', tags: ['高性能', '易扩展'], isHot: true }
        ]
    },
    {
        name: '域名',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '域名注册', description: '一站式域名注册服务', tags: ['简单便捷', '价格优惠'], isHot: true },
            { title: '域名解析', description: '智能DNS解析服务', tags: ['快速解析', '稳定可靠'], isHot: true }
        ]
    },
    {
        name: 'SSL证书',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: 'DV证书', description: '基础型SSL证书服务', tags: ['快速颁发', '性价比高'], isHot: true },
            { title: 'OV/EV证书', description: '企业级SSL证书服务', tags: ['安全可靠', '品牌信任'], isHot: true }
        ]
    },*/
    {
        name: '网络',
        icon: '/home/recommendIcon1.png',
        content: [
            { title: '负载均衡', description: '智能流量分发服务', tags: ['高可用', '自动调度'], isHot: true },
            { title: 'VPC专有网络', description: '安全隔离的私有网络', tags: ['安全可控', '灵活配置'], isHot: true },
            { title: '弹性IP', description: '灵活的IP资源，快速部署', tags: ['海量IP', '极速更换'] },
            { title: 'DDOSIP防护', description: '海量级别防护提供，确保业务高可用性', tags: ['1T防护接入', '快速恢复业务'] },
            { title: 'AI WAF', description: '通过AIWAF能拦截市面99%攻击类型', tags: ['高速拦截', '处理迅速'] },
            { title: 'CC 防火墙', description: '拦截CC效率高达99%', tags: ['高效率', '节约成本'] },
            { title: '智能 DNS', description: '全球智能DNS，快速解析', tags: ['便捷管理', '快速解析'] },
            { title: '主机监控', description: '主机监控系统，24小时保障业务', tags: ['实时监控', '故障警报'] },
            
        ]
    }
])

let currentRecommendNavIndex = ref(0)
let switchRecommendNav = (index: number) => {
    currentRecommendNavIndex.value = index
}
</script>
<style lang="less" scoped>
// 类别
.category {
    margin-top: 45px;
    height: 90px;
    display: flex;

    .item-avtive {
        color: @primary-color !important;
    }

    .category-item {
        flex: 1;
        text-align: center;
        height: 100%;
        cursor: pointer;
        color: @primary-text-color;

        .header {
            height: 77px;

            .category-item-icon {
                img {
                    width: 50px;
                    height: 50px;
                }
            }

            .category-item-text {
                font-size: @h5-text-size;
            }
        }

        .underline {
            width: 0;
            height: 13px;
            transition: .3s;
            border-bottom: 3px solid @primary-color;
            background-image: linear-gradient(#ffffff, #FFEAE3);
        }

        .underline-avtive {
            width: 100%;
        }

    }
}

.bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 20px #ccc;
    background-color: #f3f5f8;
}

.rm-box {
    .el-tag {
        margin-right: 5px;
    }

    // 主要内容
    .recommend-main {
        position: relative;
        padding-top: 60px;
        display: flex;

        // 热门产品
        .hot {
            margin-right: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;


            .hot-item {
                width: 320px;
                height: 170px;
                padding: 15px;
                background-image: linear-gradient(#ffffff, #d8dbe0);
                border: 1px solid @base-border-color;
                box-shadow: 0px 0px 7px 1px #d8dbe0;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                cursor: pointer;

                .hot-item-title {
                    font-size: @h3-text-size;
                    color: @primary-text-color;
                    margin-bottom: 15px;
                }

                .hot-item-des {
                    font-size: @h5-text-size;
                    color: @regular-text-color;
                    margin-bottom: 10px;
                }

                .hot-item-tag {
                    margin-bottom: 10px;

                }

                .el-button {
                    height: 40px;
                    width: 120px;
                }
            }
        }

        .list {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(3, minmax(auto,360px));
            justify-content: space-between;
            .list-item {
                cursor: pointer;
                padding: 20px 15px;
                transition: .2s;
                background-color: #fff;
                border: 1px solid #f3f5f8;
                position: relative;
                z-index: 1;
                &:hover{
                    box-shadow:5px 8px 15px 0px #ccc;
                    z-index: 2;
                }

                &:hover .list-item-title {
                    color: @primary-color;

                }

                .list-item-title {
                    margin-bottom: 10px;
                    font-size: @h4-text-size;
                    color: @primary-text-color;
                }

                .list-item-des {
                    font-size: @h6-text-size;
                    margin-bottom: 10px;
                    color: @regular-text-color;
                }
            }
        }


    }
}
</style>