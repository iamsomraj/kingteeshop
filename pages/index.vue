<template>
  <div class="flex gap-10">
    <div class="hidden sm:block">
      <filters />
    </div>
    <client-only>
      <products-container />
    </client-only>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
