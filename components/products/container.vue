<template>
  <div class="flex flex-col gap-4">
    <product-search />
    <product-list />
  </div>
</template>

<script setup lang="ts">
import ProductSearch from '@/components/products/product-search.vue'
import ProductList from '@/components/products/product-list.vue'
</script>

<style scoped></style>
