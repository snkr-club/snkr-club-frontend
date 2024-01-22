<template>
    <div class="newsletter-wrapper">
        <div class="newsletter-inner">
            <h1>NEWSLETTER</h1>
            <p>Primeste noutati despre ultimele colectii si reduceri.</p>
            <div class="newsletter-half-container mt-12">
                <div class="newsletter-img account-bg"></div>
                <v-text-field
                    class="newsletter-text-field"
                    hide-details
                    placeholder="NUME"
                />
                <div class="newsletter-img mail-bg"></div>
                <v-text-field
                    class="newsletter-text-field"
                    hide-details
                    placeholder="EMAIL"
                />
            </div>
            <div class="newsletter-half-container">
                <div class="newsletter-text-container">
                    <p>Fara spam, doar snkrs!</p>
                </div>
                <v-btn
                    theme="dark"
                    color="#A38D58"
                    class="newsletter-btn"
                >
                    MA ABONEZ
                    <v-icon class="ml-3">mdi-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .newsletter-wrapper {
        min-height: 27.8rem;
        width: 100%;
        background-color: #111111;
        background-image: url("/newsletter.png");
        background-size: contain;
        background-position: right;
        //background-attachment: fixed;
    }

    .newsletter-inner {
        color: white;
        max-width: 74rem;
        margin: 0 auto;
        padding: 4rem 0;
        h1 {
            font-size: 5rem;
            line-height: 6rem;
        }
        p {
            font-size: 1.5rem;
        }
    }

    .newsletter-half-container {
        display: flex;
        max-width: 50%;
        .newsletter-text-field {
            :deep(.v-field__input) {
                height: 68px !important;
            }
            border: 1px solid white;
        }
        .newsletter-img {
            width: 70px;
            height: 70px;
            background-size: 30%;
            background-position: center;
            border: 1px solid white;
        }
        .account-bg {
            background-image: url("/SVG/account.svg");
        }
        .mail-bg {
            background-image: url("/SVG/mail.svg");
        }
        .newsletter-text-container {
            width: 50%;
            border: 1px solid white;
            height: 70px;
            p {
                line-height: 70px;
                text-align: center;
                margin: 0 !important;
                padding: 0 !important;
                font-size: 20px;
            }
        }
        .newsletter-btn {
            border-radius: 0 !important;
            width: 50%;
            height: 71px;
            border-left: 1px solid white;
            border-top: 1px solid white;
            font-size: 20px;
        }
    }
</style>