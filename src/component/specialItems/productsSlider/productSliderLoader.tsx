"use client";
import Product from "@/services/interface/product/productModel";
import style from "./productsSlider.module.scss";
import ProductsSliderComponent from "./slider/slider";

interface ProductsSLiderProps {
  title: string | null;
  products: Product[] | null;
  swiperId: string | null;
  isLoading: boolean;
}

export default function ProductsSilderLoader({
  title,
  products,
  swiperId,
  isLoading,
}: ProductsSLiderProps) {
  return (
    <div className={style.products_slider_container}>
      <div className={style.titleShimmerLoader}></div>
      <ProductsSliderComponent
        isLoading={isLoading}
        products={products}
        swiperId={swiperId}
      />
    </div>
  );
}
