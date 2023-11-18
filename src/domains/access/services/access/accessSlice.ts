import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IRegisterResponse,
  IAuthenticationRequest,
  IAuthenticationResponse,
  IRegisterRequest,
} from "./accessSlice.types";
import { baseAuthUrl } from "../../../../shared/api";
import {
  setUserFieldByKey,
  setUserData,
} from "../../../../shared/services/user/userSlice";

export const accessApi = createApi({
  reducerPath: "accessApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
  endpoints: (builder) => ({
    register: builder.mutation<IRegisterResponse, IRegisterRequest>({
      query: ({ email, firstname, lastname, password, ...patch }) => ({
        url: `register`,
        method: "POST",
        body: {
          email,
          firstname,
          lastname,
          password,
        },
      }),

      transformResponse: (response: { data: IRegisterResponse }, meta, arg) =>
        response.data,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setUserData({
              accessToken: data?.access_token,
              refreshToken: data?.refresh_token,
              name: data?.name,
              surname: data?.surname,
            })
          );
        } catch (error) {}
      },
    }),

    authentication: builder.mutation<
      IAuthenticationResponse,
      IAuthenticationRequest
    >({
      query: ({ email, password, ...patch }) => ({
        url: `authenticate`,
        method: "POST",
        body: {
          email,
          password,
        },
      }),

      transformResponse: (response: IAuthenticationResponse, meta, arg) =>
        response,
      transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            setUserData({
              accessToken: data?.access_token,
              refreshToken: data?.refresh_token,
              name: data?.name,
              surname: data?.surname,
            })
          );
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useAuthenticationMutation } = accessApi;
