<template>
  <div
    v-if="shirtStore.cart.length > 0"
    class="flex flex-col gap-4"
  >
    <cart-item
      v-for="cart in shirtStore.computedCart"
      :key="cart.id"
      :cart="cart"
      @add:cart="shirtStore.addToCart"
      @remove:cart="shirtStore.removeFromCart"
      @delete:cart="shirtStore.deleteFromCart"
    />
  </div>
  <div
    v-else
    class="flex items-center justify-center h-96 gap-4"
  >
    <Icon
      name="material-symbols:shopping-cart"
      class="w-12 h-12"
    />
    <div class="text-2xl font-semibold">Cart is empty</div>
  </div>
</template>

<script setup lang="ts">
const shirtStore = useShirtStore();
</script>

<style scoped></style>
