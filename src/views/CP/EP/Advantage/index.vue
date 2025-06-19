<template>
    <!-- 合作伙伴申请 -->
    <ModuleCard bg-color="#f7f9fc" :headline-text="advantages.hugeText">
        <div class="advantage">
            <el-card class="item" v-for="item in advantages.data">
                <div class="box">
                    <div class="main">
                        <div class="icon"><img :src="item.imgUrl" alt=""></div>
                        <div class="card">{{ item.title }}</div>
                        <div class="normal">{{ item.des }}</div>
                    </div>
                    <div class="detail">
                        <div class="bgImg"><img :src="item.imgUrl" alt=""></div>
                        <div class="card">{{ item.title }}</div>
                        <div class="descriptive">{{ item.detail }}</div>
                    </div>
                </div>
                <div class="btn">
                    <el-button type="primary" @click="gotoView(item.btn.url)" link>{{ item.btn.text }}</el-button>
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
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: flex-end;
    height: 430px;

    .item {
        border-radius: 10px;
        width: 290px;
        text-align: center;

        .box {
            height: 324px;
            transition: .3s;
            overflow: hidden;

            &:hover .main {
                height: 0;
                padding: 0;
            }

            &:hover {
                height: 350px;
            }

            .main {
                height: 324px;
                transition: .3s;
                overflow: hidden;

                .icon {
                    margin-bottom: 15px;
                    img {
                        height: 165px;
                    }
                }

                .card {
                    font-size: @h4-text-size;
                    color: @primary-text-color;
                    margin-bottom: 10px;
                }

                .normal {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }

            .detail {
                height: 330px;
                position: relative;
                z-index: 1;

                .bgImg {
                    position: absolute;
                }

                .card {
                    font-size: @h3-text-size;
                    color: @primary-text-color;
                    font-weight: 600;
                }

                .descriptive {
                    color: @regular-text-color;
                    font-size: @h7-text-size;
                    margin-top: 15px;
                    text-align: left;
                    line-height: 1.7;
                }
            }
        }





        .btn {
            border-top: 1px solid rgba(153, 153, 153, 0.3);
            ;
            padding-top: 18px;
        }
    }
}
</style>