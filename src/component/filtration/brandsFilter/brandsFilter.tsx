import { useTranslations } from "next-intl";
import style from "./brandsFilter.module.scss";
import FilterEachItem from "../filterEachItem/filterEachItem";
import { EachItemBaseModel } from "@/services/interface/filtration/allProudctsFilter";
import { useShowMoreItems } from "@/hooks/useShowMoreItems";
import ShowMoreBtn from "@/component/UI/showMoreBtn/showMoreBtn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface BrandsProps {
  brands: EachItemBaseModel[];
}

export default function BrandsFilter({ brands }: BrandsProps) {
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { count, showMoreItems } = useShowMoreItems(8, 8);

  function showMoreItemsHandler() {
    showMoreItems(brands.length)
  }

  function selectItemHandler(id: number) {
    const params = new URLSearchParams(searchParams);
    const existingBrandIds = params.get("brandIds");

    let brandIdsArray = existingBrandIds ? existingBrandIds.split(",").map(Number) : [];

    if (!brandIdsArray.includes(id)) {
      brandIdsArray.push(id);
    } else {
      brandIdsArray = brandIdsArray.filter((brandId) => brandId !== id);
    }

    if (brandIdsArray.length) {
      params.set("brandIds", brandIdsArray.join(","));
      params.set("page", "1");

    } else {
      params.delete("brandIds");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  }

  return (
    <div className={style.brands_container}>
      <p>{t("filtrationTypes.manufacturer")}</p>

      <div>
        {brands?.slice(0, count).map((item) => {
          return <FilterEachItem key={item.id} item={item} filterName='brandIds' selectItemHandler={selectItemHandler} />;
        })}
      </div>
      {brands?.length > 8 && <ShowMoreBtn showMoreItemsHandler={showMoreItemsHandler} />}
    </div>
  );
}
