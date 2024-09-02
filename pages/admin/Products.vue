<template>
    <div class="admin-products-outer">
        <v-data-table
            :headers="headers"
            :search="search"
            :items="dummyProducts"
            @click:row="(event, target) => showDetailDialog = true"
        >
            <template v-slot:top>
                <v-toolbar flat class="pr-3">
                    <v-text-field
                        label="Cauta produs"
                        hide-details
                        variant="filled"
                        v-model="search"
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn @click="showAddDialog = true">
                        <v-icon class="mr-2">mdi-plus</v-icon>
                        Adauga produs nou
                    </v-btn>
                </v-toolbar>
            </template>
        </v-data-table>
    </div>
    <add-product-modal :show-dialog="showAddDialog" @dialog-closed="showAddDialog = false" />
    <product-detail-modal :show-dialog="showDetailDialog" @dialog-closed="showDetailDialog = false" />
</template>

<script setup>
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

const search = ref("")
const showAddDialog = ref(false)
const showDetailDialog = ref(false)

const dummyProducts = ref([
    {
        id: 1,
        title: "Nike test ceva",
        type: "M",
        price: 250,
        status: "ACTIV",
    },
    {
        id: 2,
        title: "Nike test ceva",
        type: "F",
        price: 250,
        status: "ACTIV",
    },
])
</script>

<style scoped lang="scss">
.admin-products-outer {
    padding: 6rem;
    max-width: 95%;
}

:deep(.v-data-table__tr:hover) > td {
    background-color: #f1f1f1 !important;
}
</style>