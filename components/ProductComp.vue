<template>
    <div class="product-outer-container">
        <div class="product-image-container outline-effect-transparent">
            <v-img src="/product-dummy.png" class="product-image" />
            <v-btn icon="mdi-heart-outline" variant="text" class="heart-btn"></v-btn>
        </div>
        <h3 class="product-title">NIKE Air Force 1</h3>
        <p class="product-subtitle">Black/Mint Foam-Bright Spruce-Oil Green</p>
        <h2 class="product-price mt-2">729 RON</h2>
        <v-btn
            theme="dark"
            class="mt-5 outline-effect-btn"
            min-height="45"
            variant="flat"
            v-if="showButton"
        >
            VEZI PRODUSUL
        </v-btn>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps([
        "showButton"
    ])
</script>

<style scoped lang="scss">
    .product-outer-container {
        width: 17rem;
    }

    .product-image-container {
        height: 17rem;
        margin-bottom: 1.2rem;
    }

    .product-image {
        width: 17rem;
        height: 17rem;
        background-color: #f0f0f0;
    }

    .product-title {
        font-size: 20px;
    }

    .product-subtitle {
        font-size: 13px;
    }

    .product-price {
        color: #A38D58;
        font-size: 30px;
    }

    .heart-btn {
        position: absolute;
        right: 7px;
        top: 7px;
    }
</style>