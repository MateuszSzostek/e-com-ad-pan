import { IProduct } from "../../../domains/catalog/products/services/product/productSlice.types";

export interface IProductsState {
  products: IProduct[];
  categoryMissing: boolean;
  pendingPriceChanges: boolean;
  pendingUpdates: boolean;
  currentPage: number;
}
