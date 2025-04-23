'use client';

import { FC } from 'react';
import { Task } from '@/entities/tasks';
import { useTask } from '../useTask';

interface Props {
  task: Task;
  onClickTask: () => void;
}

export const TaskItem: FC<Props> = ({ task, onClickTask }) => {
  const { convertDeadline, getSubject, getTaskType } = useTask(task.deadline, task.subjectId, task.taskTypeId);

  return (
    <article
      onClick={onClickTask}
      className='bg-c-slate-200 border-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 transition-color grid h-full cursor-pointer grid-rows-[1fr_auto] items-start space-y-1 rounded-2xl border p-3'
    >
      <div className='grid'>
        <h3 className='font-medium'>{task.title}</h3>
        <span className='text-c-slate-600 text-sm'>{getSubject()}</span>
        <span className='text-c-slate-600 text-sm'>{getTaskType()}</span>
      </div>
      <div className='flex justify-between'>
        <time>{convertDeadline()}</time>
      </div>
    </article>
  );
};
