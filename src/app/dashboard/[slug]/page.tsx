import { Metadata } from 'next';
import { TaskTypeList } from '@/widgets/task-type-list';

export const metadata: Metadata = {
  title: 'АнтиХвост | Список работ',
};

export default async function Tasks({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: subjectId } = await params;

  return (
    <div className='grid items-start gap-4 lg:grid-cols-[1fr_3fr]'>
      <TaskTypeList subjectId={Number(subjectId)} />
    </div>
  );
}
