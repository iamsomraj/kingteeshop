<template>
  <div class="flex flex-col gap-4 w-full">
    <product-search
      :search="search"
      @update:search="$emit('update:search', $event)"
    />
    <product-list :products="products" />
  </div>
</template>

<script setup lang="ts">
import ProductSearch from '~/components/products/product-search.vue';
import ProductList from '~/components/products/product-list.vue';
import type { ProductItemType } from '~/pages/index.vue';

defineProps<{
  search: string;
  products: ProductItemType[];
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
});
</script>

<style scoped></style>
