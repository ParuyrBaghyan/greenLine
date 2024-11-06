"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand from "@/services/interface/brands/brandModel";
import CarouselItem from "../carouselItem/carouselItem";
import "./carousel.scss";
import { BrandCarouselSettings } from "@/utils/sliderSettings";
import BrandCarouselLoader from "./carouselLoader";

interface CarouselProps {
  brands: Brand[] | null;
  isLoading: boolean;
}

function BrandCarousel({ brands, isLoading }: CarouselProps) {
  
  if (isLoading) {;
    return (
     <BrandCarouselLoader />
    );
  }

  return (
    <div className="slider-container" id="brand_carousel">
      <Slider {...BrandCarouselSettings}>
        {brands?.map((brand: Brand) => (
          <CarouselItem key={brand.id} brand={brand} />
        ))}
      </Slider>
    </div>
  );
}

export default BrandCarousel;
