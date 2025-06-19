<template>
    <div class="rp">
        <GridLayout :col="2">
            <div class="item" v-for="item in data" :class="`${theme}`" @click="gotoView(item.path)">
                <div class="header">
                    <div class="left">
                        <img :src="item.icon" alt="">
                        <span>{{ item.title }}</span>
                    </div>
                    <div class="right">
                        <el-icon>
                            <Right />
                        </el-icon>
                    </div>
                </div>
                <div class="txt">{{ item.des }}</div>
            </div>
        </GridLayout>
    </div>
</template>


<script lang="ts" setup>

let props = defineProps({
    data: {
        type: Object,
        default: []
    },
    theme: {
        type: String,
        default: 'dark'  // light dark
    }
})

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

</script>


<style lang="less" scoped>
.rp {
    .item {
        padding: 20px;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            .header {
                color: @primary-color;
            }
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: @h5-text-size;
            color: @primary-text-color;
            margin-bottom: 10px;

            .left {
                display: flex;
                align-items: center;

                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }

            .txt {
                font-size: @h7-text-size;
                color: @regular-text-color;
            }
        }
    }
}

.dark {
    background-color: #f7f9fc;
}

.light {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.1);
}
</style>