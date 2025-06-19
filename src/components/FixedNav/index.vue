<template>
    <!-- 导航栏 -->
    <el-affix :offset="0">
        <div class="menu-box">
            <div class="menu viewMinAndMax">
                <div v-for="(nav, index) in navs">
                    <el-link :href="nav.href" :class="{ 'is-active': currentIndex == parseInt(index) }" @click="switchNav(parseInt(index))"
                        :underline="false">{{ nav.label }}</el-link>
                </div>
            </div>
        </div>
    </el-affix>
</template>

<script lang="ts" setup>

let props = defineProps({
    navs: {
        type: Object,
        default: []
    }
})

onMounted(() => {
    window.addEventListener("scroll", () => {
        let top = document.documentElement.scrollTop
        console.log(top)
        props.navs.forEach((element, index) => {
            let bool = false
            if (index == props.navs.length - 1) {
                bool = top > element.top
            } else {
                bool = top > element.top && top < props.navs[index + 1].top
            }
            if (bool) {
                currentIndex.value = index
            }
        });
    });
})

let currentIndex = ref(0)
let switchNav = (index: number) => {
    currentIndex.value = index
}

</script>

<style lang="less" scoped>
// 导航
.menu-box {
    background-color: #fff;
    line-height: 60px;
    position: relative;
    z-index: 12;
    box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.05);

    .menu {
        font-size: @h6-text-size;
        color: @primary-text-color;
        display: flex;
        justify-content: space-around;
    }
}

.is-active {
    color: @primary-color;
}
</style>