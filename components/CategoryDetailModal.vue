<template>
    <v-dialog v-model="dialogModel" max-width="800" :persistent="categoryStore.updateLoading">
        <v-card>
            <v-card-title>Detalii categorie</v-card-title>
            <v-card-text>
                <v-form v-model="valid" @keydown.enter="save">
                    <v-text-field
                        label="Nume categorie"
                        :rules="nameRules"
                        class="mb-2"
                        counter="64"
                        v-model="name"
                    ></v-text-field>
                    
                    <v-text-field
                        label="Descriere categorie"
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
                </v-form>
            
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    :disabled="!valid"
                    @click="save"
                    :loading="categoryStore.updateLoading"
                >
                    SALVEAZA
                </v-btn>
                <v-btn
                    @click="emit('dialogClosed')"
                    :disabled="categoryStore.updateLoading"
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

const brandStore = useBrandStore()
const categoryStore = useCategoryStore()

const props = defineProps([
    "showDialog",
    "selectedItem"
])

const emit = defineEmits([
    "dialogClosed"
])

const dialogModel = ref(props.showDialog)
const valid = ref(false)

const name = ref(props.selectedItem.name)
const description = ref(props.selectedItem.description)
const brandId = ref(props.selectedItem.brandId)

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
    const temp = {
        id: props.selectedItem.id,
        name: name.value,
        description: description.value,
        brandId: brandId.value
    }
    await categoryStore.update(temp)
    emit("dialogClosed")
}

watch(() => props.showDialog, (newVal) => {
    dialogModel.value = newVal
})

watch(() => props.selectedItem, (newVal) => {
    name.value = newVal.name
    description.value = newVal.description
    brandId.value = newVal.brandId
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
