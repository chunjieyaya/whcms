<template>
    <!-- 合作伙伴申请 -->
    <ModuleCard :headline-text="flows.hugeText">
        <div class="apply">
            <el-steps :active="flows.data.length" align-center>
                <el-step v-for="item in flows.data" :title="item.des">
                    <template #icon>
                        <el-progress type="circle" :width="50" :percentage="item.percent" color="#f87242" indeterminate>{{item.num}}</el-progress>
                    </template>
                </el-step>
            </el-steps>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

// props
const props = defineProps({
    flows: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.apply {
    margin-top: 80px;

    /deep/ .el-step.is-horizontal .el-step__line {
        border-top: 2px dashed @primary-color;
        background-color: transparent;
        right: -30%;
        left: 70%;

        .el-step__line-inner {
            border-width: 0 !important;
        }
    }

    /deep/ .el-progress path:first-child {
        // 修改进度条背景色 
        stroke: rgba(248,114,66,.1);
    }
}
</style>