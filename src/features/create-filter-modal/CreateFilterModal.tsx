import { FC } from 'react';
import { UiButton, UiForm, UiInput, UiModal } from '@/components';

export const CreateFilterModal: FC = () => {
  return (
    <UiModal>
      <h3 className='mb-4 font-semibold'>Добавление предмета</h3>
      <UiForm>
        <UiInput label='Название предмета' id='title' />
        <div className='ml-auto'>
          <UiButton>Добавить</UiButton>
        </div>
      </UiForm>
    </UiModal>
  );
};
