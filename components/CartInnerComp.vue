<template>
    <v-card>
        <v-card-title>
            <h3>Cosul tau</h3>
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
                    <td>{{ item.title }} {{ item.size }}</td>
                    <td>{{ item.price }} RON</td>
                    <td>
                        <v-btn
                            rounded
                            size="25"
                            theme="dark"
                            class="mr-1"
                            @click="addQty(item.id, item.size)"
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        {{ item.quantity }}
                        <v-btn
                            rounded
                            size="25"
                            theme="dark"
                            class="ml-1"
                            @click="SubtractQty(item.id, item.size)"
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
                            @click="removeItem(item.id, item.size)"
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
const cartStore = useCartStore()
const storedCart = ref([])
const loading = ref(false)

const items = ref([])

const subTotal = computed(() => items.value.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.quantity;
}, 0))

const addQty = (id, size) => {
    if (items.value.find((itm) => itm.id === id && itm.size === size).quantity < 99) {
        items.value.find((itm) => itm.id === id && itm.size === size).quantity++
        storedCart.value.find(itm => parseInt(itm.id) === parseInt(id) && parseInt(itm.size) === size).count++
        localStorage.setItem("CART", JSON.stringify(storedCart.value))
    }
}

const SubtractQty = (id, size) => {
    if (items.value.find((itm) => itm.id === id && itm.size === size).quantity > 1) {
        items.value.find((itm) => itm.id === id && itm.size === size).quantity--
        storedCart.value.find(itm => parseInt(itm.id) === parseInt(id) && parseInt(itm.size) === size).count--
        localStorage.setItem("CART", JSON.stringify(storedCart.value))
    }
}

const removeItem = (id, size) => {
    const index = items.value.indexOf(items.value.find((itm) => itm.id === id && itm.size === size))
    items.value.splice(index, 1)
    storedCart.value.splice(index, 1)
    localStorage.setItem("CART", JSON.stringify(storedCart.value))
}

onMounted(async () => {
    loading.value = true
    storedCart.value = localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
    if (storedCart.value.length > 0) {
        let idArr = storedCart.value.map(itm => { return itm.id })
        await cartStore.find(idArr)
    }
    items.value = storedCart.value.map((itm) => {
        return {
            ...cartStore.products.find(product => parseInt(product.id) === parseInt(itm.id)),
            quantity: parseInt(itm.count),
            size: itm.size,
            img: "/snkr-lazyload.png",
        }
    })
    loading.value = false
})
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