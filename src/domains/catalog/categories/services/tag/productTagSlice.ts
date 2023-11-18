import { createApi } from "@reduxjs/toolkit/query/react";
import { baseProductTagUrl } from "../../../../../shared/api";
import { baseJwtQuery } from "../../../../../shared/baseQueries/jtw";
import {
  IAddProductTagRequest,
  IAddProductTagResponse,
  IDeleteProductTagRequest,
  IDeleteProductTagResponse,
  IGetAllProductTagsRequest,
  IGetAllProductTagsResponse,
} from "./productTagSlice.types";

export const productTagApi = createApi({
  reducerPath: "productTagApi",
  baseQuery: baseJwtQuery(baseProductTagUrl),
  endpoints: (builder) => ({
    getAllProductTags: builder.query<
      IGetAllProductTagsRequest,
      IGetAllProductTagsResponse
    >({
      query: () => ({
        url: `get-all-product-tags`,
        method: "GET",
      }),
      transformResponse: (response: { data: IGetAllProductTagsResponse }) =>
        response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    addProductTag: builder.mutation<
      IAddProductTagRequest,
      IAddProductTagResponse
    >({
      query: () => ({
        url: `add-product-tag`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: IAddProductTagRequest) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    deleteProductTag: builder.query<
      IDeleteProductTagRequest,
      IDeleteProductTagResponse
    >({
      query: () => ({
        url: `delete-product-tag`,
        method: "DELETE",
      }),
      transformResponse: (response: IDeleteProductTagResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const {
  useGetAllProductTagsQuery,
  useAddProductTagMutation,
  useDeleteProductTagQuery,
} = productTagApi;
