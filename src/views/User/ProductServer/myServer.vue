<template>
  <div class="title">弹性云主机</div>
  <UserCard>
    <div class="filter">
      <div class="left">
        <el-button type="primary">创建弹性云主机</el-button>
        <el-button plain>开机</el-button>
        <el-button plain>关机</el-button>
        <el-button plain>重置密码</el-button>
      </div>
      <div class="right">
        <el-select v-model="state">
          <el-option
            label="全部"
            value="all"
          />
          <el-option
            label="运行"
            value="run"
          />
          <el-option
            label="停止"
            value="stop"
          />
        </el-select>
        <el-input placeholder="搜索产品"></el-input>
      </div>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      border
      empty-text="暂无订单！"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="number" label="名称" />
      <el-table-column prop="name" label="备注" />
      <el-table-column prop="name" label="IP地址" />
      <el-table-column prop="name" label="日期" />
      <el-table-column prop="name" label="状态" />
      <el-table-column prop="name" label="金额" />
      <el-table-column label="操作">
        <template #default>
            <el-button size="small" type="primary" link>远程登录</el-button>
            <el-button size="small" type="primary" link>详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000" />
  </UserCard>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import UserCard from "../UserCard/index.vue";

// 状态
let state = ref("all");
// IP
let ip = ref("");

// 是否显示已停用项目
let showStopProduct = ref(false);

// 当前tab栏
let activeName = ref("cloudServer");

// 时间选择数据
const data = ref<[Date, Date]>([new Date(2015, 9, 10), new Date(2016, 9, 10)]);

// 订单数据
let tableData = ref([
  {
    number: "123",
    name: "123123",
  },
  {
    number: "123",
    name: "123123",
  },
  {
    number: "123",
    name: "123123",
  },
  {
    number: "123",
    name: "123123",
  },
  {
    number: "123",
    name: "123123",
  },
  {
    number: "123",
    name: "123123",
  },
]);
</script>


<style lang="less" scoped>
.title {
  margin-bottom: 20px;
  font-size: @h3-text-size;
  color: @primary-text-color;
}
.filter {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  .right{
    display: flex;
    .el-input{
        margin-left: 10px;
    }
  }
}

.el-pagination {
  margin-top: 20px;
}
</style>