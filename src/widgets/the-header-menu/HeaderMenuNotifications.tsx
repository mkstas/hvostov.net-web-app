'use client';

import { FC } from 'react';
import { ClockIcon } from '@heroicons/react/24/solid';
import { UiDelimiter, UiSheet } from '@/shared/ui';
import { cn } from '@/shared/ui/cn';
import { Task } from '@/entities/task';
import { Subject } from '@/entities/subject';

interface Props {
  tasks: Task[];
  subjects: Subject[];
}

export const HeaderMenuNotifications: FC<Props> = ({ tasks, subjects }) => {
  const currentUnix = Date.parse(new Date().toString());

  const convertDeadline = (deadline: string) => {
    return new Date(deadline!).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

  return (
    <div
      id='header_notifications'
      className='shadow-c-slate-500/10 absolute top-15 -right-4 w-full max-w-96 overflow-hidden rounded-3xl shadow-lg'
    >
      <UiSheet>
        <ul className='max-h-40 overflow-y-auto'>
          {tasks?.map((task, index) => (
            <li key={task.taskId} className='grid'>
              <h3 className='text-base font-medium break-all'>{task.title}</h3>
              <p className='text-c-slate-500 text-sm break-all'>
                {subjects?.find(subject => subject.subjectId === task.subjectId)?.title}
              </p>
              <time dateTime={task.deadline} className='flex justify-between text-sm'>
                {Date.parse(task.deadline) - currentUnix < 0 ? 'Истек срок сдачи: ' : 'Приближается срок сдачи: '}
                <span
                  className={cn({
                    'text-c-red-600': Date.parse(task.deadline) + 86400000 - currentUnix < 0,
                    'text-c-orange-600': !(Date.parse(task.deadline) + 86400000 - currentUnix < 0),
                  })}
                >
                  {convertDeadline(task.deadline)}
                </span>
              </time>
              {index !== tasks.length - 1 && <UiDelimiter className='my-2' />}
            </li>
          ))}
        </ul>
        {!tasks.length && (
          <div className='flex items-center justify-center gap-x-2'>
            <ClockIcon className='text-c-slate-500 size-5' />
            <div className='text-sm font-medium'>Нет ближайших сроков сдачи</div>
          </div>
        )}
      </UiSheet>
    </div>
  );
};
