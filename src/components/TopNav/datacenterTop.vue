<template>
    <div class="datacenter">
        <Farme title="数据中心" des="为广大中小企业提供多场景解决方案，满足各行业客户在不同发展阶段的业务需求，快速实现数字化转型。"
            :img-url="`/topNav/sjzx.png`">
            <template #btn><el-button type="primary" @click="gotoView('/datacenter')" plain>前往数据中心 ></el-button></template>
            <!-- 内容 -->
            <template #content>
                <div class="links">
                    <div class="col">
                        <div class="categroy">东南亚</div>
                        <div class="list">
                            <div class="item" @click="gotoView('/datacenter/6')">菲律宾VITRO Makati 2数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/7')">新加坡RACK CENTRAL数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/8')">韩国moack数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/10')">柬埔寨数据中心</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="categroy">东亚</div>
                        <div class="list">
                            <div class="item" @click="gotoView('/datacenter/1')">香港MeGa Two数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/2')">香港CTG数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/3')">香港BDX数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/9')">台湾台北数据中心</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="categroy">北美</div>
                        <div class="list">
                            <div class="item" @click="gotoView('/datacenter/4')">美国圣何塞SV1数据中心</div>
                            <div class="item" @click="gotoView('/datacenter/5')">美国圣何塞SF03数据中心</div>
                        </div>
                    </div>
                </div>
            </template>
        </Farme>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeTopNav'])

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
    emit('closeTopNav')
}

</script>

<style lang="less" scoped>
.datacenter {
    height: 100%;

    .links {
        padding: 0 40px;
        -moz-column-count: 3;
        /* Firefox */
        -webkit-column-count: 3;
        /* Safari 和 Chrome */
        column-count: 3;
        column-gap: 40px;

        .col {
            margin-bottom: 50px;
            break-inside: avoid;
            .categroy {
                font-size: @h5-text-size;
                color: @primary-color;
                margin-bottom: 15px;
            }

            .list {
                .item {
                    margin: 15px 0;
                    font-size: @h6-text-size;
                    color: rgb(14, 14, 14);
                    cursor: pointer;
                    &:hover{
                        color: @primary-color;
                    }
                }
            }
        }
    }
}
</style>
