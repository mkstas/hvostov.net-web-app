import { api } from '@/shared/stores';

export interface Subject {
  subjectId: number;
  title: string;
}

const subjectService = api.enhanceEndpoints({ addTagTypes: ['subjects'] });

const subjectServiceTag = subjectService.injectEndpoints({
  endpoints: builder => ({
    createSubject: builder.mutation<Subject, Partial<Subject>>({
      query: body => ({ url: '/subjects', method: 'POST', body }),
      invalidatesTags: ['subjects'],
    }),
    findAllSubject: builder.query<Subject[], void>({
      query: () => ({ url: '/subjects', method: 'GET' }),
      providesTags: ['subjects'],
    }),
    findSubject: builder.query<Subject, number>({
      query: subjectId => ({ url: `/subjects/${subjectId}`, method: 'GET' }),
      providesTags: ['subjects'],
    }),
    updateSubject: builder.mutation<Subject, Partial<Subject>>({
      query: ({ subjectId, ...body }) => ({ url: `/subjects/${subjectId}`, method: 'PATCH', body }),
      invalidatesTags: ['subjects'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateSubjectMutation, useFindAllSubjectQuery, useFindSubjectQuery, useUpdateSubjectMutation } =
  subjectServiceTag;
