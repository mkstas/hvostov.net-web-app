import { api } from '@/shared/stores';
import { Subject, SubjectData } from './model';

export const subjectApi = api.injectEndpoints({
  endpoints: builder => ({
    createSubject: builder.mutation<Subject, SubjectData>({
      query: body => ({ url: '/subjects', method: 'POST', body }),
      invalidatesTags: ['subjects'],
    }),
    findSubjects: builder.query<Subject[], void>({
      query: () => '/subjects',
      providesTags: ['subjects'],
    }),
  }),
});

export const { useCreateSubjectMutation, useFindSubjectsQuery } = subjectApi;
