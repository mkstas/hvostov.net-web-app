import { Metadata } from 'next';
import { TheTaskFilters } from '@/widgets/the-task-filters';
import { TheTaskList } from '@/widgets/the-task-list';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <main className='grid items-start gap-4 pt-4 pb-16 lg:grid-cols-[1fr_3fr] lg:pb-4'>
      <TheTaskFilters />
      <TheTaskList />
    </main>
  );
}
