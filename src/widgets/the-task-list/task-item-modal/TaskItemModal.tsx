import { FC, useState } from 'react';
import { cn } from '@/shared/utils';
import { UiButton, UiDelimiter, UiModal } from '@/components';
import { UpdateTaskForm } from '@/features/update-task-form';
import { useDeleteTaskMutation, useFindTaskQuery, useUpdateTaskMutation } from '@/entities/tasks';
import { TaskItemInfo } from './TaskItemInfo';
import { TaskItemInfoSkeleton } from './TaskItemInfoSkeleton';
import { SubtaskLIst } from './SubtaskLIst';

interface Props {
  taskId: number;
  onCloseModal: () => void;
}

export const TaskItemModal: FC<Props> = ({ taskId, onCloseModal }) => {
  const [isOpenUpdate, setIsOpenUpdate] = useState<boolean>(false);
  const { data: task, isLoading } = useFindTaskQuery(taskId);
  const [updateTask, {}] = useUpdateTaskMutation();
  const [deleteTask, {}] = useDeleteTaskMutation();

  const onClickDone = async () => {
    await updateTask({ taskId: task?.taskId, isDone: true });
    onCloseModal();
  };

  const onClickDelete = async () => {
    await deleteTask(task!.taskId);
    onCloseModal();
  };

  return (
    <UiModal onClickClose={onCloseModal} className={cn('max-w-3xl', { 'pt-16': isOpenUpdate })}>
      {!isLoading && !isOpenUpdate && <TaskItemInfo task={task!} onClickUpdate={() => setIsOpenUpdate(true)} />}
      {!isLoading && isOpenUpdate && <UpdateTaskForm closeEdit={() => setIsOpenUpdate(false)} task={task!} />}
      {isLoading && <TaskItemInfoSkeleton />}
      <UiDelimiter className='my-4' />
      <SubtaskLIst taskId={taskId} />
      <UiDelimiter className='my-4' />
      <div className='flex justify-end space-x-4'>
        <UiButton onClick={onClickDone} color='green'>
          Выполнить
        </UiButton>
        <UiButton onClick={onClickDelete} color='red'>
          Удалить
        </UiButton>
      </div>
    </UiModal>
  );
};
