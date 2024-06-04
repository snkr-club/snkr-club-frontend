<template>
    <v-card class="cart-container" elevation="0">
        <v-card-title>
            <h3><v-icon>mdi-cart</v-icon> Cosul tau</h3>
        </v-card-title>
        <v-card-subtitle>
            <h4>{{ items.length }} produse</h4>
        </v-card-subtitle>
        <v-card-text class="cart-dialog-container">
            <v-table>
                <thead>
                <tr>
                    <th>IMAGINE</th>
                    <th>NUME</th>
                    <th>PRET</th>
                    <th>CANTITATE</th>
                    <th>TOTAL</th>
                    <th><v-icon>mdi-delete</v-icon></th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in items"
                    key="item.id"
                >
                    <img :src="item.img" alt="shoe-image" class="product-cart-image" />
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }} RON</td>
                    <td>
                        <v-btn
                            rounded
                            size="25"
                            theme="dark"
                            class="mr-1"
                            @click="addQty(item.id)"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        {{ item.quantity }}
                        <v-btn
                            rounded
                            size="25"
                            theme="dark"
                            class="ml-1"
                            @click="SubtractQty(item.id)"
                        >
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                    </td>
                    <td>{{ item.price * item.quantity }} RON</td>
                    <td>
                        <v-btn
                            rounded
                            size="25"
                            theme="dark"
                            class="ml-1"
                            @click="items = items.filter(itm => itm.id !== item.id)"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-card-text>
        <v-card-text class="d-flex justify-center">
            SUBTOTAL: {{ subTotal }} RON
        </v-card-text>
    </v-card>
</template>

<script setup>
const items = ref([
    {
        id: 0,
        name: "Nike Air Force 1",
        price: 300,
        quantity: 1,
        img: "/snkr-lazyload.png"
    },
    {
        id: 1,
        name: "Nike Air Max 720",
        price: 550,
        quantity: 1,
        img: "/snkr-lazyload.png"
    }
])

const subTotal = computed(() => items.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
}, 0))

const addQty = (id) => {
    if (items.value.find((itm) => itm.id === id).quantity < 99)
        items.value.find((itm) => itm.id === id).quantity++
}

const SubtractQty = (id) => {
    if (items.value.find((itm) => itm.id === id).quantity > 1)
        items.value.find((itm) => itm.id === id).quantity--
}
</script>

<style scoped lang="scss">
.cart-container {
    max-width: 74rem;
    margin: 0 auto;
}

.product-cart-image {
    width: 70px;
}

.cart-dialog-container {
    max-height: 600px !important;
    overflow-y: scroll;
}
</style>