import { api } from '@/shared/stores';
import { Task } from './model';

export const taskApi = api.injectEndpoints({
  endpoints: builder => ({
    findTasks: builder.query<Task[], void>({
      query: () => '/tasks',
      providesTags: ['tasks'],
    }),
    findTask: builder.query<Task, number>({
      query: taskId => `/tasks/${taskId}`,
      providesTags: ['tasks'],
    }),
    createTask: builder.mutation<Task, Partial<Task>>({
      query: body => ({ url: '/tasks', method: 'POST', body }),
      invalidatesTags: ['tasks'],
    }),
    updateTask: builder.mutation<Task, Partial<Task>>({
      query: ({ taskId, ...body }) => ({ url: `/tasks/${taskId}`, method: 'PATCH', body }),
      invalidatesTags: ['tasks'],
    }),
    deleteTask: builder.mutation<Task, number>({
      query: taskId => ({ url: `/tasks/${taskId}`, method: 'DELETE' }),
      invalidatesTags: ['tasks'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useFindTasksQuery,
  useFindTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
