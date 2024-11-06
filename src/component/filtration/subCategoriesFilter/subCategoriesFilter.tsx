import {
  EachItemBaseModel,
  FilterParentCategoryModel,
} from "@/services/interface/filtration/allProudctsFilter";
import style from "./subCategoriesFilter.module.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useUpdateUrl } from "@/hooks/useUpdateUrl";
import { ProductSortEnum } from "@/types/enums";

interface SubCategoriesFilterProps {
  subCategories?: EachItemBaseModel[];
  parentCategory?: FilterParentCategoryModel;
}

export default function SubCategoriesFilter({ subCategories, parentCategory }: SubCategoriesFilterProps) {
  const { updateUrl } = useUpdateUrl();

  function showCategoryProductsHandler(categoryId: number | null) {
    categoryId !== null
      ? updateUrl({
        id: categoryId,
        sortBy: ProductSortEnum.PriceHighToLow,
        section: "categories",
        page: 1,
        priceTo: 0,
        priceFrom: 0
      })
      : null;
  }

  return (
    <div className={style.sub_categories_filter_container}>
      {parentCategory?.parentCategoryId ? (
        <span
          onClick={() =>
            showCategoryProductsHandler(parentCategory.parentCategoryId)
          }
        >
          <MdOutlineArrowBackIosNew />
          <p>{parentCategory?.categoryName}</p>
        </span>
      ) : (
        <span>{parentCategory?.categoryName}</span>
      )}

      <div>
        {subCategories?.map((item) => {
          return (
            <p
              key={item.id}
              onClick={() => showCategoryProductsHandler(item.id)}
            >
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
