<template>
  <!-- 步骤条 -->
  <UserCard>
    <el-steps :active="activeStep" finish-status="success" simple>
      <el-step title="选择部门" />
      <el-step title="填写表单" />
      <el-step title="提交完成" />
    </el-steps>
  </UserCard>

  <!-- 选择部门 -->
  <div v-show="activeStep == 0" class="select-department">
    <UserCard>
      <!-- 说明 -->
      <el-alert :closable="false">
        <h3 style="margin-bottom: 30px">
          您可以在此提交您遇到的问题，客服人员在收到后会尽快回答。
        </h3>
        <div style="margin-bottom: 30px" class="page">
          <h3>使用说明</h3>
          <h3>
            1.请先阅读『帮助中心』的文档，并合理使用搜索引擎，您的问题也许很普遍，已经在网上被回答了很多次，直接找到答案会更加节省您的时间。
          </h3>
          <h3>
            2.请选择正确的部门提交您的问题，每个部门所处理的具体事项在部门名称后有具体说明。
          </h3>
          <h3>3. 各部门的工作时间为每天 9:00-23:00。</h3>
        </div>
        <h3>服务承诺</h3>
        <h3>
          您在工作时间内提交的问题，将在 6 小时内答复，24
          小时内解决。非工作时间提交的问题，由值班人员尽快答复。
        </h3>
      </el-alert>

      <!-- 选择部门 -->
      <h3>请你选择受理你问题的部门</h3>

      <div class="departments">
        <el-card @click="selectDepartment" shadow="never">
          <div class="header">
            <el-icon size="24"><Message /></el-icon>
            <span>销售部门</span>
          </div>
          <div class="des">产品咨询，定价咨询</div>
        </el-card>
        <el-card @click="selectDepartment" shadow="never">
          <div class="header">
            <el-icon size="24"><Message /></el-icon>
            <span>技术团队</span>
          </div>
          <div class="des">技术部门</div>
        </el-card>
        <el-card @click="selectDepartment" shadow="never">
          <div class="header">
            <el-icon size="24"><Message /></el-icon>
            <span>财务部门</span>
          </div>
          <div class="des">一般查账、账单问题</div>
        </el-card>
      </div>
    </UserCard>
  </div>

  <!-- 填写表单 -->
  <div v-show="activeStep == 1" class="fillForm">
    <UserCard>
      <el-form :model="ticketForm" label-width="120px">
        <!-- 姓名 -->
        <el-form-item label="姓名">
          <el-input
            v-model="ticketForm.name"
            style="width: 210px"
            size="large"
          />
        </el-form-item>
        <!-- 邮件地址 -->
        <el-form-item label="邮件地址">
          <el-input
            v-model="ticketForm.name"
            style="width: 210px"
            size="large"
          />
        </el-form-item>

        <!-- 部门 -->
        <el-form-item label="部门">
          <el-select size="large">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>

        <!-- 相关服务 -->
        <el-form-item label="相关服务">
          <el-select size="large">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>

        <!-- 优先级 -->
        <el-form-item label="优先级">
          <el-select size="large">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>

        <!-- 主题 -->
        <el-form-item label="主题">
          <el-input v-model="ticketForm.name" size="large" />
        </el-form-item>

        <el-form-item label="信息">
          <el-input
            v-model="ticketForm.info"
            placeholder="Please input"
            :autosize="{ minRows: 6 }"
            type="textarea"
          />
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            v-model:file-list="fileList"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            list-type="picture-card"
          >
            <el-icon><Plus /></el-icon>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            style="width: 200px; height: 45px"
            @click="submitForm"
            >立即提交</el-button
          >
          <el-button style="width: 200px; height: 45px" @click="activeStep = 0"
            >返回上一级</el-button
          >
        </el-form-item>
      </el-form>
    </UserCard>
  </div>

  <!-- 提交 -->
  <div v-show="activeStep == 2 || activeStep == 3" class="submit">
    <UserCard>
      <el-result
        icon="success"
        title="提交成功！"
      >
        <template #extra>
          <el-button type="primary">查看工单列表</el-button>
        </template>
      </el-result>
    </UserCard>
  </div>
</template>

<script lang="ts" setup>
import UserCard from "../UserCard/index.vue";
import type { UploadProps, UploadUserFile } from "element-plus";
let activeStep = ref(0);

// 选择部门
let selectDepartment = () => {
  activeStep.value = 1;
};

// 工单表单
let ticketForm = reactive({
  name: "张三",
  info: "",
});
const fileList = ref<UploadUserFile[]>([
  {
    name: "food.jpeg",
    url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
  },
]);

// 提交表单
let submitForm = () => {
  activeStep.value = 3;
};
</script>

<style lang="less" scoped>
// 选择部门
.select-department {
  .departments {
    display: flex;
    .el-card {
      margin-right: 30px;
      width: 250px;
      cursor: pointer;
      .header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          font-weight: 600;
          font-size: @h5-text-size;
          margin-left: 5px;
        }
      }
      .des {
        font-size: @h6-text-size;
        color: @regular-text-color;
      }
    }
  }
}
</style>