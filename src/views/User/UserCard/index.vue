<template>
    <div class="card">
        <slot name="header"></slot>
        <div class="header" :style="{ marginBottom: title ? '20px' : '0'}">
            <span class="title">{{ title }} <span>{{secondTitle}}</span></span>
            <span class="btn" @click="gotoView(btn.path)">{{ btn.text }}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

let props = defineProps({
    title: String,
    secondTitle: String,
    btn: {
        type: Object,
        default: {
            text: '',
            path: ''
        }
    }
})

const router = useRouter()
const gotoView = (path: string) => {
    router.push(path)
}
</script>


<style lang="less" scoped>
.card {
    background: #fff;
    padding: 20px;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2);
    margin-bottom: 25px;
    position: relative;
    .header {
        display: flex;
        justify-content: space-between;
        font-size: @h6-text-size;

        .title {
            color: @primary-text-color;
            font-weight: 600;

            span {
                font-size: @h6-text-size;
                color: @regular-text-color;
            }
        }

        .btn {
            color: @primary-color;
            cursor: pointer;
        }
    }
}
</style>