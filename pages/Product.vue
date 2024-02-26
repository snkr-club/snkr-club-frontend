<template>
    <div class="product-page-outer">
        <div class="product-page-inner">
            <div class="product-page-top">
                <div class="product-top-half">
                    <div class="image-container outline-effect-transparent">
                        <img src="/snkr-lazyload.png" class="product-main-image" />
                    </div>
                </div>
                <div class="product-top-half pt-3">
                    <h1>NIKE Free Terra Vista</h1>
                    <p>Black/Mint Foam-Bright Spruce-Oil Green</p>
                    <h1 class="mt-5">729 RON</h1>
                    <hr class="mt-3" />
                    <div class="inner-flex-container mt-6">
                        <div class="inner-flex-child">
                            <h3>CULORI</h3>
                            <div class="basic-flex-wrap">
                                <img src="/snkr-lazyload.png" class="color-image" />
                                <img src="/snkr-lazyload.png" class="color-image" />
                            </div>
                        </div>
                        <div class="inner-flex-child-wide">
                            <h3>MARIME</h3>
                            <div class="basic-flex-wrap mt-6">
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    40
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    41
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    42
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    43
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    44
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    45
                                </v-btn>
                                <v-btn
                                    variant="flat"
                                    border
                                    size="40"
                                >
                                    46
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="btn-flex d-flex flex-wrap ga-6 mt-9">
                        <v-btn
                            theme="dark"
                            class="mt-5 outline-effect-btn px-6"
                            min-height="60"
                            variant="flat"
                        >
                            <h2 class="btn-main-text font-weight-regular">ADAUGA IN COS</h2>
                        </v-btn>
                        <v-btn
                            theme="dark"
                            class="mt-5 outline-effect-btn"
                            min-height="60"
                            variant="flat"
                        >
                            <v-icon size="30">mdi-heart</v-icon>
                        </v-btn>
                    </div>
                    <div class="d-flex ga-1 align-center mt-8">
                        <img src="/SVG/delivery.svg" />
                        <h5>Livrare gratuita</h5>
                    </div>
                    <div class="d-flex ga-1 align-center mt-2">
                        <img src="/SVG/invoice.svg" />
                        <h5>Factura fiscala la orice comanda</h5>
                    </div>
                    <div class="d-flex ga-1 align-center mt-2">
                        <img src="/SVG/time.svg" />
                        <h5>Livrare URGENT Cargus in 2-5 zile lucratoare</h5>
                    </div>
                    <div class="d-flex ga-1 align-center mt-2">
                        <img src="/SVG/30zile.svg" />
                        <h5>30 zile RETUR</h5>
                    </div>
                </div>
            </div>
        </div>
        <small-product-list-section title="Produse similare" />
        <div class="product-page-tabs-container mt-8">
            <v-tabs v-model="tab" align-tabs="center">
                <v-tab value="one">Despre produs</v-tab>
                <v-tab value="two">Livrare</v-tab>
                <v-tab value="three">Returnari</v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <div class="mt-8">
                        <h4>TITLU PRODUS</h4>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                    </div>
                </v-window-item>
                <v-window-item value="two">
                    <div class="mt-8">
                        <h4>TITLU LIVRARE</h4>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                    </div>
                </v-window-item>
                <v-window-item value="three">
                    <div class="mt-8">
                        <h4>TITLU RETURNARI</h4>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                        <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada nunc sapien. Vestibulum sodales nibh ligula, id mollis justo rhoncus non. Vestibulum ullamcorper at massa ut fringilla. Curabitur suscipit dui quis lectus pharetra, sed tempor magna tincidunt. Fusce fringilla, ex ac porttitor bibendum, libero dui congue ipsum, non finibus lorem tellus sed nisl. Cras nec odio sit amet tortor aliquam ultricies quis id tellus. Curabitur posuere dictum porttitor. Praesent nisi felis, dictum et tristique vel, tincidunt id sapien. Etiam in venenatis ipsum. Fusce bibendum vulputate mi, at scelerisque nunc tincidunt sed. Donec ornare et nunc sed gravida.</p>
                    </div>
                </v-window-item>
            </v-window>
        </div>
    </div>
</template>

<script setup lang="ts">
    const tab = ref(null)
</script>

<style scoped lang="scss">
    .product-page-outer {
      min-height: 600px;
      padding-top: 12rem;
    }

    .product-page-inner {
      max-width: 74rem;
      margin: 0 auto;
      min-height: 600px;
    }

    .product-main-image {
      max-width: 31rem;
      background-color: #f0f0f0;
      width: auto !important;
    }

    .product-page-top {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .image-container {
      max-width: 31rem;
      min-width: 15rem;
    }

    .product-top-half {
      flex: 1 1 49%;
      max-width: 50%;
      h1 {
        font-size: 40px;
      }
      p {
        color: #CCCCCC;
        font-size: 20px;
      }
      hr {
        border: none;
        background-color: #CCCCCC;
        height: 1px;
        opacity: 70%;
      }
    }

    .inner-flex-container {
      display: flex;
      flex-wrap: wrap;
      h3 {
        font-size: 20px;
      }
    }

    .inner-flex-child {
      flex: 1 1 35%;
    }

    .inner-flex-child-wide {
      flex: 1 1 65%;
    }

    .basic-flex-wrap {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }

    .color-image {
      width: 5rem;
    }

    .btn-main-text {
      font-size: 30px;
    }

    .product-page-tabs-container {
      max-width: 74rem;
      margin: 0 auto;
      padding-bottom: 7rem;
      :deep(.v-tab) {
        flex: 1 1 33%;
      }
    }

    @media only screen and (max-width: 1005px) {
      .product-page-top {
        justify-content: center !important;
      }

      .product-main-image {
        max-width: 100%;
        height: auto;
      }

      .image-container {
        max-width: 100%;
        //max-height: 20rem;
        max-height: 100%;
      }

      .product-top-half {
        max-width: fit-content;
        padding: 1rem;
      }

      .product-page-outer {
        padding-top: 6rem;
      }
    }
</style>