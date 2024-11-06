"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";
import BrandCarouselItemshimmerLoader from "../carouselItem/shimmerLoader/brandCarouselshimmerLoader";

function BrandCarouselLoader() {
  
    const shimmerArray = Array.from({ length: 6 });
    return (
      <div className="slider-container" id="brand_carousel">
        <div style={{ display: "flex" }}>
          {shimmerArray.map((_, index) => (
            <BrandCarouselItemshimmerLoader key={index} />
          ))}
        </div>
      </div>
    );
  }


export default BrandCarouselLoader;
