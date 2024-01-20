<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1 class="title">DESCOPERA TOATA COLECTIA NIKE</h1>
            <h2 class="subtitle">REDUCERI DE PANA LA -30%</h2>
            <v-btn
                theme="dark"
                class="mt-12 outline-effect-btn"
                min-width="200"
                min-height="45"
                variant="flat"
            >
                VEZI MAI MULTE
            </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .outer-container {
        min-height: 37.25rem;
        width: 100%;
        border: 2px dotted red;
        background-color: #00acc1;
    }

    .inner-container {
        max-width: 74rem;
        min-height: 37.25rem;
        margin: 0 auto;
        padding-top: 7rem;
        padding-left: 0.5rem;
    }

    .title {
        font-size: 5rem;
        font-weight: bold;
        width: 50rem;
        color: #111111;
        line-height: 6rem;
        margin-bottom: 1.3rem;
    }

    .subtitle {
        font-size: 2.5rem;
        font-weight: bold;
    }


</style>