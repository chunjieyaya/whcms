<template>
    <div class="order">
        <div class="header">
            <div>支付</div>
        </div>

        <!-- 参数配置 -->
        <ModuleCard bg-color="#eeeeee" :isPadding="false" :showHeader="false">
            <div class="content">
                <el-card shadow="never">
                    <template #header>
                        <span>参数配置</span>
                    </template>
                    <el-table :data="configData" style="width: 100%">
                        <el-table-column prop="orderNum" label="订单号" />
                        <el-table-column prop="product" label="产品" />
                        <el-table-column prop="config" label="配置" width="400">
                            <template #default="scope">
                                <div><span style="margin-right: 20px;">{{ scope.row.config }}</span> <el-button type="primary" @click="configDetailVisible = true" link>详情</el-button></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="num" label="数量" />
                        <el-table-column prop="time" label="时长" />
                        <el-table-column prop="price" label="价格">
                            <template #default="scope">
                                <span class="price">{{ scope.row.price }}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>

                <el-card style="margin-top: 10px;" shadow="never">
                    <template #header>
                        <span>支付方式</span>
                    </template>
                    <el-tabs v-model="payment" class="demo-tabs">
                        <el-tab-pane label="支付宝" name="zfb">
                            <div class="payment">
                                <img src="./zfb.svg" alt="">
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </div>
        </ModuleCard>

        <!-- 总计 -->
        <div class="total">
            <ModuleCard :showHeader="false" :isPadding="false">
                <div class="content">
                    <span class="total-price">应付款：<span>$60.00</span></span>
                    <el-button type="primary" size="large">支付</el-button>
                </div>
            </ModuleCard>
        </div>

    </div>

    <el-dialog v-model="configDetailVisible" align-center title="配置详情" width="30%">
        <div class="configDetail">
            <div class="item">
                <div class="title">详情</div>
                <div class="list">订单号: 225041054230343</div>
                <div class="list">数量: 1</div>
                <div class="list">时长: 1 个月</div>
            </div>
        </div>
    </el-dialog>
</template>

<script lang="ts" setup>


let payment = ref('zfb')

let configDetailVisible = ref(false)

let configData = reactive([
    {
        orderNum: '123456789456123',
        product: '服务器实例',
        config: '应用镜像: WordPress,数据盘类型: 数据盘,数据盘: 0 GB,镜像类型',
        dataDisk: '0 GB',
        area: '华东',
        payType: '包年包月',
        num: 1,
        time: '1个月',
        discount: '$0.00',
        price: '$60.00'
    }
])

</script>


<style lang="less" scoped>
.order {
    min-height: calc(100vh - 99px);
    background-color: #eeeeee;
    padding-bottom: 130px;

    .header {
        background-color: #fff;
        padding: 20px 30px;
        font-size: @h3-text-size;
    }

    .content {
        padding: 10px 0;
    }

    .payment {
        cursor: pointer;
        display: inline-block;
        border: 2px solid @primary-color;
        background-color: #f8734215;
        padding: 20px 40px;

        img {
            width: 100px;
            height: 50px;
        }
    }

    // 总计
    .total {
        width: 100%;
        height: 130px;
        box-shadow: 0px 0px 13px 4px rgb(233, 232, 232);
        position: fixed;
        bottom: 0;
        background-color: #fff;
        z-index: 999;

        .content {
            padding: 30px 0;
            display: flex;
            justify-content: end;
            align-items: center;

            .total-price {
                font-size: @h6-text-size;
                color: @regular-text-color;

                span {
                    font-size: @h2-text-size;
                    color: @primary-color;
                }
            }

            .el-button {
                margin-left: 50px;
                width: 100px;
            }
        }
    }
}


.configDetail{
    .item{
        margin-bottom: 30px;
        .title{
            font-size: @h6-text-size;
            margin-bottom: 5px;
        }
        .list{
            font-size: @h7-text-size;
            margin-bottom: 2px;
        }
    }
}
</style>