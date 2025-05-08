'use client';

import { FC } from 'react';
import Link from 'next/link';
import { UiSkeleton } from '@/shared/ui';
import { useFindAllSubjectQuery } from './service';

export const SubjectList: FC = () => {
  const { data, isLoading } = useFindAllSubjectQuery();

  return (
    <>
      {isLoading
        ? Array(3)
            .fill(0)
            .map((_, index) => <UiSkeleton key={index} className='rounded-2xl' />)
        : data?.map(item => (
            <Link
              href={`/dashboard/${item.subjectId}`}
              key={item.subjectId}
              className='bg-c-slate-200 border-c-slate-400 hover:bg-c-slate-300 flex h-24 items-center justify-center rounded-2xl border px-6 py-4'
            >
              <div className='font-medium'>{item.title}</div>
            </Link>
          ))}
    </>
  );
};
