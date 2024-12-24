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
type FormDataType = {
  filter: Record<string, string[]>;
  search: string;
};
type ProductItemType = {
  id: number;
  imageURL: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  color: string;
};
const itemFilterCriteria = {
  Color: ['Red', 'Blue', 'Green'],
  Gender: ['Man', 'Woman'],
  Price: ['0 - Rs 250', 'Rs 251 - 450', 'Rs 450'],
  Type: ['Polo', 'Hoodie', 'Basic'],
};
const form = reactive({
  filter: { Color: [], Gender: [], Price: [], Type: [] } as Record<string, string[]>,
  search: '' as string,
}) as FormDataType;
const { data, status } = useFetch<ProductItemType[]>('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');
</script>

<style scoped></style>
