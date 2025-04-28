'use client';

import { FC } from 'react';
import { cn } from '@/shared/utils';
import { Task } from '@/entities/tasks';
import { useFindSubtasksQuery } from '@/entities/subtasks';
import { useTask } from '../useTask';
import { TaskItemSkeleton } from './TaskItemSkeleton';

interface Props {
  task: Task;
  onClickTask: () => void;
}

export const TaskItem: FC<Props> = ({ task, onClickTask }) => {
  const { convertDeadline, getSubject, getTaskType } = useTask(task.deadline, task.subjectId, task.taskTypeId);
  const { data: subtasks, isSuccess, isLoading } = useFindSubtasksQuery(task.taskId);

  const isDoneSubtasks = subtasks?.filter(item => item.isDone);
  const progress = (Number(isDoneSubtasks?.length) / Number(subtasks?.length)) * 100;

  const currentUnix = Date.parse(new Date().toString());
  const deadlineUnix = Date.parse(task.deadline) + 86400000;

  if (isLoading) {
    return <TaskItemSkeleton />;
  }

  return (
    <article
      onClick={onClickTask}
      className={cn(
        'bg-c-slate-200 border-c-slate-500 hover:bg-c-slate-300 grid h-full cursor-pointer grid-rows-[auto_1fr] gap-y-1 rounded-2xl border p-3 transition-colors',
        {
          'border-c-green-500 bg-c-green-500/5 hover:bg-c-green-500/10': task.isDone,
          'border-c-orange-500 bg-c-orange-500/5 hover:bg-c-orange-500/10':
            !task.isDone && deadlineUnix - currentUnix < 86400000 * 3 && !(deadlineUnix - currentUnix < 0),
          'border-c-red-500 bg-c-red-500/5 hover:bg-c-red-500/10': !task.isDone && deadlineUnix - currentUnix < 0,
        },
      )}
    >
      <div>
        <h3>{task.title}</h3>
        {getSubject() && <div className='text-c-slate-500 text-sm'>{getSubject()}</div>}
        {getTaskType() && <div className='text-c-slate-500 text-sm'>{getTaskType()}</div>}
      </div>
      <div className='self-end'>
        <time dateTime={task.deadline}>{convertDeadline()}</time>
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
      </div>
    </article>
  );
};
