import { FC } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { SelectFilterItem } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';

export const TheFilterSubjects: FC = () => {
  const subjects = [
    {
      subjectId: 1,
      title: 'Программирование',
      isSelected: true,
    },
    {
      subjectId: 2,
      title: 'Программирование',
      isSelected: true,
    },
    {
      subjectId: 3,
      title: 'Программирование',
      isSelected: false,
    },
  ];

  return (
    <UiSheet>
      <section className='space-y-2'>
        <h2 className='text-lg font-medium'>Предметы</h2>
        <div className='space-y-1'>
          <ul className='space-y-1'>
            {subjects.map(subject => (
              <li key={subject.subjectId}>
                <SelectFilterItem title={subject.title} isSelected={subject.isSelected} />
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
