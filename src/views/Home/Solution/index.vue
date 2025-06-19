<template>
    <!-- 解决方案 -->
    <ModuleCard :headline-text="solution.hugeText">
        <div class="st">
            <!-- 内容 -->
            <div class="st-content">

                <!-- item -->
                <div class="st-content-item" v-for="(item, index) in solution.bigCards"
                    :class="{ 'solution-content-item-hover': initSolutionContentItemHover == index }"
                    @mouseenter="mouseenterText(index)"
                    :style="{ backgroundImage: initSolutionContentItemHover == index ? `url(${item.bgImgUrl})` : `url(${item.smImgUrl})` }">

                    <!-- 标题 -->
                    <div class="caption" :style="{ color: initSolutionContentItemHover != index ? '#ffffff' : '' }">
                        {{ item.title }}</div>

                    <!-- 内容  -->
                    <div v-show="initSolutionContentItemHover == index" class="content">

                        <!-- 描述 -->
                        <div class="description">
                            <div v-for="list in item.list"><el-icon>
                                    <Check />
                                </el-icon> {{ list }}</div>
                        </div>

                        <!-- 相关产品 -->
                        <div class="caption">相关产品</div>
                        <div class="rp">
                            <div class="rp-item" v-for="pd in item.products" @click="gotoView(pd.path)">{{ pd.text }}</div>
                        </div>

                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button v-for="bt in item.btns" @click="gotoView(bt.path)" :type="bt.sy">{{ bt.text
                            }}</el-button>
                        </div>
                    </div>
                </div>
            </div>


            <!-- 底部 -->
            <div class="st-card">
                <div class="st-item" v-for="item in solution.smallCards">
                    <div class="caption">{{ item.title }}</div>
                    <div class="img"><img :src="item.imgUrl" alt=""></div>
                    <div class="des text-overflow">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </ModuleCard>
</template>
<script lang="ts" setup>
import { debounce } from 'lodash'
import { ref } from 'vue'

let props = defineProps({
    solution: {
        type: Object,
        default: {}
    }
})

// 当前展开卡片
let initSolutionContentItemHover = ref(0);

// 防抖
let mouseenterText = debounce((number) => {
    initSolutionContentItemHover.value = number
}, 200)

// 跳转页面
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}


</script>
<style lang="less" scoped>
// 解决方案
.st {
    position: relative;

    // 解决方案内容
    .st-content {
        height: 365px;
        display: flex;
        justify-content: space-between;

        // 解决方案
        .st-content-item {
            width: 13%;
            min-width: 160px;
            height: 100%;
            padding: 0 17px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            transition: .5s;
            box-shadow: 2px 2px 10px 1px #BBBBBB;
            overflow: hidden;

            // 标题
            .caption {
                margin: 20px 0;
                font-size: @h3-text-size;
                color: @primary-text-color;
            }

            // 描述
            .description {
                font-size: @h6-text-size;
                color: @regular-text-color;
                height: 100px;

                .el-icon {
                    font-size: 14px;
                    color: @primary-color;
                }

                div {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin: 5px 0;
                }
            }

            // 相关产品
            .rp {
                margin-bottom: 50px;
                cursor: pointer;
                overflow: hidden;
                white-space: nowrap;

                .rp-item {
                    display: inline-block;
                    margin-right: 20px;
                    color: @primary-text-color;
                    font-size: @h5-text-size;

                    &:hover {
                        color: @primary-color;
                    }
                }
            }

            // 按钮
            .btn {
                display: flex;

                button {
                    flex: 1;

                    &:first-child {
                        margin-right: 20px;
                    }
                }
            }
        }

        .solution-content-item-hover {
            width: 465px;
            display: block;
        }
    }

    // 解决方案底部
    .st-card {
        height: 170px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .st-item {
            width: 19%;
            height: 100px;
            color: @primary-text-color;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 15px;
            position: relative;
            box-shadow: 0px 0px 5px 0 #d6d6d6;

            .caption {
                font-size: @h3-text-size;
                color: @primary-text-color;
                margin-bottom: 10px;
            }

            .img {
                right: 15px;
                top: 30px;
                position: absolute;

                img {
                    width: 39px;
                    height: 35px;
                }

            }

            .des {
                font-size: @h5-text-size;
                color: @regular-text-color;
            }
        }
    }
}
</style>