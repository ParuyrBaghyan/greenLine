import { EachItemBaseModel } from "@/services/interface/filtration/allProudctsFilter";
import FilterEachItem from "../filterEachItem/filterEachItem";
import style from "./countryFilter.module.scss";
import { useTranslations } from "next-intl";
import { useShowMoreItems } from "@/hooks/useShowMoreItems";
import ShowMoreBtn from "@/component/UI/showMoreBtn/showMoreBtn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CountriesFilterProps {
  countries: EachItemBaseModel[];
}

export default function CountryFilter({ countries }: CountriesFilterProps) {
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { count, showMoreItems } = useShowMoreItems(8, 8);

  function showMoreItemsHandler() {
    showMoreItems(countries.length)
  }

  function selectItemHandler(id: number) {
    const params = new URLSearchParams(searchParams);
    const existingCountriesIds = params.get("countryIds");

    let countriesIdsArray = existingCountriesIds ? existingCountriesIds.split(",").map(Number) : [];

    if (!countriesIdsArray.includes(id)) {
      countriesIdsArray.push(id);
    } else {
      countriesIdsArray = countriesIdsArray.filter((countryId) => countryId !== id);
    }

    if (countriesIdsArray.length) {
      params.set("countryIds", countriesIdsArray.join(","));
    } else {
      params.delete("countryIds");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  }

  return (
    <div className={style.countries_container}>
      <p>{t("filtrationTypes.country")}</p>

      <div>
        {countries?.slice(0, count)?.map((item) => {
          return <FilterEachItem key={item.id} item={item} filterName='countryIds' selectItemHandler={selectItemHandler}/>;
        })}
      </div>
      {countries?.length > 8 && <ShowMoreBtn showMoreItemsHandler={showMoreItemsHandler} />}
    </div>
  );
}
