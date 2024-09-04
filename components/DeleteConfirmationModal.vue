<template>
    <v-dialog
        v-model="dialogModel"
        @update:model-value="(val) => checkAndCloseDialog(val)"
        max-width="fit-content"
        :persistent="loading"
    >
        <v-card>
            <v-card-title>Confirmare stergere obiect</v-card-title>
            
            <v-card-text class="pt-2">
                Esti sigur ca doresti sa stergi acest obiect?
                <p class="mt-2">ATENTIE - Aceasta actiune este permanenta</p>
            </v-card-text>
            
            <v-card-actions class="mt-2">
                <v-spacer />
                <v-btn
                    color="error"
                    @click="emit('deleteConfirmed')"
                    :loading="loading"
                >
                    <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
                    STERGE
                </v-btn>
                
                <v-btn
                    @click="emit('dialogClosed')"
                    :disabled="loading"
                >
                    ANULEAZA
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps([
    "showDialog",
    "loading"
])

const emit = defineEmits([
    "dialogClosed",
    "deleteConfirmed"
])

const dialogModel = ref(false)

const checkAndCloseDialog = (val) => {
    if (!val) emit("dialogClosed")
}

watch(() => props.showDialog, (newVal) => {
    dialogModel.value = newVal
})
</script>

<style scoped lang="scss">
p {
    color: #c62727;
}
</style>