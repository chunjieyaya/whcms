<template>
    <!-- 网格热力地图 -->
    <ModuleCard bg-color="#f3f5f8" :headline-text="maps.hugeText" :des="maps.text">
        <div class="infrastructure">
            <div class="map">
                <div class="m-header">
                    <div class="data">
                        <div v-for="li in maps.list">
                            <div class="number">{{ li.key }}</div>
                            <div class="text">{{ li.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="btn">
                    <button :class="{ 'btn-active': currentActive == 1 }" @click="setData(1)">{{ maps.openArea.text
                    }}</button>
                    <button :class="{ 'btn-active': currentActive == 2 }" @click="setData(2)">{{ maps.cooperationArea.text
                    }}</button>
                    <button :class="{ 'btn-active': currentActive == 3 }" @click="setData(3)">{{ maps.speedArea.text
                    }}</button>
                </div>
                <el-card>
                    <GirdhotMap :dataList="dataList"></GirdhotMap>
                </el-card>
            </div>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>

let props = defineProps({
    maps: {
        type: Object,
        default: {}
    }
})

// 当前展示标点
let currentActive = ref(0)
// 标点数据
let dataList = reactive([
    props.maps.openArea.punctuations,
    props.maps.cooperationArea.punctuations,
    props.maps.speedArea.punctuations
])



// 设置数据
let setData = (num: any) => {
    currentActive.value = num
    dataList.splice(0, dataList.length);
    switch (num) {
        case 1:
            dataList.push(props.maps.openArea.punctuations)
            break;
        case 2:
            dataList.push(props.maps.cooperationArea.punctuations)
            break;
        case 3:
            dataList.push(props.maps.speedArea.punctuations)
            break;
    }
}

</script>

<style lang="less" scoped>
.infrastructure {
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 88;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, .0);
    }

    /deep/.el-card__body {
        padding: 0;
        border: 2px solid #fff;
    }

    .data {
        display: flex;
        justify-content: center;
        margin: 30px 0 50px 0;

        &>div {
            margin: 0 50px;
            text-align: center;
        }

        .number {
            font-size: @h2-text-size;
            color: @primary-color;
        }

        .text {
            font-size: @h3-text-size;
            color: @regular-text-color;
        }
    }

    .btn {
        text-align: center;
        position: relative;
        z-index: 98;
        transform: translateY(50%);

        button {
            width: 230px;
            height: 60px;
            border: 1px solid #fff;
            border-radius: 34px;
            background-image: linear-gradient(0deg, #fff, #f3f5f8);
            box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
            margin: 0 20px;
            font-size: @h5-text-size;
            color: @regular-text-color;
            transition: .3s;
            cursor: pointer;

            &:hover {
                transition: .3s;
                box-shadow: 8px 8px 20px 0 rgba(12, 53, 136, 0.2), -8px -8px 20px 0 #fff;
            }
        }
    }

    .btn-active {
        color: @primary-text-color !important;
        font-weight: 600;
    }
}
</style>