<template>
    <v-dialog v-model="dialogModel" max-width="1012" :persistent="productStore.createLoading">
        <v-card>
            <v-card-title>Adaugare produs</v-card-title>

            <v-card-text>
                <v-form v-model="valid">
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                label="Titlu produs"
                                :rules="basicRules"
                                :counter="64"
                                v-model="newProduct.title"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                label="Subtitlu produs"
                                :rules="basicRules"
                                :counter="64"
                                v-model="newProduct.subtitle"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="6">
                            <v-select
                                label="Tip produs"
                                :items="productTypes"
                                :rules="requiredRules"
                                v-model="newProduct.type"
                                item-title="title"
                                item-value="value"
                            ></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                label="Pret"
                                :rules="priceRules"
                                v-model="newProduct.price"
                            ></v-text-field>
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
                                v-model="newProduct.brand_id"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete
                                label="Categorie"
                                :rules="requiredRules"
                                :disabled="!newProduct.brand_id"
                                :items="categoryStore.categories.filter(item => item.brandId === newProduct.brand_id)"
                                item-value="id"
                                item-title="name"
                                v-model="newProduct.category_id"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="4">
                            <v-autocomplete
                                label="Colectie"
                                :rules="requiredRules"
                                :disabled="!newProduct.category_id"
                                :items="collectionStore.collections.filter(item => item.categoryId === newProduct.category_id)"
                                item-value="id"
                                item-title="name"
                                v-model="newProduct.collection_id"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    
                    <v-textarea
                        label="Descriere"
                        no-resize
                        :rules="descriptionRules"
                        :counter="500"
                        v-model="newProduct.description"
                    >
                    </v-textarea>
                    
                    <v-checkbox
                        label="Editie limitata"
                        v-model="newProduct.limited"
                    ></v-checkbox>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    :disabled="!valid"
                    :loading="productStore.createLoading"
                    @click="saveNewProduct"
                >
                    SALVEAZA
                </v-btn>
                <v-btn
                    @click="emit('dialogClosed')"
                    :disabled="productStore.createLoading"
                >
                    ANULEAZA
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import {useBrandStore} from "../stores/brandStore.js";
import {useCategoryStore} from "../stores/categoryStore.js";
import {useCollectionStore} from "../stores/collectionStore.js";
import {useProductStore} from "../stores/productStore.js";

const props = defineProps([
    "showDialog",
])

const emit = defineEmits([
    "dialogClosed"
])

const brandStore = useBrandStore()
const categoryStore = useCategoryStore()
const collectionStore = useCollectionStore()
const productStore = useProductStore()

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

const productTypes = [
    {
        title: "BARBATI",
        value: "B"
    },
    {
        title: "FEMEI",
        value: "F"
    },
    {
        title: "UNISEX",
        value: "FM"
    },
]

const requiredRules = ref([
    v => !!v || 'Acest camp este obligatoriu.'
])

const dialogModel = ref(props.showDialog)
const valid = ref(false)

const baseProduct = {
    title: "",
    subtitle: "",
    type: "",
    description: "",
    price: null,
    brand_id: null,
    collection_id: null,
    category_id: null,
    limited: false,
    parentid: null,
}

const newProduct = ref({...baseProduct})

const saveNewProduct = async () => {
    const response = await productStore.create({...newProduct.value})
    if (!response) return
    emit("dialogClosed")
    newProduct.value = {...baseProduct}
}

watch(() => props.showDialog, (newVal) => {
    dialogModel.value = newVal
})

watch(() => dialogModel.value, (newVal) => {
    if (!newVal) emit("dialogClosed")
})

watch(() => newProduct.value.brand_id, () => {
    newProduct.value.collection_id = null
    newProduct.value.category_id = null
})

watch(() => newProduct.value.category_id, () => {
    newProduct.value.collection_id = null
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
