<template>
    <div class="product-list-outer">
        <div class="filter-container mb-5">
            <h2>FILTRE</h2>
            <hr class="mt-2" />
            <div class="sizes-container mt-8">
                <h3 class="filter-title">MARIMI</h3>
                <div class="sizes-inner mt-2">
                    <v-btn
                        variant="flat"
                        border
                        size="40"
                        v-for="(size, i) in productStore.availableSizes"
                        :key="i"
                    >
                        {{ size }}
                    </v-btn>
                </div>
            </div>
            <div class="price-container mt-8">
                <h3 class="filter-title">PRET</h3>
                <div class="price-filter-options">
                    <v-checkbox label="0 - 100 LEI"></v-checkbox>
                    <v-checkbox label="100 - 200 LEI"></v-checkbox>
                    <v-checkbox label="200 - 300 LEI"></v-checkbox>
                    <v-checkbox label="300 - 400 LEI"></v-checkbox>
                </div>
            </div>
            <div class="price-container mt-8">
                <h3 class="filter-title">CATEGORIE</h3>
                <div class="price-filter-options">
                    <v-checkbox label="INCALTAMINTE"></v-checkbox>
                    <v-checkbox label="IMBRACAMINTE"></v-checkbox>
                    <v-checkbox label="ACCESORII"></v-checkbox>
                </div>
            </div>
        </div>
        <div class="product-grid">
            <product-comp
                class="mb-10"
                :show-button="true"
                v-if="productStore.products"
                v-for="(product, i) in productStore.products"
                :key="i"
                :product-data="product"
            />
            <div class="loader-container" v-if="loading">
                <span class="loader"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    "loading"
])

const productStore = useProductStore()

</script>

<style scoped lang="scss">
.product-list-outer {
  margin: 0 auto;
  max-width: 74rem;
  min-height: 30rem;
  display: flex;
  padding: 3rem 0;
  gap: 2rem;
}

.filter-container {
  border-right: 1px solid lightgray;
  padding-bottom: 6rem;
  height: fit-content;
  flex: 1 1 23%;
  min-width: 15rem;
  h2 {
    font-size: 30px;
  }
  hr {
    width: 35%;
    border: none;
    background-color: lightgray;
    border-radius: 10px;
    height: 1px;
    margin-left: 1px;
  }
}

.product-grid {
  flex: 1 1 77%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
}

.filter-title {
  font-size: 18px;
}

.sizes-container {
  :deep(.v-btn) {
    border-radius: 0 !important;
    width: 3rem !important;
    height: 2.7rem !important;
    font-weight: bold;
  }
}

.sizes-inner {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
}

.price-filter-options {
  :deep(.v-checkbox) {
    height: 2rem;
  }
}

.loader-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 25%;
}

@media only screen and (max-width: 1200px) {
  .filter-container {
    padding: 0 1rem;
  }
}

@media only screen and (max-width: 900px) {
  .price-filter-options {
    :deep(.v-checkbox) {
      height: 3rem;
    }
  }
}

@media only screen and (max-width: 810px) {
  .product-grid {
    justify-content: center;
  }
}

@media only screen and (max-width: 600px) {
  .product-list-outer {
    display: initial;
  }
}

</style>