import { Metadata } from 'next';
import { UiSheet } from '@/components';
import { TheTaskFilters } from '@/widgets/the-task-filters';
import { TheTaskList } from '@/widgets/the-task-list';

export const metadata: Metadata = {
  title: 'АнтиХвост | Панель управления',
};

export default function Dashboard() {
  return (
    <div className='grid items-start gap-4 lg:grid-cols-[1fr_3fr]'>
      <TheTaskFilters />
      <UiSheet>
        <TheTaskList />
      </UiSheet>
    </div>
  );
}
