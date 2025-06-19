<template>
    <div class="footer" bg-color="#F5F7FA">
        <div class="ft viewMinAndMax">
            <!-- 公司服务 -->
            <div class="ft-server">
                <div class="ft-server-item">
                    <img src="./images/1.png">
                    <div class="ft-server-item-text">免费试用</div>
                </div>
                <div class="ft-server-item">
                    <img src="./images/2.png">
                    <div class="ft-server-item-text">享无忧退款服务</div>
                </div>
                <div class="ft-server-item">
                    <img src="./images/3.png">
                    <div class="ft-server-item-text">1V1大客户服务</div>
                </div>
                <div class="ft-server-item">
                    <img src="./images/4.png">
                    <div class="ft-server-item-text">7*24小时服务</div>
                </div>
            </div>

            <div class="ft-menu">
                <div class="ft-icon">
                    <div class="img">
                        <img src="../../assets/logo.png" alt="">
                    </div>
                    <div class="text normal">我们支持的付款方式</div>
                    <div class="icon">
                        <img src="./images/pay1.png" alt="">
                        <img src="./images/pay2.png" alt="">
                        <img src="./images/pay3.png" alt="">
                    </div>
                    <div class="icon">
                        <img src="./images/pay4.png" alt="">
                        <img src="./images/pay5.png" alt="">
                        <img src="./images/pay6.png" alt="">
                    </div>
                </div>
                <div class="line"></div>
                <div class="ft-support">
                    <!-- 产品列表 -->
                    <div class="ft-support-item">
                        <div class="ft-support-item-title">产品列表</div>
                        <div class="ft-support-item-list">弹性云</div>
                        <div class="ft-support-item-list">物理服务器</div>
                        <div class="ft-support-item-list">内容分发CDN</div>
                        <div class="ft-support-item-list">云存储</div>
                        <div class="ft-support-item-list">域名</div>
                        <div class="ft-support-item-list">SSL证书 </div>
                    </div>
                    <!-- 支持与服务 -->
                    <div class="ft-support-item">
                        <div class="ft-support-item-title">支持与服务</div>
                        <div class="ft-support-item-list">云产品用户指南</div>
                        <div class="ft-support-item-list">专业售前咨询</div>
                        <div class="ft-support-item-list">7*24H售后服务</div>
                        <div class="ft-support-item-list">提交工单</div>
                        <div class="ft-support-item-list">合作伙伴扶持计划</div>
                        <div class="ft-support-item-list">分销伙计计划</div>
                        <div class="ft-support-item-list">投诉处理</div>
                    </div>
                    <!-- 关于我们 -->
                    <div class="ft-support-item">
                        <div class="ft-support-item-title">关于我们</div>
                        <div class="ft-support-item-list" @click="gotoView('/joinus')">人才招聘</div>
                        <div class="ft-support-item-list" @click="gotoView('/nwdistribution')">网路设施布点</div>
                        <div class="ft-support-item-list">我们的优势</div>
                        <div class="ft-support-item-list" @click="gotoView('/callus')">联系我们</div>
                        <div class="ft-support-item-list" @click="gotoView('/agency')">渠道代理</div>
                    </div>
                    <!-- 关注或联系我们 -->
                    <div class="ft-support-item">
                        <div class="ft-support-item-title">关注或联系我们</div>
                        <div class="ft-support-item-list">SKype</div>
                        <div class="ft-support-item-list">twitter</div>
                        <div class="ft-support-item-list">电话</div>
                        <div class="ft-support-item-list">公司地址</div>
                        <div class="ft-support-item-list" @click="gotoView('/complain')">举报违规</div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup lang="ts">

let router = useRouter()

// 跳转链接
let gotoView = (url: string) => {
    router.push(url)
}

</script>

<style lang="less" scoped>
.footer {
    position: relative;
    z-index: 2;
    min-width: 1200px;
    background-color: #F5F7FA;
}

.ft {
    padding: 20px 0;

    // 公司服务
    .ft-server {
        height: 90px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #dedfe1;

        .ft-server-item {
            display: flex;
            align-items: center;

            img {
                width: @h3-text-size;
                margin-right: 5px;
            }

            .ft-server-item-text {
                font-size: @h5-text-size;
                color: @primary-text-color;
            }

        }
    }

    .ft-menu {
        padding: 60px 0 44px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dedfe1;

        .ft-icon {

            .img {
                width: 285px;
                height: 93px;
                position: relative;
                left: -20px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .text {
                margin: 27px 0;
            }

            .icon {
                display: flex;

                img {
                    width: 80px;
                    height: auto;
                }
            }
        }

        .line {
            height: 220px;
            border: 1px solid rgba(187, 187, 187, 1);
            margin: 0 50px 0 50px;
        }

        .ft-support {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .ft-support-item {
                .ft-support-item-title {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    margin-bottom: 21px;
                }

                .ft-support-item-list {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    line-height: 30px;
                    cursor: pointer;

                    &:hover {
                        color: @primary-color;
                    }
                }

                .ft-support-item-pay {
                    img {
                        width: 60px;
                    }
                }
            }

        }

    }

    .cross-menu {

        .cm-item {
            margin: 30px 0;
            display: flex;

            .cm-title {
                margin-right: 58px;
                color: @primary-text-color;
                font-size: @h5-text-size;
            }

            .cm-box {
                flex: 1;
                display: flex;
                justify-content: space-between;

                .cm-list {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    cursor: pointer;

                    &:hover {
                        color: @primary-color;
                    }
                }
            }
        }
    }

}
</style>
