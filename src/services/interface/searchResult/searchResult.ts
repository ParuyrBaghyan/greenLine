import Product from "../product/productModel";

export default interface SearchResultModel {
    categories: any[]; 
    itemCount: number;
    pageCount: number;
    products: Product[];
    productsInOtherCategory: any[]; 
    searchBrands: any[];
  }