import { api } from '@/shared/stores';
import { TaskType, TaskTypeFormData } from './model';

export const taskTypeApi = api.injectEndpoints({
  endpoints: builder => ({
    findTaskTypes: builder.query<TaskType[], void>({
      query: () => '/task-types',
      providesTags: ['taskTypes'],
    }),
    createTaskType: builder.mutation<TaskType, TaskTypeFormData>({
      query: body => ({ url: '/task-types', method: 'POST', body }),
      invalidatesTags: ['taskTypes'],
    }),
    updateTaskType: builder.mutation<TaskType, TaskType>({
      query: ({ taskTypeId, ...body }) => ({ url: `/task-types/${taskTypeId}`, method: 'PATCH', body }),
      invalidatesTags: ['taskTypes'],
    }),
    deleteTaskType: builder.mutation<TaskType, number>({
      query: taskTypeId => ({ url: `/task-types/${taskTypeId}`, method: 'DELETE' }),
      invalidatesTags: ['taskTypes'],
    }),
  }),
});

export const {
  useFindTaskTypesQuery,
  useCreateTaskTypeMutation,
  useUpdateTaskTypeMutation,
  useDeleteTaskTypeMutation,
} = taskTypeApi;
