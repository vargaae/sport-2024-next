// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiOptions, matchesType } from "@/app/types";
// import type { Football } from './types'

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
    "Content-Type": "application/json",
  },
};

const baseUrl = "https://api.football-data.org/v4/";

const createRequest = (url: string) => ({ url, options });

// Define a service using a base URL and expected endpoints
export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCompetitions: builder.query({
      // getCompetitions: builder.query<Football, string>({
      query: () => createRequest(`/competitions`),
    }),
    getMatchesAll: builder.query({
      query: (id) => createRequest(`/matches`),
    }),
    getMatches: builder.query({
      query: (id) => createRequest(`/competitions/${id}/matches`),
    }),
    getMatchDetails: builder.query({
      query: (id) => createRequest(`/matches/${id}`),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCompetitionsQuery,
  useGetMatchesAllQuery,
  useGetMatchesQuery,
  useGetMatchDetailsQuery,
} = footballApi;
