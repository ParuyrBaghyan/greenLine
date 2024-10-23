import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesInitailState {
  showCtgDDBool: boolean;
}

const initialState: CategoriesInitailState = {
  showCtgDDBool: false,
};

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    showHideCtgDD(state) {
      state.showCtgDDBool = !state.showCtgDDBool;
    },
    hideCtgDD(state) {
      state.showCtgDDBool = false;
    },
  },
});

export const { showHideCtgDD, hideCtgDD } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
