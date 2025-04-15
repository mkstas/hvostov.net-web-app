'use client';

import { FC } from 'react';
import { Task } from '@/entities/tasks';
import { useFindSubjectsQuery } from '@/entities/subjects';
import { useFindTaskTypesQuery } from '@/entities/task-types';

export const TaskListItem: FC<Task> = ({ title, deadline, taskTypeId, subjectId }) => {
  const { data: subjects } = useFindSubjectsQuery();
  const { data: taskTypes } = useFindTaskTypesQuery();

  deadline = new Date(deadline);

  const getSubject = () => {
    return subjects?.find(subject => subject.subjectId === subjectId)?.title;
  };

  const getTaskType = () => {
    return taskTypes?.find(taskType => taskType.taskTypeId === taskTypeId)?.title;
  };

  return (
    <a
      href='#'
      className='bg-c-slate-200 border-c-slate-200 hover:bg-c-slate-300 outline-c-slate-600 block cursor-pointer space-y-1 rounded-2xl border p-3 transition-colors'
    >
      <div className='grid'>
        <span className='font-medium'>{title}</span>
        <span className='text-c-slate-600 text-sm'>{getSubject()}</span>
        <span className='text-c-slate-600 text-sm'>{getTaskType()}</span>
      </div>
      <div className='flex justify-between'>
        <time>{deadline.toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' })}</time>
      </div>
    </a>
  );
};
