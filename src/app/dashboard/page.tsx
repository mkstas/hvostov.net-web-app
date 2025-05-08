import { Metadata } from 'next';
import { CreateSubject } from '@/features/create-subject';
import { UiSheet } from '@/shared/ui';
import { SubjectList } from '@/entities/subjects/SubjectList';

export const metadata: Metadata = {
  title: 'АнтиХвост | Учебные дисциплины',
};

export default function Dashboard() {
  return (
    <UiSheet>
      <section className='space-y-4'>
        <h1 className='text-xl font-semibold'>Список учебных дисциплин</h1>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <CreateSubject />
          <SubjectList />
        </div>
      </section>
    </UiSheet>
  );
}
