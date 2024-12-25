<template>
  <div class="flex gap-10">
    <div class="hidden sm:block">
      <filters
        :criteria="shirtStore.itemFilterCriteria"
        :filter="shirtStore.form.filter"
        @update:filter="updateFilter"
      />
    </div>
    <client-only>
      <products-container
        :products="shirtStore.products"
        :filtered-products="shirtStore.filteredProducts"
        :search="shirtStore.form.search"
        @update:search="updateSearch"
        @add:cart="updateCart"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { ProductItemType } from '~/types';
const shirtStore = useShirtStore();

const updateFilter = (filter: Record<string, string[]>) => {
  shirtStore.setForm({
    filter,
  });
};

const updateSearch = (search: string) => {
  shirtStore.setForm({
    search,
  });
};

const updateCart = (product: ProductItemType) => {
  shirtStore.addToCart(product);
};
</script>

<style scoped></style>
