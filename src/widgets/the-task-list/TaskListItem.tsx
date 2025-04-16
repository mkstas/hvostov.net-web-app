'use client';

import { FC } from 'react';
import { Task } from '@/entities/tasks';
import { useTaskListItem } from './useTaskListItem';

export const TaskListItem: FC<Task> = ({ title, deadline, subjectId, taskTypeId }) => {
  const { convertDeadline, getSubject, getTaskType } = useTaskListItem(deadline, subjectId, taskTypeId);

  return (
    <a
      href='#'
      className='bg-c-slate-200 border-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 transition-color grid h-full cursor-pointer grid-rows-[1fr_auto] items-start space-y-1 rounded-2xl border p-3'
    >
      <div className='grid'>
        <span className='font-medium'>{title}</span>
        <span className='text-c-slate-600 text-sm'>{getSubject()}</span>
        <span className='text-c-slate-600 text-sm'>{getTaskType()}</span>
      </div>
      <div className='flex justify-between'>
        <time>{convertDeadline()}</time>
      </div>
    </a>
  );
};
