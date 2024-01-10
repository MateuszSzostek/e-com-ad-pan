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
  IUpdateCategoriesRequest,
  IUpdateCategoriesResponse,
  IGetCategoriesTreeRequest,
  IGetCategoriesTreeResponse,
} from "./categorySlice.types";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: baseJwtQuery(baseCategoryUrl),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategoriesTree: builder.query<
      IGetCategoriesTreeRequest,
      IGetCategoriesTreeResponse
    >({
      query: () => ({
        url: `get-categories-tree`,
        method: "GET",
      }),
      providesTags: ["Category"],
      transformResponse: (response: IGetCategoriesTreeResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

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

    updateCategories: builder.mutation<
      IUpdateCategoriesRequest,
      IUpdateCategoriesResponse
    >({
      query: () => ({
        url: `update-categories`,
        method: "POST",
        body: {},
      }),
      transformResponse: (response: IUpdateCategoriesResponse) => response,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
    }),

    addCategory: builder.mutation<IAddCategoryResponse, IAddCategoryRequest>({
      query: (payload) => ({
        url: `add-category`,
        method: "POST",
        body: {
          name: payload.category.name,
          parentName: payload.category.parentName,
        },
      }),
      invalidatesTags: ["Category"],
      transformResponse: (response: IAddCategoryResponse) => response,
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
  useGetCategoriesTreeQuery,
  useGetAllCategoriesQuery,
  useUpdateCategoriesMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
