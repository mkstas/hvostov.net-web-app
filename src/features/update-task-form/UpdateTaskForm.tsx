'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput, UiSelect, UiTextArea } from '@/components';
import { Task, useUpdateTaskMutation } from '@/entities/tasks';
import { useUpdateTaskForm } from './useUpdateTaskForm';

interface Props {
  task: Task;
  closeEdit: () => void;
}

export const UpdateTaskForm: FC<Props> = ({ closeEdit, task }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Task>>({ mode: 'onChange' });
  const { convertSubjectsToOptions, convertTaskTypesToOptions } = useUpdateTaskForm();
  const [updateTask, { isSuccess }] = useUpdateTaskMutation();
  const date = new Date(task.deadline).toLocaleString('en-CA', { year: 'numeric', month: 'numeric', day: 'numeric' });

  useEffect(() => {
    if (isSuccess) {
      closeEdit();
    }
  }, [isSuccess, closeEdit]);

  return (
    <UiForm onSubmit={handleSubmit(formData => updateTask({ taskId: task.taskId, ...formData }))}>
      <div className='grid items-end max-sm:space-y-4 sm:grid-cols-2 sm:space-x-4'>
        <Controller
          control={control}
          name='title'
          defaultValue={task.title}
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='text'
              id='title'
              label='Название работы*'
              placeholder='Название...'
              error={formState.errors.title?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='deadline'
          defaultValue={date}
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='date'
              id='deadline'
              label='Дата сдачи работы*'
              error={formState.errors.deadline?.message}
              {...field}
            />
          )}
        />
      </div>
      <div className='grid items-end max-sm:space-y-4 sm:grid-cols-2 sm:space-x-4'>
        <Controller
          control={control}
          name='subjectId'
          defaultValue={task.subjectId}
          render={({ field }) => (
            <UiSelect
              id='subjectId'
              label='Учебная дисциплина'
              error={formState.errors.subjectId?.message}
              options={convertSubjectsToOptions()}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='taskTypeId'
          defaultValue={task.taskTypeId}
          render={({ field }) => (
            <UiSelect
              id='taskTypeId'
              label='Тип работы'
              error={formState.errors.taskTypeId?.message}
              options={convertTaskTypesToOptions()}
              {...field}
            />
          )}
        />
      </div>
      <Controller
        control={control}
        name='description'
        defaultValue={task.description}
        render={({ field }) => (
          <UiTextArea
            id='description'
            rows={4}
            label='Описание работы'
            placeholder='Описание...'
            error={formState.errors.description?.message}
            {...field}
          />
        )}
      />
      <div className='ml-auto space-x-4'>
        <UiButton onClick={closeEdit} type='button'>
          Отмена
        </UiButton>
        <UiButton>Сохранить</UiButton>
      </div>
    </UiForm>
  );
};
