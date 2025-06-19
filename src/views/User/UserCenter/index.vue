<template>
    <div class="usercenter">
        <!-- 左侧 -->
        <div class="left">
            <!-- 基本信息 -->
            <UserCard title="基本信息">
                <div class="base-info">
                    <div class="photo">
                        <img src="/src/assets/user.svg" alt="">
                    </div>
                    <div class="info">
                        <div class="info-item">
                            <span class="label">用户名：</span>
                            <span class="value">10011423489</span>
                        </div>
                        <div class="info-item">
                            <span class="label">邮箱绑定：</span>
                            <span class="value">2583525508@qq.com</span>
                            <el-button link type="danger" size="small">暂未验证邮箱</el-button>
                        </div>
                        <div class="info-item">
                            <span class="label">子用户：</span>
                            <span class="value">0</span>
                            <el-button link type="primary" size="small">添加子账户</el-button>
                        </div>
                    </div>
                </div>
                <div class="account-info">
                    <GridLayout :col="2">
                        <div class="info-item">
                            <div class="title">账户余额（元）</div>
                            <div class="info">
                                <span class="price">$0.00USD</span>
                                <el-button type="primary">充值</el-button>
                            </div>
                        </div>
                        <div class="info-item">
                            <div class="title">优惠券（张）</div>
                            <div class="info">
                                <span class="price">0</span>
                            </div>
                        </div>
                    </GridLayout>
                </div>
            </UserCard>

            <!-- 代办事项 -->
            <UserCard title="待办事项">
                <div class="backlog">
                    <div class="backlog-item">
                        <div class="title">7天内待续费</div>
                        <div class="value">0</div>
                    </div>
                    <div class="backlog-item">
                        <div class="title">待支付订单</div>
                        <div class="value">0</div>
                    </div>
                    <div class="backlog-item">
                        <div class="title">代办工单</div>
                        <div class="value">0</div>
                    </div>
                </div>
            </UserCard>

            <!-- 专属客服 -->
            <UserCard title="专属客服" second-title="(24小时全天服务)" :btn="{ text: '绑定专属客服', path: '' }">
                <div class="service">
                    <div class="introduce">联系你的专属客服，任何问题快速处理！</div>
                    <div class="name">您的专属客服：Tom</div>
                    <el-button type="primary">在线咨询</el-button>
                </div>
            </UserCard>

            <!-- 最新公告 -->
            <UserCard title="最新公告" :btn="{ text: '查看更多', path: '' }">
                <div class="news">
                    <div class="new-item" v-for="item in 4">
                        <span class="title">重大消息通知，速速观看！</span>
                        <span class="data">2023/7/28</span>
                    </div>
                </div>
            </UserCard>

        </div>

        <!-- 右侧 -->
        <div class="right">

            <!-- 最近访问 -->
            <div class="recently-visited">
                <!-- 搜索框 -->
                <UserCard title="最近访问">
                    <template #header>
                        <div class="search">
                            <el-input class="w-50 m-2" placeholder="请搜索产品名称，功能名称等" :prefix-icon="Search" />
                        </div>
                    </template>

                    <GridLayout :gutterRow="10">
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                        <el-button type="info" plain>弹性云产品</el-button>
                    </GridLayout>
                </UserCard>
            </div>

            <!-- 我的资源 -->
            <UserCard title="我的资源">
                <div>暂无资源！</div>
                <!-- <el-empty description="暂无资源！" /> -->
            </UserCard>

            <!-- 最新订单 -->
            <UserCard title="最新订单" second-title="(显示最近3个月订单)">
                <el-tabs v-model="showLatestorder">
                    <el-tab-pane label="已付费订单" name="first">
                        <el-table :data="tableData" style="width: 100%" empty-text="暂无订单！">
                            <el-table-column prop="date" label="订单号" />
                            <el-table-column prop="name" label="产品" />
                            <el-table-column prop="name" label="类型" />
                            <el-table-column prop="name" label="时间" />
                            <el-table-column prop="name" label="状态" />
                            <el-table-column prop="name" label="金额" />

                            <template #append>
                                <div class="order-more">查看更多</div>
                            </template>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="未付费订单" name="second">
                        <el-table :data="tableData" style="width: 100%" empty-text="暂无订单！">
                            <el-table-column prop="date" label="订单号" />
                            <el-table-column prop="name" label="产品" />
                            <el-table-column prop="name" label="类型" />
                            <el-table-column prop="name" label="时间" />
                            <el-table-column prop="name" label="状态" />
                            <el-table-column prop="name" label="金额" />
                            <template #append>
                                <div class="order-more">查看更多</div>
                            </template>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </UserCard>



        </div>


    </div>
</template>

<script lang="ts" setup>
import { Search, Service } from '@element-plus/icons-vue'
import UserCard from '../UserCard/index.vue'
// 用户信息
import useUserStore from '@/stores/user'
const userStore = useUserStore()


// 是否显示余额
let isShowBalance = ref(false)
const showBalance = () => {
    isShowBalance.value = !isShowBalance.value
}

// 最新订单
let showLatestorder = ref('first')
let tableData = ref([
    {
        data: '123',
        name: '123123'
    },
    {
        data: '123',
        name: '123123'
    }, {
        data: '123',
        name: '123123'
    }, {
        data: '123',
        name: '123123'
    }, {
        data: '123',
        name: '123123'
    }, {
        data: '123',
        name: '123123'
    },
])
</script>

<style lang="less" scoped>
.usercenter {
    display: flex;

    // 左侧
    .left {
        flex: 2;
        margin-right: 30px;

        // 用户基本信息
        .base-info {
            display: flex;

            .photo {
                margin-right: 20px;

                img {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }

            .info {
                .info-item {
                    margin-bottom: 15px;
                    font-size: @h6-text-size;
                    display: flex;
                    align-items: center;

                    .label {
                        display: inline-block;
                        width: 80px;
                        color: @regular-text-color;
                    }

                    .value {
                        color: @primary-text-color;
                        margin-right: 10px;
                    }
                }
            }
        }

        // 账户信息
        .account-info {
            .info-item {
                background-color: #f3f4f7;
                padding: 14px;

                .title {
                    font-size: @h6-text-size;
                    margin-bottom: 5px;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .price {
                        font-size: @h5-text-size;
                    }
                }
            }


        }

        // 代办事项
        .backlog {
            display: flex;

            .backlog-item {
                flex: 1;
                margin-right: 15px;
                border-right: 2px solid #ddd;

                &:last-child {
                    border: none;
                }

                .title {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    margin-bottom: 10px;
                }

                .value {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    font-weight: 600;
                }
            }
        }

        // 专属客服
        .service {
            position: relative;

            .introduce {
                font-size: @h5-text-size;
                color: @regular-text-color;
                margin-bottom: 10px;
            }

            .name {
                margin-bottom: 30px;
            }

            .el-button {
                width: 200px;
            }
        }

        // 最新公告
        .news {
            .new-item {
                margin: 15px 0;
                display: flex;
                justify-content: space-between;
                cursor: pointer;

                &:hover .title {
                    color: @primary-color;
                }

                .title {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                }

                .data {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }
        }
    }

    // 右侧
    .right {
        flex: 3;

        // 最近访问
        .recently-visited {
            .search {
                margin-bottom: 20px;
            }

            .el-button+.el-button {
                margin-left: 0;
            }

            .el-button {
                border: none;
            }
        }



        .order-more {
            padding: 15px;
            text-align: center;
            font-size: @h5-text-size;
            color: @primary-color;
            cursor: pointer;
        }

    }
}
</style>