<template>
  <div class="flex gap-10">
    <filters
      :criteria="itemFilterCriteria"
      :filter="form.filter"
      @update:filter="form.filter = $event"
    />
    <products-container
      :products="filteredProducts"
      :search="form.search"
      @update:search="form.search = $event"
    />
  </div>
</template>

<script setup lang="ts">
type ColorType = 'Red' | 'Blue' | 'Green';
type GenderType = 'Men' | 'Women';
type ShirtType = 'Polo' | 'Hoodie' | 'Basic';
type FormDataType = {
  filter: Record<string, string[]>;
  search: string;
};
export type ProductItemType = {
  id: number;
  imageURL: string;
  name: string;
  type: ShirtType;
  price: number;
  currency: string;
  color: ColorType;
  gender: GenderType;
};
const itemFilterCriteria = {
  Color: ['Red', 'Blue', 'Green'] as ColorType[],
  Gender: ['Men', 'Women'] as GenderType[],
  Price: ['0-Rs250', 'Rs251-450', 'Rs 450'],
  Type: ['Polo', 'Hoodie', 'Basic'] as ShirtType[],
};

const form = reactive({
  filter: { Color: [], Gender: [], Price: [], Type: [] } as Record<string, string[]>,
  search: '' as string,
}) as FormDataType;
const { data: products } = useFetch<ProductItemType[]>('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');

const filteredProducts = computed(() => {
  return (products?.value || []).filter((product) => {
    const search = form.search.toLowerCase();
    const searchMatch = search ? product.name.toLowerCase().includes(search) || product.color.toLowerCase().includes(search) || product.type.toLowerCase().includes(search) : true;
    const genderMatch = form.filter.Gender.length ? form.filter.Gender.map((selectedGender) => selectedGender.toLowerCase()).includes(product.gender.toLowerCase()) : true;
    const colorMatch = form.filter.Color.length ? form.filter.Color.map((selectedColor) => selectedColor.toLowerCase()).includes(product.color.toLowerCase()) : true;
    const priceFilterMap = {
      '0-Rs250': (price: number) => price <= 250,
      'Rs251-450': (price: number) => price >= 251 && price <= 450,
      'Rs 450': (price: number) => price >= 450,
    };
    const priceMatch = form.filter.Price.length ? form.filter.Price.some((selectedPrice) => priceFilterMap[selectedPrice as keyof typeof priceFilterMap](product.price)) : true;
    const typeMatch = form.filter.Type.length ? form.filter.Type.map((selectedType) => selectedType.toLowerCase()).includes(product.type.toLowerCase()) : true;
    return searchMatch && genderMatch && colorMatch && priceMatch && typeMatch;
  });
});
</script>

<style scoped></style>
