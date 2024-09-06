<template>
    <div class="admin-products-outer">
        <v-data-table
            :headers="headers"
            :search="search"
            :items="productStore.products"
            :loading="loading"
            @click:row="(event, target) => selectProduct(target.item.id)"
        >
            <template v-slot:top>
                <v-toolbar flat class="pr-3">
                    <v-text-field
                        label="Cauta produs"
                        hide-details
                        variant="filled"
                        v-model="search"
                    ></v-text-field>
                    <v-divider vertical class="mx-6"></v-divider>
                    <v-btn @click="showAddDialog = true" height="100%">
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        Adauga produs
                    </v-btn>
                </v-toolbar>
            </template>
            
            <template v-slot:item.brandId="{ item }">
                {{ brandStore.brands.find(brand => brand.id === item.brandId)?.name }}
            </template>
            
            <template v-slot:item.categoryId="{ item }">
                {{ categoryStore.categories.find(category => category.id === item.categoryId)?.name }}
            </template>
            
            <template v-slot:item.collectionId="{ item }">
                {{ collectionStore.collections.find(collection => collection.id === item.collectionId)?.name }}
            </template>
            
            <template v-slot:item.limited="{ item }">
                <v-chip :color="item.limited ? 'red' : 'grey'">
                    {{ item.limited ? "DA" : "NU" }}
                </v-chip>
            </template>
            
            <template v-slot:item.active="{ item }">
                <v-chip :color="item.active ? 'green' : 'red'">
                    {{ item.active ? "ACTIV" : "INACTIV" }}
                </v-chip>
            </template>
        </v-data-table>
    </div>
    <add-product-modal :show-dialog="showAddDialog" @dialog-closed="showAddDialog = false" />
    <product-detail-modal :show-dialog="showDetailDialog" @dialog-closed="showDetailDialog = false" :product-id="selectedProductId" />
</template>

<script setup>
import {useBrandStore} from "../../stores/brandStore.js";
import {useCategoryStore} from "../../stores/categoryStore.js";
import {useCollectionStore} from "../../stores/collectionStore.js";
import {useProductStore} from "../../stores/productStore.js";

const brandStore = useBrandStore()
const categoryStore = useCategoryStore()
const collectionStore = useCollectionStore()
const productStore = useProductStore()

const headers = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Titlu', key: 'title' },
    { title: 'Tip', key: 'type' },
    { title: 'Pret', key: 'price' },
    { title: 'Status', key: 'active' },
    { title: 'Brand', key: 'brandId' },
    { title: 'Categorie', key: 'categoryId' },
    { title: 'Colectie', key: 'collectionId' },
    { title: 'Editie limitata', key: 'limited' },
])

const search = ref("")
const showAddDialog = ref(false)
const showDetailDialog = ref(false)
const selectedProductId = ref(null)
const loading = ref(false)

const selectProduct = (productId) => {
    selectedProductId.value = productId
    showDetailDialog.value = true
}

onMounted(async () => {
    loading.value = true
    await brandStore.getAll()
    await categoryStore.getAll()
    await collectionStore.getAll()
    await productStore.getAll()
    loading.value = false
})
</script>

<style scoped lang="scss">
.admin-products-outer {
    padding: 6rem;
    max-width: 95%;
}

:deep(.v-data-table__tr:hover) > td {
    background-color: #f1f1f1 !important;
}
</style>