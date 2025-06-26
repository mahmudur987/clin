// blogApi or authApi depending on your project structure

import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "authentication_app/signin/",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "authentication_app/signup/",
        method: "POST",
        body: data,
      }),
    }),
    otpCheck: builder.mutation({
      query: (data) => ({
        url: "authentication_app/verify_otp/",
        method: "POST",
        body: data,
      }),
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: "authentication_app/resend_otp/",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        return {
          url: "authentication_app/logout/",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useOtpCheckMutation,
  useResendOtpMutation,
} = authApi;
