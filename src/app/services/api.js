import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { notification } from "antd";
// import { logoutUser } from "../app/features/authSlice";

const baseUrl = "http://localhost:8000/api";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders(headers, { getState }) {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

// here is the custom function
const baseQueryRequest = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);

  console.log(response);

  if (response.error && response.error.status === 307) {
    // api.dispatch(logoutUser());
    notification.error({
      message: "Session has expired",
    });
    return Promise.reject(response.error);
  }
  if (response.error && response.error.status === 403) {
    // api.dispatch(logoutUser());
    notification.error({
      message: response.error.error,
    });
    return Promise.reject(response.error);
  }
  if (response.error) {
    notification.error({
      message: response.error.data.message || "",
    });
    return Promise.reject(response.error);
  }
  if (response.data) {
    return { ...response, data: response.data };
  }
  return response;
};

export const apiSlice = createApi({
  reducerPath: "agromart-api",
  baseQuery: baseQueryRequest,
  endpoints: () => ({}),
});
