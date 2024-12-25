<template>
  <div class="flex gap-10">
    <filters
      :criteria="shirtsStore.itemFilterCriteria"
      :filter="shirtsStore.form.filter"
      @update:filter="updateFilter"
    />
    <client-only>
      <products-container
        :products="shirtsStore.products"
        :filtered-products="shirtsStore.filteredProducts"
        :search="shirtsStore.form.search"
        @update:search="updateSearch"
        @add:cart="updateCart"
      />
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { ProductItemType } from '~/types';
const shirtsStore = useShirtStore();

const updateFilter = (filter: Record<string, string[]>) => {
  shirtsStore.setForm({
    filter,
  });
};

const updateSearch = (search: string) => {
  shirtsStore.setForm({
    search,
  });
};

const updateCart = (product: ProductItemType) => {
  shirtsStore.addToCart(product);
};
</script>

<style scoped></style>
