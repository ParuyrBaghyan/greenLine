import { useTranslations } from "next-intl";
import style from "./priceFilter.module.scss";
import PriceInput from "@/component/UI/priceInput/priceInput";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

  function priceRangeHandler(e: React.ChangeEvent<HTMLInputElement>, identifier: string) {
    if (identifier === 'from') {
      params.set('priceFrom', `${e.target.value || priceFrom}`)
      params.set('priceTo', `${params.get('priceTo') || priceTo}`)
    } else {
      params.set('priceTo', `${e.target.value || priceTo}`)
      params.set('priceFrom', `${params.get('priceFrom') ? params.get('priceFrom') : priceFrom}`)
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  // console.log(JSON.stringify(Object.keys({ priceTo})[0]));


  return (
    <div className={style.price_container}>
      <p>{t("filtrationTypes.price")}</p>
      <div className={style.inputes}>
        <PriceInput onchange={priceRangeHandler} type={"from"} value={{ price: priceFrom }} />
        <PriceInput onchange={priceRangeHandler} type={"to"} value={{ price: priceTo }} />
      </div>
    </div>
  );
}
