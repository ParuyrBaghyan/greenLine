"use client";
import myImageLoader from "@/helperFunctions/imageLoader";
import Image from "next/image";
import style from "./productImage.module.scss";
import DiscountBedge from "@/component/UI/discountBedge/discountBedge";

interface ProductImageProps {
  src: string;
  alt: string;
  percent?: number
}

export default function ProductImage({ src, alt, percent }: ProductImageProps) {
  return (
    <div className={style.product_image_box}>

      <Image
        src={src}
        alt={alt}
        width={230}
        height={244}
        loader={myImageLoader}
      />
    </div>
  );
}
