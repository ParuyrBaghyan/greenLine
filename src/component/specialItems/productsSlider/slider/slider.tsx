"use client";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "@/component/product/product";
import ProductModel from "@/services/interface/product/productModel";
import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ProductsSliderComponentLoader from "./sliderLoader";

interface ProductsSliderComponentProps {
  products: ProductModel[] | null;
  swiperId: string | null;
  isLoading: boolean;
}

function ProductsSliderComponent({
  products,
  swiperId,
  isLoading,
}: ProductsSliderComponentProps) {
  if (isLoading) {
    return <ProductsSliderComponentLoader />;
  }

  return (
    <div id="products-slider-container">
      <div className={`swiper-btn-prev custom-prev-${swiperId}`}>
        <MdArrowBackIos />
      </div>
      <div className={`swiper-btn-next custom-next-${swiperId}`}>
        <MdArrowForwardIos />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          prevEl: `.custom-prev-${swiperId}`,
          nextEl: `.custom-next-${swiperId}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {products?.map((product: ProductModel) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsSliderComponent;
