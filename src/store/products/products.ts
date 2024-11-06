import { brandsApi } from "@/services/brands/brands";
import Product from "@/services/interface/product/productModel";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsInitailState {
    products: Product[];
}

const initialState: ProductsInitailState = {
    products: [],
};

export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  
  },

});

export const {  } = ProductsSlice.actions;
export default ProductsSlice.reducer;
