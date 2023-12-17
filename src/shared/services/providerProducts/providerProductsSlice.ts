import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "./providerProductsSlice.types";
import { IProduct } from "../../../domains/catalog/products/services/product/productSlice.types";
import { IIkonkaProduct } from "../../../domains/catalog/products/services/ikonkaProduct/ikonkaProductSlice.types";

const initialState: IProductsState = {
  providerProducts: [],
  unaddedProductsOnly: true,
  currentPage: 0,
};

export const productsSlice = createSlice({
  name: "providerProducts",
  initialState,
  reducers: {
    setProviderProducts: (
      state,
      action: PayloadAction<{ providerProducts: IProduct[] | IIkonkaProduct[] }>
    ) => {
      state.providerProducts = action.payload.providerProducts;
    },
    setUnaddedProductsOnly: (
      state,
      action: PayloadAction<{ unaddedProductsOnly: boolean }>
    ) => {
      state.unaddedProductsOnly = action.payload.unaddedProductsOnly;
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setProviderProducts, setUnaddedProductsOnly, setCurrentPage } =
  productsSlice.actions;

export default productsSlice.reducer;
