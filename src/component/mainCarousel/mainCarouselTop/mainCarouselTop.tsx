"use client";
import Banner from "@/services/interface/banners/bannerModel";
import Carousel from "../carousel/carousel";
import SingleBanner from "../singleBanner/singleBanner";
import style from "./mainCarouselTop.module.scss";
import { useGetBannersQuery } from "@/services/banners/banners";
import CarouselShimmerLoader from "../carousel/shimmerLoader/carouselShimmerLoader";

export default function MainCarouselTop() {
  const { data, isError, isLoading } = useGetBannersQuery({ type: 2 });

  if (isLoading)
    return (
      <div className={style.main_carousel_top}>
        <CarouselShimmerLoader />
      </div>
    );

  return (
    <div className={style.main_carousel_top}>
      <Carousel
        banners={data?.data?.banners.slice(2, data.data.banners.length)}
      />

      {data?.data?.banners.slice(0, 2).map((banner: Banner) => (
        <SingleBanner
          key={banner.id}
          src={banner.path}
          alt="img"
          width={400}
          height={217}
        />
      ))}
    </div>
  );
}
