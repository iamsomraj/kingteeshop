<template>
  <div class="flex border items-center justify-start rounded">
    <div class="flex w-40 justify-center items-center">
      <img
        :src="cart.imageURL"
        :alt="cart.name"
        class="w-32 h-32 object-cover"
      />
    </div>
    <div class="flex justify-between items-center grow">
      <div class="flex grow flex-col gap-2 p-4">
        <div class="text-lg font-semibold">{{ cart.name }}</div>
        <div class="text-sm">{{ cart.type }}</div>
        <div class="text-sm">{{ cart.gender }}</div>
        <div class="text-sm">{{ cart.color }}</div>
        <div class="text-sm">{{ cart.price }} {{ cart.currency }}</div>
      </div>
      <div class="flex flex-col gap-2 p-4">
        <div class="flex justify-center items-center gap-2">
          <button
            class="flex items-center justify-center gap-2 rounded-lg p-2 font-semibold hover:bg-gray-100 border text-center"
            @click="$emit('add:cart', cart)"
          >
            <Icon
              name="material-symbols:add"
              class="w-6 h-6 cursor-pointer"
            />
          </button>
          <div class="text-lg font-semibold">{{ cart.quantityInCart }}</div>
          <button
            class="flex items-center justify-center gap-2 rounded-lg p-2 font-semibold hover:bg-gray-100 border text-center"
            @click="$emit('remove:cart', cart)"
          >
            <Icon
              name="material-symbols:remove"
              class="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>

        <button
          class="flex items-center justify-center gap-2 rounded-lg p-2 font-semibold hover:bg-gray-100 border text-center"
          @click="$emit('delete:cart', cart)"
        >
          <Icon
            name="material-symbols:delete"
            class="w-6 h-6 cursor-pointer"
          />
          <span>Delete</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItemType } from '~/types';
defineProps<{
  cart: CartItemType;
}>();

const emit = defineEmits({
  'add:cart': (value: CartItemType) => true,
  'remove:cart': (value: CartItemType) => true,
  'delete:cart': (value: CartItemType) => true,
});
</script>

<style scoped></style>
