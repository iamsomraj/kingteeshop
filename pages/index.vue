<template>
  <div class="flex gap-4">
    <filters
      :criteria="itemFilterCriteria"
      :filter="form.filter"
      @update:filter="form.filter = $event"
    />
    <products-container
      :search="form.search"
      @update:search="form.search = $event"
    />
  </div>
</template>

<script setup lang="ts">
type FormData = {
  filter: Record<string, string[]>;
  search: string;
};
const itemFilterCriteria = {
  Color: ['Red', 'Blue', 'Green'],
  Gender: ['Man', 'Woman'],
  Price: ['0 - Rs 250', 'Rs 251 - 450', 'Rs 450'],
  Type: ['Polo', 'Hoodie', 'Basic'],
};

const form = reactive({
  filter: { Color: [], Gender: [], Price: [], Type: [] },
  search: '',
}) as FormData;
</script>

<style scoped></style>
