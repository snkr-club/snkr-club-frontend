<template>
    <div class="wemen-header-outer">
        <div class="wemen-header-inner">
            <h1>FEMEI</h1>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wemen-header-outer {
  min-height: 20rem !important;
  width: 100%;
  background-image: url("/hero-barbati.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 5rem;
}

.wemen-header-inner {
  max-width: 74rem;
  min-height: 20rem;
  margin: 0 auto;
  padding-top: 7rem;
  display: flex;
  align-items: flex-end;
  padding-bottom: 1.5rem;
  h1 {
    font-family: "Space Grotesk", sans-serif;
    color: white;
    font-size: 3.75rem;
  }
}

@media only screen and (max-width: 1070px) {
  .wemen-header-inner {
    justify-content: center;
  }
}
</style>