<template>
    <div class="menu" :class="menuClass" :style="{ 'justify-content': align }">
        <div class="line"></div>
        <div v-for="(item, index) in menus" @click="switchNav(item, index)">
            {{ item.name }}
            <div class="bottom-border" :class="{ active: index == currentNav }"></div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    menus: {
        type: Object,
        defaule: []
    },
    align: {
        type: String,
        default: 'space-between'
    },
    menuClass: String
})

const emit = defineEmits(['sandNavData'])
let currentNav = ref('0')
let switchNav = (item: any, index: string) => {
    currentNav.value = index
    emit('sandNavData', item);
}
</script>
<style lang="less" scoped>
// 产品规格
.menu {
    height: 60px;
    margin-bottom: 24px;
    display: flex;
    position: relative;
    z-index: 1;

    .line {
        width: 100%;
        background-color: #eee;
        height: 3px;
        position: absolute;
        bottom: 0;
        z-index: -1;
    }

    div {
        cursor: pointer;
        width: 150px;
        line-height: 60px;
        text-align: center;
        font-size: @h5-text-size;
        color: @regular-text-color;
        position: relative;

        &:hover {
            color: @primary-color;
        }

        .bottom-border {
            position: absolute;
            bottom: 0;
            left: 0;
            transition: .3s;
            width: 0;
            height: 3px;
            background-color: @primary-color;
        }
    }
}

.active {
    width: 100% !important;
}
</style>