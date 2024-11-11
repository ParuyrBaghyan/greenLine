import style from "./sortBy.module.scss";
import { useTranslations } from "use-intl";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ProductSortEnum } from "@/types/enums";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { replaceURL } from "@/helperFunctions/queries";
import { getSelectedSortTitle } from "@/helperFunctions/helperClientFunctions";

export default function SortBy() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const params = new URLSearchParams(searchParams);
  
  const sortByArray = [
    { type: ProductSortEnum.AlphabeticalAZ, title: t("sortBy.az") },
    { type: ProductSortEnum.PriceLowToHigh, title: t("sortBy.lh") },
    { type: ProductSortEnum.PriceHighToLow, title: t("sortBy.hl") },
    { type: ProductSortEnum.AlphabeticalZA, title: t("sortBy.za") },
  ];

  const title = getSelectedSortTitle(params,sortByArray) 

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function changeSortHandler(type: number) {
    setIsDropdownOpen(false);
    selectItemHandler(type)
  }

  function toggleDropdown() {
    setIsDropdownOpen((prev) => !prev);
  }


  function selectItemHandler(type: number) {
    params.set("sortBy", type.toString());
    replaceURL(router,params,pathname)
  }

  return (
    <div className={style.sort_by_box}>
      <div className={style.selected_type} onClick={toggleDropdown}>
        <span>{title}</span>
        <IoIosArrowDown />
      </div>
      {isDropdownOpen && (
        <div className={style.dropdown}>
          {sortByArray.map((item) => (
            <div
              key={item.type}
              className={style.dropdown_item}
              onClick={() => changeSortHandler(item.type)}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
