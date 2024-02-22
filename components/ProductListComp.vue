<template>
    <div class="product-list-outer">
        <div class="filter-container">
            <h2>FILTRE</h2>
            <hr class="mt-2" />
            <div class="sizes-container mt-8">
                <h3 class="filter-title">MARIMI</h3>
                <div class="sizes-inner mt-2">
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
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
            <product-comp class="mb-10" :show-button="true" />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.product-list-outer {
  margin: 0 auto;
  max-width: 74rem;
  min-height: 30rem;
  display: flex;
  padding: 3rem 0;
}

.filter-container {
  flex: 1 1 25%;
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
  flex: 1 1 75%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
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
</style>