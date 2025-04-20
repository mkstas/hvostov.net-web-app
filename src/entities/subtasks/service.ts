import { api } from '@/shared/stores';
import { Subtask } from './model';

export const subtaskApi = api.injectEndpoints({
  endpoints: builder => ({
    findSubtasks: builder.query<Subtask[], number>({
      query: taskId => `/subtasks?taskId=${taskId}`,
      providesTags: ['subtasks'],
    }),
    createSubtask: builder.mutation<Subtask, Partial<Subtask>>({
      query: body => ({ url: '/subtasks', method: 'POST', body }),
      invalidatesTags: ['subtasks'],
    }),
    updateSubtask: builder.mutation<Subtask, Partial<Subtask>>({
      query: ({ subtaskId, ...body }) => ({ url: `/subtasks/${subtaskId}`, method: 'PATCH', body }),
      invalidatesTags: ['subtasks'],
    }),
  }),
});

export const { useFindSubtasksQuery, useCreateSubtaskMutation, useUpdateSubtaskMutation } = subtaskApi;
