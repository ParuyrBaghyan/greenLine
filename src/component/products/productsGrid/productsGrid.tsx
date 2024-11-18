import ProductModel from "@/services/interface/product/productModel";
import style from "./productsGrid.module.scss";
import Product from "@/component/product/product";
import ProductsGridLoader from "./productsGridLoader/productsGridLoader";

interface ProductsGridProps {
  products: ProductModel[];
  isLoading: boolean
}

export default function ProductsGrid({ products, isLoading }: ProductsGridProps) {

  if (isLoading) {
    return <ProductsGridLoader />
  }

  return (
    <div className={style.products_grid}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}