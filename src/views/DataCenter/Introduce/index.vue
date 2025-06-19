<template>
    <!-- 介绍-->
    <div class="introduce">
        <div class="img">
            <img :src="data.pictureUrl">
        </div>
        <div class="detail">
            <div class="second">{{ data.details.title }}</div>
            <div class="des descriptive"><img :src="`/dataCenter/location.svg`"><span>{{data.details.des}}</span></div>
            <div class="des phone"><img :src="`/dataCenter/st-phone.svg`"><span>{{data.details.phone}}</span>
            </div>

            <div class="des" v-for="li in data.details.list">
                <img :src="li.icon">
                <span>{{ li.text }}</span>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts" setup>

// props
const props = defineProps({
    data: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="less" scoped>
.introduce {
    display: flex;
    justify-content: center;

    .img {
        width: 960px;
        height: 400px;
        margin-right: 60px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .detail {
        width: 392px;
        .second {
            font-size: @h3-text-size;
            color: @primary-text-color;
            margin-bottom: 21px;
        }

        .descriptive {
            margin-bottom: 15px !important;
        }

        .phone {
            margin-bottom: 53px !important;
        }

        .des {
            display: flex;
            align-items: center;
            margin-bottom: 23px;

            span {
                font-size: @h6-text-size;
                color: @primary-text-color;
            }

            img {
                width: 24px;
                height: 24px;
                margin-right: 14px;
            }
        }
    }
}
</style>