import { apiSlice } from "./api";

const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleProduct: builder.query({
      query: ({ id, ...params }) => ({
        url: `product/${id}`,
        method: "GET",
        params: params,
      }),
    }),
    getAllProducts: builder.query({
      query: (params) => ({
        url: `product/new`,
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useGetSingleProductQuery, useGetAllProductsQuery } = productsApi;
