<template>
    <div class="outer-container">
        <div class="inner-container">
            <div class="info-container mx-3">
                <v-icon color="white">
                    mdi-checkbox-marked
                </v-icon>
                <p>PRODUSE GARANTAT AUTENTICE</p>
            </div>
            <div class="info-container mx-3">
                <v-icon color="white">
                    mdi-lock
                </v-icon>
                <p>PLATI 100% SECURIZATE</p>
            </div>
            <div class="info-container mx-3">
                <v-icon color="white">
                    mdi-package
                </v-icon>
                <p>TRANSPORT GRATUIT CU VERIFICARE COLET</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .outer-container {
        width: 100vw;
        background-color: #A38D58;
        min-height: 3rem;
    }

    .inner-container {
        max-width: 74rem;
        min-height: 3rem;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }

    .info-container {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-grow: 1;
        p {
            font-weight: bold;
            color: white;
        }
    }
</style>