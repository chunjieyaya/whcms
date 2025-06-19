<template>
    <!-- 优势 -->
    <ModuleCard bg-color="#fff" :headline-text="environments.hugeText">
        <div class="environment">
            <div class="images">
                <el-carousel height="405px">
                    <el-carousel-item v-for="item in environments.data" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="adress">
                <div class="item" v-for="item in environments.details">
                    <div class="title">
                        {{ item.key }} <span class="des">{{ item.value }}</span>
                    </div>
                </div>
                <div class="map">
                    <GooleMap></GooleMap>
                </div>

            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
let props = defineProps({
    environments: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.environment {
    display: flex;
    height: 405px;

    .images {
        width: 720px;
        height: 100%;
        margin-right: 24px;

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }

    .adress {
        flex: 1;
        height: 100%;
        border-radius: 15px;
        box-shadow: 0px 0px 5px 0px #f7f7f7;
        padding: 20px;

        .item {
            margin-bottom: 20px;

            .title {
                font-size: @h5-text-size;
                color: @primary-text-color;
                margin-bottom: 10px;
            }

            .des {
                font-size: @h6-text-size;
                color: @regular-text-color;
            }
        }
        .map{
            width: 100%;
            height: 250px;
        }
    }
}
</style>