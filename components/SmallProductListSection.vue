<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1 class="title mb-6">{{props.title}}</h1>
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
const props = defineProps({
    title: {
        type: String,
        default: "Produse"
    },
    // TODO AICI VINE PROP UL DE PRODUCT LIST, APOI RENDER CU V-FOR
})
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
        padding: 5rem 0.5rem;
        //background-color: turquoise;
        min-height: 37.25rem;
    }

    .title {
        font-size: 3rem;
        font-weight: bold;
    }

    .product-horizontal-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 1175px) {
        .product-horizontal-list {
            justify-content: center;
        }
        .title {
            text-align: center;
        }
    }
</style>