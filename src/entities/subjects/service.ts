import { api } from '@/shared/stores';
import { Subject } from './model';

export const subjectApi = api.injectEndpoints({
  endpoints: builder => ({
    findSubjects: builder.query<Subject[], void>({
      query: () => '/subjects',
      providesTags: ['subjects'],
    }),
    createSubject: builder.mutation<Subject, Partial<Subject>>({
      query: body => ({ url: '/subjects', method: 'POST', body }),
      invalidatesTags: ['subjects'],
    }),
    updateSubject: builder.mutation<Subject, Partial<Subject>>({
      query: ({ subjectId, ...body }) => ({ url: `/subjects/${subjectId}`, method: 'PATCH', body }),
      invalidatesTags: ['subjects'],
    }),
    deleteSubject: builder.mutation<Subject, number>({
      query: subjectId => ({ url: `/subjects/${subjectId}`, method: 'DELETE' }),
      invalidatesTags: ['subjects'],
    }),
  }),
});

export const { useFindSubjectsQuery, useCreateSubjectMutation, useUpdateSubjectMutation, useDeleteSubjectMutation } =
  subjectApi;
