"use client";
import { useGetSpecialItemsQuery } from "@/services/products/products";
import style from "./specialItems.module.scss";
import ProductsSilder from "./productsSlider/productsSlider";
import SpecialItemsModel from "@/services/interface/specialItems/specialItemsModel";
import SpecialItemsLoader from "./specialItemsLoader";

export default function SpecialItems() {
  const { data, isLoading, isError } = useGetSpecialItemsQuery(null);

  if (isLoading) {
   return <SpecialItemsLoader isLoading={isLoading}/>
  }

  return (
    <div className={style.special_items_container}>
      {data?.data?.specialItems.map(
        ({ id, title, products }: SpecialItemsModel) => {
          return (
            <ProductsSilder
              key={id}
              title={title}
              products={products}
              swiperId={id.toString()}
              isLoading={isLoading}
            />
          );
        }
      )}
    </div>
  );
}
