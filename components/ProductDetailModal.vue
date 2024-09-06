<template>
    <v-dialog v-model="dialogModel" max-width="1300">
        <v-card>
            <v-card-title>Detalii produs</v-card-title>
            <v-card-text class="d-flex align-center justify-start ga-2 flex-wrap" v-if="!loading">
                <v-card
                    width="100"
                    height="100"
                    class="pa-0 image-card"
                    elevation="0"
                >
                    <v-img src="../public/snkr-lazyload.png"></v-img>
                    <v-btn
                        icon="mdi-close"
                        variant="text"
                        color="red"
                    ></v-btn>
                </v-card>
                <v-btn
                    variant="tonal"
                    width="100"
                    height="100"
                >
                    <v-icon size="45">mdi-image-plus</v-icon>
                    <v-tooltip
                        activator="parent"
                        text="Adauga imagine"
                    ></v-tooltip>
                </v-btn>
            </v-card-text>
            <v-card-text v-if="!loading">
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                label="Titlu produs"
                                v-model="showingProduct.title"
                                :rules="basicRules"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                label="Subtitlu produs"
                                v-model="showingProduct.subtitle"
                                :rules="basicRules"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="4">
                            <v-select
                                label="Tip produs"
                                :items="productTypes"
                                :rules="requiredRules"
                                v-model="showingProduct.type"
                                item-title="title"
                                item-value="value"
                            ></v-select>
                        </v-col>
                        <v-col cols="4">
                            <v-text-field
                                label="Pret"
                                v-model="showingProduct.price"
                                :rules="priceRules"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-select
                                label="Status"
                                :items="statusTypes"
                                item-title="title"
                                item-value="value"
                                v-model="showingProduct.active"
                            ></v-select>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="4">
                            <v-autocomplete
                                label="Brand"
                                :rules="requiredRules"
                                :items="brandStore.brands"
                                item-value="id"
                                item-title="name"
                                v-model="showingProduct.brandId"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete
                                label="Categorie"
                                :rules="requiredRules"
                                :disabled="!showingProduct.brandId"
                                :items="categoryStore.categories.filter(item => item.brandId === showingProduct.brandId)"
                                item-value="id"
                                item-title="name"
                                v-model="showingProduct.categoryId"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete
                                label="Colectie"
                                :rules="requiredRules"
                                :disabled="!showingProduct.categoryId"
                                :items="collectionStore.collections.filter(item => item.categoryId === showingProduct.categoryId)"
                                item-value="id"
                                item-title="name"
                                v-model="showingProduct.collectionId"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    
                    <v-textarea
                        label="Descriere"
                        no-resize
                        v-model="showingProduct.description"
                        :rules="descriptionRules"
                    >
                    </v-textarea>
                </v-form>
                
                <h4 class="my-3">Marimi</h4>
                
                <v-data-table
                    :headers="sizeHeaders"
                ></v-data-table>
                
                <h4 class="my-3">Variante produs</h4>
                
                <v-data-table
                    :headers="headers"
                ></v-data-table>
            </v-card-text>
            <v-card-text v-else>
                <loader-product-detail />
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    :disabled="!valid"
                    @click="updateProduct"
                >
                    SALVEAZA
                </v-btn>
                <v-btn @click="emit('dialogClosed')">ANULEAZA</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import {useProductStore} from "../stores/productStore.js";
import {useBrandStore} from "../stores/brandStore.js";
import {useCategoryStore} from "../stores/categoryStore.js";
import {useCollectionStore} from "../stores/collectionStore.js";

const props = defineProps([
    "showDialog",
    "productId"
])

const emit = defineEmits([
    "dialogClosed"
])

const productStore = useProductStore()
const brandStore = useBrandStore()
const categoryStore = useCategoryStore()
const collectionStore = useCollectionStore()

const dialogModel = ref(props.showDialog)
const loading = ref(false)
const valid = ref(false)

const showingProduct = ref(productStore.selectedProduct)

const headers = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Titlu', key: 'title' },
    { title: 'Tip', key: 'type' },
    { title: 'Pret', key: 'price' },
    { title: 'Status', key: 'status' },
])

const sizeHeaders = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Marime', key: 'size' },
    { title: 'Stoc', key: 'Stock' },
])

const productTypes = [
    {
        title: "BARBATI",
        value: "MALE"
    },
    {
        title: "FEMEI",
        value: "FEMALE"
    },
    {
        title: "UNISEX",
        value: "UNISEX"
    },
]

const statusTypes = [
    {
        title: "ACTIV",
        value: true
    },
    {
        title: "INACTIV",
        value: false
    },
]

const basicRules = ref([
    v => !!v || 'Acest camp este obligatoriu.',
    v => (v && v.length >= 3) || 'Lungimea minima este de 3 caractere',
    v => (v && v.length <= 64) || 'Lungimea maxima este de 64 de caractere',
])

const descriptionRules = ref([
    v => !!v || 'Acest camp este obligatoriu.',
    v => (v && v.length >= 3) || 'Lungimea minima este de 3 caractere',
    v => (v && v.length <= 500) || 'Lungimea maxima este de 500 de caractere',
])

const priceRules = [
    v => !!v || 'Acest camp este obligatoriu.',
    v => v.length >= 2 || 'Lungimea minima este de 2 caractere.',
    v => v.length <= 10 || 'Lungimea maxima este de 10 de caractere.',
    v => /^-?\d+(\.\d{1,2})?$/.test(v) || 'Pretul trebuie sa fie un numar cu maxim 2 zecimale.',
]

const requiredRules = ref([
    v => !!v || 'Acest camp este obligatoriu.'
])

const updateProduct = async () => {
    const response = await productStore.update({...showingProduct.value})
    if (!response) return
    emit("dialogClosed")
}

watch(() => props.showDialog, async (newVal) => {
    dialogModel.value = newVal
    if (newVal) {
        loading.value = true
        if (!brandStore.brands) await brandStore.getAll()
        if (!categoryStore.categories) await categoryStore.getAll()
        if (!collectionStore.collections) await collectionStore.getAll()
        await productStore.getProduct(parseInt(props.productId))
        loading.value = false
    }
})

watch(() => dialogModel.value, (newVal) => {
    if (!newVal) {
        emit("dialogClosed")
        showingProduct.value.collectionId = null
        showingProduct.value.categoryId = null
        showingProduct.value.brandId = null
    }
})

watch(() => productStore.selectedProduct, (newVal) => {
    showingProduct.value = newVal
})

watch(() => showingProduct.value.brandId, (newval, oldval) => {
    if (!oldval) return
    showingProduct.value.collectionId = null
    showingProduct.value.categoryId = null
})

watch(() => showingProduct.value.categoryId, (newval, oldval) => {
    if (!oldval) return
    showingProduct.value.collectionId = null
})
</script>

<style scoped lang="scss">
.v-img {
    height: 100% !important;
    width: 100%;
}

.image-card {
    position: relative;
    .v-btn {
        position: absolute;
        top: -6px;
        right: -6px;
    }
}
</style>