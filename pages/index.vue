<template>
  <div class="flex gap-10">
    <filters
      :criteria="productsStore.itemFilterCriteria"
      :filter="productsStore.form.filter"
      @update:filter="
        productsStore.setForm({
          filter: $event,
        })
      "
    />
    <client-only>
      <products-container
        :products="productsStore.products"
        :filtered-products="productsStore.filteredProducts"
        :search="productsStore.form.search"
        @update:search="
          productsStore.setForm({
            search: $event,
          })
        "
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '~/stores/products';
const productsStore = useProductsStore();
</script>

<style scoped></style>
