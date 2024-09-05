<template>
    <div class="admin-brands-outer">
        <v-data-table
            :headers="headers"
            :search="search"
            :items="brandStore.brands"
            :loading="brandStore.getBrandsLoading"
        >
            <template v-slot:top>
                <v-toolbar flat class="pr-3">
                    <v-text-field
                        label="Cauta brand"
                        hide-details
                        variant="filled"
                        v-model="search"
                    ></v-text-field>
                    <v-divider vertical class="mx-6"></v-divider>
                    <v-btn @click="showAddDialog = true" height="100%">
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        Adauga brand
                    </v-btn>
                </v-toolbar>
            </template>
            
            <template v-slot:item.actions="{ item }">
                <v-icon
                    class="mr-2"
                    @click="editBrand(item)"
                >
                    mdi-pencil-outline
                </v-icon>
                <v-icon
                    @click="openDeleteModalForBrand(item)"
                >
                    mdi-delete-outline
                </v-icon>
            </template>
        </v-data-table>
    </div>
    <add-brand-modal
        :show-dialog="showAddDialog"
        @dialog-closed="showAddDialog = false"
    />
    <brand-detail-modal
        :show-dialog="showDetailDialog"
        :selected-brand="selectedBrand"
        @dialog-closed="showDetailDialog = false"
    />
    <delete-confirmation-modal
        :show-dialog="showDeleteModal"
        :loading="brandStore.deleteBrandLoading"
        @dialog-closed="showDeleteModal = false"
        @delete-confirmed="deleteBrand"
    />
</template>

<script setup>
import {useBrandStore} from "../../stores/brandStore.js";
import {onMounted} from "vue";

const brandStore = useBrandStore()

const headers = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Nume', key: 'name' },
    { title: 'Descriere', key: 'description' },
    { title: 'Actiuni', key: 'actions', sortable: false },
])

const search = ref("")
const showAddDialog = ref(false)
const showDetailDialog = ref(false)
const selectedBrand = ref({
    name: "",
    description: ""
})

const showDeleteModal = ref(false)
const deleteThisBrandId = ref(-1)

const editBrand = (brand) => {
    selectedBrand.value = {...brand}
    showDetailDialog.value = true
}

const openDeleteModalForBrand = (brand) => {
    deleteThisBrandId.value = brand.id
    showDeleteModal.value = true
}

const deleteBrand = async () => {
    await brandStore.delete(deleteThisBrandId.value)
    showDeleteModal.value = false
}

onMounted(async () => {
    await brandStore.getAll()
})
</script>

<style scoped lang="scss">
.admin-brands-outer {
    padding: 6rem;
    max-width: 95%;
}

:deep(.v-data-table__tr:hover) > td {
    background-color: #f1f1f1 !important;
}
</style>