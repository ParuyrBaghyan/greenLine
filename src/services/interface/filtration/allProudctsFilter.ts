import { ProductSortEnum } from "@/types/enums";
import Brand from "../brands/brandModel";

export default interface allProductsFilter {
  brands: Brand[];
  categories: EachItemBaseModel[];
  countries: EachItemBaseModel[];
  priceFrom: number;
  priceTo: number;
}

export interface EachItemBaseModel {
  id: number;
  name: string | null;
}

export interface FilterParentCategoryModel {
  categoryId: number;
  categoryName: string;
  isAdult: boolean;
  parentCategoryId: number | null;
}


export interface SortByArrayModel {
  type: ProductSortEnum
  title: string
}