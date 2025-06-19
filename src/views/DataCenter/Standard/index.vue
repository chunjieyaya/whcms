<template>
    <!-- 标准-->
    <ModuleCard :headline-text="standard.hugeText">
        <div class="sd">
            <div class="sd-content">
                <div v-for="item in standard.data" class="sd-item">
                    <div><img :src="item.imgUrl" alt=""></div>
                    <div class="title">{{ item.firstRowText }}</div>
                    <div>{{ item.secondRowText }}</div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>
    
<script lang="ts" setup>

// props
const props = defineProps({
    standard: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.sd {
    .sd-content {
        display: flex;
        justify-content: space-between;

        .sd-item {
            img {
                width: 60px;
                height: 60px;
            }

            div {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin: 6px 0;
            }
            .title{
                font-size: @h4-text-size;
                color: @primary-text-color;
            }

            text-align: center;
        }
    }
}
</style>