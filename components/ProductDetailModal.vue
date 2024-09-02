<template>
    <v-dialog v-model="dialogModel" max-width="1300">
        <v-card>
            <v-card-title>Detalii produs</v-card-title>
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
                    <v-col cols="6">
                        <v-select
                            label="Tip produs"
                            :items="['BARBATI', 'FEMEI', 'UNISEX']"
                        ></v-select>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field
                            label="Pret"
                        ></v-text-field>
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
                
                <v-data-table></v-data-table>
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

watch(() => props.showDialog, (newVal) => {
    dialogModel.value = newVal
})

watch(() => dialogModel.value, (newVal) => {
    if (!newVal) emit("dialogClosed")
})
</script>

<style scoped lang="scss">

</style>