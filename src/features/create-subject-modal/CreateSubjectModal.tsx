import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiModal, UiForm, UiInput, UiButton } from '@/components';
import { SubjectData, useCreateSubjectMutation } from '@/entities/subjects';

export const CreateSubjectModal: FC = () => {
  const { control, formState, handleSubmit } = useForm<SubjectData>({ mode: 'onChange' });

  const [createSubject, {}] = useCreateSubjectMutation();

  return (
    <UiModal>
      <h3 className='mb-4 font-semibold'>Добавление предмета</h3>
      <UiForm onSubmit={handleSubmit(formData => createSubject(formData))}>
        <Controller
          control={control}
          name='title'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
            minLength: {
              value: 8,
              message: 'Не менее 8 символов',
            },
          }}
          render={({ field }) => (
            <UiInput
              type='text'
              id='title'
              label='Название предмета'
              placeholder='Программирование'
              error={formState.errors.title?.message}
              {...field}
            />
          )}
        />
        <div className='ml-auto'>
          <UiButton>Добавить</UiButton>
        </div>
      </UiForm>
    </UiModal>
  );
};
