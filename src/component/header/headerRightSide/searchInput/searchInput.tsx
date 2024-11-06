"use client";
import { useTranslations } from "next-intl";
import style from "./searchInput.module.scss";
import { GoSearch } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { useCallback, useRef, useState } from "react";
import { useLazyGetSearchResultQuery } from "@/services/search/search";
import debounce from "lodash.debounce";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { useDispatch } from "react-redux";
import { showSearchDD } from "@/store/search/search";

export default function SearchInput() {
  const t = useTranslations();
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [triggerSearch, { data, isFetching }] = useLazyGetSearchResultQuery();
  const requestRef = useRef<any>(null);

  const debouncedSearch = useCallback(
    debounce((term) => {
      if (term) {
        if (requestRef.current) {
          requestRef.current.abort();
        }
        requestRef.current = triggerSearch(term);
      }
    }, 800),
    [triggerSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    requestRef.current.abort();
  };

  function showCtgDDHandler() {
    dispatch(showSearchDD());
  }

  return (
    <div className={style.search_input_container} onClick={showCtgDDHandler}>
      <GoSearch />
      <input
        type="text"
        placeholder={t("header.search")}
        onChange={handleInputChange}
        value={searchTerm}
      />
      {isFetching && <CircularProgress size="15px" />}
      {searchTerm ? <GrClose onClick={clearSearch} /> : ""}
    </div>
  );
}
