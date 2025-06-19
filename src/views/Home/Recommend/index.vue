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
                    <div class="hot-item">
                        <div class="hot-item-title text-overflow">弹性云主机</div>
                        <div class="hot-item-des text-overflow">随时自动获取、弹性伸缩的云服务器资源</div>
                        <div class="hot-item-btn text-overflow">
                            <el-button type="primary">查看详情</el-button>
                            <el-button>立即购买</el-button>
                        </div>
                    </div>
                    <div class="hot-item">
                        <div class="hot-item-title text-overflow">弹性云主机</div>
                        <div class="hot-item-des text-overflow">随时自动获取、弹性伸缩的云服务器资源</div>
                        <div class="hot-item-btn text-overflow">
                            <el-button type="primary">查看详情</el-button>
                            <el-button>立即购买</el-button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <div class="list-item" v-for="item in 9">
                        <div class="list-item-title text-overflow">弹性云主机</div>
                        <div class="list-item-des text-overflow">随时自动获取、弹性伸缩的云服务器资源</div>
                        <div class="list-item-tag text-overflow">
                            <el-tag size="small" type="info">稳定可靠</el-tag>
                            <el-tag size="small" type="info">安全保障</el-tag>
                            <el-tag size="small" type="info">弹性伸缩</el-tag>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </ModuleCard>
</template>
<script lang="ts" setup>


let recommendNav = reactive([
    {
        name: '精选推荐222',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '云服务器',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '物理服务器',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '内容分发CDN',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '云存储',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '域名',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: 'SSL证书',
        icon: '/home/recommendIcon1.png'
    },
    {
        name: '网络',
        icon: '/home/recommendIcon1.png'
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