<template>
    <!-- 底部长图-->
    <ModuleCard :is-padding="false" :showHeader="false">
        <div class="invite">
            <div class="circle circle1"><img :src="`/circle.png`" alt=""></div>
            <div class="circle circle2"><img :src="`/circle.png`" alt=""></div>
            <div class="circle circle3"><img :src="`/circle.png`" alt=""></div>
            <div class="text">
                <div class="first">{{invite.title}}</div>
                <div class="descriptive">{{invite.des}}</div>
                <div>
                    <el-button type="primary" @click="gotoView(invite.btn.url)">{{invite.btn.text}}</el-button>
                </div>
            </div>
            <div class="image">
                <img :src="invite.imgUrl" alt="">
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

// props
const props = defineProps({
    invite: {
        type: Object,
        default: {}
    }
})

let router = useRouter()

// 跳转页面
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.invite{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    .circle{
        position: absolute;
    }
    .circle1{
        right: -200px;
    }
    .circle2{
        right: 320px;
        top: -20px;
        transform: rotate(-100deg);
    }
    .circle3{
        left: -200px;
        bottom: -60px;
        transform: rotate(60deg);
    }
    .text{
        width: 577px;
        .first{
            font-size: @h1-text-size;
            color: @primary-text-color;
            margin-bottom: 6px;
        }
        .descriptive{
            font-size: @h6-text-size;
            color: @regular-text-color;
            margin-bottom: 31px;
        }
    }
    .image{
        padding-top: 12px;
        img{
            width: 299px;
            height: 273px;
        }
    }
}
</style>