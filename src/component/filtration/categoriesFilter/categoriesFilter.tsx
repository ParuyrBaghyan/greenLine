import { useTranslations } from "use-intl";
import style from "./categoriesFilter.module.scss";
import FilterEachItem from "../filterEachItem/filterEachItem";
import { EachItemBaseModel } from "@/services/interface/filtration/allProudctsFilter";
import { useShowMoreItems } from "@/hooks/useShowMoreItems";
import ShowMoreBtn from "@/component/UI/showMoreBtn/showMoreBtn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoriesProps {
  categories: EachItemBaseModel[];
}

export default function CategoriesFilter({ categories }: CategoriesProps) {
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { count, showMoreItems } = useShowMoreItems(8, 8);

  function showMoreItemsHandler() {
    showMoreItems(categories.length)
  }

  function selectItemHandler(id: number) {
    const params = new URLSearchParams(searchParams);
    const existingCategoriesIds = params.get("categoryIds");

    let categoriesIdsArray = existingCategoriesIds ? existingCategoriesIds.split(",").map(Number) : [];

    if (!categoriesIdsArray.includes(id)) {
      categoriesIdsArray.push(id);
    } else {
      categoriesIdsArray = categoriesIdsArray.filter((categoryId) => categoryId !== id);
    }

    if (categoriesIdsArray.length) {
      params.set("categoryIds", categoriesIdsArray.join(","));
    } else {
      params.delete("categoryIds");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  }

  return (
    <div className={style.categories_container}>
      <p>{t("filtrationTypes.categories")}</p>

      <div>
        {categories?.slice(0, count).map((item) => {
          return <FilterEachItem key={item.id} item={item} filterName='categoryIds' selectItemHandler={selectItemHandler} />;
        })}
      </div>
      {categories?.length > 8 && <ShowMoreBtn showMoreItemsHandler={showMoreItemsHandler} />}
    </div>
  );
}
