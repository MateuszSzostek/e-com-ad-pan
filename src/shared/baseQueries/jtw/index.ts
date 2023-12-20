import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "../../../store";
import { store } from "../../../store";

export const baseJwtQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken;

      // If we have a token set in state, let's assume that we should be passing it.
      console.log(token);
      console.log(getState());

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });
