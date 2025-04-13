import { FC, PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

export const UiModal: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id='modalOverlay' className='bg-c-slate-600/20 fixed top-0 left-0 z-50 h-full w-full pt-[10%]'>
      <div className='relative mx-auto max-w-lg rounded-3xl bg-white p-4'>
        <button id='modalCloseButton' className='absolute top-2 right-2 cursor-pointer p-2'>
          <XMarkIcon className='size-5' />
        </button>
        {children}
      </div>
    </div>
  );
};
