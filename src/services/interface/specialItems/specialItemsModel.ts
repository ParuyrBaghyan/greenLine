import Product from "../product/productModel";

export default interface SpecialItems {
  id: number;
  products: Product[];
  title: string;
}
