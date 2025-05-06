import { FC, PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { cn } from '@/shared/cn';

interface Props extends PropsWithChildren {
  className?: string;
  onClickClose: () => void;
}

export const UiModal: FC<Props> = ({ children, className, onClickClose }) => {
  return (
    <div
      id='modalOverlay'
      className='bg-c-slate-600/20 fixed top-0 left-0 z-50 h-full w-full overflow-y-auto pt-16 pb-16 sm:pt-32'
    >
      <div className={cn('relative mx-auto w-full max-w-lg rounded-3xl bg-white p-4', className)}>
        <button
          onClick={onClickClose}
          className='hover:bg-c-slate-300 outline-c-slate-600 absolute top-4 right-4 z-10 cursor-pointer rounded-xl p-2 transition-colors'
        >
          <XMarkIcon className='size-5' />
        </button>
        {children}
      </div>
    </div>
  );
};
