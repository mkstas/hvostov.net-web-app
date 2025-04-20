import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiInput } from '@/components';
import { Subtask } from '@/entities/subtasks';
import { useCreateSubtaskMutation } from '@/entities/subtasks/service';

interface Props {
  taskId: number;
}

export const CreateSubtaskForm: FC<Props> = ({ taskId }) => {
  const { control, formState, handleSubmit } = useForm<Partial<Subtask>>({ mode: 'onChange' });
  const [createSubtask, {}] = useCreateSubtaskMutation();

  const onSubmitForm = (formData: Partial<Subtask>) => {
    const data: Partial<Subtask> = { taskId, description: formData.description };
    createSubtask(data);
  };

  return (
    <UiForm onSubmit={handleSubmit(formData => onSubmitForm(formData))}>
      <div className='grid grid-cols-[1fr_auto] items-end space-x-4'>
        <Controller
          control={control}
          name='description'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <UiInput
              type='text'
              id='description'
              label='Содержание подзадачи'
              placeholder='Подзадача'
              error={formState.errors.description?.message}
              {...field}
            />
          )}
        />
        <UiButton>Добавить</UiButton>
      </div>
    </UiForm>
  );
};
