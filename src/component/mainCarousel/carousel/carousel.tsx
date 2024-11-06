import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Banner from "@/services/interface/banners/bannerModel";
import Image from "next/image";
import myImageLoader from "@/helperFunctions/imageLoader";
import './slider.scss'
import { MainCarouselSettings } from "@/utils/sliderSettings";

interface BannersCarouselProps {
  banners: Banner[];
}

function Carousel({ banners }: BannersCarouselProps) {

  
  return (
    <div className="slider-container" id="main_container_carousel">
      <Slider {...MainCarouselSettings}>
        {banners?.map((banner) => {
          return (
            <Image
              key={banner.id}
              src={banner.path}
              width={350}
              height={450}
              alt="Banner"
              loader={myImageLoader}
              priority
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
