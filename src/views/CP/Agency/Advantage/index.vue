<template>
    <!-- 合作伙伴申请 -->
    <ModuleCard bg-color="#f7f9fc" :headline-text="advantages.hugeText">
        <div class="advantage">
            <el-card class="item" v-for="item in advantages.data">
                <div class="main">
                    <div class="title">
                        <img :src="item.imgUrl" alt="">
                        <span class="card">{{ item.title }}</span>
                    </div>
                    <div class="normal">{{ item.des }}</div>
                </div>
                <div class="btn">
                    <el-button type="primary" @click="gotoView(item.btn.path)" link>{{ item.btn.text }}</el-button>
                </div>
            </el-card>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

// props
const props = defineProps({
    advantages: {
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
.advantage {
    display: grid;
    grid-template-columns: repeat(4,auto);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    height: 285px;

    .item {
        border-radius: 10px;

        .main {
            padding-bottom: 32px;

            .title {
                display: flex;
                align-items: center;
                margin-bottom: 19px;

                img {
                    width: 80px;
                    height: 77px;
                    margin-right: 15px;
                }
            }

            .card {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 17px;
            }

            .normal {
                height: 75px;
                font-size: @h6-text-size;
                color: @regular-text-color;
            }
        }

        .btn {
            text-align: center;
            border-top: 1px solid rgba(153, 153, 153, 0.3);
            ;
            padding-top: 18px;
        }
    }
}
</style>