export default interface Product {
    categoryName: string;
    discountPercent: number;
    discountedPrice: number;
    id: number;
    isCuttable: boolean;
    isFavorite: boolean;
    isGrindable: boolean;
    isKilogram: boolean;
    minimumWeight: number | null;
    name: string;
    photo: string;
    price: number;
    specialItemId: number;
    stockDetails: any | null; 
    unitOfMeasure: number;
    unitOfMeasureValue: number;
    visiblePrice: number;
    weightStep: number | null;
  }