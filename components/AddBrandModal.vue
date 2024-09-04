<template>
    <v-dialog v-model="dialogModel" max-width="800" :persistent="brandStore.createBrandLoading">
        <v-card>
            <v-card-title>Adaugare brand</v-card-title>
            <v-card-text>
                <v-form v-model="valid" @keydown.enter="saveNewBrand">
                    <v-text-field
                        label="Nume brand"
                        :rules="nameRules"
                        class="mb-2"
                        counter="64"
                        v-model="name"
                    ></v-text-field>
                    
                    <v-text-field
                        label="Descriere brand"
                        :rules="descriptionRules"
                        counter="255"
                        v-model="description"
                    ></v-text-field>
                </v-form>
                
                
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn
                    :disabled="!valid"
                    @click="saveNewBrand"
                    :loading="brandStore.createBrandLoading"
                >
                    SALVEAZA
                </v-btn>
                <v-btn
                    @click="emit('dialogClosed')"
                    :disabled="brandStore.createBrandLoading"
                >
                    ANULEAZA
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import {useBrandStore} from "../stores/brandStore.js";

const brandStore = useBrandStore()

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

const saveNewBrand = async () => {
    if (!valid.value) return
    await brandStore.create(name.value, description.value)
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
