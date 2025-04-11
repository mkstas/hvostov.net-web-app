import { FC } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { UiInput } from '@/components';

export const FindWork: FC = () => {
  return (
    <div className='relative'>
      <UiInput className='py-1.25 pr-8' placeholder='Найти по названию...' />
      <div className='absolute top-1/2 right-2 -translate-1/2'>
        <MagnifyingGlassIcon className='size-5' />
      </div>
    </div>
  );
};
