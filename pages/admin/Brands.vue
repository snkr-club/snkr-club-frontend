<template>
    <div class="admin-brands-outer">
        <v-data-table
            :headers="headers"
            :search="search"
            :items="dummyProducts"
            @click:row="(event, target) => showDetailDialog = true"
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
        </v-data-table>
    </div>
    <add-brand-modal :show-dialog="showAddDialog"  @dialog-closed="showAddDialog = false" />
</template>

<script setup>

const headers = ref([
    {
        title: 'ID',
        align: 'start',
        key: 'id'
    },
    { title: 'Nume', key: 'name' },
    { title: 'Descriere', key: 'description' },
])

const search = ref("")
const showAddDialog = ref(false)
const showDetailDialog = ref(false)

const dummyProducts = ref([
    {
        id: 1,
        name: "Nike",
        description: "Asdasdasdasdas",
    },
])
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