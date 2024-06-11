<template>
    <div>
        <checkout-header />
        <div class="cart-container">
            <cart-inner-comp class="cart" />
        </div>
        <div class="checkout-inner">
            <h3 class="mb-5 ml-1"><v-icon class="mr-2">mdi-account</v-icon> Date personale</h3>
            <div class="form-container">
                <div class="form-half">
                    <v-text-field
                        label="Nume"
                    ></v-text-field>
                    <v-text-field
                        label="Prenume"
                    ></v-text-field>
                </div>
                <div class="form-half">
                    <v-text-field
                        label="Email"
                    ></v-text-field>
                    <v-text-field
                        label="Telefon"
                    ></v-text-field>
                </div>
            </div>
            <h3 class="mb-5 ml-1 mt-12"><v-icon class="mr-2">mdi-truck</v-icon> Livrare</h3>
            <div class="form-container">
                <div class="form-half">
                    <v-text-field
                        label="Judet"
                    ></v-text-field>
                    <v-text-field
                        label="Adresa"
                    ></v-text-field>
                </div>
                <div class="form-half">
                    <v-text-field
                        label="Oras"
                    ></v-text-field>
                    <v-text-field
                        label="Cod postal"
                    ></v-text-field>
                </div>
            </div>
            <h3 class="mb-5 ml-1 mt-12"><v-icon class="mr-2">mdi-ticket</v-icon> Detii un cupon de reducere?</h3>
            <v-text-field
                label="Cupon reducere"
            ></v-text-field>
            <v-btn
                width="100%"
                variant="outlined"
                height="50"
            >
                Aplica cupon
            </v-btn>
            <h3 class="mb-5 ml-1 mt-12"><v-icon class="mr-2">mdi-cash-multiple</v-icon> Tip plata</h3>
            <v-radio-group class="ml-6">
                <v-radio label="Ramburs la livrare" value="one"></v-radio>
                <v-radio label="Plata online cu cardul" value="two"></v-radio>
            </v-radio-group>
            <h3 class="mb-5 ml-1 mt-12"><v-icon class="mr-2">mdi-currency-usd</v-icon> Total</h3>
            <v-radio-group class="ml-6">
                <h4 class="font-weight-regular mt-2">+850 RON (Produse)</h4>
                <h4 class="font-weight-regular mt-2">+15 RON (Livrare)</h4>
                <h4 class="font-weight-regular my-2">-75 RON (Cupon reducere)</h4>
                <h3>Total: 790 RON</h3>
            </v-radio-group>
            <v-btn
                width="100%"
                variant="flat"
                color="success"
                height="50"
                class="my-12"
            >
                Trimite comanda
            </v-btn>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.cart {
    margin-bottom: 2rem;
}

.checkout-inner {
    max-width: 74rem;
    margin: 0 auto;
    
}

.form-container {
    display: flex;
    gap: 2rem;
    .form-half {
        flex: 1 1 50%;
    }
}

.cart-container {
    max-width: 74rem;
    margin: 0 auto;
}

@media only screen and (max-width: 550px) {
    .form-container {
        flex-wrap: wrap;
        padding: 8px;
    }
}
</style>