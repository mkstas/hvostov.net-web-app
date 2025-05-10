'use client';

import { FC, useState } from 'react';
import { UiButton, UiDelimiter, UiModal, UiSkeleton } from '@/shared/ui';
import { cn } from '@/shared/ui/cn';
import { Subject } from '@/entities/subject';
import { TaskType } from '@/entities/task-type';
import { useDeleteTaskMutation, useFindTaskQuery, useUpdateTaskMutation } from '@/entities/task';
import { useFindAllSubtaskQuery } from '@/entities/subtask';
import { UpdateTaskForm } from '@/features/update-task-form';
import { CreateSubtaskForm } from '@/features/create-subtask-form';
import { TaskListItemInfo } from './TaskListItemInfo';
import { SubtaskItem } from './SubtaskItem';

interface Props {
  taskId: number;
  subjects: Subject[];
  taskTypes: TaskType[];
  onCloseModal: () => void;
}

export const TaskListItemModal: FC<Props> = ({ taskId, subjects, taskTypes, onCloseModal }) => {
  const { data: task, isLoading: isLoadindTask } = useFindTaskQuery(taskId);
  const { data: subtasks, isLoading: isLoadingSubtasks, isSuccess: isSuccessSubtasks } = useFindAllSubtaskQuery(taskId);
  const [updateTask, {}] = useUpdateTaskMutation();
  const [deleteTask, {}] = useDeleteTaskMutation();

  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);

  const onClickDone = async () => {
    await updateTask({ taskId: task?.taskId, isDone: true });
    onCloseModal();
  };

  const onCLickUnDone = async () => {
    await updateTask({ taskId: task?.taskId, isDone: false });
  };

  const onClickDelete = async () => {
    await deleteTask(task!.taskId);
    onCloseModal();
  };

  return (
    <UiModal onClickClose={onCloseModal} className={cn('max-w-3xl space-y-4', { 'pt-16': isOpenUpdate })}>
      {isLoadindTask && isLoadingSubtasks && (
        <>
          <div className='space-y-4'>
            <div className='space-y-1'>
              <UiSkeleton className='h-7 w-56' />
              <UiSkeleton className='h-5 w-40' />
              <UiSkeleton className='h-5 w-40' />
            </div>
            <UiSkeleton className='h-24' />
          </div>
          <UiDelimiter />
          <UiSkeleton className='h-7 w-56' />
          <UiSkeleton className='h-10' />
          <div className='space-y-1'>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <UiSkeleton key={index} className='h-6' />
              ))}
          </div>
          <UiDelimiter />
          <div className='flex justify-end gap-x-4'>
            <UiSkeleton className='h-10 w-32' />
            <UiSkeleton className='h-10 w-32' />
          </div>
        </>
      )}
      {!isLoadindTask && !isLoadindTask && (
        <>
          {isOpenUpdate ? (
            <UpdateTaskForm
              onCloseUpdate={() => setIsOpenUpdate(false)}
              task={task!}
              subjects={subjects}
              taskTypes={taskTypes}
            />
          ) : (
            <TaskListItemInfo
              onClickUpdate={() => setIsOpenUpdate(true)}
              task={task!}
              subjects={subjects}
              taskTypes={taskTypes}
            />
          )}
          <UiDelimiter />
          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Список подзадач</h3>
            <CreateSubtaskForm taskId={taskId} />
            <ul className='space-y-1'>
              {isSuccessSubtasks &&
                subtasks?.map(subtask => (
                  <li key={subtask.subtaskId}>
                    <SubtaskItem subtask={subtask} />
                  </li>
                ))}
            </ul>
          </div>
          <UiDelimiter />
          <div className='flex justify-end gap-x-4'>
            {task?.isDone ? (
              <UiButton onClick={onCLickUnDone} color='blue'>
                Возобновить
              </UiButton>
            ) : (
              <UiButton onClick={onClickDone} color='blue'>
                Завершить работу
              </UiButton>
            )}
            <UiButton onClick={onClickDelete} color='red'>
              Удалить
            </UiButton>
          </div>
        </>
      )}
    </UiModal>
  );
};
