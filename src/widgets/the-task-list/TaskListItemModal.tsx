'use client';

import { FC } from 'react';
import { UiModal } from '@/components';
import { Task } from '@/entities/tasks';
import { useTaskListItem } from './useTaskListItem';

interface Props {
  task: Task;
}

export const TaskListItemModal: FC<Props> = ({ task }) => {
  const { getSubject, getTaskType } = useTaskListItem(task.deadline, task.subjectId, task.taskTypeId);

  return (
    <UiModal title='Содержание работы' overlayId='modalOverlay' closeButtonId='modalCloseButton' className='max-w-2xl'>
      <div className='space-y-4'>
        <div>
          <h2 className='text-lg font-medium'>{task.title}</h2>
          <div className='text-sm'>
            {getSubject()}, {getTaskType()}
          </div>
        </div>
        <p>{task.description}</p>
      </div>
    </UiModal>
  );
};
