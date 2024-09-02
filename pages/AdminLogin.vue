<template>
    <div class="admin-login-outer">
        <v-card width="500" elevation="7" class="rounded-xl">
            <v-card-title class="text-center">SNKR CLUB ADMIN</v-card-title>
            <v-card-subtitle class="text-center mb-5">Conectare cont administrare</v-card-subtitle>
            <v-card-text>
                <v-text-field
                    label="Utilizator"
                ></v-text-field>
                <v-text-field
                    label="Parola"
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn class="w-100">Conectare</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.admin-login-outer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>