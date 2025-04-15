import { api } from '@/shared/stores';
import { Task, TaskData } from './model';

export const taskApi = api.injectEndpoints({
  endpoints: builder => ({
    createTask: builder.mutation<Task, TaskData>({
      query: body => ({ url: '/tasks', method: 'POST', body }),
      invalidatesTags: ['tasks'],
    }),
    findTasks: builder.query<Task[], void>({
      query: () => '/tasks',
      providesTags: ['tasks'],
    }),
  }),
});

export const { useCreateTaskMutation, useFindTasksQuery } = taskApi;
