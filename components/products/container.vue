<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex justify-between items-center gap-4">
      <product-search
        :search="search"
        @update:search="$emit('update:search', $event)"
      />
      <button
        class="flex sm:hidden shrink-0 items-center rounded border px-4 py-2 gap-2 text-gray-400 font-medium hover:bg-gray-100"
        @click="toggleFilter"
      >
        <Icon
          name="material-symbols:filter-alt"
          class="w-6 h-6 cursor-pointer"
          :class="{
            'text-gray-400': !showFilter,
            'text-gray-600': showFilter,
          }"
        />
      </button>
    </div>
    <div class="block sm:hidden">
      <filters
        v-if="showFilter"
        :criteria="shirtStore.itemFilterCriteria"
        :filter="shirtStore.form.filter"
        @update:filter="updateFilter"
      />
    </div>
    <product-list
      :products="filteredProducts"
      @add:cart="$emit('add:cart', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import ProductSearch from '~/components/products/product-search.vue';
import ProductList from '~/components/products/product-list.vue';
import type { ProductItemType } from '~/types';

defineProps<{
  search: string;
  products: ProductItemType[];
  filteredProducts: ProductItemType[];
}>();

const emit = defineEmits({
  'update:search': (value: string) => true,
  'add:cart': (value: ProductItemType) => true,
});

const shirtStore = useShirtStore();

const showFilter = ref(false);

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};

const updateFilter = (filter: Record<string, string[]>) => {
  shirtStore.setForm({
    filter,
  });
};
</script>

<style scoped></style>
