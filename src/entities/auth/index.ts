import { api } from '@/shared/stores';

export interface AuthData {
  phone: string;
}

const authApi = api.enhanceEndpoints({ addTagTypes: ['auth'] });

const authApiTag = authApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
      invalidatesTags: ['auth'],
    }),
    check: builder.query<void, void>({
      query: () => '/auth/check',
      providesTags: ['auth'],
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useLogoutMutation, useCheckQuery } = authApiTag;
