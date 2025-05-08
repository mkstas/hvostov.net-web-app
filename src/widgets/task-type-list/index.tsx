'use client';

import { FC } from 'react';
import { CreateTaskType } from '@/features/create-task-type';
import { useFindAllTypeQuery } from '@/entities/types';
import { UiSheet, UiSkeleton } from '@/shared/ui';
import { SelectSearchParam } from '@/features/select-search-param';

interface Props {
  subjectId: number;
}

export const TaskTypeList: FC<Props> = ({ subjectId }) => {
  const { data, isLoading } = useFindAllTypeQuery(subjectId);

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          <ul className='space-y-1'>
            {isLoading
              ? Array(3)
                  .fill(0)
                  .map((_, index) => <UiSkeleton className='h-8' key={index} />)
              : data?.map(item => (
                  <li key={item.typeId}>
                    <SelectSearchParam param='typeId' value={{ id: item.typeId, title: item.title }} />
                  </li>
                ))}
          </ul>
          {!isLoading && <CreateTaskType subjectId={subjectId} />}
        </div>
      </section>
    </UiSheet>
  );
};
