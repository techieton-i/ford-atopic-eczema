import { apiSlice } from "./api";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (params) => ({ url: "/login", method: "POST", body: params }),
    }),
    register: builder.mutation({
      query: (params) => ({ url: "/register", method: "POST", body: params }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
