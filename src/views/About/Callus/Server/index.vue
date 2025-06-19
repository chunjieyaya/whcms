<template>
    <!-- 售后服务 -->
    <ModuleCard bg-color="#f5f7fa" :headline-text="server.hugeText">
        <div class="server">
            <div class="server-item" v-for="item in server.data">
                <div class="icon"><img :src="item.iconUrl" alt=""></div>
                <div class="des">
                    <div class="title">{{ item.title }}</div>
                    <div class="text">{{ item.des }}</div>
                    <div class="tag">
                        <span v-for="tag in item.tags">
                            <el-icon color="#f87242"><Check /></el-icon> {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    server: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.server {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 40px;
    grid-column-gap: 40px;

    .server-item {
        padding: 30px;
        display: flex;
        background-color: #fff;
        border-radius: 10px;
        border: 2px solid #fff;
        cursor: pointer;
        &:hover .icon{
            transform: rotateY(180deg);
        }

        &:hover{
            border: 2px solid @primary-color;
            box-shadow: 0 0 5px  0 @primary-color;
        }

        .icon {
            margin-right: 10px;
            img{
                width: 50px;
            }
        }

        .des {
            .title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 5px;
            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin-bottom: 20px;
            }

            span {
                margin-right: 20px;
                font-size: @h7-text-size;
                color: @regular-text-color;
            }
        }
    }
}
</style>