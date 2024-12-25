<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <product-list-item
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add:cart="$emit('add:cart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import productListItem from '~/components/products/product-list-item.vue';
import type { ProductItemType } from '~/types';

defineProps<{
  products: ProductItemType[];
}>();

defineEmits({
  'add:cart': (value: ProductItemType) => true,
});
</script>

<style scoped></style>
