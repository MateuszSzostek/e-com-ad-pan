import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "./productsSlice.types";
import { IProduct } from "../../../domains/catalog/products/services/product/productSlice.types";

const initialState: IProductsState = {
  products: [],
  categoryMissing: true,
  pendingPriceChanges: true,
  pendingUpdates: true,
  currentPage: 1,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{ products: IProduct[] }>) => {
      state.products = action.payload.products;
    },
    setCategoryMissing: (
      state,
      action: PayloadAction<{ categoryMissing: boolean }>
    ) => {
      state.categoryMissing = action.payload.categoryMissing;
    },
    setPendingPriceChanges: (
      state,
      action: PayloadAction<{ pendingPriceChanges: boolean }>
    ) => {
      state.pendingPriceChanges = action.payload.pendingPriceChanges;
    },
    setPendignUpdates: (
      state,
      action: PayloadAction<{ pendingUpdates: boolean }>
    ) => {
      state.pendingUpdates = action.payload.pendingUpdates;
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const {
  setProducts,
  setCategoryMissing,
  setPendingPriceChanges,
  setPendignUpdates,
  setCurrentPage,
} = productsSlice.actions;

export default productsSlice.reducer;
