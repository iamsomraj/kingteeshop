<template>
  <div
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
        <div class="text-sm">{{ product.gender }}</div>
        <div class="text-sm">{{ product.color }}</div>
        <div class="text-sm">{{ product.price }} {{ product.currency }}</div>
        <button
          class="flex items-center justify-center gap-2 rounded-lg p-2 font-semibold hover:bg-gray-100 border text-center"
          @click="addToCartHandler"
        >
          <Icon
            name="material-symbols:add-shopping-cart"
            class="w-6 h-6 cursor-pointer"
          />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductItemType } from '~/types';
const props = defineProps<{
  product: ProductItemType;
}>();

const emit = defineEmits({
  'add:cart': (value: ProductItemType) => true,
});

const addToCartHandler = () => {
  emit('add:cart', props.product);
};
</script>

<style scoped></style>
