<template>
    <div class="feature-item" ref="test">
        <transition enter-active-class="animated animate__backInUp">
            <div v-show="bool">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script lang="ts" setup>

let test = ref()
let bool = ref(false)
onMounted(async () => {
    await nextTick()
    window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    const elementTop = test.value.getBoundingClientRect().top + 1100;
    const elementHeight = test.value.offsetHeight;
    const elementBottom = elementTop + elementHeight;
    const isInView = elementBottom > 0 && elementTop < windowHeight + scrollY;
    if (isInView) {
        bool.value = isInView
    }
}

</script>
<style lang="less" scoped>
</style>