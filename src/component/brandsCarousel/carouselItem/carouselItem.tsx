import Brand from "@/services/interface/brands/brandModel";
import style from "./carouselItem.module.scss";
import Image from "next/image";

interface BrandProps {
  brand: Brand;
}

export default function CarouselItem({ brand }: BrandProps) {
  return (
    <div className={style.carousel_item}>
      <Image
        src={brand?.photo || ""}
        alt={brand.name}
        width={170}
        height={170}
      />
    </div>
  );
}
