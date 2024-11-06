import { useTranslations } from "next-intl";
import style from "./priceFilter.module.scss";
import { useDispatch } from "react-redux";
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
      params.set('priceTo', `${params.get('priceTo') ? params.get('priceTo') : priceTo}`)

    } else {
      params.set('priceTo', `${e.target.value || priceTo}`)
      params.set('priceFrom', `${params.get('priceFrom') ? params.get('priceFrom') : priceFrom}`)

    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={style.price_container}>
      <p>{t("filtrationTypes.price")}</p>
      <div className={style.inputes}>
        <PriceInput onchange={priceRangeHandler} priceFrom={priceFrom} />
        <PriceInput onchange={priceRangeHandler} priceTo={priceTo} />
      </div>
    </div>
  );
}
