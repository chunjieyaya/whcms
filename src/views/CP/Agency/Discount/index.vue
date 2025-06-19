<template>
    <ModuleCard :headline-text="discount.hugeText" :des="discount.des">
        <div class="discount">
            <!-- 表格 -->
            <el-table :data="discount.data" border>
                <el-table-column v-for="item in discount.tableCol" :class-name="item.key" :prop="item.key" align="center"
                    :label="item.value">
                    <template #default="scope">
                        <img v-if="check_is_img(scope.row[item.key])" :src="scope.row[item.key]" alt="">
                        <span v-else>{{ scope.row[item.key] }}</span>
                    </template>
                    <!-- <img :src="row" alt=""> -->
                </el-table-column>
            </el-table>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
// props
const props = defineProps({
    discount: {
        type: Object,
        default: {}
    }
})

let check_is_img = (url: string) => {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null)
}


</script>

<style lang="less" scoped>
.discount {
    /deep/.title {
        color: @primary-text-color !important;
        background-color: #f0f3fb;
    }

    /deep/ th {
        background: #f0f3fb
    }

    .el-table {
        display: inline-block;
        margin: auto;
    }
}

img{
    width: 30px;
    height: 30px;
}
</style>