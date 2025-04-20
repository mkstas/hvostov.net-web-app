'use cleint';

import { FC, useEffect } from 'react';
import { UiButton, UiForm, UiInput } from '@/components';
import { TaskType, useDeleteTaskTypeMutation, useUpdateTaskTypeMutation } from '@/entities/task-types';
import { useFilterParams } from '@/shared/utils';
import { useForm, Controller } from 'react-hook-form';

interface Props {
  taskType: TaskType;
  closeModal: () => void;
}

export const UpdateTaskTypeForm: FC<Props> = ({ closeModal, taskType }) => {
  const { control, formState, handleSubmit } = useForm<Partial<TaskType>>({ mode: 'onChange' });
  const { deleteFilterParam } = useFilterParams('taskType');
  const [updateTaskType, { isSuccess: isSuccessUpdated }] = useUpdateTaskTypeMutation();
  const [deleteTaskType, { isSuccess: isSuccessDeleted }] = useDeleteTaskTypeMutation();

  useEffect(() => {
    if (isSuccessUpdated || isSuccessDeleted) {
      deleteFilterParam(taskType.title);
      closeModal();
    }
  }, [isSuccessUpdated, isSuccessDeleted, taskType.title, deleteFilterParam, closeModal]);

  return (
    <UiForm onSubmit={handleSubmit(formData => updateTaskType({ taskTypeId: taskType.taskTypeId, ...formData }))}>
      <Controller
        control={control}
        name='title'
        defaultValue={taskType.title}
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiInput
            type='text'
            id='title'
            label='Тип работы'
            placeholder='Лабораторная работа'
            error={formState.errors.title?.message}
            {...field}
          />
        )}
      />
      <div className='ml-auto flex space-x-4'>
        <UiButton>Обновить</UiButton>
        <UiButton type='button' color='red' onClick={() => deleteTaskType(taskType.taskTypeId)}>
          Удалить
        </UiButton>
      </div>
    </UiForm>
  );
};
