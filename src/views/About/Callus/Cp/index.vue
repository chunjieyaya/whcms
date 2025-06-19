<template>
    <!-- 市场合作 -->
    <ModuleCard :headline-text="cp.hugeText">
        <div class="cp">
            <el-card class="cp-item" v-for="item in cp.data">
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="title">{{ item.title }}</div>
                <div class="text">{{ item.des }}</div>
                <div class="btn">
                    <el-button type="primary">联系我们</el-button>
                </div>
            </el-card>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    cp: {
        type: Object,
        default: {}
    }
})
</script>


<style lang="less" scoped>
.cp {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column-gap: 20px;

    .el-card {
        border: 2px solid #f7f7f7;
        box-shadow: 0 0 5px 0 #f7f7f7;
    }

    .cp-item {
        padding: 0px 0 20px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .img {

            img {
                width: 100px;
                transition: .3s;
                cursor: pointer;

                &:hover {
                    transform: rotateY(180deg);
                }
            }
        }


        .title {
            font-size: @h3-text-size;
            color: @primary-text-color;
            text-align: center;
            margin-bottom: 5px;
        }

        .text {
            font-size: @h6-text-size;
            color: @regular-text-color;
            line-height: 1.5;
            padding-bottom: 20px;
        }

        .btn {
            .el-button {
                width: 150px;
            }
        }
    }

}
</style>
