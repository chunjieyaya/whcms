<template>
    <!-- 接入流程 -->
    <ModuleCard :headline-text="process.hugeText" bg-color="#f9f9f9">
        <div class="process">
            <div class="menu">
                <div class="menu-item" v-for="(item, index) in process.menus" :class="{ active: currentProcess == index }"
                    @click="switchProcess(index)">
                    <span class="num">{{ item.num }}</span>
                    <span class="txt">{{ item.txt }}</span>
                    <img v-show="currentProcess == index" :src="process.circle" alt="">
                </div>
            </div>
            <slot>
                <div class="content">
                    <div class="content-item" v-for="data in process.menus[currentProcess].data">
                        <div class="data">
                            <div class="item-title">{{ data.title }}</div>
                            <div class="item-list" v-for="li in data.li">{{ li }}</div>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
    </ModuleCard>
</template>


<script lang="ts" setup>

let emit = defineEmits(['sandCurrentData'])

let props = defineProps({
    process: {
        type: Object,
        default: []
    }
})

// 切换流程
let currentProcess = ref(0);
let switchProcess = (index: number) => {
    currentProcess.value = index
    emit('sandCurrentData',props.process.menus[index].data)

}
</script>


<style lang="less" scoped>
// 接入流程
.process {
    .menu {
        display: flex;
        justify-content: space-between;

        .menu-item {
            display: flex;
            align-items: center;
            color: @regular-text-color;
            cursor: pointer;
            position: relative;

            &:hover {
                color: @primary-text-color;
            }

            .num {
                font-size: 56px;
                margin-right: 24px;
            }

            .txt {
                font-size: @h6-text-size;
            }

            img {
                width: 80px;
                height: 80px;
                position: absolute;
                top: 20px;
                left: 20px;
            }
        }

        .active {
            color: @primary-text-color;
        }
    }

    .content {
        margin-top: 50px;
        background-color: #fff;
        padding: 80px 120px;

        .content-item {
            margin-bottom: 45px;

            &:last-child {
                margin: 0;
            }

            .item-title {
                font-size: @h4-text-size;
                color: @primary-text-color;
                margin-bottom: 27px;
            }

            .item-list {
                font-size: @h6-text-size;
                color: @regular-text-color;
                margin-bottom: 20px;

                &:last-child {
                    margin: 0;
                }
            }
        }
    }
}
</style>