"use client";
import { useGetTrendingBrandsQuery } from "@/services/brands/brands";
import style from "./brandsCarousel.module.scss";
import BrandCarousel from "./carousel/carousel";

interface BrandsCarouselProps{
    title:string
}

export default function BrandsCarousel({title}:BrandsCarouselProps) {
  const { data, isLoading, isError } = useGetTrendingBrandsQuery(null);

  if (isLoading) return null;

  return (
    <div className={style.brand_carousel}>
      <h2>{title}</h2>
      <BrandCarousel brands={data.data.brands} />
    </div>
  );
}
