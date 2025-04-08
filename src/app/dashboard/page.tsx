import { Metadata } from 'next';
import { TheFilters } from '@/widgets/the-filters';
import { TheWorks } from '@/widgets/the-works';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div className='grid grid-cols-[1fr_3fr] items-start gap-4'>
      <TheFilters />
      <TheWorks />
    </div>
  );
}
