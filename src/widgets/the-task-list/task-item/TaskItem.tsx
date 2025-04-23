'use client';

import { FC } from 'react';
import { cn } from '@/shared/utils';
import { Task } from '@/entities/tasks';
import { useFindSubtasksQuery } from '@/entities/subtasks';
import { useTask } from '../useTask';

interface Props {
  task: Task;
  onClickTask: () => void;
}

export const TaskItem: FC<Props> = ({ task, onClickTask }) => {
  const { convertDeadline, getSubject, getTaskType } = useTask(task.deadline, task.subjectId, task.taskTypeId);
  const { data: subtasks, isSuccess, isLoading } = useFindSubtasksQuery(task.taskId);
  const isDoneSubtasks = subtasks?.filter(item => item.isDone);
  const progress = (Number(isDoneSubtasks?.length) / Number(subtasks?.length)) * 100;
  const unix = Date.now();
  const unixDeadline = Date.parse(task.deadline);

  return (
    <article
      onClick={onClickTask}
      className={cn(
        'bg-c-slate-200 border-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 grid h-full cursor-pointer grid-rows-[1fr_auto] items-start space-y-1 rounded-2xl border p-3 transition-colors',
        { 'border-c-green-500 bg-c-green-500/5 hover:bg-c-green-500/10': task.isDone },
        {
          'border-c-orange-500 bg-c-orange-500/5 hover:bg-c-orange-500/10':
            !task.isDone && unixDeadline - unix + 86400000 < 86400000 * 3 && !(unixDeadline - unix < 0),
        },
        { 'border-c-red-500 bg-c-red-500/5 hover:bg-c-red-500/10': !task.isDone && unixDeadline - unix < 0 },
      )}
    >
      <div className='grid h-full grid-rows-[1fr_auto] items-start'>
        <div className='grid'>
          <h3 className='font-medium'>{task.title}</h3>
          <span className='text-c-slate-600 text-sm'>{getSubject()}</span>
          <span className='text-c-slate-600 text-sm'>{getTaskType()}</span>
        </div>
        <div className='flex justify-between'>
          <time>{convertDeadline()}</time>
        </div>
      </div>
      {isLoading && <div className='bg-c-slate-400 h-1 animate-pulse rounded-full'></div>}
      {isSuccess && (
        <div className='bg-c-slate-400 relative h-1 rounded-full'>
          <div
            style={{ width: `${progress}%` }}
            className={cn(`absolute top-0 left-0 h-full rounded-full`, {
              'bg-c-red-500': progress <= 30,
              'bg-c-orange-500': progress > 30 && progress < 100,
              'bg-c-green-500': progress === 100,
            })}
          ></div>
        </div>
      )}
      {!isLoading && !isSuccess && <div className='h-1' />}
    </article>
  );
};
