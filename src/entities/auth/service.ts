import { api } from '@/shared/stores';
import { AuthData } from './model';

// export const authApi = api.injectEndpoints({
//   endpoints: builder => ({
// loignUser: builder.mutation<void, AuthData>({
//   query: body => ({ url: '/auth/login', method: 'POST', body }),
// }),
//     logoutUser: builder.mutation<void, void>({
//       query: () => ({ url: '/auth/logout', method: 'DELETE' }),
//     }),
//     checkAuth: builder.query<void, void>({
//       query: () => '/auth/check',
//     }),
//   }),
//   overrideExisting: true,
// });

// export const {} = authApi;

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<void, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
    }),
  }),
});

export const {} = authApi;
