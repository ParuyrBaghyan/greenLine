import { ProductSortEnum } from "@/types/enums";

export default function useSortBy(sortBy: number) {
  if (sortBy === ProductSortEnum.AlphabeticalAZ) {
    return ProductSortEnum.AlphabeticalAZ;
  } else if (sortBy === ProductSortEnum.PriceLowToHigh) {
    return ProductSortEnum.PriceLowToHigh;
  } else if (sortBy === ProductSortEnum.PriceHighToLow) {
    return ProductSortEnum.PriceHighToLow;
  } else if (sortBy === ProductSortEnum.AlphabeticalZA) {
    return ProductSortEnum.AlphabeticalZA;
  }
}
