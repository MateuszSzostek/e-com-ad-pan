import { createApi } from "@reduxjs/toolkit/query/react";
import { baseCategoryUrl } from "../../../../../shared/api";
import { baseJwtQuery } from "../../../../../shared/baseQueries/jtw";
import {
  IAddCategoryRequest,
  IAddCategoryResponse,
  IDeleteCategoryRequest,
  IDeleteCategoryResponse,
  IGetAllCategoriesRequest,
  IGetAllCategoriesResponse,
  ILinkCategoriesRequest,
  ILinkCategoriesResponse,
  IUnlinkCategoriesRequest,
  IUnlinkCategoriesResponse,
} from "./categorySlice.types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: baseJwtQuery(baseCategoryUrl),
  endpoints: (builder) => ({
    getAllCategories: builder.query<
      IGetAllCategoriesRequest,
      IGetAllCategoriesResponse
    >({
      query: () => ({
        url: `get-all-categories`,
        method: "GET",
      }),
      transformResponse: (response: { data: IGetAllCategoriesResponse }) =>
        response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    linkCategories: builder.mutation<
      ILinkCategoriesRequest,
      ILinkCategoriesResponse
    >({
      query: () => ({
        url: `link-categories`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: ILinkCategoriesResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    unlinkCategories: builder.mutation<
      IUnlinkCategoriesRequest,
      IUnlinkCategoriesResponse
    >({
      query: () => ({
        url: `unlink-categories`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: IUnlinkCategoriesResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    addCategory: builder.mutation<IAddCategoryRequest, IAddCategoryResponse>({
      query: () => ({
        url: `add-category`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: IAddCategoryRequest) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    deleteCategory: builder.mutation<
      IDeleteCategoryRequest,
      IDeleteCategoryResponse
    >({
      query: () => ({
        url: `delete-category`,
        method: "DELETE",
      }),
      transformResponse: (response: IDeleteCategoryResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useLinkCategoriesMutation,
  useUnlinkCategoriesMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
