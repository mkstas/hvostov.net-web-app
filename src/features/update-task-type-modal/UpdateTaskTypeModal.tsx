'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useFilterParams } from '@/shared/utils';
import { UiModal, UiForm, UiInput, UiButton } from '@/components';
import {
  TaskType,
  TaskTypeFormData,
  useDeleteTaskTypeMutation,
  useUpdateTaskTypeMutation,
} from '@/entities/task-types';

interface Props {
  taskType: TaskType;
  closeModal: () => void;
}

export const UpdateTaskTypeModal: FC<Props> = ({ taskType, closeModal }) => {
  const { control, formState, handleSubmit } = useForm<TaskTypeFormData>({ mode: 'onChange' });
  const { deleteFilterParam } = useFilterParams('taskType');
  const [updateTaskType, { isSuccess: isSuccessUpdated }] = useUpdateTaskTypeMutation();
  const [deleteTaskType, { isSuccess: isSuccessDeleted }] = useDeleteTaskTypeMutation();

  useEffect(() => {
    if (isSuccessDeleted) {
      deleteFilterParam(taskType.title);
    }
    if (isSuccessUpdated || isSuccessDeleted) {
      closeModal();
    }
  }, [isSuccessUpdated, isSuccessDeleted, taskType.title, deleteFilterParam, closeModal]);

  return (
    <UiModal title='Редактирование учебной дисциплины' overlayId='modalOverlay' closeButtonId='modalCloseButton'>
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
    </UiModal>
  );
};
