<template>
    <v-dialog v-model="dialogModel" max-width="800">
        <v-card>
            <v-card-title>Adaugare brand</v-card-title>
            <v-card-text>

                <v-text-field
                    label="Nume brand"
                ></v-text-field>
                
                <v-text-field
                    label="Descriere brand"
                ></v-text-field>
                
                
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn>SALVEAZA</v-btn>
                <v-btn @click="emit('dialogClosed')">ANULEAZA</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps([
    "showDialog",
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
