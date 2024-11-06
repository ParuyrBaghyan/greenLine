"use client";
import { useGetActiveCollectionsQuery } from "@/services/banners/banners";
import style from "./mainCarouselBottom.module.scss";
import Promo from "@/services/interface/banners/promoModel";
import UnderCarouselItem from "../underCarouselItem/underCarouselItem";

export default function MainCarouselBottom() {
  const { data, isError, isLoading } = useGetActiveCollectionsQuery({});

  if (isLoading) return null;
  return (
    <div className={style.main_carousel_bottom}>
      {data?.data?.promoCollections.map((promo: Promo) => {
        return (
          <UnderCarouselItem
          key={promo.id}
            src={promo.coverPhoto}
            alt="title"
            width={636}
            height={200}
            
          />
        );
      })}
    </div>
  );
}
