<template>
    <div class="men-section-outer">
        <men-header />
        <product-list-comp :loading="loading" />
    </div>
</template>

<script setup>
const loading = ref(true)
const productStore = useProductStore()

onMounted(async () => {
    loading.value = true
    await productStore.find('M')
    loading.value = false
})
</script>

<style scoped lang="scss">

</style>