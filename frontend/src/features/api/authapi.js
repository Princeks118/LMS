import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authurl = "http://localhost:8000/api/v1/user";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: authurl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: "/signin",
        method: "POST",
        body: loginData,
      }),
    }),
    registerUser: builder.mutation({
      query: (registerData) => ({
        url: "/register",
        method: "POST",
        body: registerData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
