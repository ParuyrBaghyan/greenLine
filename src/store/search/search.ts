import Product from "@/services/interface/product/productModel";
import SearchResultModel from "@/services/interface/searchResult/searchResult";
import { searchApi } from "@/services/search/search";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInitailState {
  showSearchDDBool: boolean;
  searchResult: SearchResultModel | null;
}

const initialState: SearchInitailState = {
  showSearchDDBool: false,
  searchResult: null,
};

export const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearchDD(state) {
      state.showSearchDDBool = true;
    },
    hideSearchDD(state) {
      state.showSearchDDBool = false;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      searchApi.endpoints.getSearchResult.matchFulfilled,
      (state: any, { payload }: any) => {
        state.searchResult = payload?.data;
      }
    );
  },
});

export const { showSearchDD, hideSearchDD } = SearchSlice.actions;
export default SearchSlice.reducer;
