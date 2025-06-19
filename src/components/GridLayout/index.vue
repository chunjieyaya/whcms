<template>
    <div class="grid" :style="style">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

let props = defineProps({
    col: {
        type: Number,
        default: 4
    },
    gutterCol: {
        type: Number,
        default: 20
    },
    gutterRow: {
        type: Number,
        default: 20
    },
})

let style = reactive({
    'grid-template-columns': `repeat(${props.col},auto)`,
    'grid-column-gap': `${props.gutterCol}px`,
    'grid-row-gap': `${props.gutterRow}px`
})

</script>

<style lang="less" scoped>
.grid {
    width: 100%;
    display: grid;
}
</style>