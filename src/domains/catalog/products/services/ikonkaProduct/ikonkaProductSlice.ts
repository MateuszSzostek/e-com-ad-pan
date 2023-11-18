import { createApi } from "@reduxjs/toolkit/query/react";
import { baseProductUrl } from "../../../../../shared/api";
import { baseJwtQuery } from "../../../../../shared/baseQueries/jtw";
import {
  IFetchAllIkonkaProductsRequest,
  IFetchAllIkonkaProductsResponse,
  ISaveIkonkaProductToProductsResponse,
  ITransferAllIkonkaProductsToProductsRequest,
  ITransferAllIkonkaProductsToProductsResponse,
  ISaveIkonkaProductToProductsRequest,
  IGetIkonkaProductRequest,
  IGetIkonkaProductResponse,
  IUpdateIkonkaProductResponse,
  IUpdateIkonkaProductRequest,
} from "./ikonkaProductSlice.types";

export const ikonkaProductApi = createApi({
  reducerPath: "ikonkaProductApi",
  baseQuery: baseJwtQuery(baseProductUrl),
  endpoints: (builder) => ({
    fetchAllIkonkaProducts: builder.query<
      IFetchAllIkonkaProductsResponse,
      IFetchAllIkonkaProductsRequest
    >({
      query: () => ({
        url: `fetch-all-ikonka-products`,
        method: "GET",
      }),
      transformResponse: (response: {
        data: IFetchAllIkonkaProductsResponse;
      }) => response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    transferAllIkonkaProductsToProducts: builder.query<
      ITransferAllIkonkaProductsToProductsResponse,
      ITransferAllIkonkaProductsToProductsRequest
    >({
      query: () => ({
        url: `transfer-all-ikonka-products-to-products`,
        method: "GET",
      }),

      transformResponse: (
        response: ITransferAllIkonkaProductsToProductsResponse
      ) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    saveIkonkaProductToProducts: builder.mutation<
      ISaveIkonkaProductToProductsResponse,
      ISaveIkonkaProductToProductsRequest
    >({
      query: () => ({
        url: `save-ikonka-product-to-products`,
        method: "POST",
      }),

      transformResponse: (response: ISaveIkonkaProductToProductsResponse) =>
        response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    updateIkonkaProduct: builder.mutation<
      IUpdateIkonkaProductResponse,
      IUpdateIkonkaProductRequest
    >({
      query: () => ({
        url: `update-ikonka-product`,
        method: "POST",
      }),

      transformResponse: (response: IUpdateIkonkaProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    getIkonkaProduct: builder.query<
      IGetIkonkaProductResponse,
      IGetIkonkaProductRequest
    >({
      query: () => ({
        url: `get-ikonka-product`,
        method: "GET",
      }),

      transformResponse: (response: IGetIkonkaProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const {
  useFetchAllIkonkaProductsQuery,
  useTransferAllIkonkaProductsToProductsQuery,
  useGetIkonkaProductQuery,
  useSaveIkonkaProductToProductsMutation,
  useUpdateIkonkaProductMutation,
} = ikonkaProductApi;
