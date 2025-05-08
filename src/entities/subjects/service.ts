import { api } from '@/shared/stores';

export interface Subject {
  subjectId: number;
  title: string;
}

const subjectsService = api.enhanceEndpoints({ addTagTypes: ['subjects'] });

const subjectsServiceTag = subjectsService.injectEndpoints({
  endpoints: builder => ({
    createSubject: builder.mutation<Subject, Partial<Subject>>({
      query: body => ({ url: '/subjects', method: 'POST', body }),
      invalidatesTags: ['subjects'],
    }),
    findAllSubject: builder.query<Subject[], void>({
      query: () => ({ url: '/subjects', method: 'GET' }),
      providesTags: ['subjects'],
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
  overrideExisting: true,
});

export const { useCreateSubjectMutation, useFindAllSubjectQuery, useUpdateSubjectMutation, useDeleteSubjectMutation } =
  subjectsServiceTag;
