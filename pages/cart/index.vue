<template>
  <div class="flex flex-col gap-4">
    <cart-item
      v-for="cart in shirtsStore.computedCart"
      :key="cart.id"
      :cart="cart"
      @add:cart="shirtsStore.addToCart"
      @remove:cart="shirtsStore.removeFromCart"
      @delete:cart="shirtsStore.deleteFromCart"
    />
  </div>
</template>

<script setup lang="ts">
const shirtsStore = useShirtStore();
</script>

<style scoped></style>
