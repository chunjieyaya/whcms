<template>
    <div class="about">
        <Farme title="关于我们" des="腾讯云，提供全球领先的云计算、大数据、人工智能等技术产品与服务，以卓越的科技能力打造丰富的行业解决方案，构建开放共赢的合作生态，推动产业互联网建设，助力各行各业实现数字化升级。"
            :img-url="`/topNav/gywm.png`">
            <template #btn><el-button type="primary" @click="gotoView('/about/company')" plain>前往关于我们 ></el-button></template>
            <!-- 内容 -->
            <template #content>
                <div class="links">
                    <div class="item" @click="gotoView('/about/company')">
                        <div class="title">公司介绍</div>
                        <div class="des">提供全球稳定高效，安全可信的新型基础设施</div>
                    </div>
                    <div class="item" @click="gotoView('/about/joinus')">
                        <div class="title">加入我们</div>
                        <div class="des">JimCloud"厚币以招贤者",期待与您共赴前程</div>
                    </div>
                    <div class="item" @click="gotoView('/about/callus')">
                        <div class="title">联系我们</div>
                        <div class="des">服务第一，客户至上</div>
                    </div>
                    <div class="item" @click="gotoView('/about/nwdistribution')">
                        <div class="title">网络设施布点</div>
                        <div class="des">天翼云将服务部署到任何给定区域的一般策略主要由区域类型、服务类别和客户需求驱动。</div>
                    </div>
                    <div class="item" @click="gotoView('/about/complain')">
                        <div class="title">投诉举报</div>
                        <div class="des">解决客服问题，拒绝安全隐患，一对一人工服务,对您的问题策马加鞭</div>
                    </div>
                    <div class="item" @click="gotoView('/about/announcement')">
                        <div class="title">官方公告</div>
                        <div class="des">最新消息，敬请期待</div>
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
.about {
    height: 100%;
    .links {
        padding: 0 40px;
        -moz-column-count: 2;
        /* Firefox */
        -webkit-column-count: 2;
        /* Safari 和 Chrome */
        column-count: 2;
        column-gap: 40px;

        .item {
            padding-bottom: 30px;
            break-inside: avoid;
            .title{
                cursor: pointer;
                font-size: @h6-text-size;
                margin-bottom: 10px;
                &:hover{
                    color: @primary-color;
                }
            }
            .des{
                font-size: @h7-text-size;
                color: @regular-text-color;
                line-height: 1.5;
            }
        }
    }
}
</style>
