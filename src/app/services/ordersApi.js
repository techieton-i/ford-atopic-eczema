import { apiSlice } from "./api";

const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkout: builder.mutation({
      query: (body) => ({
        url: `order/create`,
        method: "POST",
        body: body,
      }),
    }),
    getSingleOrder: builder.query({
      query: ({ orderId, ...params }) => ({
        url: `order/${orderId}`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useLazyGetSingleOrderQuery, useCheckoutMutation } = ordersApi;
