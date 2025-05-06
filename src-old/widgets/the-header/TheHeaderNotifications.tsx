import { FC } from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/utils';
import { UiDelimiter, UiSheet, UiSkeleton } from '@/components';
import { useFindTasksQuery } from '@/entities/tasks';

export const TheHeaderNotifications: FC = () => {
  const { data: tasks, isLoading } = useFindTasksQuery('');

  const currentUnix = Date.parse(new Date().toString());

  const filteredTasks = tasks?.filter(task => {
    if (!task.isDone) {
      const deadlineUnix = Date.parse(task.deadline) + 86400000;
      if (deadlineUnix - currentUnix < 86400000 * 3) {
        return task;
      }
    }
  });

  const convertDeadline = (deadline: string) => {
    return new Date(deadline!).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

  return (
    <div
      id='headerNotifications'
      className='shadow-c-slate-500/10 absolute top-15 -right-4 w-full max-w-96 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet>
        <ul className='max-h-36 overflow-y-auto'>
          {isLoading &&
            Array(2)
              .fill(0)
              .map((_, index) => (
                <li key={index} className='space-y-1'>
                  <UiSkeleton className='h-5' />
                  <UiSkeleton className='h-5' />
                  {index !== 1 && <UiDelimiter className='my-2' />}
                </li>
              ))}
          {!isLoading &&
            filteredTasks?.map((task, index) => (
              <li key={task.taskId} className='grid'>
                <h3 className='text-base font-medium'>{task.title}</h3>
                <time dateTime={task.deadline} className='flex justify-between text-sm'>
                  {Date.parse(task.deadline) + 86400000 - currentUnix < 0
                    ? 'Истек срок сдачи: '
                    : 'Приближается срок сдачи: '}
                  <span
                    className={cn({
                      'text-c-red-600': Date.parse(task.deadline) + 86400000 - currentUnix < 0,
                      'text-c-orange-600': !(Date.parse(task.deadline) + 86400000 - currentUnix < 0),
                    })}
                  >
                    {convertDeadline(task.deadline)}
                  </span>
                </time>
                {index !== filteredTasks.length - 1 && <UiDelimiter className='my-2' />}
              </li>
            ))}
        </ul>
        {!isLoading && !filteredTasks?.length && (
          <div className='flex items-center justify-center gap-x-2'>
            <ClockIcon className='text-c-slate-500 size-5' />
            <div className='text-sm font-medium'>Нет ближайших сроков сдачи</div>
          </div>
        )}
      </UiSheet>
    </div>
  );
};
