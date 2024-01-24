<template>
    <div class="outer-container">
        <div class="inner-container">
            <div class="half-container">
                <h1 class="title">SNKRCLUB DESPRE NOI</h1>
                <h4 class="subtitle">Descopera ceea ce ne reprezinta si cine suntem, afla mai multe si alatura-te clubului!</h4>
                <v-btn
                    theme="dark"
                    class="mt-16 outline-effect-btn-accent"
                    min-width="230"
                    min-height="50"
                    variant="flat"
                >
                    CITESTE MAI MULTE
                </v-btn>
            </div>
            <div class="half-container">
                <v-img src="/desprenoi.png" class="about-image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .outer-container {
        min-height: 30rem !important;
        width: 100%;
        background-image: url("/grid-white.png");
        background-color: #111111;
        background-size: contain;
        background-repeat: repeat;
        background-attachment: fixed;
    }

    .inner-container {
        max-width: 74rem;
        min-height: 30rem;
        margin: 0 auto;
        padding: 3rem 0.5rem;
        display: flex;
        flex-wrap: wrap;
    }

    .half-container {
        flex: 1 1 50%;
        //min-width: 30rem;
    }

    .title {
        font-size: 5rem;
        font-weight: bold;
        //width: 50rem;
        max-width: 28rem;
        color: white;
        line-height: 5.3rem;
        margin-bottom: 2.2rem;
    }

    .subtitle {
        font-size: 20px;
        font-weight: normal;
        color: white;
        max-width: 27rem;
        margin-bottom: 3rem;
    }

    @media only screen and (max-width: 960px) {
        .inner-container {
            text-align: center;
            gap: 3rem;
        }
        .title {
            margin: 0 auto;
            font-size: 3.8rem;
        }
        .subtitle {
            margin: 0 auto;
        }
        .about-image {
            max-width: 40rem;
            margin: 0 auto;
        }
    }
</style>