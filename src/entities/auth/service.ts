import { api } from '@/shared/stores';

export interface AuthData {
  phone: string;
}

const authApi = api.enhanceEndpoints({ addTagTypes: ['auth'] });

const authApiTag = authApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
    }),
    check: builder.query<void, void>({
      query: () => '/auth/check',
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useLogoutMutation, useCheckQuery } = authApiTag;
