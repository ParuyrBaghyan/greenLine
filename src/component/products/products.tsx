import Product from "@/services/interface/product/productModel";
import style from "./products.module.scss";
import ProductsGrid from "./productsGrid/productsGrid";
import SortBy from "../filtration/sortBy/sortBy";

interface ProductsProps {
  products: Product[];
  title: string;
  isLoading:boolean
}

export default function Products({ products, title , isLoading }: ProductsProps) {

  return (
    <div className={style.products_container}>
      <div className={style.products_container_top}>
        <h2>{title}</h2>
        <SortBy/>
      </div>
      <ProductsGrid isLoading={isLoading} products={products} />
    </div>
  );
}