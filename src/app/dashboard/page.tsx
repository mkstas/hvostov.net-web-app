import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'АнтиХвост',
};

export default function Dashboard() {
  return (
    <div>Dashboard</div>
    // <div className='grid grid-cols-[1fr_3fr] items-start gap-4'>
    //   <TheFilters />
    //   <TheWorks />
    // </div>
  );
}
