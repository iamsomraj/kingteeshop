<template>
  <nav class="border-b sticky top-0 z-10 bg-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-2xl font-bold">
        <nuxt-link to="/">King's Tee Shop</nuxt-link>
      </div>

      <div class="flex items-center justify-items-end gap-4">
        <nuxt-link
          to="/"
          class="flex items-center gap-2 rounded-lg border-2 border-gray-700 p-2 font-semibold hover:bg-gray-100"
        >
          <Icon
            name="material-symbols:list"
            class="w-6 h-6 cursor-pointer"
          />
          <span>Products</span>
        </nuxt-link>
        <nuxt-link
          to="/cart"
          class="flex items-center rounded border p-2 relative hover:bg-gray-100"
        >
          <Icon
            name="material-symbols:add-shopping-cart"
            class="w-6 h-6 cursor-pointer"
          />
          <span
            v-if="productStore.cart.length > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center"
          >
            {{ productStore.cart.length }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const productStore = useShirtStore();
</script>

<style scoped></style>
