"use client";
import style from "./specialItems.module.scss";
import ProductsSilder from "./productsSlider/productsSlider";

interface SpecialItemsLoaderProp{
    isLoading:boolean
}

export default function SpecialItemsLoader({isLoading}:SpecialItemsLoaderProp) {
  const shimmerArray = Array.from({ length: 2 });
  return (
    <div className={style.special_items_container}>
      {shimmerArray.map((_, index) => {
        return (
          <ProductsSilder
            key={index}
            title={null}
            products={null}
            swiperId={null}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}
