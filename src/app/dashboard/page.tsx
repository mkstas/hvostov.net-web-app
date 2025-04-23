import { Metadata } from 'next';
import { UiSheet } from '@/components';
import { TheTaskActions } from '@/widgets/the-task-actions';
import { TheTaskList } from '@/widgets/the-task-list';
import { TheFilters } from '@/widgets/the-filters';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div className='grid items-start gap-4 lg:grid-cols-[1fr_3fr]'>
      <TheFilters />
      <UiSheet>
        <section className='space-y-4'>
          <TheTaskActions />
          <TheTaskList />
        </section>
      </UiSheet>
    </div>
  );
}
