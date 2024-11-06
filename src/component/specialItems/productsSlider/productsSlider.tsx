"use client";
import Product from "@/services/interface/product/productModel";
import style from "./productsSlider.module.scss";
import ProductsSliderComponent from "./slider/slider";
import ProductsSilderLoader from "./productSliderLoader";

interface ProductsSLiderProps {
  title: string | null;
  products: Product[] | null;
  swiperId: string | null;
  isLoading: boolean;
}

export default function ProductsSilder({
  title,
  products,
  swiperId,
  isLoading,
}: ProductsSLiderProps) {
  if (isLoading) {
    return (
      <ProductsSilderLoader
        title={null}
        isLoading={isLoading}
        products={products}
        swiperId={swiperId}
      />
    );
  }
  return (
    <div className={style.products_slider_container}>
      <h2>{title}</h2>
      <ProductsSliderComponent
        isLoading={isLoading}
        products={products}
        swiperId={swiperId}
      />
    </div>
  );
}
