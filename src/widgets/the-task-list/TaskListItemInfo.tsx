'use client';

import { FC } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/ui/cn';
import { Subject } from '@/entities/subject';
import { TaskType } from '@/entities/task-type';
import { Task } from '@/entities/task';
import { useFindAllSubtaskQuery } from '@/entities/subtask';

interface Props {
  task: Task;
  subjects: Subject[];
  taskTypes: TaskType[];
  onClickUpdate: () => void;
}

export const TaskListItemInfo: FC<Props> = ({ task, subjects, taskTypes, onClickUpdate }) => {
  const { data: subtasks, isSuccess } = useFindAllSubtaskQuery(task.taskId);
  const isDoneSubtasks = subtasks?.filter(item => item.isDone);
  const progress = (Number(isDoneSubtasks?.length) / Number(subtasks?.length)) * 100;

  const convertDeadline = () => {
    return new Date(task.deadline).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

  return (
    <section className='relative space-y-2'>
      <div className='absolute top-0 right-12'>
        <button
          className='hover:bg-c-slate-300 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
          onClick={onClickUpdate}
        >
          <PencilSquareIcon className='text-c-slate-500 size-5' />
        </button>
      </div>
      <div>
        <h2 className='pr-24 text-xl font-semibold break-all'>{task.title}</h2>
        <div className='text-c-slate-500 text-sm break-all'>
          {subjects.find(subject => subject.subjectId === task.subjectId)?.title}
          {', '}
          {taskTypes.find(taskType => taskType.taskTypeId === task.taskTypeId)?.title}
        </div>
        <time dateTime={convertDeadline()} className='text-sm'>
          Срок сдачи: {convertDeadline()}
        </time>
        {isSuccess && (
          <div className='bg-c-slate-400 relative h-1 max-w-40 rounded-full'>
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
      {task.description && (
        <div>
          <h3 className='text-lg font-medium'>Описание работы</h3>
          <p>{task.description}</p>
        </div>
      )}
    </section>
  );
};
