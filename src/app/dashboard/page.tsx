import { Metadata } from 'next';
import { TheFilterSubjects } from '@/widgets/the-filter-subjects';
import { TheFilterWorkTypes } from '@/widgets/the-filter-work-types';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div className='grid grid-cols-[1fr_3fr] items-start gap-4'>
      <div className='space-y-4'>
        <TheFilterSubjects />
        <TheFilterWorkTypes />
      </div>
    </div>
  );
}
