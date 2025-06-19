<template>
    <!-- 描述 -->
    <div class="des">
        <el-alert type="warning" :closable="false">
            <p>
                1、资源/服务到期前我们会检验帐户余额是否充足，如若不足我们会提前提醒您及时对账户充值。已设置自动续费的资源，将在资源/服务期限届满当天按续费周期自动续费，系统自动从您的账号中扣取下一个续费周期的费用。若您的账号内可用余额不足、账号被限制新购服务、账号实名处于异常状态等情形均无法完成自动续费。
            </p>
            <p>
                2、资源设置自动续费后，除非另有明确约定，自动续费的价格为系统执行扣费当时的资源/服务价格。如有可用的代金券/现金券，系统将自动使用代金券/现金券续费。
            </p>
            <p>
                3、产品/服务价格变动时，腾讯云会通过站内信、短信、邮件或网站公告等方式通知您。
            </p>
        </el-alert>
    </div>

    <!-- 时间范围 -->
    <UserCard>
        <div class="time">
            <div class="label">时间范围</div>
            <div class="btns">
                <el-button type="primary" plain>全部(0)</el-button>
                <el-button>已到期(0)</el-button>
                <el-button>未付费订单(0)</el-button>
                <el-button link>15天内到期(0)</el-button>
                <el-button link>30天内到期(0)</el-button>
                <el-button link>2个月内到期(0)</el-button>
                <el-button link>3个月内到期(0)</el-button>
            </div>
        </div>
    </UserCard>
    <!-- 主要内容 -->
    <UserCard>
        <div class="search"><el-input placeholder="请输入..."
            :suffix-icon="Search" />
        </div>
        <el-tabs v-model="activeName">

            <!-- 筛选 -->
            <div class="filter">
                <el-button type="primary" plain>批量续费</el-button>
                <el-button type="primary" plain>设为自动续费</el-button>
                <el-button type="primary" plain>设为到期不续</el-button>
            </div>

            <el-tab-pane label="手动续费项（0）" name="first">
                <el-table :data="tableData" style="width: 100%" empty-text="暂无订单！">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="number" label="订单号" />
                    <el-table-column prop="name" label="产品" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="name" label="时间" />
                    <el-table-column prop="name" label="状态" />
                    <el-table-column prop="name" label="金额" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="自动续费项（0）" name="second">
                <el-table :data="tableData" style="width: 100%" empty-text="暂无订单！">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="number" label="订单号" />
                    <el-table-column prop="name" label="产品" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="name" label="时间" />
                    <el-table-column prop="name" label="状态" />
                    <el-table-column prop="name" label="金额" />
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="到期不续费（0）" name="third">
                <el-table :data="tableData" style="width: 100%" empty-text="暂无订单！">
                    <el-table-column type="selection" width="55" />
                    <el-table-column prop="number" label="订单号" />
                    <el-table-column prop="name" label="产品" />
                    <el-table-column prop="name" label="类型" />
                    <el-table-column prop="name" label="时间" />
                    <el-table-column prop="name" label="状态" />
                    <el-table-column prop="name" label="金额" />
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </UserCard>
</template>

<script lang="ts" setup>
import UserCard from '../UserCard/index.vue'
import { Search } from '@element-plus/icons-vue'

// 当前tab栏
let activeName = ref('first')

// 时间选择数据
const data = ref<[Date, Date]>([
    new Date(2015, 9, 10),
    new Date(2016, 9, 10),
])

// 订单数据
let tableData = ref([
    {
        number: '123',
        name: '123123'
    },
    {
        number: '123',
        name: '123123'
    }, {
        number: '123',
        name: '123123'
    }, {
        number: '123',
        name: '123123'
    }, {
        number: '123',
        name: '123123'
    }, {
        number: '123',
        name: '123123'
    },
])


</script>


<style lang="less" scoped>
// 描述
.des {
    margin-bottom: 20px;
}

// 时间范围
.time {
    display: flex;
    align-items: center;

    .label {
        margin-right: 20px;
        font-size: @h6-text-size;
        color: @regular-text-color;
    }
}

.filter {
    margin: 10px 0 20px 0;

}

.el-pagination {
    margin-top: 20px;
}

.search{
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    width: 300px;
}
</style>