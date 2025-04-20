'use client';

import { FC, useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { UiButton, UiDelimiter, UiModal } from '@/components';
import { useDeleteTaskMutation, useFindTaskQuery, useUpdateTaskMutation } from '@/entities/tasks';
import { UpdateTaskForm } from '@/features/update-task-form';
import { useTaskListItem } from './useTaskListItem';
import { SubtaskList } from './subtask-list';

interface Props {
  taskId: number;
  onCloseModal: () => void;
}

export const TaskListItemModal: FC<Props> = ({ taskId, onCloseModal }) => {
  const { data: task, isLoading } = useFindTaskQuery(taskId);
  const { getSubject, getTaskType, convertDeadline } = useTaskListItem(
    task?.deadline,
    task?.subjectId,
    task?.taskTypeId,
  );
  const [isEditTask, setIsEditTask] = useState<boolean>(false);
  const [updateTask, {}] = useUpdateTaskMutation();
  const [deleteTask, {}] = useDeleteTaskMutation();

  const onClickDoneTask = () => {
    updateTask({ taskId: task?.taskId, isDone: true });
  };

  const onClickDeleteTask = () => {
    deleteTask(taskId);
    onCloseModal();
  };

  return (
    <UiModal title='Содержание работы' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
      {!isLoading && !isEditTask && (
        <div className='space-y-4'>
          <div>
            <div className='flex items-center justify-between space-x-4'>
              <h2 className='text-lg font-medium'>{task?.title}</h2>
              <button className='cursor-pointer p-2' onClick={() => setIsEditTask(true)}>
                <PencilSquareIcon className='size-5' />
              </button>
            </div>
            <time className='text-sm'>{convertDeadline()}</time>
            <div className='text-sm'>
              {getSubject()}, {getTaskType()}
            </div>
          </div>
          <p>{task?.description}</p>
        </div>
      )}
      {!isLoading && isEditTask && <UpdateTaskForm closeEdit={() => setIsEditTask(false)} task={task!} />}
      <UiDelimiter className='my-4' />
      <SubtaskList taskId={taskId} />
      <UiButton className='ml-auto' onClick={onClickDoneTask}>
        Завершить работу
      </UiButton>
      <UiButton color='red' className='ml-auto' onClick={onClickDeleteTask}>
        Удалить работу
      </UiButton>
    </UiModal>
  );
};
