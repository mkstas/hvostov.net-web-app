import { api } from '@/shared/stores';
import { AuthData } from './model';

export const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/register', method: 'POST', body }),
    }),
    loginUser: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
    }),
    checkAuth: builder.query<void, void>({
      query: () => '/auth/check',
    }),
  }),
  overrideExisting: true,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useCheckAuthQuery,
} = usersApi;
