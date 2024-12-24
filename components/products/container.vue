<template>
  <div class="flex flex-col gap-4">
    <product-search
      :search="search"
      @update:search="$emit('update:search', $event)"
    />
    <product-list />
  </div>
</template>

<script setup lang="ts">
import ProductSearch from '@/components/products/product-search.vue';
import ProductList from '@/components/products/product-list.vue';

defineProps<{
  search: string;
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
});
</script>

<style scoped></style>
