import { FC } from 'react';
import { UiSheet } from '@/shared/ui';
import { TheWorksHeader } from './TheWorksHeader';

export const TheWorks: FC = () => {
  return (
    <UiSheet>
      <div className='space-y-4'>
        <TheWorksHeader />
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-slate space-y-1 rounded-2xl border border-red-600 p-3'>
            <div>
              <div className='font-medium'>Название</div>
              <div className='text-sm text-slate-500'>Программирование</div>
              <div className='text-sm text-slate-500'>Лабораторная работа</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-red-600'>20.04.2025</div>
              <div>0%</div>
            </div>
          </div>

          <div className='bg-slate space-y-1 rounded-2xl border border-slate-300 p-3'>
            <div>
              <div className='font-medium'>Название</div>
              <div className='text-sm text-slate-500'>Программирование</div>
              <div className='text-sm text-slate-500'>Лабораторная работа</div>
            </div>
            <div className='flex justify-between'>
              <div>20.04.2025</div>
              <div>0%</div>
            </div>
          </div>

          <div className='bg-slate space-y-1 rounded-2xl border border-[#FF9500] p-3'>
            <div>
              <div className='font-medium'>Название</div>
              <div className='text-sm text-slate-500'>Программирование</div>
              <div className='text-sm text-slate-500'>Лабораторная работа</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-[#FF9500]'>20.04.2025</div>
              <div>0%</div>
            </div>
          </div>

          <div className='bg-slate space-y-1 rounded-2xl border border-[#00DD4A] p-3'>
            <div>
              <div className='font-medium'>Название</div>
              <div className='text-sm text-slate-500'>Программирование</div>
              <div className='text-sm text-slate-500'>Лабораторная работа</div>
            </div>
            <div className='flex justify-between'>
              <div className='text-[#00DD4A]'>20.04.2025</div>
              <div>0%</div>
            </div>
          </div>
        </div>
      </div>
    </UiSheet>
  );
};
