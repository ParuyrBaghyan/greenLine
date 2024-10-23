"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand from "@/services/interface/brands/brandModel";
import CarouselItem from "../carouselItem/carouselItem";
import "./carousel.scss";
import { BrandCarouselSettings } from "@/utils/sliderSettings";

interface CarouselProps {
  brands: Brand[];
}


function BrandCarousel({ brands }: CarouselProps) {


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
