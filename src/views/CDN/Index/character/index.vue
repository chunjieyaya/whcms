<template>
    <!-- 售后服务 -->
    <ModuleCard :headline-text="servers.hugeText">
        <div class="server">
            <div class="server-item" v-for="item in servers.data">
                <div class="icon"><img :src="item.imgUrl" alt=""></div>
                <div class="des">
                    <div class="title">{{item.title}}</div>
                    <div class="text">{{item.des}}</div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
// props
const props = defineProps({
    servers: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="less" scoped>
.server {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 60px;
    grid-column-gap: 120px;

    .server-item {
        display: flex;
        align-items: center;

        .icon {
            img {
                width: 78px;
            }

            margin-right: 12px;
        }

        .des {
            .title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 14px;
            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin: 10px 0;
            }

            span {
                margin-right: 50px;
            }
        }
    }
}
</style>