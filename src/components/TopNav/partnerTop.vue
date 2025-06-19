<template>
    <div class="partner">
        <Farme title="合作伙伴" des="腾讯云始终保持着开放的态度，发挥自身多年的行业能力积累，为生态伙伴赋能。" :img-url="`/topNav/hzhb.png`">
            <template #btn><el-button type="primary" @click="gotoView('/cp/ep')" plain>前往合作伙伴 ></el-button></template>
            <!-- 内容 -->
            <template #content>
                <div class="links">
                    <div class="item" @click="gotoView('/cp/ep')">
                        <div class="title normal">生态合作伙伴 ></div>
                        <div class="des descriptive">JIMCLOUD提供专业的售前及售后服务，助力您轻松开启上云之旅</div>
                    </div>
                    <div class="item">
                        <div class="title normal" @click="gotoView('/cp/agency')">渠道代理 ></div>
                        <div class="des descriptive">JIMCLOUD提供专业的售前及售后服务，助力您轻松开启上云之旅</div>
                    </div>
                    <div class="item">
                        <div class="title normal" @click="gotoView('/cp/promotion')">推广联盟 ></div>
                        <div class="des descriptive">JIMCLOUD提供专业的售前及售后服务，助力您轻松开启上云之旅</div>
                    </div>
                </div>
            </template>
        </Farme>
    </div>
</template>

<script setup lang="ts">
import Farme from './Farme.vue'

const emit = defineEmits(['closeTopNav'])

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
    emit('closeTopNav')
}

</script>

<style lang="less" scoped>
.partner {
    .links {
        flex: 1;
        padding: 0 40px;
        -moz-column-count: 2;
        /* Firefox */
        -webkit-column-count: 2;
        /* Safari 和 Chrome */
        column-count: 2;
        column-gap: 60px;

        .item {
            cursor: pointer;
            margin-bottom: 50px;
            break-inside: avoid;
            &:hover .title{
                color: @primary-color;
            }

            .title {
                margin-bottom: 10px;
                font-size: @h5-text-size;
                color: @primary-color;
            }

            .des {
                font-size: @h6-text-size;
                color: rgb(14, 14, 14);
            }
        }
    }
}
</style>
