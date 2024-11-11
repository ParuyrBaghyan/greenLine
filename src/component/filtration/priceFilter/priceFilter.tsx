import { useTranslations } from "next-intl";
import style from "./priceFilter.module.scss";
import PriceInput from "@/component/UI/priceInput/priceInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { showPrice } from "@/helperFunctions/helperClientFunctions";
import { changePriceQuery, replaceURL } from "@/helperFunctions/queries";

interface PriceFilterProps {
  priceFrom: number;
  priceTo: number;
}

export default function PriceFilter({ priceFrom, priceTo }: PriceFilterProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  function priceRangeHandler(value: string, type: string) {
    if (type === 'from') {
      changePriceQuery(value, params, priceFrom, priceTo, 'priceFrom', 'priceTo')
    } else {
      changePriceQuery(value, params, priceTo, priceFrom, 'priceTo','priceFrom')
    }
    replaceURL(router, params, pathname)
  }

  

  return (
    <div className={style.price_container}>
      <p>{t("filtrationTypes.price")}</p>
      <div className={style.inputes}>
        <PriceInput onchange={(value,type) => priceRangeHandler(value,type)} type={"from"} value={{ price: showPrice(params, priceFrom, 'priceFrom') }} />
        <PriceInput onchange={(value,type) => priceRangeHandler(value,type)} type={"to"} value={{ price: showPrice(params, priceTo, 'priceTo') }} />
      </div>
    </div>
  );
}
