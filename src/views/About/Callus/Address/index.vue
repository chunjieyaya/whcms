<template>
    <!-- 公司地址 -->
    <ModuleCard headline-text="公司地址">
        <div class="address">
            <div class="map">
                <GooleMap></GooleMap>
            </div>
            <div class="content">
                <div class="des" v-for="item in address.list">
                    <img :src="item.icon"><span>{{ item.text }}</span>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    address: {
        type: Object,
        default: []
    }
})
</script>

<style lang="less" scoped>
.address {
    width: 100%;
    position: relative;
    display: flex;
    height: 600px;
    border: 1px solid #eee;

    .map {
        flex: 1;
        height: 100%;
    }

    .content {
        position: absolute;
        background-color: #fff;
        padding: 10px;
        border-top-right-radius: 15px;
        bottom: 0;
        .des {
            display: flex;
            align-items: center;
            margin-bottom: 3px;

            &:last-child {
                margin-bottom: 0;
            }

            span {
                font-size: @h6-text-size;
                color: @primary-text-color;
            }

            img {
                width: 24px;
                height: 24px;
                margin-right: 14px;
            }
        }
    }
}
</style>