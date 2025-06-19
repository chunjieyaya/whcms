<template>
    <ModuleCard :headline-text="jobs.hugeText">
        <div class="position">
            <div class="navs">
                <div class="list">
                    <div class="item normal" v-for="(item, index) in jobs.data" :class="{ active: cuurentNum == index }"
                        @click="switchImg(item, index)"><img :src="`/joinusImgs/zp.png`" alt="">{{ item.title }}</div>
                </div>
            </div>
            <div class="detail">
                <div class="detail-content">
                    <div v-for="list in currentObj.list" class="item">
                        <div class="title">{{ list.key }}</div>
                        <div class="des" v-for="v in list.val">{{ v }}</div>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
let props = defineProps({
    jobs: {
        type: Object,
        default: {}
    }
})

let cuurentNum = ref(0)
let currentObj = ref(props.jobs.data[0])
let switchImg = (obj: object, num: number) => {
    currentObj.value = obj
    cuurentNum.value = num
}

</script>

<style lang="less" scoped>
.position {
    display: flex;
    .navs {
        background-color: #f7f8fa;
        .list {
            padding: 40px 30px;
            .item {
                font-size: @h5-text-size;
                height: 50px;
                cursor: pointer;

                img {
                    width: 50px;
                    vertical-align: middle;
                }

                &:hover {
                    color: @primary-color;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    .detail {
        flex: 1;
        padding: 20px;
        border: 1px solid #eeeeeea1;
        .detail-content {
            height: 100%;
            .item {
                margin: 10px;
                .title {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    margin-bottom: 9px;
                }
                .des {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    margin: 5px;
                }
            }
        }
    }
}

.active {
    color: @primary-color;
}
</style>