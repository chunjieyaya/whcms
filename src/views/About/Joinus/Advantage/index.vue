<template>
    <!-- 优势 -->
    <ModuleCard :headline-text="advantage.hugeText" :des="advantage.des">
        <div class="advantage">
            <div class="content">
                <div class="advantage-item" v-for="item in advantage.data">
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="s-title card">{{ item.title }}</div>
                    <div class="s-text descriptive">{{ item.des }}</div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

const props = defineProps({
    advantage: {
        type: Object,
        default: {}
    }
})


</script>

<style lang="less" scoped>
@keyframes serveIcon {
    0% {
        top: 0px;
    }

    50% {
        top: -20px;
    }

    100% {
        top: 0px;
    }
}
.advantage {
    text-align: center;

    .content {
        display: grid;
        grid-template-columns: repeat(4,auto);
        grid-row-gap: 20px;
        grid-column-gap: 30px;
    }

    .advantage-item {
        cursor: pointer;
        transition: .3s;

        &:hover .img {
            animation: serveIcon .3s 1;
        }

        .img {
            position: relative;
            margin-bottom: 10px;

            img {
                width: 60px;
            }
        }

        .s-title {
            font-size: @h3-text-size;
            color: @primary-text-color;
            margin-bottom: 19px;
        }

        .s-text {
            color: @regular-text-color;
            font-size: @h6-text-size;
            line-height: 1.5;
        }
    }
}
</style>