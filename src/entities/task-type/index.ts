import { api } from '@/shared/stores';

export interface TaskType {
  taskTypeId: number;
  title: string;
}

const taskTypesApi = api.enhanceEndpoints({ addTagTypes: ['task-types'] });

const taskTypesApiTag = taskTypesApi.injectEndpoints({
  endpoints: builder => ({
    createTaskType: builder.mutation<TaskType, Partial<TaskType>>({
      query: body => ({ url: '/task-types', method: 'POST', body }),
      invalidatesTags: ['task-types'],
    }),
    findAllTaskType: builder.query<TaskType[], void>({
      query: () => ({ url: '/task-types', method: 'GET' }),
      providesTags: ['task-types'],
    }),
    findTaskType: builder.query<TaskType, number>({
      query: taskTypeId => ({ url: `/task-types/${taskTypeId}`, method: 'GET' }),
      providesTags: ['task-types'],
    }),
    updateTaskType: builder.mutation<TaskType, Partial<TaskType>>({
      query: ({ taskTypeId, ...body }) => ({ url: `/task-types/${taskTypeId}`, method: 'PATCH', body }),
      invalidatesTags: ['task-types'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateTaskTypeMutation, useFindAllTaskTypeQuery, useFindTaskTypeQuery, useUpdateTaskTypeMutation } =
  taskTypesApiTag;
