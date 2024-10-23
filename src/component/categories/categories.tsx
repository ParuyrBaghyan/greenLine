"use client";
import { useDispatch, useSelector } from "react-redux";
import style from "./categories.module.scss";
import ChildCtgs from "./childCtgs/childCtgs";
import ParentCtgs from "./parentCtgs/parentCtgs";
import { useState } from "react";
import { RootState } from "@/store/store";
import ClickOutside from "@/utils/clickOutSide";
import { hideCtgDD } from "@/store/categories/categoriesSlice";

export default function Categories() {
  const [parentId, setParentId] = useState<number>(19046);

  const showCtgDDBool = useSelector(
    (state: RootState) => state.categories.showCtgDDBool
  );

  const dispatch = useDispatch();

  function getParentId(parentId: number) {
    setParentId(parentId);
  }

  function hideCtgDDHandler() {
    dispatch(hideCtgDD())
  }

  if (!showCtgDDBool) return null;
  return (
    <div className={style.categories_container}>
      <ClickOutside onClickOutside={hideCtgDDHandler}>
        <div className={style.categories_main_container}>
          <ParentCtgs getParentId={getParentId} />
          <ChildCtgs parentId={parentId} />
        </div>
      </ClickOutside>
    </div>
  );
}


