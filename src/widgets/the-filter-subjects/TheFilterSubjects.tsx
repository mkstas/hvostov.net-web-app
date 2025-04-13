'use client';

import { FC, useEffect, useState } from 'react';
import { UiDelimiter, UiSheet } from '@/components';
import { SelectFilterItem } from '@/features/select-filter-item';
import { CreateFilterItem } from '@/features/create-filter-item';
import { ResetFilterItem } from '@/features/reset-filter-item';
import { CreateFilterModal } from '@/features/create-filter-modal';

export const TheFilterSubjects: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const closeModal = (event: Event) => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseButton = (event?.target as HTMLElement).closest('#modalCloseButton');
    if ((event?.target as HTMLElement) === modalOverlay || modalCloseButton) setIsOpenModal(false);
  };

  useEffect(() => {
    if (isOpenModal) {
      window.addEventListener('mousedown', closeModal);
    } else {
      window.removeEventListener('mousedown', closeModal);
    }
  }, [isOpenModal]);

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
          <div>
            <CreateFilterItem onClick={() => setIsOpenModal(true)} />
            {isOpenModal && <CreateFilterModal />}
          </div>
        </div>
        <UiDelimiter />
        <ResetFilterItem />
      </section>
    </UiSheet>
  );
};
