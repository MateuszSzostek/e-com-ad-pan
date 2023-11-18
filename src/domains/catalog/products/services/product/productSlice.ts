import { createApi } from "@reduxjs/toolkit/query/react";
import { baseProductUrl } from "../../../../../shared/api";
import { baseJwtQuery } from "../../../../../shared/baseQueries/jtw";
import {
  IDeleteProductRequest,
  IDeleteProductResponse,
  ILinkProductRequest,
  ILinkProductResponse,
  IUnlinkProductRequest,
  IUnlinkProductResponse,
  ISubstituteProductRequest,
  ISubstituteProductResponse,
  ICancelSubstituteProductRequest,
  ICancelSubstituteProductResponse,
  IGetProductResponse,
  IGetProductRequest,
  IUpdateProductRequest,
  IUpdateProductResponse,
  IAddNewProductResponse,
  IAddNewProductRequest,
} from "./productSlice.types";
import { store } from "../../../../../store";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseJwtQuery(baseProductUrl),
  endpoints: (builder) => ({
    getProduct: builder.query<IGetProductResponse, IGetProductRequest>({
      query: ({id}) => ({
        url: `product`,
        method: "GET",
        params:{id},
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: { data: IGetProductResponse }) =>
        response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    addNewProduct: builder.mutation<
      IAddNewProductResponse,
      IAddNewProductRequest
    >({
      query: ({ newProduct }) => ({
        url: `add-new-product`,
        method: "POST",
        body: newProduct,
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: IAddNewProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    updateProduct: builder.mutation<
      IUpdateProductResponse,
      IUpdateProductRequest
    >({
      query: ({ updatedProduct }) => ({
        url: `update-product`,
        method: "POST",
        body: updatedProduct,
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: IUpdateProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    deleteProduct: builder.query<IDeleteProductResponse, IDeleteProductRequest>(
      {
        query: ({id}) => ({
          url: `delete-product`,
          method: "DELETE",
          body:{id},
          headers: {
            authorization: `Bearer ${store.getState().user.accessToken}`,
          },
        }),
        transformResponse: (response: IDeleteProductResponse) => response,
        transformErrorResponse: (response: { status: string | number }) =>
          response.status,
      }
    ),

    substituteProduct: builder.mutation<
      ISubstituteProductResponse,
      ISubstituteProductRequest
    >({
      query: ({firstProductId, secondProductId}) => ({
        url: `substitute-products`,
        method: "POST",
        body: {firstProductId, secondProductId},
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: ISubstituteProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    cancelSubstituteProduct: builder.mutation<
      ISubstituteProductResponse,
      ISubstituteProductRequest
    >({
      query: ({firstProductId, secondProductId}) => ({
        url: `cancel-substitute-products`,
        method: "POST",
        body: {firstProductId, secondProductId},
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: ISubstituteProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    linkProduct: builder.mutation<ILinkProductResponse, ILinkProductRequest>({
      query: ({firstProductId, secondProductId}) => ({
        url: `link-products`,
        method: "POST",
        body:{firstProductId, secondProductId},
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: ILinkProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    unlinkProduct: builder.mutation<
      IUnlinkProductResponse,
      IUnlinkProductRequest
    >({
      query: ({firstProductId, secondProductId}) => ({
        url: `unlink-products`,
        method: "POST",
        body:{firstProductId, secondProductId},
        headers: {
          authorization: `Bearer ${store.getState().user.accessToken}`,
        },
      }),
      transformResponse: (response: IUnlinkProductResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductQuery,
  useSubstituteProductMutation,
  useCancelSubstituteProductMutation,
  useLinkProductMutation,
  useUnlinkProductMutation
} = productApi;
