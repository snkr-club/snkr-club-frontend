<template>
    <div class="wemen-section-outer">
        <wemen-header />
        <product-list-comp :loading="loading" />
    </div>
</template>

<script setup>
const loading = ref(true)
const productStore = useProductStore()

onMounted(async () => {
    loading.value = true
    await productStore.find('F')
    loading.value = false
})
</script>

<style scoped lang="scss">

</style>