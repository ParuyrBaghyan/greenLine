import allProductsFilter, {
  EachItemBaseModel,
  FilterParentCategoryModel,
} from "@/services/interface/filtration/allProudctsFilter";
import CategoriesFilter from "./categoriesFilter/categoriesFilter";
import style from "./filtration.module.scss";
import { useTranslations } from "use-intl";
import DiscountsFilter from "./discountsFilter/discountsFilter";
import PriceFilter from "./priceFilter/priceFilter";
import CountryFilter from "./countryFilter/countryFilter";
import BrandsFilter from "./brandsFilter/brandsFilter";
import SubCategoriesFilter from "./subCategoriesFilter/subCategoriesFilter";
import FiltrationLoader from "./filtrationLoader/filtrationLoader";

interface AllProductsFilterProps {
  filtrationTypes: allProductsFilter;
  subCategories?: EachItemBaseModel[];
  parentCategory?: FilterParentCategoryModel;
  isLoading:boolean
}

export default function Filtration({ filtrationTypes, subCategories, parentCategory, isLoading}: AllProductsFilterProps) {
  const t = useTranslations();

  if(isLoading){
    return <FiltrationLoader />
  }

  return (
    <div className={style.filtration_container}>
      <h2>{t("filter")}</h2>
      {subCategories ? (
        <SubCategoriesFilter
          subCategories={subCategories}
          parentCategory={parentCategory}
        />
      ) : (
        null
      )}
      {filtrationTypes?.categories.length ? (
        <CategoriesFilter categories={filtrationTypes?.categories} />
      ) : (
        null
      )}
      <DiscountsFilter />
      <PriceFilter
        priceFrom={filtrationTypes?.priceFrom}
        priceTo={filtrationTypes?.priceTo}
      />
      {filtrationTypes?.brands.length ? (
        <BrandsFilter brands={filtrationTypes?.brands} />
      ) : (
        null
      )}
      <CountryFilter countries={filtrationTypes?.countries} />
    </div>
  );
}
