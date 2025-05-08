import { api } from '@/shared/stores';

export interface Type {
  typeId: number;
  subjectId: number;
  title: string;
}

const typesApi = api.enhanceEndpoints({ addTagTypes: ['types'] });

const typesApiTag = typesApi.injectEndpoints({
  endpoints: builder => ({
    createType: builder.mutation<Type, Partial<Type>>({
      query: body => ({ url: '/types', method: 'POST', body }),
      invalidatesTags: ['types'],
    }),
    findAllType: builder.query<Type[], number>({
      query: subjectId => ({ url: `/types/${subjectId}`, method: 'GET' }),
      providesTags: ['types'],
    }),
    updateType: builder.mutation<Type, Partial<Type>>({
      query: ({ typeId, ...body }) => ({ url: `/type/${typeId}`, method: 'PATCH', body }),
      invalidatesTags: ['types'],
    }),
    deleteType: builder.mutation<Type, number>({
      query: typeId => ({ url: `/types/${typeId}`, method: 'DELETE' }),
      invalidatesTags: ['types'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateTypeMutation, useFindAllTypeQuery, useUpdateTypeMutation, useDeleteTypeMutation } = typesApiTag;
