<template>
  <div>
    <p>Current route: {{ route.path }}</p>
    <v-btn color="red">Hello</v-btn>
  </div>
</template>


<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="scss">
</style>