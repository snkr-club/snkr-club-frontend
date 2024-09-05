<template>
    <div class="admin-outer">
        <v-data-table
            :headers="headers"
            :search="search"
            :items="categoryStore.categories"
            :loading="categoryStore.getLoading"
        >
            <template v-slot:top>
                <v-toolbar flat class="pr-3">
                    <v-text-field
                        label="Cauta categorie"
                        hide-details
                        variant="filled"
                        v-model="search"
                    ></v-text-field>
                    <v-divider vertical class="mx-6"></v-divider>
                    <v-btn @click="showAddDialog = true" height="100%">
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        Adauga categorie
                    </v-btn>
                </v-toolbar>
            </template>
            
            <template v-slot:item.brandId="{ item }">
                {{ brandStore.brands.find(brand => brand.id === item.brandId)?.name }}
            </template>
            
            <template v-slot:item.actions="{ item }">
                <v-icon
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil-outline
                </v-icon>
                <v-icon
                    @click="openDeleteModalForItem(item)"
                >
                    mdi-delete-outline
                </v-icon>
            </template>
        </v-data-table>
    </div>
    <add-category-modal
        :show-dialog="showAddDialog"
        @dialog-closed="showAddDialog = false"
    />
    <category-detail-modal
        :show-dialog="showDetailDialog"
        :selected-item="selectedItem"
        @dialog-closed="showDetailDialog = false"
    />
    <delete-confirmation-modal
        :show-dialog="showDeleteModal"
        :loading="categoryStore.deleteLoading"
        @dialog-closed="showDeleteModal = false"
        @delete-confirmed="deleteItem"
    />
</template>

<script setup>
import {useBrandStore} from "../../stores/brandStore.js";
import {onMounted} from "vue";
import {useCategoryStore} from "../../stores/categoryStore.js";

const brandStore = useBrandStore()
const categoryStore = useCategoryStore()

const headers = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Nume', key: 'name' },
    { title: 'Descriere', key: 'description' },
    { title: 'Brand', key: 'brandId' },
    { title: 'Actiuni', key: 'actions', sortable: false },
])

const search = ref("")
const showAddDialog = ref(false)
const showDetailDialog = ref(false)
const selectedItem = ref({
    name: "",
    description: ""
})

const showDeleteModal = ref(false)
const deleteThisItemId = ref(-1)

const editItem = (item) => {
    selectedItem.value = {...item}
    showDetailDialog.value = true
}

const openDeleteModalForItem = (item) => {
    deleteThisItemId.value = item.id
    showDeleteModal.value = true
}

const deleteItem = async () => {
    await categoryStore.delete(deleteThisItemId.value)
    showDeleteModal.value = false
}

onMounted(async () => {
    await brandStore.getAll()
    await categoryStore.getAll()
})
</script>

<style scoped lang="scss">
.admin-outer {
    padding: 6rem;
    max-width: 95%;
}

:deep(.v-data-table__tr:hover) > td {
    background-color: #f1f1f1 !important;
}
</style>