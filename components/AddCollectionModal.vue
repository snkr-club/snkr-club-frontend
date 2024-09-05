<template>
    <v-dialog v-model="dialogModel" max-width="800" :persistent="collectionStore.createLoading">
        <v-card>
            <v-card-title>Detalii colectie</v-card-title>
            <v-card-text>
                <v-form v-model="valid" @keydown.enter="save">
                    <v-text-field
                        label="Nume colectie"
                        :rules="nameRules"
                        class="mb-2"
                        counter="64"
                        v-model="name"
                    ></v-text-field>
                    
                    <v-text-field
                        label="Descriere colectie"
                        :rules="descriptionRules"
                        counter="255"
                        v-model="description"
                    ></v-text-field>
                    
                    <v-autocomplete
                        label="Selectare brand"
                        :items="brandStore.brands"
                        :rules="requiredRules"
                        v-model="brandId"
                        item-title="name"
                        item-value="id"
                    ></v-autocomplete>
                    
                    <v-autocomplete
                        label="Selectare categorie"
                        :items="categoryStore.categories"
                        :rules="requiredRules"
                        v-model="categoryId"
                        item-title="name"
                        item-value="id"
                    ></v-autocomplete>
                </v-form>
            
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    :disabled="!valid"
                    @click="save"
                    :loading="collectionStore.createLoading"
                >
                    SALVEAZA
                </v-btn>
                <v-btn
                    @click="emit('dialogClosed')"
                    :disabled="collectionStore.createLoading"
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

const brandStore = useBrandStore()
const categoryStore = useCategoryStore()
const collectionStore = useCollectionStore()

const props = defineProps([
    "showDialog",
])

const emit = defineEmits([
    "dialogClosed"
])

const dialogModel = ref(props.showDialog)
const valid = ref(false)

const name = ref("")
const description = ref("")
const brandId = ref(null)
const categoryId = ref(null)

const nameRules = ref([
    v => !!v || 'Acest camp este obligatoriu.',
    v => (v && v.length >= 3) || 'Lungimea minima este de 3 caractere',
    v => (v && v.length <= 64) || 'Lungimea maxima este de 64 de caractere',
])

const descriptionRules = ref([
    v => !!v || 'Acest camp este obligatoriu.',
    v => (v && v.length >= 3) || 'Lungimea minima este de 3 caractere',
    v => (v && v.length <= 255) || 'Lungimea maxima este de 255 de caractere',
])

const requiredRules = ref([
    v => !!v || 'Acest camp este obligatoriu.'
])


const save = async () => {
    if (!valid.value) return
    await collectionStore.create(name.value, description.value, brandId.value, categoryId.value)
    emit("dialogClosed")
}

watch(() => props.showDialog, (newVal) => {
    dialogModel.value = newVal
})

watch(() => dialogModel.value, (newVal) => {
    if (!newVal) emit("dialogClosed")
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
