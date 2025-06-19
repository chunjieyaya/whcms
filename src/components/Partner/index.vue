<template>
    <!-- 合作伙伴 -->
    <ModuleCard :bg-color="bgColor" :headline-text="hugeText">
        <div class="pt">
            <!-- 合作伙伴内容 -->
            <div class="pt-content">
                <div v-for="item in imgDatas" class="pt-content-img"><img :src="item"></div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
let props = defineProps({
    imgDatas: {
        type: Object,
        default: []
    },
    hugeText: {
        type: String,
        default: '精选合作伙伴'
    },
    bgColor: {
        type: String,
        default: '#F5F7FA'
    }
})

</script>

<style lang="less" scoped>
// 合作伙伴
.pt {

    .pt-content {
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-row-gap: 20px;
        grid-column-gap: 20px;

        .pt-content-img {
            width: 100%;
            height: 100%;
            height: 80px;
            background-color: rgba(255, 255, 255, .8);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            border: 2px solid #eee;
            transition: .3s;

            &:hover{
                border-color: @primary-color;
            }

            img {
                height: 80%;
            }
        }
    }
}
</style>