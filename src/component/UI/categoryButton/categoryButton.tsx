'use client'
import { useTranslations } from "next-intl";
import style from "./categoryButton.module.scss";
import Rect from "./rect";
import { SlArrowDown } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { showHideCtgDD } from "@/store/categories/categoriesSlice";

export default function CategoryButton() {
  const t = useTranslations();
  const dispatch = useDispatch()

  function showCtgDDHandler(){
    dispatch(showHideCtgDD())
  }

  return (
    <button className={style.category_button} onClick={showCtgDDHandler}>
      <span>
        <Rect />
        <Rect />
        <Rect />
        <Rect />
      </span>
      <span>{t("header.categories")}</span>
      <SlArrowDown />
    </button>
  );
}
