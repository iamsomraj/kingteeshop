import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { ColorType, FormDataType, GenderType, PriceType, ProductItemType, ShirtType } from '~/types';

export const useProductsStore = defineStore('productsStore', () => {
  const itemFilterCriteria = {
    Color: ['Red', 'Blue', 'Green'] as ColorType[],
    Gender: ['Men', 'Women'] as GenderType[],
    Price: ['0-Rs250', 'Rs251-450', 'Rs 450'] as PriceType[],
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
      } as Record<PriceType, (price: number) => boolean>;
      const priceMatch = form.filter.Price.length ? form.filter.Price.some((selectedPrice) => priceFilterMap[selectedPrice as PriceType](product.price)) : true;
      const typeMatch = form.filter.Type.length ? form.filter.Type.map((selectedType) => selectedType.toLowerCase()).includes(product.type.toLowerCase()) : true;
      return searchMatch && genderMatch && colorMatch && priceMatch && typeMatch;
    });
  });

  const setForm = ({ filter, search }: { filter?: typeof form.filter; search?: typeof form.search }) => {
    if (filter) {
      form.filter = { ...form.filter, ...filter };
    }
    if (search) {
      form.search = search;
    }
  };

  return {
    itemFilterCriteria,
    form,
    products: products?.value || [],
    filteredProducts,
    setForm,
  };
});
