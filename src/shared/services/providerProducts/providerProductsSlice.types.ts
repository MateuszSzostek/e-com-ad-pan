import { IProduct } from "../../../domains/catalog/products/services/product/productSlice.types";
import { IIkonkaProduct } from "../../../domains/catalog/products/services/ikonkaProduct/ikonkaProductSlice.types";

export interface IProductsState {
  providerProducts: IProduct[] | IIkonkaProduct[];
  unaddedProductsOnly: boolean;
  currentPage: number;
}
