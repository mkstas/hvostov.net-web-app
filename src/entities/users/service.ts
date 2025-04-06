import { api } from '@/shared/store/api';
import { AuthData, User } from './model';

export const usersApi = api.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/register', method: 'POST', body }),
      invalidatesTags: ['users'],
    }),
    loginUser: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
      invalidatesTags: ['users'],
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
    }),
    findUser: builder.query<User, void>({
      query: () => '/users',
      providesTags: ['users'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useFindUserQuery,
} = usersApi;
