"use client";
import { useDispatch, useSelector } from "react-redux";
import style from "./searchDropDown.module.scss";
import { RootState } from "@/store/store";
import ClickOutside from "@/utils/clickOutSide";
import { hideSearchDD } from "@/store/search/search";
import FreqSearched from "./freqSearched/freqSearched";
import SearchResult from "./searchResults/searchResult";

export default function SearchDropDown() {
  const showSearchDDBool = useSelector(
    (state: RootState) => state.search.showSearchDDBool
  );
  const searchResult = useSelector(
    (state: RootState) => state.search.searchResult
  );

  const dispatch = useDispatch();

  function hideCtgDDHandler() {
    dispatch(hideSearchDD());
  }

  if (!showSearchDDBool) return null;
  return (
    <div className={style.search_drop_down_container}>
      <ClickOutside onClickOutside={hideCtgDDHandler}>
        <div className={style.search_drop_down_main_container}>
          <div className={style.search_drop_down_main_container_center}>
            {searchResult ? <SearchResult /> : <FreqSearched />}
          </div>
        </div>
      </ClickOutside>
    </div>
  );
}
