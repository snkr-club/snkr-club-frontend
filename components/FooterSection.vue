<template>
    <div class="footer-wrapper">
        <div class="footer-inner">
            <div class="footer-split-container" id="small-container">
                <img src="/logo.svg" class="mb-4" />
                <h5>SNKRCLUB SRL</h5>
                <p>CUI: 123456789</p>
                <p>ONRC: J05/1234/2018</p>
                <p class="mb-8">Str. Mihai Eminescu 18</p>
                <h2>E-MAIL RELATII CU CLIENTII</h2>
                <p class="bigger-p mb-8">contact@snkrclub.ro</p>
                <h2>SUPORT TELEFONIC</h2>
                <p class="bigger-p">+40 720 811 771</p>
                <h5>LUNI - VINERI 10:00 - 18:00</h5>
            </div>
            <div class="footer-split-container" id="big-container">
                <div class="footer-right-link-wrapper">
                    <div class="footer-link-third-container">
                        <h2 class="mb-3">PRODUSE</h2>
                        <NuxtLink to="/">BARBATI</NuxtLink>
                        <NuxtLink to="/">FEMEI</NuxtLink>
                        <NuxtLink to="/">INCALTAMINTE</NuxtLink>
                        <NuxtLink to="/">ACCESORII</NuxtLink>
                        <NuxtLink to="/">REDUCERI</NuxtLink>
                        <NuxtLink to="/" class="bold">LTD. EDITION</NuxtLink>
                    </div>
                    <div class="footer-link-third-container">
                        <h2 class="mb-3">INFORMATII</h2>
                        <NuxtLink to="/">Contact</NuxtLink>
                        <NuxtLink to="/">Despre noi</NuxtLink>
                        <NuxtLink to="/">Livrare si plata</NuxtLink>
                        <NuxtLink to="/">Reclamatii si garantie</NuxtLink>
                        <NuxtLink to="/">Returnarea produselor</NuxtLink>
                    </div>
                    <div class="footer-link-third-container">
                        <h2 class="mb-3">SNKR</h2>
                        <NuxtLink to="/">ANPC</NuxtLink>
                        <NuxtLink to="/">Politica de confidentialitate</NuxtLink>
                        <NuxtLink to="/">Termeni si conditii</NuxtLink>
                    </div>
                </div>
                <div class="footer-right-bottom-wrapper">
                    <div class="footer-right-bottom-container" id="big-bottom-container">
                        <h2>METODE DE PLATA</h2>
                        <div class="payment-types-container">
                            <img src="/SVG/visa.svg" />
                            <img src="/SVG/master.svg" />
                            <img src="/SVG/maestro.svg" />
                            <img src="/SVG/tb.svg" />
                        </div>
                    </div>
                    <div class="footer-right-bottom-container" id="small-bottom-container">
                        <h2>SOCIAL MEDIA</h2>
                        <div class="payment-types-container">
                            <img src="/fb.svg" class="social-image" />
                            <img src="/insta.svg" class="social-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-container">
            <div class="copyright-inner">
                <p>
                    COPYRIGHT @ 2024 SNKRCLUB SRL. TOATE DREPTURILE REZERVATE.
                </p>
                <p>
                    POWERED BY NEMESIS-TECH.COM
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .footer-wrapper {
        width: 100%;
        min-height: 29.5rem;
        background-color: #F9F9F9;
    }

    .footer-inner {
        max-width: 74rem;
        min-height: 26.5rem;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        a {
            text-decoration: none;
            color: #111111;
            font-size: 16px;
            margin-bottom: 3px;
        }
    }

    .footer-split-container {
        min-height: 26.5rem;
        padding: 2.5rem 0.5rem;
        h5 {
            font-size: 12px;
        }
        p {
            font-size: 12px;
        }
        h2 {
            font-size: 20px;
        }
        .bigger-p {
            font-size: 16px;
        }
    }

    .copyright-container {
        min-height: 3.1rem;
        width: 100%;
        background-color: #A38D58;
    }

    .footer-right-link-wrapper {
        min-height: 70%;
        display: flex;
        flex-wrap: wrap;
        min-width: fit-content;
        gap: 1px; // TODO remove
        .footer-link-third-container {
            flex: 1 1 33%;
            padding-top: 4px;
            display: flex;
            flex-direction: column;
        }
    }

    .footer-right-bottom-wrapper {
        display: flex;
        min-height: 32%;
        margin-top: 1rem;
        gap: 1px;
        flex-wrap: wrap;
        .footer-right-bottom-container {
            min-width: fit-content;
            padding-top: 0.4rem;
        }
    }

    .copyright-inner {
        max-width: 74rem;
        min-height: 3.1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center !important;
        flex-wrap: wrap;
        p {
            color: white;
        }
    }

    .payment-types-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 0.2rem;
    }

    .social-image {
        width: 46px;
    }

    #big-bottom-container {
        flex: 1 1 66%;
    }

    #small-bottom-container {
        flex: 1 1 33%;
    }

    #small-container {
        flex: 1 1 30%;
    }

    #big-container {
        flex: 1 1 65%;
    }
</style>
