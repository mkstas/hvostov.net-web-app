import { api } from '@/shared/stores';

export interface Subtask {
  subtaskId: number;
  taskId: number;
  description: string;
  isDone: boolean;
}

const subtaskApi = api.enhanceEndpoints({ addTagTypes: ['subtasks'] });

const subtaskApiTag = subtaskApi.injectEndpoints({
  endpoints: builder => ({
    createSubtask: builder.mutation<Subtask, Partial<Subtask>>({
      query: body => ({ url: '/subtasks', method: 'POST', body }),
      invalidatesTags: ['subtasks'],
    }),
    findAllSubtask: builder.query<Subtask[], number>({
      query: taskId => ({ url: `/subtasks?taskId=${taskId}`, method: 'GET' }),
      providesTags: ['subtasks'],
    }),
    updateSubtask: builder.mutation<Subtask, Partial<Subtask>>({
      query: ({ subtaskId, ...body }) => ({ url: `/subtasks/${subtaskId}`, method: 'PATCH', body }),
      invalidatesTags: ['subtasks'],
    }),
    deleteSubtask: builder.mutation<Subtask, number>({
      query: subtaskId => ({ url: `/subtasks/${subtaskId}`, method: 'DELETE' }),
      invalidatesTags: ['subtasks'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateSubtaskMutation, useFindAllSubtaskQuery, useUpdateSubtaskMutation, useDeleteSubtaskMutation } =
  subtaskApiTag;
