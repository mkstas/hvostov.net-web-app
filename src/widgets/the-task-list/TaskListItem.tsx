'use client';

import { FC } from 'react';

import { cn } from '@/shared/ui/cn';
import { Task } from '@/entities/task';
import { useFindTaskTypeQuery } from '@/entities/task-type';
import { useFindSubjectQuery } from '@/entities/subject';
import { useFindAllSubtaskQuery } from '@/entities/subtask';

interface Props {
  task: Task;
  onClickTask: () => void;
}

export const TaskListItem: FC<Props> = ({ task, onClickTask }) => {
  const { data: subject } = useFindSubjectQuery(task.subjectId);
  const { data: taskType } = useFindTaskTypeQuery(task.taskTypeId);

  const { data: subtasks, isSuccess: isSuccessSubtasks } = useFindAllSubtaskQuery(task.taskId);

  const isDoneSubtasks = subtasks?.filter(item => item.isDone);
  const progress = (Number(isDoneSubtasks?.length) / Number(subtasks?.length)) * 100;

  const currentUnix = Date.parse(new Date().toString());
  const deadlineUnix = Date.parse(task.deadline) + 86400000;

  const convertDeadline = () => {
    return new Date(task.deadline).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

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
        <h3 className='break-all'>{task.title}</h3>
        {!!subject?.title && <div className='text-c-slate-500 text-sm break-all'>{subject.title}</div>}
        {!!taskType?.title && <div className='text-c-slate-500 text-sm break-all'>{taskType.title}</div>}
      </div>
      <div className='self-end'>
        <time dateTime={task.deadline}>{convertDeadline()}</time>
        {isSuccessSubtasks && (
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
