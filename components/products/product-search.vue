<template>
  <form
    class="flex items-center justify-start gap-4 w-full"
    @submit.prevent="searchHandler"
  >
    <input
      type="text"
      placeholder="Search for products"
      class="border rounded p-2 grow"
      v-model="searchTerm"
    />
    <button
      type="submit"
      class="search-button-container flex items-center rounded border px-4 py-2 gap-2 text-gray-400 font-medium hover:bg-gray-100"
    >
      <Icon
        name="material-symbols:search"
        class="w-6 h-6 cursor-pointer"
      />
      <span class="hidden sm:block">Search</span>
    </button>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  search: string;
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
});

const searchTerm = ref('');

const searchHandler = () => {
  emit('update:search', searchTerm.value);
};
</script>

<style scoped></style>
