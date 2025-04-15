import { FC, PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props extends PropsWithChildren {
  title?: string;
}

export const UiModal: FC<Props> = ({ children, title }) => {
  return (
    <div
      id='modalOverlay'
      className='bg-c-slate-600/20 fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto py-20'
    >
      <div className='mx-auto w-full max-w-lg rounded-3xl bg-white p-4'>
        <div className='mb-4 flex items-center justify-between gap-8'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <button
            id='modalCloseButton'
            className='hover:bg-c-slate-200 outline-c-slate-600 cursor-pointer rounded-xl p-2 transition-colors'
          >
            <XMarkIcon className='size-5' />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
