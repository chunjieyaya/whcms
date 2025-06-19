<template>
  <!-- 提示 -->
  <el-alert style="margin-bottom: 20px" type="warning" :closable="false">
    <p>
      1.
      收支明细记录账户资金收支变动，扣费相关描述展示产品名称+地域+其他信息。详细扣费信息(如子产品名称、资源计费详情等)需要查看“详情”操作。
    </p>
    <p>
      2.
      针对退款的金额，会单独体现在”退款“的交易类型，不会在历史的”扣费“金额上剔除。
    </p>
    <p>3. 交易数据更新可能有延迟，预计3-5min可完成数据同步，请耐心等待。</p>
    <p>
      4.
      针对交易类型为扣费的数据，支持在线查询近18个月详情数据，超过18个月的扣费详情数据可通过账单详情中明细账单下载查看。
    </p>
    <p>
      5.
      收支明细一次性支持查询6个月的明细数据，若查询数据量过大，建议拆分时段下载查看。
    </p>
  </el-alert>

  <!-- 过滤 -->
  <div class="filter">
    <el-button type="primary" plain>本月</el-button>
    <el-button plain>上月</el-button>
    <div>
      <el-date-picker
        v-model="data"
        type="daterange"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      />
    </div>
    <el-select v-model="payType">
      <el-option label="充值" value="cz" />
      <el-option label="付费" value="ff" />
    </el-select>
    <el-select v-model="productType">
      <el-option label="全部商品" value="all" />
      <el-option label="云服务器" value="yfwq" />
      <el-option label="物理机" value="wlj" />
    </el-select>
  </div>

  <!-- 汇总 -->
  <UserCard title="按已选交易类型汇总">
    <el-table :data="tableData" style="width: 100%" empty-text="暂无账单！">
      <el-table-column prop="data" label="交易时间" />
      <el-table-column prop="type" label="交易类型" />
      <el-table-column prop="in" label="入账" />
      <el-table-column prop="out" label="支出" />
      <el-table-column prop="price" label="余额" />
      <template #append>
        <div class="total">
          <span class="label">总计</span>
          <span class="value">入账：$ 100.00</span>
          <span class="value">支出：$ 99.99</span>
        </div>
      </template>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
    />
  </UserCard>
</template>

<script lang="ts" setup>
import UserCard from "../UserCard/index.vue";

// 日期
let data = ref("");

// 充值类型
let payType = ref("cz");

// 商品类型
let productType = ref("all");

let tableData = reactive([
  {
    data: "2023-8-1",
    type: "云服务器",
    in: "$0.00",
    out: "$99.99",
    price: "$0.00",
  },
  {
    data: "2023-8-1",
    type: "充值",
    in: "$100.00",
    out: "$0.00",
    price: "$100.00",
  },
]);
</script>


<style lang="less" scoped>
.filter {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .el-button {
    margin-left: 0;
    width: 100px;
  }
}

// 总计
.total {
  text-align: center;
  padding: 20px 0;
  font-size: @h6-text-size;
  .label {
    margin-right: 15px;
    color: @primary-text-color;
    font-weight: 600;
  }
  .value {
    color: @regular-text-color;
    margin-right: 10px;
  }
}
.el-pagination{
  margin-top: 20px;
}
</style>