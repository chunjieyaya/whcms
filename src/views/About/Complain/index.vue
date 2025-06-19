<template>
    <!-- 公司介绍 -->
    <HeaderPad height="380px" bg-position="right" :bgImage="header.imgUrl">
        <div class="complain">
            <div class="detail">
                <div class="title">{{ header.hugeText }}</div>
                <div class="text">{{ header.des }}</div>
                <div class="btn">
                    <el-button size="large" color="#171c25" @click="gotoView(header.btn.path)">{{ header.btn.text
                    }}</el-button>
                </div>
            </div>
        </div>
    </HeaderPad>


    <!-- 投诉举报 -->
    <ModuleCard :headline-text="complain.hugeText">
        <div class="ts">
            <GridLayout :col="3" :gutterCol="50">
                <div class="item" v-for="item in complain.data">
                    <div class="image">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="title">{{ item.title }}</div>
                    <div class="des">{{ item.des }}</div>
                    <div class="btn">
                        <el-button type="primary" @click="gotoView(item.btn.path)">{{ item.btn.text }}</el-button>
                    </div>
                </div>
            </GridLayout>
        </div>
    </ModuleCard>
</template>
<script lang="ts" setup>
import { header, complain } from './configData'
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>
<style lang="less" scoped>
// 公司介绍
.complain {
    height: 100%;
    color: @primary-text-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .detail {
        .title {
            font-size: @h1-text-size;
            margin-bottom: 15px;
        }

        .text {
            font-size: @h6-text-size;
            line-height: @paragraph-line-height;
            margin-bottom: 35px;
        }

        .btn {
            .el-button {
                border: 1px solid #fff;
            }
        }
    }

    .image {
        width: 503px;
        height: 313px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

// 投诉举报
.ts {
    .item {
        border: 2px solid #eee;
        box-shadow: 0 0 5px 0 #eee;
        text-align: center;
        transition: .2s;
        padding: 20px;
        cursor: pointer;

        &:hover .image {
            transform: scale(1.2);
        }
    }

    .image {
        margin-bottom: 20px;
        perspective: 300px;
        transition: .3s;

        img {
            width: 70px;
        }
    }

    .title {
        font-size: @h4-text-size;
        color: @primary-text-color;
        margin-bottom: 9px;
    }

    .des {
        font-size: @h6-text-size;
        color: @regular-text-color;
        margin-bottom: 20px;
    }
}
</style>