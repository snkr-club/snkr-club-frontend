<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1 class="title">FINALIZARE COMANDA</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.outer-container {
    min-height: 25rem !important;
    width: 100%;
    background-image: url("/hero-img.png");
    background-repeat: no-repeat;
    background-size: contain !important;
    background-position: right;
}

.inner-container {
    max-width: 74rem;
    min-height: 25rem;
    margin: 0 auto;
    padding-top: 7rem;
    display: flex;
    align-items: center;
}

.title {
    font-size: 4rem;
    font-weight: bold;
    max-width: 50rem;
    color: #111111;
    line-height: 4.5rem;
    margin-bottom: 5rem;
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
