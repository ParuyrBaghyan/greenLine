"use client";
import myImageLoader from "@/utils/imageLoader";
import Image from "next/image";
import style from './productImage.module.scss'

export default function ProductImage() {
  return (
    <div className={style.product_image_box}>
      <Image
        src="https://media.yerevan-city.am/api/Image/Resize/ProductPhoto/1048419.png"
        alt="product"
        width={230}
        height={244}
        loader={myImageLoader}
      />
    </div>
  );
}
