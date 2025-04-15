'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput, UiModal, UiSelect, UiTextArea } from '@/components';
import { TaskData, useCreateTaskMutation } from '@/entities/tasks';
import { useFindSubjectsQuery } from '@/entities/subjects';
import { useFindTaskTypesQuery } from '@/entities/task-types';

interface Props {
  closeModal: () => void;
}

export const CreateTaskModal: FC<Props> = ({ closeModal }) => {
  const { control, formState, handleSubmit } = useForm<TaskData>({ mode: 'onChange' });
  const { data: subjects } = useFindSubjectsQuery();
  const { data: taskTypes } = useFindTaskTypesQuery();
  const [createTask, { isSuccess: isSuccessCreate }] = useCreateTaskMutation();

  const convertToOptions = (data: unknown[]) => {
    const options: { value: string; label: string }[] = [];
    data.map(item => {
      options.push({ value: item.subjectId || item.taskTypeId, label: item.title });
    });
    return options;
  };

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    if (isSuccessCreate) {
      closeModal();
    }
  }, [isSuccessCreate, closeModal]);

  return (
    <UiModal title='Добавление работы'>
      <UiForm onSubmit={handleSubmit(formData => createTask(formData))}>
        <Controller
          control={control}
          name='title'
          defaultValue=''
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
          name='description'
          defaultValue=''
          render={({ field }) => (
            <UiTextArea
              id='description'
              label='Описание работы'
              rows={4}
              placeholder='Описание...'
              error={formState.errors.description?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='deadline'
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='date'
              id='deadline'
              label='День сдачи работы*'
              error={formState.errors.deadline?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name='subjectId'
          defaultValue={subjects![0].subjectId}
          render={({ field }) => (
            <UiSelect label='Учебная дисциплина' options={convertToOptions(subjects)} {...field} />
          )}
        />
        <Controller
          control={control}
          name='taskTypeId'
          defaultValue={taskTypes![0].taskTypeId}
          render={({ field }) => <UiSelect label='Тип работы' options={convertToOptions(taskTypes)} {...field} />}
        />
        <div className='ml-auto'>
          <UiButton>Добавить</UiButton>
        </div>
      </UiForm>
    </UiModal>
  );
};
