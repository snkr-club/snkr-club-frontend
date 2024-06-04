<template>
    <div>
        <checkout-header />
        <cart-inner-comp class="cart" />
        <div class="checkout-inner">
            <h3 class="mb-5 ml-1">Date personale</h3>
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
            <h3 class="mb-5 ml-1 mt-12">Livrare</h3>
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
            <h3 class="mb-5 ml-1 mt-12">Tip plata</h3>
            <v-radio-group class="ml-6">
                <v-radio label="Ramburs la livrare" value="one"></v-radio>
                <v-radio label="Plata online cu cardul" value="two"></v-radio>
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
</style>