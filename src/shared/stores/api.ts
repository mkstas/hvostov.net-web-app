import { createApi } from '@reduxjs/toolkit/query';

export const api = createApi({
  baseQuery: fetchBaseQuery({
  baseUrl: `${process.env.API_URL}`,
  credentials: 'include',
})
  endpoints: () => ({}),
  tagTypes: ['auth', 'subjects', 'taskTypes', 'tasks', 'subtasks'],
});
