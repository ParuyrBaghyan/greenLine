export interface ProductDetails {
    additionalPhotos: string[];
    attributeGroup: string | null;
    attributeGroupCount: number;
    barcodes: string[];
    brandId: number;
    brandImageUrl: string | null;
    brandName: string;
    bruttoWeight: number;
    cartCount: number;
    cartWeight: number;
    categories: Categories;
    category: string;
    categoryId: number;
    countInBlock: number;
    country: string | null;
    countryId: number;
    description: string | null;
    discountedPrice: number;
    guide: string | null;
    height: number;
    id: number;
    ingredients: string | null;
    isAttributeAttached: boolean;
    isBag: boolean;
    isCuttable: boolean;
    isFavorite: boolean;
    isGrindable: boolean;
    isKilogram: boolean;
    length: number;
    manufacturer: string | null;
    manufacturerId: number | null;
    manufacturerPhoto: string | null;
    minimumWeight: number | null;
    name: string;
    nutritions: string[];
    photo: string;
    pictures: string[];
    price: number;
    priority: number;
    productUOMDtos: any[]; // Specify the type if known
    promotion: string | null;
    recipes: string[];
    sapCode: string;
    stateOfFlavor: string | null;
    stateOfTaste: string | null;
    stockDetails: string | null;
    unitOfMeasure: number;
    unitOfMeasureValue: number;
    usageMethod: string | null;
    vendorId: number | null;
    visiblePrice: number;
    volume: number;
    weight: number;
    weightStep: string | null;
    width: number;
  }
  
  export interface Categories {
    length: number;
    categoryName: string;
    categoryId: number;
    children: Categories[];
  }