import { FC } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { SelectFilterItem } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';

export const TheFilterWorkTypes: FC = () => {
  const workTypes = [
    {
      subjectId: 1,
      title: 'Лабораторная работа',
      isSelected: false,
    },
    {
      subjectId: 2,
      title: 'Практическая работа',
      isSelected: false,
    },
  ];

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Типы работ</h2>
        <div className='space-y-1'>
          <ul className='space-y-1'>
            {workTypes.map(workType => (
              <li key={workType.subjectId}>
                <SelectFilterItem title={workType.title} isSelected={workType.isSelected} />
              </li>
            ))}
          </ul>
          <CreateFilterItem />
        </div>
        <UiDelimiter />
        <ResetFilterItem />
      </section>
    </UiSheet>
  );
};
