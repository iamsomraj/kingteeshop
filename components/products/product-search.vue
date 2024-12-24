<template>
  <input
    type="text"
    placeholder="Search products"
    class="border p-2"
    :value="search"
    @input="searchHandler"
  />
</template>

<script setup lang="ts">
defineProps<{
  search: string;
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
});

const searchHandler = (event: Event) => {
  emit('update:search', (event.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
