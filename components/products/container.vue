<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="sm:flex justify-between items-center gap-6">
      <product-search
        :search="search"
        @update:search="$emit('update:search', $event)"
      />
      <span class="text-gray-500 font-medium text-right text-sm w-full">Showing {{ filteredProducts.length }} products out of {{ products.length }}</span>
    </div>
    <product-list :products="filteredProducts" />
  </div>
</template>

<script setup lang="ts">
import ProductSearch from '~/components/products/product-search.vue';
import ProductList from '~/components/products/product-list.vue';
import type { ProductItemType } from '~/types';

defineProps<{
  search: string;
  products: ProductItemType[];
  filteredProducts: ProductItemType[];
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
});
</script>

<style scoped></style>
