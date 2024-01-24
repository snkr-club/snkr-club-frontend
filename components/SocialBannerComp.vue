<template>
    <div class="outer-container">
        <div class="inner-container">
            <h1>URMARESTE-NE SI PE SOCIAL</h1>
            <div id="facebook" class="social-btn"></div>
            <div id="instagram" class="social-btn"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
    .outer-container {
        min-height: 13.5rem;
        width: 100%;
        background-color: #A38D58;
        //background-image: url("/grid-black.png");
        //background-size: cover;
        //background-repeat: repeat;
        position: relative;
        .social-btn {
            width: 72px;
            height: 72px;
            //position: absolute;
        }
    }

    .inner-container {
        max-width: 74rem !important;
        min-height: 13.5rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 2rem 2rem;
        h1 {
            //line-height: 13.5rem;
            margin: 0 !important;
            font-size: 50px;
            color: white;
            text-align: center;
        }
    }

    #facebook {
        //top: 72px;
        //left: 1004px;
        background-image: url("/fb.svg");
    }

    #instagram {
        //top: 72px;
        //left: 1147px;
        background-image: url("/insta.svg");
    }
</style>