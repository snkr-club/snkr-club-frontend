<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1 class="title">DESCOPERA TOATA COLECTIA NIKE</h1>
            <h2 class="subtitle">REDUCERI DE PANA LA -30%</h2>
            <v-btn
                theme="dark"
                class="mt-11 outline-effect-btn"
                min-width="230"
                min-height="50"
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
        min-height: 30rem !important;
        width: 100%;
        background-image: url("/hero-img.png");
        background-repeat: no-repeat;
        background-size: contain !important;
        background-position: right;
    }

    .inner-container {
        max-width: 74rem;
        min-height: 30rem;
        margin: 0 auto;
        padding-top: 7rem;
    }

    .title {
        font-size: 4rem;
        font-weight: bold;
        max-width: 50rem;
        color: #111111;
        line-height: 4.5rem;
        margin-bottom: 0.8rem;
    }

    .subtitle {
        font-size: 2.2rem;
        font-weight: bold;
        color: #111111;
    }

    @media only screen and (max-width: 850px) {
        .inner-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.2);
            padding-bottom: 2rem !important;
        }
        .outer-container {
            background-size: cover !important;
        }
        .title {
            font-size: 3rem;
        }
        .subtitle {
            font-size: 1.8rem;
        }
    }
    
</style>
