"use client";
import { useGetTrendingBrandsQuery } from "@/services/brands/brands";
import style from "./brandsCarousel.module.scss";
import BrandCarousel from "./carousel/carousel";
import BrandsCarouselLoader from "./brandsCarouselLoader";

interface BrandsCarouselProps {
  title: string;
}

export default function BrandsCarousel({ title }: BrandsCarouselProps) {
  const { data, isLoading, isError } = useGetTrendingBrandsQuery(null);

  if (isLoading) return (
   <BrandsCarouselLoader title={null} isLoading={isLoading}/>
  );

  return (
    <div className={style.brand_carousel}>
      <h2>{title}</h2>
      <BrandCarousel isLoading={isLoading} brands={data?.data.brands} />
    </div>
  );
}
