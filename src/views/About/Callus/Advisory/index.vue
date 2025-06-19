<template>
    <!-- 售前咨询 -->
    <ModuleCard :headline-text="advisory.hugeText">
        <div class="advisory">
            <div class="advisory-item" v-for="item in advisory.data">
                <div class="img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="des">
                    <div class="title">{{ item.title }}</div>
                    <div class="text">{{ item.des }}</div>
                    <div class="btn"><el-button type="primary" @click="gotoView(item.btn.path)">{{ item.btn.text }}</el-button></div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    advisory: {
        type: Object,
        default: {}
    }
})

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.advisory {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;

    .advisory-item {
        &:first-child{
            margin-right: 50px;
        }
        flex: 1;
        background-color: #f2f6fa;
        border: 1px solid #dbdada;
        box-shadow: 0 0 10px 0 #dbdada;
        border-radius: 5px;
        padding: 21px 40px;
        position: relative;

        .img {
            position: absolute;
            top: -50%;
            left: 50%;
            transform: translate(-50%,40%);
            width: 107px;
            height: 107px;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .des {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .title {
                font-size: @h3-text-size;
                color: @primary-text-color;
                text-align: center;
                margin-top: 30px;
                margin-bottom: 10px;
            }

            .text {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin-bottom: 28px;
            }
            .btn{
                text-align: center;
            }
        }
    }

}
</style>