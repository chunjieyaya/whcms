<template>
    <ModuleCard :headline-text="facility.hugeText">
        <div class="ft">
            <div class="item" v-for="item in facility.data">
                <div class="icon">
                    <img :src="item.icon" alt="">
                </div>
                <div class="detail">
                    <div class="title">{{ item.title }}</div>
                    <div class="listbox">
                        <div v-for="list in item.list" class="list">
                            <span class="key">{{ list.key }}</span>
                            <span>{{ list.value }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>
    
<script lang="ts" setup>

// props
const props = defineProps({
    facility: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="less" scoped>
.ft {
    padding-top: 25px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 100px;
    grid-column-gap: 120px;

    .item {
        display: flex;

        // &:nth-child(1) .listbox{
        //     height: 210px;
        // }
        // &:nth-child(2) .listbox{
        //     height: 210px;
        // }
        // &:nth-child(3) .listbox{
        //     height: 150px;
        // }
        // &:nth-child(4) .listbox{
        //     height: 150px;
        // }
        // &:nth-child(5) .listbox{
        //     height: 80px;
        // }
        // &:nth-child(6) .listbox{
        //     height: 80px;
        // }

        .icon {
            margin-right: 25px;
            width: 80px;
            height: 77px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .detail {
            flex: 1;

            .title {
                font-size: @h3-text-size;
                color: @primary-color;
                margin-bottom: 29px;
            }

            .listbox {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                

                .list {
                    margin-bottom: 20px;
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    display: flex;
                    justify-content: space-between;

                    .key {
                        font-size: @h5-text-size;
                        color: @primary-text-color;
                    }
                }
            }
        }

    }
}
</style>