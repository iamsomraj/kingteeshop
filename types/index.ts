export type ColorType = 'Red' | 'Blue' | 'Green';
export type GenderType = 'Men' | 'Women';
export type ShirtType = 'Polo' | 'Hoodie' | 'Basic';
export type PriceType = '0-Rs250' | 'Rs251-450' | 'Rs 450';
export type FormDataType = {
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
  quantity: number;
};
export type CartItemType = ProductItemType & { quantityInCart: number };
