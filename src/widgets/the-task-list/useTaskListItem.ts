'use client';

import { useFindSubjectsQuery } from '@/entities/subjects';
import { useFindTaskTypesQuery } from '@/entities/task-types';

export const useTaskListItem = (deadline: string, subjectId: number, taskTypeId: number) => {
  const { data: subjects, isSuccess: isSuccessSubjects } = useFindSubjectsQuery();
  const { data: taskTypes, isSuccess: isSuccessTaskTypes } = useFindTaskTypesQuery();

  const convertDeadline = () => {
    return new Date(deadline).toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric' });
  };

  const getSubject = () => {
    if (!isSuccessSubjects) {
      return;
    }
    return subjects?.find(subject => subject.subjectId === subjectId)?.title;
  };

  const getTaskType = () => {
    if (!isSuccessTaskTypes) {
      return;
    }
    return taskTypes?.find(taskType => taskType.taskTypeId === taskTypeId)?.title;
  };

  return { convertDeadline, getSubject, getTaskType };
};
