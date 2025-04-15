import { api } from '@/shared/stores';
import { TaskType, TaskTypeCreateData } from './model';

export const taskTypeApi = api.injectEndpoints({
  endpoints: builder => ({
    createTaskType: builder.mutation<TaskType, TaskTypeCreateData>({
      query: body => ({ url: '/task-types', method: 'POST', body }),
      invalidatesTags: ['taskTypes'],
    }),
    findTaskTypes: builder.query<TaskType[], void>({
      query: () => '/task-types',
      providesTags: ['taskTypes'],
    }),
  }),
});

export const { useCreateTaskTypeMutation, useFindTaskTypesQuery } = taskTypeApi;
