<template>
  <div class="grid grid-cols-3">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-col gap-4"
    >
      <div class="flex gap-4">
        <img
          :src="product.imageURL"
          :alt="product.name"
          class="w-32 h-32 object-cover rounded-lg"
        />
        <div class="flex flex-col gap-2">
          <div class="text-lg font-semibold">{{ product.name }}</div>
          <div class="text-sm">{{ product.type }}</div>
          <div class="text-sm">{{ product.color }}</div>
          <div
            class="text-sm"
            :class="{ 'text-red-500': product.price >= 450, 'text-green-500': product.price <= 250 }"
          >
            {{ product.price }} {{ product.currency }}
          </div>
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
