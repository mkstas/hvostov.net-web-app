'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput, UiSelect, UiTextArea } from '@/shared/ui';
import { useFindAllTaskTypeQuery } from '@/entities/task-type';
import { useFindAllSubjectQuery } from '@/entities/subject';
import { Task, useCreateTaskMutation } from '@/entities/task';

interface Props {
  onCloseModal: () => void;
}

export const CreateTaskForm: FC<Props> = ({ onCloseModal }) => {
  const { data: subjects } = useFindAllSubjectQuery();
  const { data: taskTypes } = useFindAllTaskTypeQuery();
  const [createTask, { isSuccess }] = useCreateTaskMutation();
  const { control, formState, handleSubmit } = useForm<Partial<Task>>({ mode: 'onChange' });

  const convertSubjectsToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const subject of subjects!) {
      options.push({ value: subject.subjectId, label: subject.title });
    }
    return options;
  };

  const convertTaskTypesToOptions = () => {
    const options: { value: number; label: string }[] = [];
    for (const taskType of taskTypes!) {
      options.push({ value: taskType.taskTypeId, label: taskType.title });
    }
    return options;
  };

  useEffect(() => {
    if (isSuccess) onCloseModal();
  }, [isSuccess, onCloseModal]);

  return (
    <UiForm onSubmit={handleSubmit(createTask)}>
      <Controller
        control={control}
        name='title'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          maxLength: {
            value: 30,
            message: 'Не более 30 символов',
          },
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
        defaultValue=''
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
        defaultValue={taskTypes![0].taskTypeId}
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
      <div className='ml-auto'>
        <UiButton>Добавить</UiButton>
      </div>
    </UiForm>
  );
};
