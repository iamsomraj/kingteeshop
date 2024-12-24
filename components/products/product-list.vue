<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-col gap-4 border rounded"
    >
      <div class="flex flex-col gap-4 divide-y">
        <div class="mx-auto p-4">
          <img
            :src="product.imageURL"
            :alt="product.name"
            class="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        <div class="flex flex-col gap-2 p-4">
          <div class="text-lg font-semibold">{{ product.name }}</div>
          <div class="text-sm">{{ product.type }}</div>
          <div class="text-sm">{{ product.color }}</div>
          <div class="text-sm">{{ product.price }} {{ product.currency }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductItemType } from '~/pages/index.vue';

defineProps<{
  products: ProductItemType[];
}>();
</script>

<style scoped></style>
