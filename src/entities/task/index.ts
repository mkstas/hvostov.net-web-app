import { api } from '@/shared/stores';

export interface Task {
  taskId: number;
  subjectId: number;
  taskTypeId: number;
  title: string;
  description: string;
  deadline: string;
  isDone: boolean;
}

const taskApi = api.enhanceEndpoints({ addTagTypes: ['tasks'] });

const taskApiTag = taskApi.injectEndpoints({
  endpoints: builder => ({
    createTask: builder.mutation<Task, Partial<Task>>({
      query: body => ({ url: '/tasks', method: 'POST', body }),
      invalidatesTags: ['tasks'],
    }),
    findAllTask: builder.query<Task[], string>({
      query: param => ({ url: `/tasks?${param}`, method: 'GET' }),
      providesTags: ['tasks'],
    }),
    findTask: builder.query<Task, number>({
      query: taskId => ({ url: `/tasks/${taskId}`, method: 'GET' }),
      providesTags: ['tasks'],
    }),
    findNotifications: builder.query<Task[], void>({
      query: () => ({ url: '/tasks/notifications', method: 'GET' }),
      providesTags: ['tasks'],
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
  useCreateTaskMutation,
  useFindAllTaskQuery,
  useFindTaskQuery,
  useFindNotificationsQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApiTag;
