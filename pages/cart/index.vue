<template>
  <div
    v-if="shirtStore.cart.length > 0"
    class="flex flex-col gap-8 mb-20"
  >
    <div class="flex flex-col gap-4">
      <cart-item
        v-for="cart in shirtStore.computedCart"
        :key="cart.id"
        :cart="cart"
        @add:cart="shirtStore.addToCart"
        @remove:cart="shirtStore.removeFromCart"
        @delete:cart="shirtStore.deleteFromCart"
      />
    </div>

    <div class="flex justify-between items-center gap-4">
      <div class="text-2xl font-semibold">Total: ${{ total }}</div>
      <button class="flex items-center gap-2 rounded-lg border-2 border-gray-700 p-2 font-semibold hover:bg-gray-100">
        <Icon
          name="material-symbols:attach-money-rounded"
          class="w-6 h-6 cursor-pointer"
        />
        <span>Checkout</span>
      </button>
    </div>
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

const total = computed(() => {
  return shirtStore.computedCart.reduce((acc, cart) => {
    return acc + cart.price * cart.quantityInCart;
  }, 0);
});
</script>

<style scoped></style>
