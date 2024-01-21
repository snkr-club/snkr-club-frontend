<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1 class="title mb-6">NOUTATI</h1>
            <div class="product-horizontal-list">
                <product-comp />
                <product-comp />
                <product-comp />
                <product-comp />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .outer-container {
        width: 100vw;
        min-height: 37.25rem;
        //background-color: red;
    }

    .inner-container {
        max-width: 74rem;
        margin: 0 auto;
        padding: 5rem 0;
        //background-color: turquoise;
        min-height: 37.25rem;
    }

    .title {
        font-size: 3rem;
        font-weight: bold;
    }
</style>