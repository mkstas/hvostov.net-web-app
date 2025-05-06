'use cleint';

import { FC, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFilterParams } from '@/shared/utils';
import { UiButton, UiForm, UiInput } from '@/components';
import { TaskType, useDeleteTaskTypeMutation, useUpdateTaskTypeMutation } from '@/entities/task-types';

interface Props {
  taskType: TaskType;
  closeModal: () => void;
}

export const UpdateTaskTypeForm: FC<Props> = ({ closeModal, taskType }) => {
  const { control, formState, handleSubmit } = useForm<Partial<TaskType>>({ mode: 'onChange' });
  const { deleteFilterParam } = useFilterParams('taskType');
  const [updateTaskType, { isSuccess: isSuccessUpdate }] = useUpdateTaskTypeMutation();
  const [deleteTaskType, { isSuccess: isSuccessDelete }] = useDeleteTaskTypeMutation();

  useEffect(() => {
    if (isSuccessUpdate || isSuccessDelete) {
      deleteFilterParam(taskType.title);
      closeModal();
    }
  }, [isSuccessUpdate, isSuccessDelete, taskType.title, deleteFilterParam, closeModal]);

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
      <div className='ml-auto flex gap-x-4'>
        <UiButton>Обновить</UiButton>
        <UiButton type='button' color='red' onClick={() => deleteTaskType(taskType.taskTypeId)}>
          Удалить
        </UiButton>
      </div>
    </UiForm>
  );
};
