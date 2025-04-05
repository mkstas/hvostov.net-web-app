import { fetchBaseQuery, FetchArgs, BaseQueryApi, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api',
  credentials: 'include',
});

const baseQueryRefresh = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let response = await baseQuery(args, api, extraOptions);

  if (response.error?.status === 401) {
    const refreshRes = await baseQuery('auth/refresh', api, extraOptions);

    if (refreshRes.meta?.response?.status === 200) {
      response = await baseQuery(args, api, extraOptions);
    }
  }

  return response;
};

export const api = createApi({
  baseQuery: baseQueryRefresh,
  endpoints: () => ({}),
  tagTypes: [],
});
