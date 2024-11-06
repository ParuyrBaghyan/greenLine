"use client";
import React from "react";
import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductShimmer from "@/component/product/productShimmerLoader/productShimmer";



function ProductsSliderComponentLoader() {
  const shimmerArray = Array.from({ length: 5 });
  return (
    <div id="products-slider-container">
      <div style={{ display: "flex" }}>
        {shimmerArray.map((_, index) => (
          <ProductShimmer key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSliderComponentLoader;
