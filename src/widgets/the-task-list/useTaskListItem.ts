'use client';

import { useFindSubjectsQuery } from '@/entities/subjects';
import { useFindTaskTypesQuery } from '@/entities/task-types';

export const useTaskListItem = (deadline: string, subjectId: number, taskTypeId: number) => {
  const { data: subjects } = useFindSubjectsQuery();
  const { data: taskTypes } = useFindTaskTypesQuery();

  const convertDeadline = () => {
    return new Date(deadline).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

  const getSubject = () => {
    return subjects?.find(subject => subject.subjectId === subjectId)?.title;
  };

  const getTaskType = () => {
    return taskTypes?.find(taskType => taskType.taskTypeId === taskTypeId)?.title;
  };

  return { convertDeadline, getSubject, getTaskType };
};
