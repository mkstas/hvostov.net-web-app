import { Metadata } from 'next';
import { UiSheet } from '@/components';
import { TheTaskFilters } from '@/widgets/the-task-filters';
import { TheTaskActions } from '@/widgets/the-task-actions';
import { TheTaskList } from '@/widgets/the-task-list';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div className='grid items-start gap-4 lg:grid-cols-[1fr_3fr]'>
      <TheTaskFilters />
      <UiSheet>
        <section className='relative z-10 space-y-4'>
          <TheTaskActions />
          <TheTaskList />
        </section>
      </UiSheet>
    </div>
  );
}
