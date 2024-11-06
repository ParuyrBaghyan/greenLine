"use client";
import style from "../../specialItems/specialItems.module.scss";
import SpecialItemsModel from "@/services/interface/specialItems/specialItemsModel";
import SpecialItemsLoader from "@/component/specialItems/specialItemsLoader";
import ProductsSlider from "@/component/specialItems/productsSlider/productsSlider";
import { useGetFreqSearchedQuery } from "@/services/search/search";
import classes from "./freqSearched.module.scss";

export default function FreqSearched() {
  const { data, isLoading, isError } = useGetFreqSearchedQuery(null);

  if (isLoading) {
    return <SpecialItemsLoader isLoading={isLoading} />;
  }

  return (
    <div
      className={`${style.special_items_container} ${classes.freqSearched_items_container}`}
    >
      {data?.data?.specialItems.map(
        ({ id, title, products }: SpecialItemsModel) => {
          return (
            <ProductsSlider
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
