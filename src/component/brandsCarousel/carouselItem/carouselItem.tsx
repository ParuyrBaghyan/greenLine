import Brand from "@/services/interface/brands/brandModel";
import style from "./carouselItem.module.scss";
import Image from "next/image";
import { ProductSortEnum } from "@/types/enums";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";

interface CarouselItemProps {
  brand: Brand;
}

export default function CarouselItem({ brand }: CarouselItemProps) {
  const { updateUrl } = useUpdateUrl();

  function getByBrandHandler() {
    
    updateUrl({
      id: brand.id,
      sortBy: ProductSortEnum.PriceHighToLow,
      section: "brands",
      page: 1,
      priceTo: null,
      priceFrom: null
    });
  }

  return (
    <div className={style.carousel_item} onClick={getByBrandHandler}>
      <Image
        src={brand.photo || "/fallback-image.jpg"}
        alt={brand.name || "Brand Image"}
        width={170}
        height={170}
      />
    </div>
  );
}
