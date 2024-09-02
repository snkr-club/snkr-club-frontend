<template>
    <v-dialog v-model="dialogModel" max-width="1300">
        <v-card>
            <v-card-title>Detalii produs</v-card-title>
            <v-card-text class="d-flex align-center justify-start ga-2 flex-wrap">
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
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-text-field
                            label="Titlu produs"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            label="Subtitlu produs"
                        ></v-text-field>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="4">
                        <v-select
                            label="Tip produs"
                            :items="['BARBATI', 'FEMEI', 'UNISEX']"
                        ></v-select>
                    </v-col>
                    <v-col cols="4">
                        <v-text-field
                            label="Pret"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                        <v-select
                            label="Status"
                            :items="['ACTIV', 'INACTIV']"
                        ></v-select>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col cols="4">
                        <v-autocomplete
                            label="Brand"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                        <v-autocomplete
                            label="Colectie"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="4">
                        <v-autocomplete
                            label="Categorie"
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                
                <v-textarea
                    label="Descriere"
                    no-resize
                >
                </v-textarea>
                
                <h4 class="my-3">Marimi</h4>
                
                <v-data-table
                    :headers="sizeHeaders"
                ></v-data-table>
                
                <h4 class="my-3">Variante produs</h4>
                
                <v-data-table
                    :headers="headers"
                ></v-data-table>
            </v-card-text>
<!--            <v-card-actions>-->
<!--                <v-spacer />-->
<!--                <v-btn>SALVEAZA</v-btn>-->
<!--                <v-btn @click="emit('dialogClosed')">ANULEAZA</v-btn>-->
<!--            </v-card-actions>-->
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps([
    "showDialog",
    "productId"
])

const emit = defineEmits([
    "dialogClosed"
])

const dialogModel = ref(props.showDialog)

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