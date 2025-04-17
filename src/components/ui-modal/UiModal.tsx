import { FC, PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/utils';

interface Props extends PropsWithChildren {
  className?: string;
  overlayId: string;
  closeButtonId: string;
  title?: string;
}

export const UiModal: FC<Props> = ({ children, className, overlayId, closeButtonId, title }) => {
  return (
    <div id={overlayId} className='bg-c-slate-600/20 fixed top-0 left-0 z-50 h-full w-full overflow-y-auto py-20'>
      <div className={cn('mx-auto w-full max-w-lg rounded-3xl bg-white p-4', className)}>
        <div className='mb-4 flex items-center justify-between gap-8'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <button
            id={closeButtonId}
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
