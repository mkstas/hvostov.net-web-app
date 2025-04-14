import { Metadata } from 'next';
import { UiSheet } from '@/components';
import { TheFilterSubjects } from '@/widgets/the-filter-subjects';
import { TheFilterTaskTypes } from '@/widgets/the-filter-task-types';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div className='grid grid-cols-[1fr_3fr] items-start gap-4'>
      <div className='space-y-4'>
        <TheFilterSubjects />
        <TheFilterTaskTypes />
      </div>
      {/* <UiSheet>
        <section className='space-y-4'>
          <TheWorkActions />
          <TheWorkList />
        </section>
      </UiSheet> */}
    </div>
  );
}
