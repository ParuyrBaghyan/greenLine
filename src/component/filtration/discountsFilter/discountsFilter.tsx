import { useTranslations } from "next-intl";
import style from "./discountsFilter.module.scss";
import FilterEachItem from "../filterEachItem/filterEachItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DiscountsFilter() {
  const t = useTranslations();

  const item = {id: 1, name: t("filtrationTypes.discounts")}

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function selectItemHandler(id: number) {
    const params = new URLSearchParams(searchParams);
    const existingCountriesIds = params.get("isDiscounted");

    let discountsIdsArray = existingCountriesIds ? existingCountriesIds.split(",").map(Number) : [];

    if (!discountsIdsArray.includes(id)) {
      discountsIdsArray.push(id);
    } else {
      discountsIdsArray = discountsIdsArray.filter((discountId) => discountId !== id);
    }

    if (!params.get("isDiscounted")) {
      params.set("isDiscounted", 'true');
    } else {
      params.delete("isDiscounted");
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

  }

  return (
    <div className={style.discounts_container}>
      <p>{t("filtrationTypes.discounts")}</p>
      <div>
        <FilterEachItem item={item} filterName='isDiscounted' selectItemHandler={selectItemHandler} />
      </div>
    </div>
  );
}
