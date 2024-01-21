import { NuxtLink } from '#build/components';
<template>
    <div class="outer-container">
        <div class="logo">
            <img src="/logo.svg" />
        </div>
        <div class="option-selector">
            <NuxtLink to="/" class="test">
                <p>BARBATI</p>
            </NuxtLink>
            <NuxtLink to="/">
                <p>FEMEI</p>
            </NuxtLink>
            <NuxtLink to="/">
                <p>INCALTAMINTE</p>
            </NuxtLink>
            <NuxtLink to="/">
                <p>ACCESORII</p>
            </NuxtLink>
            <NuxtLink to="/">
                <v-btn
                    theme="dark"
                    rounded
                    color="#FF0000"
                    height="2rem"
                >
                    <p class="btn-text">REDUCERI</p>
                </v-btn>
            </NuxtLink>
            <NuxtLink to="/">
                <v-btn
                    theme="dark"
                    rounded
                    color="#111111"
                    height="2rem"
                >
                    <p class="btn-text">LTD. EDITION</p>
                </v-btn>
            </NuxtLink>
            <v-divider
                vertical
                color="#111111"
                class="border-opacity-100"
            />
            <v-btn
                icon="mdi-heart"
                theme="dark"
                color="#111111"
                size="36"
            >
            </v-btn>
            <v-btn
                icon="mdi-account"
                theme="dark"
                color="#111111"
                size="36"
            >
            </v-btn>
            <v-btn
                icon="mdi-cart"
                theme="dark"
                color="#111111"
                size="36"
            >
            </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.outer-container {
    width: 74rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    float: top;
    gap: 6rem;
    z-index: 1000;
}

.option-selector {
    display: flex;
    justify-content: space-evenly;
    gap: 1.2rem;
    align-items: center;
    p {
        font-size: 1rem;
        color: #111111;
        font-weight: bold;
    }
    a {
        text-decoration: none;
    }
}

.divider {
    border-width: 1px;
}

.btn-text {
    color: white !important;
}

.v-divider {
    border-width: 1px;
}
</style>
