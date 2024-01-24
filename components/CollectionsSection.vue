<template>
    <div class="outer-container">
        <div class="inner-container">
            <div class="collection" id="first">
                <v-card class="collection-btn outline-effect-btn-white" @click="() => console.log('test')">
                    <template v-slot:prepend>
                        <h3>NIKE AIRFORCE 1</h3>
                        <p>Descopera colectia AirForce 1</p>
                    </template>
                    <template v-slot:append>
                        <img src="/arrow-right.svg" />
                    </template>
                </v-card>
            </div>
            <div class="collection" id="second">
                <v-card class="collection-btn outline-effect-btn-white" @click="() => console.log('test')">
                    <template v-slot:prepend>
                        <h3>NIKE AIRMAX</h3>
                        <p>Descopera colectia</p>
                    </template>
                    <template v-slot:append>
                        <img src="/arrow-right.svg" />
                    </template>
                </v-card>
            </div>
            <div class="collection" id="third">
                <v-card class="collection-btn outline-effect-btn-white" @click="() => console.log('test')">
                    <template v-slot:prepend>
                        <h3>REDUCERI</h3>
                        <p>Vezi toate reducerile noastre</p>
                    </template>
                    <template v-slot:append>
                        <img src="/arrow-right.svg" />
                    </template>
                </v-card>
            </div>
            <div class="collection" id="fourth">
                <v-card class="collection-btn outline-effect-btn-white" @click="() => console.log('test')">
                    <template v-slot:prepend>
                        <h3>EDITIE LIMITATA</h3>
                        <p>Grabeste-te, stoc limitat</p>
                    </template>
                    <template v-slot:append>
                        <img src="/arrow-right.svg" />
                    </template>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .outer-container {
        width: 100vw;
        background-color: #F9F9F9;
        padding: 100px 0;
    }

    .inner-container {
        margin: 0 auto;
        max-width: 74rem;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

    }

    .collection {
        background-color: #00acc1;
        min-height: 300px;
        //max-width: 850px;
        min-width: 350px;
        position: relative;
    }

    #first {
        flex: 1 1 65%;
        background-image: url("/af1.png");
        background-size: cover;
    }
    #second {
        flex: 1 1 25%;
        background-image: url("/airmax.png");
        background-size: cover;
    }
    #third {
        flex: 1 1 48%;
        background-image: url("/reduceri.png");
        background-size: cover;
    }
    #fourth {
        flex: 1 1 48%;
        background-image: url("/lmtd-edition.png");
        background-size: cover;
    }

    .collection-btn {
        width: 75%;
        text-align: left;
        background-color: white;
        box-shadow: none;
        border-radius: 0;
        padding: 12px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        max-width: 550px;
        min-width: 300px;
        h3 {
            font-size: 30px;
            margin-bottom: 0;
            line-height: 35px;
        }
        img {
            width: 45px;
        }
    }

    @media only screen and (max-width: 480px) {
        .collection-btn {
            min-width: 340px;
        }
    }
</style>
