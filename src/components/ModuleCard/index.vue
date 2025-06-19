<template>
    <div :style="mcStyle" class="mc" :class="{ 'is-padding': isPadding }">
        <div class="content viewMinAndMax">
            <div v-if="showHeader" class="header">
                <div class="title">{{ headlineText }}</div>
                <div class="des">{{ des }}</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

// props
const props = defineProps({
    headlineText: String,
    bgImage: String,
    des: String,
    showHeader: {
        type: Boolean,
        default: true
    },
    bgColor: {
        type: String,
        default: '#ffffff'
    },
    isPadding: {
        type: Boolean,
        default: true
    }
})

// mc样式
let mcStyle = {
    'background-color': props.bgColor,
    'background-image': `url(${props.bgImage})`
}

</script>

<style lang="less" scoped>
.mc {
    min-width: 1200px;
    position: relative;
    background-size: 100% 100%;
    
    .content {
        .header {
            text-align: center;
            margin-bottom: @module-header-margin;

            .title {
                font-size: @h2-text-size;
                color: @primary-text-color;
            }

            .des {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin-top: 13px;
            }
        }
    }
}

.is-padding {
    padding: @module-margin;
}
</style>
