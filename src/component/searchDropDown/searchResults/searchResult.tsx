import style from "./searchResult.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "use-intl";
import Product from "@/component/product/product";

export default function SearchResult() {
  const t = useTranslations();
  const searchResult = useSelector(
    (state: RootState) => state.search.searchResult
  );
  const count = searchResult?.itemCount ? searchResult.itemCount : "";

  return (
    <div className={style.search_result_container}>
      <div className={style.search_result_top}>
        <h2>{`${t("searchResults")}(${count})`}</h2>
        <p>{t("seeAll")}</p>
      </div>
      <div className={style.search_result_items}>
        {searchResult?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
