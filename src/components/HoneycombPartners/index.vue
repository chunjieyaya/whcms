<template>
    <!-- 合作伙伴申请 -->
    <ModuleCard bg-color="#f7f9fc" :headline-text="partner.hugeText">
        <div class="partner">
            <ul class="menu">
                <li v-for="item in partner.data.row1" class="menu-cell">
                    <img :src="item" alt="">
                </li>
            </ul>
            <ul class="menu">
                <li v-for="item in partner.data.row2" class="menu-cell">
                    <img :src="item" alt="">
                </li>
            </ul>
        </div>
    </ModuleCard>
</template>

<script lang="ts" setup>
// props
const props = defineProps({
    partner: {
        type: Object,
        default: {}
    }
})
</script>

<style lang="less" scoped>
.partner{
    margin-bottom: 100px;
}
.menu {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    -webkit-transform: translateY(34.375px);
    transform: translateY(34.375px);
}

img{
    width: 100%;
    height: 100%;
}

.menu-cell {
    flex: 0 1 150px;
    width: 165px;
    height: 80px;
    margin: 30px 8px 25px;
    position: relative;
    background: #fff;
    z-index: 1;
}

.menu-cell::before {
    background:  #f6f6f6;
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
}

.menu-cell::after {
    background: #fff;
    transition: opacity 350ms;
}

.menu-cell::before,
.menu-cell::after {
    content: '';
}

.menu-cell:hover::before {
    background: @primary-color;
    -webkit-transform: scale(1.055);
    transform: scale(1.055);
}

.menu-cell:hover::after {
    transition: opacity 350ms;
}

.menu__placeholder {
    display: none;
    opacity: 0;
    width: 250px;
    margin: 0 12.5px;
}

.menu-cell::before,
.menu-cell::after {
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
    display: block;
    position: absolute;
    -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: -1;
}</style>