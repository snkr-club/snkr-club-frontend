<template>
  <NuxtLayout>
    <v-app>
      <NavbarComp @drawer-toggle="drawer = !drawer" />
        <v-navigation-drawer
            v-model="drawer"
            temporary
            disable-route-watcher
            disable-resize-watcher
        >
            <v-list>
                <img src="/logo.svg" class="drawer-logo" @click="$router.push('/')" />
                <v-divider class="my-3" />
                <div class="d-flex px-3 justify-space-between">
                    <v-btn
                        icon="mdi-heart"
                        theme="dark"
                        color="#111111"
                        size="34"
                    >
                    </v-btn>
                    <v-btn
                        icon="mdi-account"
                        theme="dark"
                        color="#111111"
                        size="34"
                    >
                    </v-btn>
                    <v-btn
                        icon="mdi-cart"
                        theme="dark"
                        color="#111111"
                        size="34"
                    >
                    </v-btn>
                </div>
                <v-divider class="my-3" />
                <v-list-item @click="$router.push('/mensection')"><p>BARBATI</p></v-list-item>
                <v-list-item @click="$router.push('/')"><p>FEMEI</p></v-list-item>
                <v-list-item @click="$router.push('/')"><p>INCALTAMINTE</p></v-list-item>
                <v-list-item @click="$router.push('/')"><p>ACCESORII</p></v-list-item>
                <v-list-item @click="$router.push('/')">
                    <v-btn
                        theme="dark"
                        rounded
                        color="#FF0000"
                        height="2rem"
                    >
                        <p class="btn-text">REDUCERI</p>
                    </v-btn>
                </v-list-item>
                <v-list-item @click="$router.push('/')">
                    <v-btn
                        theme="dark"
                        rounded
                        color="#111111"
                        height="2rem"
                    >
                        <p class="btn-text">LTD. EDITION</p>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
      <NuxtPage />
      <footer-section />
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
const router = useRouter()

const drawer = ref(false)
</script>

<style scoped lang="scss">
    .drawer-logo {
        margin: 1rem 0 0 1rem;
        cursor: pointer;
    }

    .v-list-item {
        p {
            font-weight: bold;
        }
    }
</style>
