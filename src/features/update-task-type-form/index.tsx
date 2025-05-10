'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/shared/ui';
import { TaskType, useUpdateTaskTypeMutation } from '@/entities/task-type';

interface Props {
  taskType: TaskType;
  onCloseModal: () => void;
}

export const UpdateTaskTypeForm: FC<Props> = ({ taskType, onCloseModal }) => {
  const { control, formState, handleSubmit } = useForm<Partial<TaskType>>({ mode: 'onChange' });
  const [updateTaskType, { isSuccess }] = useUpdateTaskTypeMutation();

  useEffect(() => {
    if (isSuccess) onCloseModal();
  }, [isSuccess, onCloseModal]);

  return (
    <UiForm onSubmit={handleSubmit(formData => updateTaskType({ ...formData, taskTypeId: taskType.taskTypeId }))}>
      <Controller
        control={control}
        name='title'
        defaultValue={taskType.title}
        rules={{
          required: 'Обязательное поле',
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
      <div className='ml-auto'>
        <UiButton>Сохранить</UiButton>
      </div>
    </UiForm>
  );
};
