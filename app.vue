<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar />
    <div class="container mx-auto px-4 mt-14">
      <nuxt-page />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "King's Tee Shop",
  meta: [
    {
      name: 'description',
      content: "King's Tee Shop is a modern e-commerce web application that allows users to browse, search, and filter a catalog of t-shirts.",
    },
  ],
});
</script>

<style scoped></style>
