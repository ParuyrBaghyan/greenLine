"use client";
import style from "./brandsCarousel.module.scss";
import BrandCarousel from "./carousel/carousel";

interface BrandsCarouselProps {
  title: string | null;
  isLoading:boolean
}

export default function BrandsCarouselLoader({isLoading} : BrandsCarouselProps) {

 return (
    <div className={style.brand_carousel}>
    <div className={style.titleShimmerLoader}></div>
    <BrandCarousel isLoading={isLoading} brands={null} />
  </div>
  );


}
