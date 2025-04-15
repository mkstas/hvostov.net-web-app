'use client';

import { useFindSubjectsQuery } from '@/entities/subjects';
import { useFindTaskTypesQuery } from '@/entities/task-types';

export const useCreateTaskModal = () => {
  const { data: subjects } = useFindSubjectsQuery();
  const { data: taskTypes } = useFindTaskTypesQuery();

  const convertSubjectsToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const subject of subjects!) {
      options.push({ value: subject.subjectId, label: subject.title });
    }
    return options;
  };

  const convertTaskTypesToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const taskType of taskTypes!) {
      options.push({ value: taskType.taskTypeId, label: taskType.title });
    }
    return options;
  };

  return { subjects, taskTypes, convertSubjectsToOptions, convertTaskTypesToOptions };
};
